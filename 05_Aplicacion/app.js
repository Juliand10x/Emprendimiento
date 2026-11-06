// =====================================================================================
// WHEELS · prototipo web (Universidad Externado de Colombia)
// Modelo: el conductor publica una oferta (ruta + puntos + hora + cupos + precio) y los
// pasajeros reservan cupo. El Externado es el punto fijo: las ofertas van hacia el campus
// o salen del campus. Sin servidor: todo se guarda en localStorage y es simulable.
//
// Índice: 1 utilidades · 2 estado · 3 ofertas · 4 mapa · 5 vistas · 6 acciones · 7 inicio
// =====================================================================================
(function () {
  "use strict";
  const CFG = window.WHEELS_CONFIG, D = window.WHEELS_DATA, WM = window.WheelsMap;
  const Q = new URLSearchParams(location.search);
  const CAMPUS = D.campus;
  const OFF = CFG.OFFERS;

  // ===================================================================================
  // 1. UTILIDADES
  // ===================================================================================
  const $ = (s, r) => (r || document).querySelector(s);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const cop = (n) => "$ " + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const rnd = (a, b) => a + Math.random() * (b - a);
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const uid = () => Math.random().toString(36).slice(2, 8).toUpperCase();
  const R2 = (n) => Math.round(n / 100) * 100;
  const nrm = WM.norm;
  const initials = (n) => String(n || "?").split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");
  const now = () => Date.now();
  const hoursLeft = (iso) => (new Date(iso).getTime() - now()) / 36e5;
  const ftime = (iso) => new Date(iso).toLocaleTimeString("es-CO", { hour: "numeric", minute: "2-digit" });
  const fday = (iso) => {
    const d = new Date(iso), t = new Date();
    const same = (a, b) => a.toDateString() === b.toDateString();
    const tm = new Date(t); tm.setDate(tm.getDate() + 1);
    if (same(d, t)) return "Hoy";
    if (same(d, tm)) return "Mañana";
    return d.toLocaleDateString("es-CO", { weekday: "short", day: "numeric", month: "short" });
  };
  const dtLocal = (iso) => fday(iso) + " · " + ftime(iso);
  const localInput = (d) => {
    const x = new Date(d.getTime() - d.getTimezoneOffset() * 6e4);
    return x.toISOString().slice(0, 16);
  };
  const walkMin = (m) => Math.max(1, Math.round(m / OFF.WALK_METERS_PER_MIN));

  const IC = {
    menu: '<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>',
    back: '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
    x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    chat: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    card: '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',
    check: '<polyline points="20 6 9 17 4 12"/>',
    home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    alert: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    list: '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
    car: '<path d="M5 17h14M6 17v2M18 17v2M3 13l2-6h14l2 6v4H3z"/><circle cx="7.5" cy="14" r="1"/><circle cx="16.5" cy="14" r="1"/>',
    gift: '<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>',
    help: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    cal: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    wallet: '<path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7"/><circle cx="17" cy="14" r="1"/>',
    chevron: '<polyline points="9 18 15 12 9 6"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    nav: '<polygon points="3 11 22 2 13 21 11 13 3 11"/>',
    out: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
    wheel: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="9"/><line x1="4.2" y1="17" x2="9.6" y2="13.8"/><line x1="19.8" y1="17" x2="14.4" y2="13.8"/>',
    plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
    ticket: '<path d="M3 9V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 6v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-6z"/><line x1="13" y1="5" x2="13" y2="19"/>',
    switch: '<polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>'
  };
  const ic = (n, extra) => `<svg class="i ${extra || ""}" viewBox="0 0 24 24" aria-hidden="true">${IC[n] || ""}</svg>`;

  // almacenamiento (demo: localStorage). Más adelante se reemplaza por el servidor.
  const store = {
    get(k, d) { try { const v = localStorage.getItem("wheels_" + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("wheels_" + k, JSON.stringify(v)); } catch (e) {} },
    clear() { try { Object.keys(localStorage).filter((k) => k.startsWith("wheels_")).forEach((k) => localStorage.removeItem(k)); } catch (e) {} }
  };

  // ===================================================================================
  // 2. ESTADO
  // ===================================================================================
  const DEF_ME = { id: "chapinero", name: "Chapinero (simulado)", lat: 4.6490, lng: -74.0640 };
  const S = {
    user: store.get("user", null),
    myOffers: store.get("myOffers", []),
    bookings: store.get("bookings", []),
    waitlist: store.get("waitlist", []),
    history: store.get("history", []),
    wallet: store.get("wallet", { balance: 0, promo: null, firstUsed: false }),
    drv: store.get("drv", { earnings: 0, trips: 0, rating: 4.9, car: "Mazda 2", color: "Gris", plate: "WHL 214", uni: "Ciencia de Datos · 5.º semestre" }),
    contact: store.get("contact", ""),
    pay: store.get("pay", "cash"),
    rep: store.get("rep", { late: 0, done: 0 }),
    me: store.get("me", DEF_ME)
  };
  const save = (k) => store.set(k, S[k]);

  const R = {
    role: "rider", roleTmp: "rider", emailTmp: "",
    screen: null, offer: null, point: null, booking: null,
    dir: "to_campus", before: "",
    me: S.me,
    seed: [],
    create: null,
    route: null, routeKey: "", carPos: null, tripRoute: null,
    timers: [], anims: []
  };
  const later = (fn, ms) => { const id = setTimeout(fn, ms); R.timers.push(id); return id; };
  const stopAll = () => { R.timers.forEach(clearTimeout); R.timers = []; R.anims.forEach((a) => a.cancel()); R.anims = []; };

  // ===================================================================================
  // 3. OFERTAS: modelo, precios, filtros y reglas
  // ===================================================================================
  const byId = (id) => S.myOffers.concat(R.seed).find((o) => o.id === id);
  const freeSeats = (o) => Math.max(0, (o.seats || 0) - (o.taken || []).length);
  const isMine = (o) => !!(S.user && o.driver && o.driver.email === S.user.email);
  const alreadyWaiting = (offerId) => S.waitlist.some((w) => w.offerId === offerId);
  const pointOf = (id) => D.meetingPoints.find((p) => p.id === id);
  const pointSpread = (pts) => {
    let max = 0;
    for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) max = Math.max(max, WM.haversine(pts[i], pts[j]));
    return max;
  };

  // precio sugerido por cupo: depende de qué tan lejos está el punto del campus
  function suggestForPoints(pts) {
    if (!pts || !pts.length) return 3000;
    const km = pts.reduce((s, p) => s + WM.haversine(p, CAMPUS), 0) / (pts.length * 1000);
    const P = CFG.PRICING;
    return R2(Math.max(3000, P.base * 0.4 + P.km * km * 0.4));
  }

  function refreshStatus(o) {
    if (["closed", "cancelled", "done"].includes(o.status)) return o;
    o.status = freeSeats(o) <= 0 ? "full" : "open";
    return o;
  }

  function persistOffer(o) {
    if (o.demo) return;
    const i = S.myOffers.findIndex((x) => x.id === o.id);
    if (i >= 0) { S.myOffers[i] = o; save("myOffers"); }
  }

  // Ofertas de ejemplo para que el prototipo se vea vivo desde el primer arranque.
  function buildSeedOffers() {
    const base = new Date();
    const tomorrow = new Date(base); tomorrow.setDate(tomorrow.getDate() + 1);
    const at = (d, h, m) => { const x = new Date(d); x.setHours(h, m, 0, 0); return x.toISOString(); };
    const todayAt = (h, m) => { const x = new Date(base); x.setHours(h, m, 0, 0); return x.toISOString(); };
    const retToday = todayAt(18, 0);
    const retAt = new Date(retToday).getTime() - now() > 1.2 * 36e5 ? retToday : at(tomorrow, 18, 0);

    const defs = [
      { id: "demo1", dir: "to_campus", drv: 0, at: at(tomorrow, 7, 20), pts: ["unicentro", "calle100"], seats: 4, n: 2 },
      { id: "demo2", dir: "to_campus", drv: 1, at: at(tomorrow, 7, 0), pts: ["portalsuba", "suba140"], seats: 3, n: 1 },
      { id: "demo3", dir: "to_campus", drv: 3, at: at(tomorrow, 6, 50), pts: ["museo", "aguas", "ricaurte"], seats: 4, n: 3 },
      { id: "demo4", dir: "from_campus", drv: 2, at: retAt, pts: ["zonat", "calle63"], seats: 3, n: 1 },
      { id: "demo5", dir: "from_campus", drv: 0, at: at(tomorrow, 18, 30), pts: ["portalnorte", "calle134"], seats: 4, n: 0 },
      { id: "demo6", dir: "to_campus", drv: 1, at: at(tomorrow, 7, 10), pts: ["calle63", "calle72"], seats: 3, n: 1 },
      { id: "demo7", dir: "to_campus", drv: 2, at: at(tomorrow, 7, 35), pts: ["zonat", "calle72"], seats: 4, n: 2 }
    ];

    return defs.map((d) => {
      const driver = { ...D.drivers[d.drv], email: "demo" + (d.drv + 1) + "@est." + CFG.EMAIL_DOMAIN_HINT };
      const points = d.pts.map(pointOf).filter(Boolean);
      const taken = D.riders.slice(0, d.n).map((r, i) => ({
        name: r.name, rating: r.rating, uni: r.uni,
        pointId: points[i % points.length].id,
        pin: String(1000 + ((i * 137 + d.drv * 431) % 9000))
      }));
      const o = {
        id: d.id, demo: true, dir: d.dir, driver, points,
        at: d.at, seats: d.seats, taken,
        price: suggestForPoints(points),
        publishedAt: new Date(now() - rnd(3, 20) * 36e5).toISOString(),
        status: "open"
      };
      return refreshStatus(o);
    });
  }

  // Ofertas que le sirven a un pasajero: punto dentro del radio de 2 km y hora futura.
  function offersForPassenger() {
    const list = S.myOffers.concat(R.seed).filter((o) => {
      if (o.dir !== R.dir) return false;
      if (!["open", "full"].includes(o.status)) return false;
      if (isMine(o)) return false;
      if (new Date(o.at).getTime() <= now()) return false;
      if (R.dir === "to_campus" && R.before && new Date(o.at).getTime() > new Date(R.before).getTime()) return false;
      return true;
    });

    const scored = [];
    list.forEach((o) => {
      const near = o.points
        .map((p) => ({ p, d: WM.haversine(R.me, p) }))
        .filter((x) => x.d <= OFF.MAX_WALK_METERS)
        .sort((a, b) => a.d - b.d);
      if (!near.length) return;
      scored.push({ o, best: near[0], free: freeSeats(o) });
    });

    // El algoritmo: primero cercanía (lo que camina el pasajero), luego hora y precio.
    scored.sort((a, b) => a.best.d - b.best.d || new Date(a.o.at) - new Date(b.o.at) || a.o.price - b.o.price);
    return scored;
  }

  function cancelPolicy(b) {
    if (!b || b.status !== "reserved") return { ok: false, why: "" };
    const t = new Date(b.at).getTime();
    if (t <= now()) return { ok: false, why: "El viaje ya salió." };
    if (b.dir === "from_campus") {
      const ok = t - now() > OFF.CANCEL_LOCK_MINUTES_FROM_CAMPUS * 6e4;
      return { ok, why: `Los regresos se pueden cancelar hasta ${OFF.CANCEL_LOCK_MINUTES_FROM_CAMPUS} min antes de la salida.` };
    }
    const lock = t - OFF.CANCEL_LOCK_HOURS_TO_CAMPUS * 36e5;
    return {
      ok: now() < lock,
      lock,
      why: `No se puede cancelar en las últimas ${OFF.CANCEL_LOCK_HOURS_TO_CAMPUS} h antes de la salida.`
    };
  }

  function releaseSeat(b) {
    const o = byId(b.offerId);
    if (o) {
      o.taken = o.taken.filter((x) => x.pin !== b.pin);
      refreshStatus(o); persistOffer(o);
    }
    return o;
  }

  function promoteWaitlist(offerId) {
    const i = S.waitlist.findIndex((w) => w.offerId === offerId);
    if (i < 0) return null;
    const w = S.waitlist[i], o = byId(offerId);
    if (!o || freeSeats(o) <= 0) return null;
    const pin = String(Math.floor(1000 + Math.random() * 9000));
    o.taken.push({ name: S.user.name, rating: 5.0, uni: "Tú", pointId: w.pointId, pin, me: true });
    const b = {
      id: uid(), offerId, demo: !!o.demo, dir: o.dir, at: o.at, price: o.price,
      driver: o.driver, points: o.points, pointId: w.pointId, pin,
      status: "reserved", bookedAt: new Date().toISOString(), promoted: true
    };
    S.bookings.unshift(b);
    S.waitlist.splice(i, 1);
    save("waitlist"); save("bookings");
    refreshStatus(o); persistOffer(o);
    return b;
  }

  // ===================================================================================
  // 4. MAPA
  // ===================================================================================
  const navH = () => (!$("#nav").classList.contains("hidden") ? 62 : 0);
  function fitMap(points) {
    if (!points || !points.length) return;
    const sh = R.screen ? 60 : ($("#sheet").offsetHeight || 300);
    WM.fit(points, { top: 110, bottom: sh + navH() + 30 });
  }

  function drawMap() {
    if (!WM.impl) return;
    const keep = {};
    const set = (id, p, t) => { keep[id] = 1; WM.marker(id, p, t); };
    set("dest", CAMPUS, "dest");
    if (R.me) set("me", R.me, "me");

    let pts = [CAMPUS, R.me].filter(Boolean), line = null;

    if (R.screen === "trip" && R.tripRoute) {
      line = R.tripRoute.path;
      pts = pts.concat(line.filter((_, i) => i % 6 === 0));
    } else if (R.offer) {
      const sel = R.point || R.offer.points[0];
      if (sel) {
        set("pickup", sel, "pickup");
        pts.push(sel);
        const key = R.offer.id + ":" + sel.id;
        if (R.route && R.routeKey === key) {
          line = R.route.path;
          pts = pts.concat(line.filter((_, i) => i % 6 === 0));
        } else if (R.routeKey !== key) {
          R.routeKey = key; R.route = null;
          const a = R.offer.dir === "to_campus" ? sel : CAMPUS;
          const b = R.offer.dir === "to_campus" ? CAMPUS : sel;
          WM.route(a, b).then((r) => { if (R.routeKey !== key) return; R.route = r; drawMap(); });
        }
      }
    }

    if (R.carPos) set("car", R.carPos, "car");
    if (!keep.pickup) WM.marker("pickup", null);
    if (!keep.car) WM.marker("car", null);
    WM.line(line);
    fitMap(pts);
  }

  function animate(path, ms, onTick, onDone) {
    const cum = [0];
    for (let i = 1; i < path.length; i++) cum[i] = cum[i - 1] + WM.haversine(path[i - 1], path[i]);
    const total = cum[cum.length - 1] || 1, t0 = performance.now();
    let raf = 0, dead = false;
    const h = { cancel() { dead = true; cancelAnimationFrame(raf); } };
    const step = (t) => {
      if (dead) return;
      const f = Math.min(1, (t - t0) / ms), dist = f * total;
      let i = 1;
      while (i < cum.length - 1 && cum[i] < dist) i++;
      const a = path[i - 1], b = path[i];
      const seg = (cum[i] - cum[i - 1]) || 1;
      const u = Math.max(0, Math.min(1, (dist - cum[i - 1]) / seg));
      const pos = { lat: a.lat + (b.lat - a.lat) * u, lng: a.lng + (b.lng - a.lng) * u };
      onTick(pos, f);
      if (f < 1) raf = requestAnimationFrame(step); else if (onDone) onDone();
    };
    raf = requestAnimationFrame(step);
    R.anims.push(h);
    return h;
  }

  // ===================================================================================
  // 5. VISTAS
  // ===================================================================================
  const sheetEl = $("#sheet"), screenEl = $("#screen"), modalEl = $("#modal"), toastEl = $("#toast"), topEl = $("#topbar"), navEl = $("#nav");
  let toastT = 0;
  function toast(msg) {
    toastEl.textContent = msg; toastEl.classList.add("show");
    clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove("show"), 2800);
  }
  function openModal(html, center) { modalEl.className = "modal" + (center ? " center" : ""); modalEl.innerHTML = `<div class="card">${html}</div>`; }
  function closeModal() { modalEl.className = "modal hidden"; modalEl.innerHTML = ""; }
  modalEl.addEventListener("click", (e) => { if (e.target === modalEl) closeModal(); });

  function setSheet(html) {
    sheetEl.className = "sheet" + (!$("#nav").classList.contains("hidden") ? " has-nav" : "");
    sheetEl.innerHTML = `<div class="handle"></div>${html}`;
    sheetEl.classList.remove("hidden");
  }
  const head = (title, back) => `<div class="head">${back ? `<button class="round" style="box-shadow:none;background:var(--soft)" data-act="${back}">${ic("back")}</button>` : ""}<h1>${title}</h1></div>`;

  function renderTop() {
    if (R.screen) { topEl.innerHTML = ""; return; }
    const u = S.user || { name: "?" };
    topEl.innerHTML = `<button class="round" data-act="nav" data-to="account" aria-label="Cuenta">${esc(initials(u.name))}</button>
      <div class="brand">wheels<b>.</b></div>
      <button class="round" data-act="to-welcome" aria-label="Cambiar de rol">${ic("switch")}</button>`;
  }

  function renderNav() {
    const navScreens = ["activity", "myoffers", "account"];
    const show = !!S.user && (!R.screen || navScreens.includes(R.screen));
    navEl.classList.toggle("hidden", !show);
    if (!show) return;
    const cur = navScreens.includes(R.screen) ? R.screen : "home";
    const b = (id, icn, lbl) => `<button class="${cur === id ? "on" : ""}" data-act="nav" data-to="${id}">${ic(icn)}${lbl}</button>`;
    navEl.innerHTML = R.role === "rider"
      ? b("home", "home", "Inicio") + b("activity", "list", "Actividad") + b("account", "user", "Cuenta")
      : b("home", "home", "Inicio") + b("myoffers", "ticket", "Ofertas") + b("account", "user", "Cuenta");
  }

  function renderSheet() {
    if (R.screen) { sheetEl.classList.add("hidden"); return; }
    if (!S.user) return;
    if (R.role === "rider") setSheet(sheetFeed());
    else setSheet(sheetDash());
  }

  function renderAll() {
    renderTop(); renderNav();
    if (R.screen) { renderScreen(); sheetEl.classList.add("hidden"); }
    else { renderSheet(); }
    drawMap();
  }

  const SCREENS = {
    welcome: scrWelcome, login: scrLogin, code: scrCode, offer: scrOffer, booking: scrBooking,
    activity: scrActivity, myoffers: scrMyOffers, account: scrAccount, wallet: scrWallet,
    safety: scrSafety, create: scrCreate, manage: scrManage, trip: scrTrip
  };
  const navScreens = ["activity", "myoffers", "account"];
  function showScreen(name) {
    R.screen = name;
    screenEl.className = "screen" + (navScreens.includes(name) ? " with-nav" : "") + (name === "welcome" ? " welcome" : "");
    screenEl.classList.remove("hidden");
    renderScreen(); renderTop(); renderNav(); drawMap();
  }
  function renderScreen() {
    if (!R.screen) return;
    const f = SCREENS[R.screen];
    screenEl.innerHTML = f ? f() : "";
    if (R.screen === "code") bindCode();
  }
  function closeScreen() { R.screen = null; screenEl.className = "screen hidden"; screenEl.innerHTML = ""; renderAll(); }

  // ----- acceso -----
  function scrWelcome() {
    return `<div><div class="logo">wheels<b>.</b></div><div class="tag">Tu comunidad,<br>tu camino.</div>
      <p>Comparte cupos con estudiantes verificados del Externado. Tú eliges: viajar o conducir.</p></div>
      <div>
        <div class="role-grid">
          <button class="role-card" data-act="pick-role" data-role="rider">${ic("users")}<b>Soy pasajero</b><span>Busca un cupo hacia el Externado o de regreso a tu zona.</span></button>
          <button class="role-card" data-act="pick-role" data-role="driver">${ic("car")}<b>Soy conductor</b><span>Publica tu ruta, elige 2 a 4 puntos y comparte tus cupos.</span></button>
        </div>
        <div class="demo-note">Acceso solo con correo @uexternado.edu.co · demo</div>
      </div>`;
  }

  function scrLogin() {
    const role = R.roleTmp === "driver" ? "conductor" : "pasajero";
    return `${head("Entra como " + role, "to-welcome")}<div class="body">
      <p class="sub">Wheels es solo para la comunidad de la <b>Universidad Externado de Colombia</b>. Usa tu correo @uexternado.edu.co o @est.uexternado.edu.co.</p>
      <div class="field" id="emailF">${ic("user")}<input id="email" type="email" inputmode="email" autocomplete="email" placeholder="nombre.apellido@est.${CFG.EMAIL_DOMAIN_HINT}" value="${esc(R.emailTmp || (S.user && S.user.email) || "")}"></div>
      <div class="err-t hidden" id="emailE">Usa tu correo institucional de la Universidad Externado.</div>
      <button class="btn" data-act="login-submit" style="margin-top:16px">Enviar código</button>
      ${S.user ? `<button class="btn soft" data-act="continue" style="margin-top:10px">Continuar como ${esc(S.user.name)}</button>` : ""}
      <button class="btn ghost" data-act="guest" style="margin-top:10px">Entrar como invitado (solo demo)</button>
      <div class="demo-note">El código de la demo es ${CFG.DEMO_CODE}.</div></div>`;
  }

  function scrCode() {
    return `${head("Verifica tu correo", "back-login")}<div class="body">
      <p class="sub">Enviamos un código de 4 dígitos a <b>${esc(R.emailTmp)}</b>.<br>Demo: el código es <b>${CFG.DEMO_CODE}</b>.</p>
      <div class="codebox">${[0, 1, 2, 3].map((i) => `<input inputmode="numeric" maxlength="1" data-i="${i}" aria-label="Dígito ${i + 1}">`).join("")}</div>
      <div class="err-t hidden" id="codeE" style="text-align:center">Código incorrecto. Prueba con ${CFG.DEMO_CODE}.</div>
      <button class="btn" data-act="code-submit" style="margin-top:12px">Verificar</button></div>`;
  }

  // ----- pasajero: feed y oferta -----
  function offerCard(o, best, free) {
    const isTo = o.dir === "to_campus";
    return `<button class="offer" data-act="open-offer" data-id="${o.id}">
      <div class="row"><div class="grow">
        <div class="b ellip">${isTo ? "Llega al campus " + ftime(o.at) : "Sale del campus " + ftime(o.at)}</div>
        <div class="sm muted ellip">${fday(o.at)} · ${esc(best.p.name)} · ${walkMin(best.d)} min a pie</div>
      </div><span class="pr">${cop(o.price)}</span></div>
      <div class="row" style="margin-top:8px;gap:6px;flex-wrap:wrap">
        <span class="badge ${free ? "" : "muted-badge"}">${free ? free + (free === 1 ? " cupo" : " cupos") : "Lleno"}</span>
        <span class="sm">★ ${o.driver.rating.toFixed(1)} · ${esc(o.driver.name)}</span>
        <span class="sm muted ellip">${esc(o.driver.color)} ${esc(o.driver.car)}</span>
      </div></button>`;
  }

  function sheetFeed() {
    const list = offersForPassenger();
    const isTo = R.dir === "to_campus";
    return `<div class="row" style="margin-bottom:2px">
      <div class="grow"><h2>${isTo ? "Ir al Externado" : "Salir del campus"}</h2>
      <div class="sub">${isTo ? `Recogida a menos de ${OFF.MAX_WALK_METERS / 1000} km de ti` : "Regresos publicados por estudiantes"}</div></div>
    </div>
    <div class="seg"><button class="${isTo ? "on" : ""}" data-act="dir" data-d="to_campus">Al campus</button><button class="${isTo ? "" : "on"}" data-act="dir" data-d="from_campus">Del campus</button></div>
    <button class="payrow" data-act="myzone">${ic("pin")}<span class="grow"><div class="b">Mi zona: ${esc(R.me.name)}</div><div class="sm muted">${isTo ? "Punto de referencia para la recogida" : "Punto de referencia para la llegada"}</div></span>${ic("chevron")}</button>
    <div style="margin-top:10px">${list.length ? list.map((x) => offerCard(x.o, x.best, x.free)).join("") : `<div class="empty">${ic("car")}<div>No hay ofertas que te sirvan ahora.<br>Cambia de zona o vuelve más tarde.</div></div>`}</div>
    <div class="promo"><div class="ic">${ic("gift")}</div><div class="sm"><b>WHEELS50</b> · 50 % en tu primer cupo compartido. Solo para la comunidad Externadista.</div></div>`;
  }

  function ptRow(p, d, sel, act) {
    return `<button class="pt ${sel ? "on" : ""}" data-act="${act || "pick-point"}" data-id="${p.id}">
      <span class="grow"><div class="b">${esc(p.name)}</div><div class="sm muted">${esc(p.addr)}</div></span>
      ${d != null ? `<span class="dist">${d < 1000 ? Math.round(d) + " m" : (d / 1000).toFixed(1) + " km"}</span>` : ""}
      ${sel ? ic("check") : ""}</button>`;
  }

  function scrOffer() {
    const o = R.offer;
    if (!o) return `${head("Oferta", "close-offer")}<div class="body"><div class="empty">Esta oferta ya no está disponible.</div></div>`;
    const isTo = o.dir === "to_campus";
    const all = o.points.map((p) => ({ p, d: WM.haversine(R.me, p) })).sort((a, b) => a.d - b.d);
    const pts = isTo ? all.filter((x) => x.d <= OFF.MAX_WALK_METERS) : all;
    if (pts.length && (!R.point || !pts.some((x) => x.p.id === R.point.id))) R.point = pts[0].p;
    const sel = R.point;
    const free = freeSeats(o);
    const waiting = alreadyWaiting(o.id);
    return `${head(isTo ? "Oferta al campus" : "Regreso del campus", "close-offer")}<div class="body">
      <div class="card-row"><div class="row"><div class="avatar">${esc(initials(o.driver.name))}</div><div class="grow">
        <div class="b">${esc(o.driver.name)} <span class="badge">${ic("check")} Verificado</span></div>
        <div class="sm muted">${esc(o.driver.uni)} · ★ ${o.driver.rating.toFixed(1)} · ${o.driver.trips} viajes</div>
        <div class="sm muted">${esc(o.driver.color)} ${esc(o.driver.car)} · ${esc(o.driver.plate)}</div>
      </div></div></div>
      <div class="stat">
        <div><b>${ftime(o.at)}</b><span>${isTo ? "Llegada al campus" : "Salida del campus"}</span></div>
        <div><b>${free}</b><span>Cupos libres</span></div>
        <div><b>${cop(o.price)}</b><span>Por cupo</span></div>
      </div>
      <h3>${isTo ? "Puedes subir en" : "Te deja en"}</h3>
      <div class="zone-tag">${ic("pin")}Zona ${esc(o.points[0].zone)} · puntos cercanos entre sí</div>
      ${pts.map(({ p, d }) => ptRow(p, d, sel && sel.id === p.id)).join("")}
      <div class="notice">${isTo
        ? `El conductor elige los puntos. Camina al que te quede más cerca (máximo ${OFF.MAX_WALK_METERS / 1000} km).`
        : "El conductor sale del campus y te deja en el punto que elijas."}</div>
      ${isTo && !pts.length ? `<div class="notice lock">${ic("lock")}<span>Ningún punto de esta oferta queda a menos de ${OFF.MAX_WALK_METERS / 1000} km de tu zona.</span></div>` : ""}
      ${free
        ? `<button class="btn accent" data-act="reserve" ${sel && (!isTo || pts.length) ? "" : "disabled"}>Reservar cupo · ${cop(o.price)}</button>`
        : (waiting
          ? `<button class="btn soft" data-act="leave-wait">Estás en la lista de espera (salir)</button>`
          : `<button class="btn" data-act="join-wait">Unirme a la lista de espera</button>`)}
      ${o.demo ? `<button class="btn ghost" data-act="sim-cancel" style="margin-top:10px">Simular que un compañero cancela</button>` : ""}
      <div class="notice ${isTo ? "lock" : ""}">${ic(isTo ? "lock" : "clock")}<span>${isTo
        ? `Al reservar aceptas la política: no se puede cancelar en las últimas ${OFF.CANCEL_LOCK_HOURS_TO_CAMPUS} h antes de la salida.`
        : `Los regresos desde el campus se pueden cancelar hasta ${OFF.CANCEL_LOCK_MINUTES_FROM_CAMPUS} minutos antes.`}</span></div>
    </div>`;
  }

  // ----- pasajero: reserva -----
  function offerFromBooking(b) {
    return { id: b.offerId, demo: b.demo, dir: b.dir, driver: b.driver, points: b.points, at: b.at, seats: 1, taken: [], price: b.price, status: "open" };
  }

  function scrBooking() {
    const b = R.booking;
    if (!b) return `${head("Reserva", "close-booking")}<div class="body"><div class="empty">No encontramos la reserva.</div></div>`;
    const p = (b.points || []).find((x) => x.id === b.pointId) || (b.points || [])[0];
    const isTo = b.dir === "to_campus";
    const pol = cancelPolicy(b);
    return `${head("Tu cupo", "close-booking")}<div class="body">
      <div class="card-row"><div class="row"><div class="avatar">${esc(initials(b.driver.name))}</div><div class="grow">
        <div class="b">${esc(b.driver.name)} <span class="badge">${ic("check")} Verificado</span></div>
        <div class="sm muted">${esc(b.driver.uni)} · ★ ${b.driver.rating.toFixed(1)}</div>
        <div class="sm muted">${esc(b.driver.color)} ${esc(b.driver.car)} · ${esc(b.driver.plate)}</div>
      </div></div></div>
      <div class="kv"><span>${isTo ? "Recogida" : "Llegada"}</span><span>${esc(p ? p.name : "")}</span></div>
      <div class="kv"><span>${isTo ? "Llegada al campus" : "Salida del campus"}</span><span>${dtLocal(b.at)}</span></div>
      <div class="kv"><span>Precio del cupo</span><span>${cop(b.price)}</span></div>
      <div class="kv tot"><span>PIN de abordaje</span><span style="letter-spacing:3px">${esc(b.pin)}</span></div>
      <div class="notice">${ic("shield")}<span>Dale este PIN al conductor al subir. Así ambos confirman que es el cupo correcto.</span></div>
      <div class="acts"><button data-act="chat">${ic("chat")}Mensaje</button><button data-act="call">${ic("phone")}Llamar</button><button data-act="share-booking">${ic("share")}Compartir</button><button class="sos" data-act="sos">${ic("alert")}Seguridad</button></div>
      <div class="notice ${pol.ok ? "" : "lock"}">${ic(pol.ok ? "check" : "lock")}<span>${pol.why}</span></div>
      ${pol.ok
        ? `<button class="btn danger" data-act="cancel-booking">Cancelar reserva</button>`
        : `<button class="btn ghost" data-act="emergency">Emergencia: no podré ir</button>
           <p class="sm muted" style="margin-top:8px">Si no puedes asistir, avisa con el botón de emergencia. El cupo se libera para la lista de espera y se aplica un recargo de ${cop(OFF.NO_SHOW_FEE)}.</p>`}
    </div>`;
  }

  // ----- actividad del pasajero -----
  function scrActivity() {
    const active = S.bookings.filter((b) => b.status === "reserved");
    const waits = S.waitlist;
    const hist = S.history.filter((h) => h.kind !== "driver");
    const activeHtml = active.map((b) => {
      const p = (b.points || []).find((x) => x.id === b.pointId);
      return `<button class="trip-card" data-act="open-booking" data-id="${b.id}">
        <div class="row"><div class="grow"><div class="b ellip">${b.dir === "to_campus" ? "Al Externado" : "Desde el Externado"}</div>
        <div class="sm muted ellip">${dtLocal(b.at)} · ${esc(p ? p.name : "")}</div></div><div style="text-align:right"><div class="b">${cop(b.price)}</div><div class="sm muted">PIN ${esc(b.pin)}</div></div></div>
        <div class="sm muted" style="margin-top:4px">${esc(b.driver.name)} · ${esc(b.driver.color)} ${esc(b.driver.car)}</div></button>`;
    }).join("");
    const waitHtml = waits.map((w) => `<div class="trip-card"><div class="row"><div class="grow"><div class="b">En lista de espera</div><div class="sm muted">${dtLocal(w.at)} · ${esc(w.driver.name)}</div></div><button class="btn sm danger" data-act="leave-wait-leave" data-id="${w.offerId}">Salir</button></div></div>`).join("");
    const histHtml = hist.map((h) => `<div class="trip-card"><div class="row"><div class="grow"><div class="b ellip">${esc(h.to || "")}</div><div class="sm muted ellip">${esc(h.from || "")} · ${fday(h.date)}</div></div><div class="b">${cop(h.price || 0)}</div></div>
      <div class="sm muted" style="margin-top:4px">${h.status === "cancelled" ? "Cancelado" : "Completado"}${h.note ? " · " + esc(h.note) : ""}</div></div>`).join("");
    return `${head("Actividad")}<div class="body">
      <h3>Reservas activas (${active.length})</h3>${activeHtml || `<div class="empty">${ic("ticket")}<div>No tienes reservas próximas.<br>Busca una oferta en Inicio.</div></div>`}
      ${waits.length ? `<h3>Lista de espera (${waits.length})</h3>${waitHtml}` : ""}
      <h3>Historial</h3>${histHtml || `<div class="empty">${ic("clock")}<div>Aquí verás tus viajes terminados o cancelados.</div></div>`}
    </div>`;
  }

  // ----- conductor: panel y ofertas -----
  function sheetDash() {
    const mine = S.myOffers.filter((o) => ["open", "full"].includes(o.status));
    return `<div class="row" style="margin-bottom:2px"><div class="grow"><h2>Panel del conductor</h2><div class="sub">Publica tu ruta y llena tus cupos.</div></div></div>
      <div class="stat"><div><b>${cop(S.drv.earnings)}</b><span>Ganancias</span></div><div><b>${S.drv.trips}</b><span>Cupos dados</span></div><div><b>${S.drv.rating.toFixed(1)} ★</b><span>Calificación</span></div></div>
      <button class="btn accent" data-act="new-offer" style="margin-top:6px">${ic("plus")}Publicar oferta</button>
      <h3>Mis ofertas activas</h3>
      ${mine.length ? mine.map((o) => mineCard(o)).join("") : `<div class="empty">${ic("car")}<div>Aún no tienes ofertas activas.<br>Publica tu primera ruta al campus.</div></div>`}
      <div class="notice">${ic("wallet")}<span>Wheels cobra ${Math.round(CFG.PRICING.serviceFee * 100)} % por cupo completado. No pagas nada si tu oferta no se llena.</span></div>`;
  }

  function mineCard(o) {
    const isTo = o.dir === "to_campus";
    const free = freeSeats(o);
    return `<button class="offer" data-act="manage-offer" data-id="${o.id}">
      <div class="row"><div class="grow"><div class="b ellip">${isTo ? "Rumbo al campus" : "Salida del campus"} · ${ftime(o.at)}</div>
      <div class="sm muted ellip">${fday(o.at)} · ${o.points.map((p) => p.name).join(" · ")}</div></div>
      <span class="pr">${cop(o.price)}</span></div>
      <div class="row" style="margin-top:8px;gap:6px;flex-wrap:wrap">
        <span class="badge ${o.status === "full" ? "muted-badge" : ""}">${o.status === "full" ? "Lleno" : free + " cupos libres"}</span>
        <span class="sm">${o.taken.length} pasajeros</span>
        <span class="sm muted">${cop(o.price * o.taken.length)} potencial</span>
      </div></button>`;
  }

  function scrMyOffers() {
    const all = S.myOffers.slice().sort((a, b) => new Date(b.at) - new Date(a.at));
    const active = all.filter((o) => ["open", "full"].includes(o.status));
    const past = all.filter((o) => !["open", "full"].includes(o.status));
    const row = (o) => `<button class="trip-card" data-act="manage-offer" data-id="${o.id}">
      <div class="row"><div class="grow"><div class="b ellip">${o.dir === "to_campus" ? "Al campus" : "Del campus"} · ${dtLocal(o.at)}</div>
      <div class="sm muted ellip">${o.points.map((p) => p.name).join(" · ")}</div></div>
      <div style="text-align:right"><div class="b">${cop(o.price)}</div><div class="sm muted">${o.taken.length}/${o.seats}</div></div></div>
      <div class="sm muted" style="margin-top:4px">${statusLabel(o)}</div></button>`;
    return `${head("Mis ofertas")}<div class="body">
      <div class="stat"><div><b>${cop(S.drv.earnings)}</b><span>Ganancias</span></div><div><b>${S.drv.trips}</b><span>Cupos dados</span></div><div><b>${active.length}</b><span>Activas</span></div></div>
      <h3>Activas</h3>${active.length ? active.map(row).join("") : `<div class="empty">${ic("ticket")}<div>No tienes ofertas activas.</div></div>`}
      ${past.length ? `<h3>Anteriores</h3>${past.map(row).join("")}` : ""}
      <button class="btn accent" data-act="new-offer" style="margin-top:12px">${ic("plus")}Publicar otra oferta</button>
    </div>`;
  }

  function statusLabel(o) {
    const free = freeSeats(o);
    if (o.status === "done") return "Completada";
    if (o.status === "cancelled") return "Cancelada";
    if (o.status === "closed") return "Cerrada por el conductor";
    if (o.status === "full") return "Llena · sin cupos";
    return `Abierta · ${free} ${free === 1 ? "cupo libre" : "cupos libres"}`;
  }

  // ----- conductor: crear oferta -----
  function defaultAt(dir) {
    const d = new Date();
    if (dir === "to_campus") { d.setDate(d.getDate() + 1); d.setHours(7, 0, 0, 0); }
    else {
      d.setTime(d.getTime() + 2 * 36e5);
      d.setMinutes(Math.ceil(d.getMinutes() / 30) * 30, 0, 0);
    }
    return d;
  }

  function scrCreate() {
    const c = R.create;
    const isTo = c.dir === "to_campus";
    const selZone = c.points.length ? pointOf(c.points[0]).zone : null;
    const zones = [...new Set(D.meetingPoints.map((p) => p.zone))];
    return `${head("Publicar oferta", "close-create")}<div class="body">
      <div class="seg"><button class="${isTo ? "on" : ""}" data-act="c-dir" data-d="to_campus">Al campus</button><button class="${isTo ? "" : "on"}" data-act="c-dir" data-d="from_campus">Del campus</button></div>
      <h3>${isTo ? "Puntos de recogida (2 a 4)" : "Puntos de llegada (2 a 4)"}</h3>
      <p class="sm muted" style="margin:-4px 0 10px">Una oferta va a <b>una sola zona</b>: elige puntos cercanos entre sí (máximo ${(OFF.MAX_POINT_SPREAD_METERS / 1000).toFixed(0)} km).</p>
      ${zones.map((z) => `<div class="zone-label">${esc(z)}${selZone === z ? " · seleccionada" : ""}</div>` + D.meetingPoints.filter((p) => p.zone === z).map((p) => {
        const on = c.points.includes(p.id);
        const chosen = c.points.map(pointOf).filter(Boolean);
        const off = !on && chosen.length && (p.zone !== chosen[0].zone || chosen.some((q) => WM.haversine(q, p) > OFF.MAX_POINT_SPREAD_METERS));
        return `<button class="pt ${on ? "on" : ""} ${off ? "off" : ""}" data-act="c-pt" data-id="${p.id}">
          <span class="grow"><div class="b">${esc(p.name)}</div><div class="sm muted">${esc(p.addr)}</div></span>
          ${on ? ic("check") : ""}</button>`;
      }).join("")).join("")}
      <h3>${isTo ? "Hora de llegada al campus" : "Hora de salida del campus"}</h3>
      <div class="field">${ic("cal")}<input id="c-at" type="datetime-local" value="${esc(c.at)}"></div>
      <h3>Cupos disponibles</h3>
      <div class="chips">${[2, 3, 4].map((n) => `<button class="chip ${c.seats === n ? "on" : ""}" data-act="c-seats" data-n="${n}">${n} cupos</button>`).join("")}</div>
      <h3>Precio por cupo</h3>
      <div class="field">${ic("wallet")}<input id="c-price" type="number" inputmode="numeric" min="0" step="100" value="${c.price}"><span class="sm muted">sugerido ${cop(c.suggested)}</span></div>
      <div class="notice ${isTo ? "lock" : ""}">${ic(isTo ? "lock" : "clock")}<span>${isTo
        ? `Publica preferiblemente el día anterior. Los pasajeros no podrán cancelar en las últimas ${OFF.CANCEL_LOCK_HOURS_TO_CAMPUS} h.`
        : `Los regresos deben publicarse con al menos ${OFF.MIN_LEAD_HOURS_FROM_CAMPUS} h de anticipación y se pueden cancelar hasta ${OFF.CANCEL_LOCK_MINUTES_FROM_CAMPUS} min antes.`}</span></div>
      <button class="btn accent" data-act="publish" style="margin-top:6px">Publicar oferta</button>
    </div>`;
  }

  // ----- conductor: gestionar oferta -----
  function scrManage() {
    const o = R.offer;
    if (!o) return `${head("Oferta", "close-manage")}<div class="body"><div class="empty">La oferta ya no existe.</div></div>`;
    const isTo = o.dir === "to_campus";
    const free = freeSeats(o);
    const gross = o.price * o.taken.length;
    const fee = R2(gross * CFG.PRICING.serviceFee);
    const pax = o.taken.map((t) => `<div class="pax"><div class="avatar" style="width:40px;height:40px;font-size:15px">${esc(initials(t.name))}</div>
      <div class="grow"><div class="b">${esc(t.name)}${t.me ? " (tú)" : ""}</div><div class="sm muted">${esc(t.uni || "")} · PIN ${esc(t.pin)}</div></div>
      ${t.me ? "" : `<button class="btn sm ghost" data-act="no-show" data-pin="${esc(t.pin)}">No-show</button>`}</div>`).join("");
    const canStart = o.taken.length > 0 && !["done", "cancelled"].includes(o.status);
    return `${head(isTo ? "Oferta al campus" : "Regreso del campus", "close-manage")}<div class="body">
      <div class="stat"><div><b>${ftime(o.at)}</b><span>${isTo ? "Llegada" : "Salida"}</span></div><div><b>${o.taken.length}/${o.seats}</b><span>Cupos</span></div><div><b>${cop(o.price)}</b><span>Por cupo</span></div></div>
      <div class="sm muted" style="margin-bottom:6px">${fday(o.at)} · ${esc(o.points.map((p) => p.name).join(" · "))}</div>
      <div class="notice">${ic("ticket")}<span>${statusLabel(o)}</span></div>
      <h3>Pasajeros (${o.taken.length})</h3>
      ${pax || `<div class="empty sm">Aún no hay pasajeros.<br>Comparte tu oferta con la comunidad.</div>`}
      ${["open", "full"].includes(o.status) ? `<button class="btn soft" data-act="sim-pax" style="margin-top:8px">${ic("plus")}Simular un pasajero (demo)</button>` : ""}
      <div class="kv" style="margin-top:10px"><span>Ingreso bruto</span><span>${cop(gross)}</span></div>
      <div class="kv"><span>Comisión Wheels (${Math.round(CFG.PRICING.serviceFee * 100)} %)</span><span class="neg">- ${cop(fee)}</span></div>
      <div class="kv tot"><span>Recibirías</span><span>${cop(gross - fee)}</span></div>
      ${canStart ? `<button class="btn accent" data-act="start-trip" style="margin-top:8px">Iniciar recorrido</button>` : ""}
      ${["open", "full"].includes(o.status) && (o.taken.length >= OFF.MIN_PAX_TO_CLOSE || o.status === "full") ? `<button class="btn ghost" data-act="close-my-offer" style="margin-top:8px">Cerrar oferta</button>` : ""}
      ${["open", "full"].includes(o.status) ? `<button class="btn danger" data-act="cancel-offer" style="margin-top:8px">Cancelar oferta</button>` : ""}
    </div>`;
  }

  function scrTrip() {
    const o = R.offer || { taken: [], points: [] };
    return `${head("En recorrido")}<div class="body">
      <div class="eta"><div class="big">${o.dir === "to_campus" ? "Llevando a tus pasajeros al campus" : "Dejando a tus pasajeros"}</div><span class="badge">${o.taken.length} cupos</span></div>
      <div class="bar"><i id="trbar"></i></div>
      <p class="sub">${o.dir === "to_campus" ? "Cuando termines, se registran las ganancias y la comisión de Wheels." : "Los pasajeros se bajan en los puntos acordados."}</p>
      <div class="acts"><button data-act="chat">${ic("chat")}Mensaje</button><button data-act="call">${ic("phone")}Llamar</button><button data-act="share-booking">${ic("share")}Compartir</button><button class="sos" data-act="sos">${ic("alert")}Seguridad</button></div>
      <button class="btn soft" data-act="finish-trip-now">Terminar recorrido (demo)</button>
    </div>`;
  }

  // ----- cuenta -----
  function scrAccount() {
    const u = S.user || { name: "Invitado", email: "" };
    const isRider = R.role === "rider";
    const done = S.history.filter((h) => h.kind !== "driver").length;
    const compliance = S.rep.late ? Math.max(0, 100 - S.rep.late * 15) : 100;
    return `${head("Cuenta")}<div class="body">
      <div class="row" style="margin:6px 0 12px"><div class="avatar lg">${esc(initials(u.name))}</div><div class="grow">
        <div class="b" style="font-size:22px;letter-spacing:-.3px">${esc(u.name)}</div>
        <div class="sm muted ellip">${esc(u.email)}</div>
        <span class="badge" style="margin-top:6px">${ic("check")} Verificado · Externado</span>
        <span class="badge" style="margin-top:6px">${isRider ? "Pasajero" : "Conductor"}</span>
      </div></div>
      <div class="stat">
        ${isRider
          ? `<div><b>${done}</b><span>Viajes</span></div><div><b>${compliance} %</b><span>Cumplimiento</span></div><div><b>${cop(S.wallet.balance)}</b><span>Saldo</span></div>`
          : `<div><b>${cop(S.drv.earnings)}</b><span>Ganancias</span></div><div><b>${S.drv.trips}</b><span>Cupos</span></div><div><b>${S.drv.rating.toFixed(1)} ★</b><span>Calificación</span></div>`}
      </div>
      <button class="payrow" data-act="nav" data-to="wallet">${ic("wallet")}<span class="grow b">Pagos y promociones</span>${ic("chevron")}</button>
      <button class="payrow" data-act="nav" data-to="safety">${ic("shield")}<span class="grow b">Seguridad</span>${ic("chevron")}</button>
      ${isRider ? `<button class="payrow" data-act="new-offer">${ic("car")}<span class="grow"><span class="b">Publicar como conductor</span><div class="sm muted">Cambia al modo conductor</div></span>${ic("chevron")}</button>` : ""}
      <button class="payrow" data-act="help">${ic("help")}<span class="grow b">Cómo funciona Wheels</span>${ic("chevron")}</button>
      <button class="payrow" data-act="to-welcome">${ic("switch")}<span class="grow b">Cambiar de rol</span>${ic("chevron")}</button>
      <button class="payrow" data-act="logout">${ic("out")}<span class="grow b">Cerrar sesión</span></button>
      <p class="sm muted" style="margin-top:16px">wheels · prototipo v0.2 · Los datos se guardan solo en este navegador.</p>
    </div>`;
  }

  function scrWallet() {
    const m = [["cash", "Efectivo", "Pagas al conductor"], ["nequi", "Nequi", "Demo · ••••3021"], ["card", "Tarjeta Visa •••• 4242", "Demo"], ["wallet", "Saldo Wheels", cop(S.wallet.balance)]];
    return `${head("Pagos", "back-account")}<div class="body">
      <h3>Método de pago</h3>${m.map((x) => `<button class="payrow" data-act="set-pay" data-id="${x[0]}">${ic(payIcon(x[0]))}<span class="grow"><div class="b">${x[1]}</div><div class="sm muted">${x[2]}</div></span>${S.pay === x[0] ? ic("check") : ""}</button>`).join("")}
      <h3>Saldo</h3><div class="stat"><div><b>${cop(S.wallet.balance)}</b><span>Disponible</span></div><div><b>${S.rep.late}</b><span>Cancelaciones tardías</span></div><div><b>$${OFF.NO_SHOW_FEE / 1000}k</b><span>Recargo no-show</span></div></div>
      <button class="btn soft" data-act="topup">Recargar $ 20.000 (demo)</button>
      <h3>Código promocional</h3><div class="field"><input id="promoIn" placeholder="WHEELS50" value="${esc(S.wallet.promo || "")}" style="text-transform:uppercase"></div>
      <button class="btn" data-act="apply-promo" style="margin-top:10px">Aplicar</button>
      <p class="sm muted" style="margin-top:12px">Códigos de prueba: <b>WHEELS50</b> y <b>UNI10</b>.</p></div>`;
  }

  function payIcon(id) { return { cash: "wallet", nequi: "phone", card: "card", wallet: "wheel" }[id] || "card"; }

  function scrSafety() {
    return `${head("Seguridad", "back-account")}<div class="body">
      <p class="sub">Wheels solo conecta a personas verificadas del Externado. Además:</p>
      <div class="card-row"><div class="b">${ic("check")} Correo institucional</div><div class="sm muted">Solo entra quien tiene correo de la U.</div></div>
      <div class="card-row"><div class="b">${ic("lock")} PIN de abordaje</div><div class="sm muted">El conductor confirma tu PIN antes de iniciar.</div></div>
      <div class="card-row"><div class="b">${ic("share")} Compartir viaje</div><div class="sm muted">Envía la placa y el destino a alguien de confianza.</div></div>
      <h3>Contacto de confianza</h3><div class="field">${ic("phone")}<input id="contactIn" type="tel" placeholder="Número de celular" value="${esc(S.contact)}"></div>
      <button class="btn" data-act="save-contact" style="margin-top:10px">Guardar contacto</button>
      <a class="btn danger" href="tel:123" style="margin-top:14px;text-decoration:none">${ic("phone")}Línea de emergencias 123</a>
    </div>`;
  }

  // ===================================================================================
  // 6. ACCIONES
  // ===================================================================================
  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-act]");
    if (!el) return;
    ACT[el.dataset.act] && ACT[el.dataset.act](el.dataset, el);
  });

  const ACT = {
    // acceso
    "to-welcome"() { stopAll(); R.screen = null; screenEl.className = "screen hidden"; showScreen("welcome"); },
    "pick-role"(d) { stopAll(); R.roleTmp = d.role; R.emailTmp = ""; showScreen("login"); },
    "back-login"() { showScreen("login"); },
    "login-submit"() {
      const v = ($("#email") || {}).value || ""; R.emailTmp = v.trim();
      const ok = /^[^\s@]+@(est\.)?uexternado\.edu\.co$/i.test(R.emailTmp);
      $("#emailF").classList.toggle("err", !ok);
      $("#emailE").classList.toggle("hidden", ok);
      if (ok) showScreen("code");
    },
    "code-submit"() {
      const code = [...screenEl.querySelectorAll(".codebox input")].map((i) => i.value).join("");
      if (code === CFG.DEMO_CODE) {
        const local = R.emailTmp.split("@")[0];
        const name = local.replace(/[0-9]/g, "").split(/[._-]+/).filter(Boolean).map((w) => w[0].toUpperCase() + w.slice(1)).join(" ") || "Estudiante";
        loginAs(name, R.emailTmp, R.roleTmp);
      } else $("#codeE").classList.remove("hidden");
    },
    continue() { if (S.user) enterRole(R.roleTmp || S.user.role); },
    guest() { loginAs("Estudiante Demo", "demo@est." + CFG.EMAIL_DOMAIN_HINT, R.roleTmp || "rider"); },
    logout() { stopAll(); store.clear(); location.href = location.pathname; },

    // navegación
    nav(d) {
      const to = d.to;
      if (to === "home") { R.offer = null; R.point = null; R.booking = null; closeScreen(); }
      else if (to === "wallet" || to === "safety") showScreen(to);
      else showScreen(to);
    },
    "back-account"() { showScreen("account"); },
    "close-offer"() { R.offer = null; R.point = null; closeScreen(); },
    "close-booking"() { R.booking = null; closeScreen(); },
    "close-create"() { closeScreen(); },
    "close-manage"() { R.offer = null; closeScreen(); },
    "close-modal"() { closeModal(); },

    // feed
    dir(d) { R.dir = d.d; renderSheet(); drawMap(); },
    myzone() {
      openModal(`<h2>Mi zona de referencia</h2><p class="sub">Con base en este punto calculamos qué ofertas te quedan a menos de ${OFF.MAX_WALK_METERS / 1000} km.</p>
        <button class="payrow" data-act="use-geo">${ic("nav")}<span class="grow"><div class="b">Usar mi ubicación</div><div class="sm muted">Pide permiso al navegador</div></span></button>
        ${D.meetingPoints.map((p) => `<button class="payrow" data-act="set-zone" data-id="${p.id}">${ic("pin")}<span class="grow"><div class="b">${esc(p.name)}</div><div class="sm muted">${esc(p.zone)}</div></span></button>`).join("")}
        <button class="btn soft" data-act="close-modal" style="margin-top:8px">Cerrar</button>`);
    },
    "set-zone"(d) {
      const p = pointOf(d.id); if (!p) return;
      R.me = { id: p.id, name: p.name + " (simulado)", lat: p.lat, lng: p.lng };
      S.me = R.me; save("me"); closeModal(); renderAll();
    },
    "use-geo"() {
      if (!navigator.geolocation) { toast("Tu navegador no permite ubicación"); return; }
      navigator.geolocation.getCurrentPosition((pos) => {
        const p = { id: "geo", name: "Mi ubicación", lat: pos.coords.latitude, lng: pos.coords.longitude };
        if (WM.haversine(p, CAMPUS) > 60000) { toast("Estás lejos de Bogotá; usaré Chapinero para la demo"); return; }
        R.me = p; S.me = p; save("me"); closeModal(); renderAll();
      }, () => toast("No pude obtener tu ubicación"), { timeout: 8000, maximumAge: 60000 });
    },

    // oferta
    "open-offer"(d) {
      const o = byId(d.id); if (!o) return toast("Esa oferta ya no está disponible");
      R.offer = o; R.point = null; R.route = null; R.routeKey = "";
      let near = o.points.map((p) => ({ p, d: WM.haversine(R.me, p) })).sort((a, b) => a.d - b.d);
      if (o.dir === "to_campus") {
        const ok = near.filter((x) => x.d <= OFF.MAX_WALK_METERS);
        if (ok.length) near = ok;
      }
      R.point = near[0] ? near[0].p : o.points[0];
      showScreen("offer");
    },
    "pick-point"(d) { const p = pointOf(d.id) || (R.offer && R.offer.points.find((x) => x.id === d.id)); if (p) { R.point = p; R.route = null; R.routeKey = ""; renderScreen(); drawMap(); } },
    reserve() {
      const o = R.offer, p = R.point;
      if (!o || !p) return;
      if (freeSeats(o) <= 0) return toast("Justo se llenó. Puedes entrar a la lista de espera.");
      const pin = String(Math.floor(1000 + Math.random() * 9000));
      o.taken.push({ name: S.user.name, rating: 5.0, uni: "Tú", pointId: p.id, pin, me: true });
      refreshStatus(o); persistOffer(o);
      const b = {
        id: uid(), offerId: o.id, demo: !!o.demo, dir: o.dir, at: o.at, price: o.price,
        driver: o.driver, points: o.points, pointId: p.id, pin, status: "reserved",
        bookedAt: new Date().toISOString()
      };
      S.bookings.unshift(b); save("bookings");
      R.booking = b; showScreen("booking");
      toast("Cupo reservado · PIN " + pin);
    },
    "join-wait"() {
      const o = R.offer; if (!o) return;
      if (alreadyWaiting(o.id)) return toast("Ya estás en la lista de espera");
      S.waitlist.unshift({ id: uid(), offerId: o.id, pointId: R.point ? R.point.id : o.points[0].id, at: o.at, price: o.price, driver: o.driver, dir: o.dir, createdAt: new Date().toISOString() });
      save("waitlist"); renderScreen(); toast("Te avisaremos si se libera un cupo");
    },
    "leave-wait"() { const o = R.offer; if (!o) return; S.waitlist = S.waitlist.filter((w) => w.offerId !== o.id); save("waitlist"); renderScreen(); toast("Saliste de la lista de espera"); },
    "leave-wait-leave"(d) { S.waitlist = S.waitlist.filter((w) => w.offerId !== d.id); save("waitlist"); renderScreen(); toast("Saliste de la lista de espera"); },
    "sim-cancel"() {
      const o = R.offer; if (!o) return;
      const others = o.taken.filter((t) => !t.me);
      if (!others.length) return toast("No hay compañeros para simular");
      const victim = pick(others);
      o.taken = o.taken.filter((t) => t !== victim);
      refreshStatus(o); persistOffer(o);
      const promoted = promoteWaitlist(o.id);
      renderScreen(); drawMap();
      toast(promoted ? "¡Se liberó un cupo y te lo asignamos!" : "Se liberó un cupo (" + victim.name + ")");
    },

    // reserva
    "open-booking"(d) {
      const b = S.bookings.find((x) => x.id === d.id); if (!b) return;
      R.booking = b; R.offer = byId(b.offerId) || offerFromBooking(b);
      R.point = (R.offer.points || []).find((p) => p.id === b.pointId) || (R.offer.points || [])[0];
      R.routeKey = ""; showScreen("booking");
    },
    "cancel-booking"() {
      const b = R.booking; if (!b) return;
      const pol = cancelPolicy(b);
      if (!pol.ok) return toast(pol.why);
      openModal(`<h2>¿Por qué cancelas?</h2><p class="sub">Cancelar ahora es gratis. Tu cupo se libera para la lista de espera.</p>
        ${["Cambié de planes", "Se me cruzó una clase", "Conseguí otra oferta", "Otro motivo"].map((r) => `<button class="payrow" data-act="do-cancel" data-why="${esc(r)}"><span class="grow b">${esc(r)}</span>${ic("chevron")}</button>`).join("")}
        <button class="btn soft" data-act="close-modal" style="margin-top:8px">Volver</button>`);
    },
    "do-cancel"(d) {
      const b = R.booking; if (!b) return;
      closeModal(); releaseSeat(b);
      b.status = "cancelled"; save("bookings");
      S.history.unshift({ kind: "rider", id: b.id, date: new Date().toISOString(), from: b.dir === "to_campus" ? "Reserva al campus" : "Reserva desde el campus", to: b.dir === "to_campus" ? "Externado" : "Mi zona", price: 0, status: "cancelled", note: d.why });
      save("history");
      R.booking = null; closeScreen(); showScreen("activity"); toast("Reserva cancelada");
    },
    emergency() {
      const b = R.booking; if (!b) return;
      openModal(`<h2>¿No vas a poder ir?</h2><p class="sub">Liberaremos tu cupo para la lista de espera. Se aplicará un recargo de ${cop(OFF.NO_SHOW_FEE)} por cancelación tardía.</p>
        <button class="btn danger" data-act="do-emergency">Confirmar y liberar mi cupo</button>
        <button class="btn soft" data-act="close-modal" style="margin-top:8px">Volver</button>`);
    },
    "do-emergency"() {
      const b = R.booking; if (!b) return;
      closeModal(); releaseSeat(b);
      b.status = "late"; b.emergency = true; save("bookings");
      S.wallet.balance -= OFF.NO_SHOW_FEE; save("wallet");
      S.rep.late += 1; save("rep");
      S.history.unshift({ kind: "rider", id: b.id, date: new Date().toISOString(), from: "Reserva al campus", to: "Externado", price: OFF.NO_SHOW_FEE, status: "cancelled", note: "Emergencia · recargo no-show" });
      save("history");
      R.booking = null; closeScreen(); showScreen("activity");
      toast("Cupo liberado · recargo de " + cop(OFF.NO_SHOW_FEE) + " aplicado");
    },
    "share-booking"() {
      const b = R.booking;
      const driver = b ? b.driver : (R.offer && R.offer.driver);
      if (!driver) return toast("Aún no hay un viaje para compartir");
      const dir = b ? b.dir : (R.offer && R.offer.dir);
      const text = `Voy en un cupo de wheels ${dir === "to_campus" ? "hacia el Externado" : "desde el Externado"} con ${driver.name} (${driver.color} ${driver.car}, placa ${driver.plate}).`;
      shareText(text);
    },
    chat() {
      const who = R.booking ? R.booking.driver.name : (R.offer ? R.offer.driver.name : "tu conductor");
      openModal(`<h2>${esc(who)}</h2><p class="sub">Conversación simulada. En producción será un chat real.</p>
        <div class="chips">${["Ya voy", "Estoy en el punto", "¿Cuánto falta?", "Gracias"].map((q) => `<button class="chip" data-act="chat-send" data-q="${esc(q)}">${esc(q)}</button>`).join("")}</div>
        <button class="btn soft" data-act="close-modal" style="margin-top:10px">Cerrar</button>`);
    },
    "chat-send"(d) { closeModal(); toast("Mensaje enviado: " + d.q); },
    call() { toast("Llamada simulada al conductor"); },
    sos() {
      openModal(`<h2 style="color:var(--danger)">Ayuda de emergencia</h2>
        <p class="sub">Si estás en peligro, llama ya a la línea de emergencias.</p>
        <a class="btn danger" href="tel:123" style="text-decoration:none">${ic("phone")}Llamar al 123</a>
        <button class="btn soft" data-act="alert-contact" style="margin-top:8px">Avisar a mi contacto de confianza</button>
        <button class="btn soft" data-act="share-booking" style="margin-top:8px">${ic("share")}Compartir mi viaje</button>
        <button class="btn ghost" data-act="close-modal" style="margin-top:8px">Cerrar</button>`);
    },

    // conductor
    "new-offer"() {
      if (!S.user) return showScreen("welcome");
      enterDriver();
      const at = defaultAt("to_campus");
      R.create = { dir: "to_campus", points: [], at: localInput(at), seats: 3, price: 3000, suggested: 3000, touched: false };
      showScreen("create");
    },
    "c-dir"(d) {
      const c = R.create; if (!c) return;
      c.dir = d.d; c.points = []; c.touched = false; c.price = 3000; c.suggested = 3000;
      c.at = localInput(defaultAt(c.dir));
      renderScreen();
    },
    "c-pt"(d) {
      const c = R.create; if (!c) return;
      const id = d.id;
      if (c.points.includes(id)) c.points = c.points.filter((x) => x !== id);
      else {
        if (c.points.length >= OFF.MAX_POINTS) return toast(`Puedes elegir hasta ${OFF.MAX_POINTS} puntos`);
        const p = pointOf(id);
        const chosen = c.points.map(pointOf).filter(Boolean);
        if (p && chosen.length && p.zone !== chosen[0].zone) {
          return toast(`Todos los puntos deben ser de la misma zona (${chosen[0].zone})`);
        }
        if (p && chosen.some((q) => WM.haversine(q, p) > OFF.MAX_POINT_SPREAD_METERS)) {
          return toast(`Los puntos deben estar a máximo ${(OFF.MAX_POINT_SPREAD_METERS / 1000).toFixed(0)} km entre sí`);
        }
        c.points.push(id);
      }
      const pts = c.points.map(pointOf).filter(Boolean);
      c.suggested = suggestForPoints(pts);
      if (!c.touched) c.price = c.suggested;
      renderScreen();
    },
    "c-seats"(d) { const c = R.create; if (c) { c.seats = +d.n; renderScreen(); } },
    publish() {
      const c = R.create; if (!c) return;
      const atV = ($("#c-at") || {}).value;
      const priceV = +($("#c-price") || {}).value;
      if (c.points.length < OFF.MIN_POINTS) return toast(`Elige al menos ${OFF.MIN_POINTS} puntos de encuentro`);
      if (!atV) return toast("Elige fecha y hora");
      const at = new Date(atV);
      if (isNaN(at.getTime())) return toast("Fecha inválida");
      if (at.getTime() < now() + 30 * 6e4) return toast("La hora debe ser al menos 30 min en el futuro");
      if (c.dir === "from_campus" && at.getTime() < now() + OFF.MIN_LEAD_HOURS_FROM_CAMPUS * 36e5) {
        return toast(`Los regresos deben publicarse con al menos ${OFF.MIN_LEAD_HOURS_FROM_CAMPUS} h de anticipación`);
      }
      if (c.dir === "to_campus" && at.getTime() < now() + OFF.MIN_LEAD_HOURS_TO_CAMPUS * 36e5) {
        return toast(`Las ofertas al campus deben publicarse con al menos ${OFF.MIN_LEAD_HOURS_TO_CAMPUS} h de anticipación (ideal: el día anterior)`);
      }
      if (!priceV || priceV <= 0) return toast("Escribe un precio por cupo");
      const lo = R2(c.suggested * (1 - OFF.PRICE_TOLERANCE)), hi = R2(c.suggested * (1 + OFF.PRICE_TOLERANCE));
      if (priceV < lo || priceV > hi) return toast(`El precio debe estar entre ${cop(lo)} y ${cop(hi)}`);
      const points = c.points.map(pointOf).filter(Boolean);
      if (points.length && points.some((p) => p.zone !== points[0].zone)) return toast("Todos los puntos deben ser de la misma zona");
      if (pointSpread(points) > OFF.MAX_POINT_SPREAD_METERS) return toast(`Los puntos deben estar a máximo ${(OFF.MAX_POINT_SPREAD_METERS / 1000).toFixed(0)} km entre sí`);
      const o = {
        id: "my" + uid(), demo: false, dir: c.dir,
        driver: { name: S.user.name, rating: S.drv.rating, trips: S.drv.trips, car: S.drv.car, color: S.drv.color, plate: S.drv.plate, uni: S.drv.uni, email: S.user.email },
        points, at: at.toISOString(), seats: c.seats, taken: [], price: R2(priceV),
        publishedAt: new Date().toISOString(), status: "open"
      };
      S.myOffers.unshift(o); save("myOffers");
      R.create = null; R.offer = o; R.point = points[0]; R.routeKey = "";
      showScreen("manage"); toast("Oferta publicada");
    },
    "manage-offer"(d) {
      const o = byId(d.id); if (!o) return;
      R.offer = o; R.point = o.points[0]; R.routeKey = ""; showScreen("manage");
    },
    "sim-pax"() {
      const o = R.offer; if (!o) return;
      if (freeSeats(o) <= 0) return toast("La oferta está llena");
      const used = new Set(o.taken.map((t) => t.name));
      const pool = D.riders.filter((r) => !used.has(r.name));
      const r = pick(pool.length ? pool : D.riders), p = pick(o.points);
      o.taken.push({ name: r.name, rating: r.rating, uni: r.uni, pointId: p.id, pin: String(Math.floor(1000 + Math.random() * 9000)) });
      refreshStatus(o); persistOffer(o); renderScreen(); drawMap(); toast("Pasajero simulado agregado");
    },
    "no-show"(d) {
      const pin = d.pin;
      openModal(`<h2>Marcar no-show</h2><p class="sub">El pasajero no apareció en el punto de encuentro. Se le aplicará el recargo de ${cop(OFF.NO_SHOW_FEE)} (simulado).</p>
        <button class="btn danger" data-act="do-noshow" data-pin="${esc(pin)}">Confirmar no-show</button>
        <button class="btn soft" data-act="close-modal" style="margin-top:8px">Volver</button>`);
    },
    "do-noshow"(d) {
      const o = R.offer; if (!o) return;
      const t = o.taken.find((x) => x.pin === d.pin); if (!t) return;
      o.taken = o.taken.filter((x) => x !== t);
      refreshStatus(o); persistOffer(o); closeModal(); renderScreen(); drawMap();
      toast(`${t.name} marcado como no-show · recargo ${cop(OFF.NO_SHOW_FEE)}`);
    },
    "close-my-offer"() {
      const o = R.offer; if (!o) return;
      if (!o.taken.length) return toast("Aún no tienes pasajeros; puedes cancelarla");
      if (o.taken.length < OFF.MIN_PAX_TO_CLOSE) return toast(`Para cerrar antes de llenarla necesitas al menos ${OFF.MIN_PAX_TO_CLOSE} pasajeros`);
      o.status = "closed"; persistOffer(o); toast("Oferta cerrada"); renderScreen();
    },
    "cancel-offer"() {
      const o = R.offer; if (!o) return;
      openModal(`<h2>Cancelar oferta</h2><p class="sub">Se avisará a los pasajeros y perderás reputación si cancelas a última hora.</p>
        <button class="btn danger" data-act="do-cancel-offer">Sí, cancelar</button><button class="btn soft" data-act="close-modal" style="margin-top:8px">Volver</button>`);
    },
    "do-cancel-offer"() {
      const o = R.offer; if (!o) return;
      o.status = "cancelled"; persistOffer(o); closeModal(); toast("Oferta cancelada"); showScreen("myoffers");
    },
    "start-trip"() { startDriverTrip(); },
    "finish-trip-now"() { completeTrip(); },

    // cuenta y ajustes
    "set-pay"(d) { S.pay = d.id; renderScreen(); toast("Método de pago actualizado"); },
    topup() { S.wallet.balance += 20000; save("wallet"); renderScreen(); toast("Recargaste $ 20.000 (demo)"); },
    "apply-promo"() {
      const c = (($("#promoIn") || {}).value || "").trim().toUpperCase();
      if (!c) { S.wallet.promo = null; save("wallet"); toast("Promo quitada"); return; }
      if (!D.promos[c]) return toast("Ese código no existe");
      S.wallet.promo = c; save("wallet"); toast("Promo aplicada: " + D.promos[c].label);
    },
    "save-contact"() { S.contact = ($("#contactIn") || {}).value || ""; save("contact"); toast("Contacto guardado"); },
    help() {
      openModal(`<h2>Cómo funciona Wheels</h2>
        <div class="card-row"><b>1. El conductor publica</b><div class="sm muted">Elige 2 a 4 puntos de encuentro, la hora de llegada al campus (o de salida), los cupos y el precio.</div></div>
        <div class="card-row"><b>2. El pasajero reserva</b><div class="sm muted">Ve las ofertas con puntos a menos de ${OFF.MAX_WALK_METERS / 1000} km, elige dónde subir y recibe un PIN.</div></div>
        <div class="card-row"><b>3. Reglas claras</b><div class="sm muted">Rumbo al campus no se puede cancelar en las últimas ${OFF.CANCEL_LOCK_HOURS_TO_CAMPUS} h. Los regresos del campus se cancelan hasta ${OFF.CANCEL_LOCK_MINUTES_FROM_CAMPUS} min antes y se publican con ${OFF.MIN_LEAD_HOURS_FROM_CAMPUS} h de anticipación.</div></div>
        <div class="card-row"><b>4. Ingresos</b><div class="sm muted">Wheels cobra ${Math.round(CFG.PRICING.serviceFee * 100)} % por cupo completado. Sin viajes, no hay cobro.</div></div>
        <button class="btn" data-act="close-modal">Entendido</button>`);
    },
    "alert-contact"() { closeModal(); toast(S.contact ? "Aviso enviado a " + S.contact + " (simulado)" : "Guarda un contacto en Seguridad"); }
  };

  // ===================================================================================
  // 7. FLUJOS
  // ===================================================================================
  function loginAs(name, email, role) {
    S.user = { name, email, role };
    if (!S.user.name) S.user.name = "Estudiante";
    save("user");
    R.emailTmp = ""; R.roleTmp = role;
    enterRole(role);
    toast("¡Hola, " + name.split(" ")[0] + "!");
  }

  function enterRole(role) {
    R.role = role;
    if (S.user) { S.user.role = role; save("user"); }
    R.screen = null; R.offer = null; R.point = null; R.booking = null; R.route = null; R.routeKey = ""; R.carPos = null;
    screenEl.className = "screen hidden"; screenEl.innerHTML = "";
    renderAll();
  }

  function enterDriver() {
    if (R.role !== "driver") {
      R.role = "driver";
      if (S.user) { S.user.role = "driver"; save("user"); }
    }
  }

  async function startDriverTrip() {
    const o = R.offer;
    if (!o) return;
    if (!o.taken.length) return toast("Aún no tienes pasajeros");
    const from = o.dir === "to_campus" ? o.points[0] : CAMPUS;
    const to = o.dir === "to_campus" ? CAMPUS : o.points[0];
    R.tripRoute = await WM.route(from, to);
    R.carPos = from;
    showScreen("trip");
    animate(R.tripRoute.path, 12000,
      (pos, f) => {
        R.carPos = pos; WM.marker("car", pos, "car");
        const bar = $("#trbar"); if (bar) bar.style.width = f * 100 + "%";
      },
      () => completeTrip());
  }

  function completeTrip() {
    const o = R.offer; if (!o) return;
    stopAll();
    const seats = o.taken.length;
    const gross = seats * o.price;
    const earn = R2(gross * (1 - CFG.PRICING.serviceFee));
    S.drv.earnings += earn; S.drv.trips += seats;
    o.status = "done"; persistOffer(o);
    S.history.unshift({
      kind: "driver", id: uid(), date: new Date().toISOString(),
      from: o.dir === "to_campus" ? o.points.map((p) => p.name).join(" · ") : "Externado",
      to: o.dir === "to_campus" ? "Externado" : o.points.map((p) => p.name).join(" · "),
      price: gross, earn, seats, status: "done"
    });
    save("drv"); save("history");
    R.carPos = null;
    openModal(`<h2>Recorrido completado</h2>
      <div class="kv"><span>Cupos</span><span>${seats}</span></div>
      <div class="kv"><span>Ingreso bruto</span><span>${cop(gross)}</span></div>
      <div class="kv"><span>Comisión Wheels (${Math.round(CFG.PRICING.serviceFee * 100)} %)</span><span class="neg">- ${cop(gross - earn)}</span></div>
      <div class="kv tot"><span>Ganancia</span><span>${cop(earn)}</span></div>
      <button class="btn accent" data-act="done-trip" style="margin-top:8px">Volver al panel</button>`, true);
  }

  function shareText(text) {
    const done = () => toast("Copié los datos para que los compartas");
    if (navigator.share) {
      navigator.share({ title: "Mi viaje en wheels", text }).then(() => {}, () => {});
      return;
    }
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, () => toast(text));
    else toast(text);
  }

  function bindCode() {
    const ins = [...screenEl.querySelectorAll(".codebox input")];
    ins.forEach((el, i) => {
      el.addEventListener("input", () => {
        el.value = el.value.replace(/\D/g, "");
        if (el.value && ins[i + 1]) ins[i + 1].focus();
        if (ins.every((x) => x.value)) ACT["code-submit"]();
      });
      el.addEventListener("keydown", (e) => { if (e.key === "Backspace" && !el.value && ins[i - 1]) ins[i - 1].focus(); });
    });
    if (ins[0]) ins[0].focus();
  }

  // botón del modal de fin de recorrido
  document.addEventListener("click", (e) => {
    const el = e.target.closest('[data-act="done-trip"]');
    if (!el) return;
    closeModal(); R.offer = null; R.point = null;
    R.role = "driver"; if (S.user) { S.user.role = "driver"; save("user"); }
    showScreen("myoffers"); renderAll();
  });

  // ===================================================================================
  // 8. INICIO
  // ===================================================================================
  async function init() {
    WM.onFallback = (m) => { toast(m + " Usando el mapa de respaldo."); drawMap(); };
    await WM.init($("#map"), { forceLeaflet: Q.get("map") === "osm" });

    if (Q.get("reset")) {
      store.clear();
      S.user = null; S.myOffers = []; S.bookings = []; S.waitlist = []; S.history = [];
      S.wallet = { balance: 0, promo: null, firstUsed: false };
      S.drv = { earnings: 0, trips: 0, rating: 4.9, car: "Mazda 2", color: "Gris", plate: "WHL 214", uni: "Ciencia de Datos · 5.º semestre" };
      S.contact = ""; S.pay = "cash"; S.rep = { late: 0, done: 0 }; S.me = DEF_ME;
      R.me = S.me;
    }
    R.seed = buildSeedOffers();
    R.me = S.me = store.get("me", DEF_ME);
    if (Q.get("guest")) {
      S.user = { name: "Estudiante Demo", email: "demo@est." + CFG.EMAIL_DOMAIN_HINT, role: Q.get("role") === "driver" ? "driver" : "rider" };
      save("user");
      enterRole(S.user.role);
    } else {
      showScreen("welcome");
    }
    window.__wheels = { R, S, ACT, WM, D, CFG, offersForPassenger };
  }
  init();
})();
