// =====================================================================================
// WHEELS · demo de aplicación web para celular (solo comunidad Universidad Externado)
// Sin base de datos: lo que se guarda (perfil, historial) queda en el navegador (localStorage)
// y está aislado en el objeto `store`, para cambiarlo por un servidor más adelante.
// Índice: 1 utilidades · 2 estado · 3 mapa · 4 vistas · 5 acciones · 6 flujo pasajero · 7 flujo conductor · 8 inicio
// =====================================================================================
(function () {
  "use strict";
  const CFG = window.WHEELS_CONFIG, D = window.WHEELS_DATA, WM = window.WheelsMap;
  const Q = new URLSearchParams(location.search);
  const FAST = Math.max(1, Number(Q.get("fast")) || 1);          // ?fast=5 acelera las simulaciones (para pruebas)
  const T = (ms) => ms / FAST;

  // ===================================================================================
  // 1. UTILIDADES
  // ===================================================================================
  const $ = (s, r) => (r || document).querySelector(s);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const cop = (n) => "$ " + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const rnd = (a, b) => a + Math.random() * (b - a);
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const uid = () => Math.random().toString(36).slice(2, 8).toUpperCase();
  const hhmm = (d) => d.toLocaleTimeString("es-CO", { hour: "numeric", minute: "2-digit" });
  const dayStr = (d) => d.toLocaleDateString("es-CO", { weekday: "short", day: "numeric", month: "short" });
  const initials = (n) => n.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");
  const R2 = (n) => Math.round(n / 100) * 100;
  const nrm = WM.norm;

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
    wheel: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="9"/><line x1="4.2" y1="17" x2="9.6" y2="13.8"/><line x1="19.8" y1="17" x2="14.4" y2="13.8"/>'
  };
  const ic = (n, extra) => `<svg class="i ${extra || ""}" viewBox="0 0 24 24" aria-hidden="true">${IC[n] || ""}</svg>`;

  // almacenamiento (demo: localStorage). Más adelante se reemplaza por llamadas al servidor.
  const store = {
    get(k, d) { try { const v = localStorage.getItem("wheels_" + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("wheels_" + k, JSON.stringify(v)); } catch (e) {} },
    clear() { try { Object.keys(localStorage).filter((k) => k.startsWith("wheels_")).forEach((k) => localStorage.removeItem(k)); } catch (e) {} }
  };

  // ===================================================================================
  // 2. ESTADO
  // ===================================================================================
  function seedHistory() {
    const d = (n) => new Date(Date.now() - n * 864e5).toISOString();
    return [
      { id: "H1", date: d(2), from: "Portería principal", to: "Zona T", price: 7400, opt: "pool", driver: "Camila R.", rating: 5, km: 9.8, min: 31, demo: true },
      { id: "H2", date: d(5), from: "Parque de Usaquén", to: "Portería principal", price: 9200, opt: "pool", driver: "Andrés M.", rating: 5, km: 14.1, min: 38, demo: true },
      { id: "H3", date: d(9), from: "Portería principal", to: "Plaza de las Américas", price: 15800, opt: "direct", driver: "Valentina G.", rating: 4, km: 13.2, min: 35, demo: true }
    ];
  }
  const S = {
    user: store.get("user", null),
    history: store.get("history", null) || seedHistory(),
    scheduled: store.get("scheduled", []),
    recents: store.get("recents", []),
    wallet: store.get("wallet", { balance: 0, firstUsed: false, promo: null }),
    drv: store.get("drv", { today: 0, trips: 0, rating: 4.9 }),
    contact: store.get("contact", "")
  };
  const save = (k) => store.set(k, S[k]);

  const R = {
    screen: null, phase: "idle", mode: "rider",
    pickup: D.pickups[0], dest: null, route: null, opt: "pool", pay: "cash", approachMin: 4,
    trip: null, carPos: null, approach: null, eta: 0,
    sField: "dest", sQ: "", sResults: [], sTok: 0,
    chat: [], rating: 0, tags: [], tip: 0, why: "",
    tab: "past", tabSched: false, userPos: null,
    drv: { online: false, req: null, from: null, to: null, route: null, approach: null, earn: 0, fare: 0 },
    timers: [], anims: [], navOn: true
  };
  const later = (fn, ms) => { const id = setTimeout(fn, ms); R.timers.push(id); return id; };
  const stopAll = () => { R.timers.forEach(clearTimeout); R.timers = []; R.anims.forEach((a) => a.cancel()); R.anims = []; };

  // precios ---------------------------------------------------------------------------
  const OPTS = [
    { id: "pool", name: "Compartido", icon: "users", desc: "Comparte con compañeros de tu ruta", seats: "Hasta 3 pasajeros", extra: 1.12 },
    { id: "direct", name: "Directo", icon: "car", desc: "Solo tú y tu conductor", seats: "1 pasajero", extra: 1 }
  ];
  function direct(route) {
    const P = CFG.PRICING, km = route.meters / 1000, mn = route.seconds / 60;
    return R2(Math.max(P.minimum, P.base + P.km * km + P.min * mn));
  }
  const priceOf = (route, optId) => (optId === "pool" ? R2(direct(route) * CFG.PRICING.poolFactor) : direct(route));
  function promoDiscount(price) {
    const p = S.wallet.promo && D.promos[S.wallet.promo]; if (!p) return 0;
    if (S.wallet.promo === "WHEELS50" && S.wallet.firstUsed) return 0;
    return R2(Math.min(price * p.pct, p.cap));
  }
  const payLabel = (id) => ({ cash: "Efectivo", nequi: "Nequi (demo)", card: "Tarjeta •••• 4242 (demo)", wallet: "Saldo Wheels" }[id] || id);
  const payIcon = (id) => ({ cash: "wallet", nequi: "phone", card: "card", wallet: "wheel" }[id] || "card");

  // ===================================================================================
  // 3. MAPA (sincroniza lo que se ve en el mapa con el estado)
  // ===================================================================================
  const navH = () => (R.navOn && !$("#nav").classList.contains("hidden") ? 62 : 0);
  function fitMap(points) {
    const pts = points || R.fitPts; if (!pts || !pts.length) return;
    R.fitPts = pts;
    const sh = $("#sheet").offsetHeight || 260;
    WM.fit(pts, { top: 110, bottom: sh + navH() + 30 });
  }
  function drawMap() {
    if (!WM.impl) return;
    const rid = R.mode === "rider";
    const keep = {};
    const set = (id, p, t) => { keep[id] = 1; WM.marker(id, p, t); };
    let line = null, pts = [];
    if (rid) {
      const ph = R.phase;
      if (ph === "idle") { set("pickup", R.pickup, "pickup"); if (R.userPos) set("me", R.userPos, "me"); pts = [R.pickup]; }
      else if (ph === "options" || ph === "searching") { set("pickup", R.pickup, "pickup"); set("dest", R.dest, "dest"); line = R.route && R.route.path; pts = [R.pickup, R.dest].concat(R.route ? R.route.path.filter((_, i) => i % 6 === 0) : []); }
      else if (ph === "assigned") { set("pickup", R.pickup, "pickup"); set("car", R.carPos, "car"); line = R.approach && R.approach.path; pts = [R.pickup, R.carPos]; }
      else if (ph === "arrived") { set("pickup", R.pickup, "pickup"); set("car", R.pickup, "car"); pts = [R.pickup]; }
      else if (ph === "intrip") { set("dest", R.dest, "dest"); set("car", R.carPos, "car"); line = R.route && R.route.path; pts = [R.dest, R.carPos]; }
    } else {
      const d = R.drv, ph = R.phase;
      if (ph === "d_off" || ph === "d_on") { set("car", R.carPos || D.pickups[0], "car"); pts = [R.carPos || D.pickups[0]]; }
      else if (ph === "d_req") { set("car", R.carPos, "car"); set("rider", d.from, "rider"); set("dest", d.to, "dest"); line = d.route && d.route.path; pts = [R.carPos, d.from, d.to]; }
      else if (ph === "d_pick") { set("car", R.carPos, "car"); set("rider", d.from, "rider"); line = d.approach && d.approach.path; pts = [R.carPos, d.from]; }
      else if (ph === "d_wait") { set("car", d.from, "car"); set("rider", d.from, "rider"); set("dest", d.to, "dest"); line = d.route && d.route.path; pts = [d.from, d.to]; }
      else if (ph === "d_trip") { set("car", R.carPos, "car"); set("dest", d.to, "dest"); line = d.route && d.route.path; pts = [R.carPos, d.to]; }
      else if (ph === "d_done") { set("car", R.carPos, "car"); pts = [R.carPos]; }
    }
    ["pickup", "dest", "car", "me", "rider"].forEach((id) => { if (!keep[id]) WM.marker(id, null); });
    WM.line(line || null);
    pts = pts.filter(Boolean);
    requestAnimationFrame(() => fitMap(pts));
  }

  function animate(path, ms, onTick, onDone) {
    const cum = [0]; for (let i = 1; i < path.length; i++) cum[i] = cum[i - 1] + WM.haversine(path[i - 1], path[i]);
    const total = cum[cum.length - 1] || 1, t0 = performance.now(); let raf = 0, dead = false;
    const h = { cancel() { dead = true; cancelAnimationFrame(raf); } };
    const step = (now) => {
      if (dead) return;
      const f = Math.min(1, (now - t0) / ms), dist = f * total; let i = 1;
      while (i < cum.length - 1 && cum[i] < dist) i++;
      const a = path[i - 1], b = path[i], seg = (cum[i] - cum[i - 1]) || 1, u = Math.max(0, Math.min(1, (dist - cum[i - 1]) / seg));
      onTick({ lat: a.lat + (b.lat - a.lat) * u, lng: a.lng + (b.lng - a.lng) * u }, f);
      if (f < 1) raf = requestAnimationFrame(step); else if (onDone) onDone();
    };
    raf = requestAnimationFrame(step); R.anims.push(h); return h;
  }
  // punto cercano a otro (para ubicar a los conductores simulados)
  function nearby(p, meters) {
    const ang = rnd(0, Math.PI * 2), dLat = (meters * Math.cos(ang)) / 111320, dLng = (meters * Math.sin(ang)) / (111320 * Math.cos((p.lat * Math.PI) / 180));
    return { lat: p.lat + dLat, lng: p.lng + dLng };
  }

  // ===================================================================================
  // 4. VISTAS
  // ===================================================================================
  const sheetEl = $("#sheet"), screenEl = $("#screen"), modalEl = $("#modal"), toastEl = $("#toast"), topEl = $("#topbar"), navEl = $("#nav"), drawerEl = $("#drawer");
  let toastT = 0;
  function toast(msg) { toastEl.textContent = msg; toastEl.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove("show"), 2600); }
  function openModal(html, center) { modalEl.className = "modal" + (center ? " center" : ""); modalEl.innerHTML = `<div class="card">${html}</div>`; }
  function closeModal() { modalEl.className = "modal hidden"; modalEl.innerHTML = ""; }
  modalEl.addEventListener("click", (e) => { if (e.target === modalEl && !R.lockModal) closeModal(); });

  function setSheet(html, withNav) {
    sheetEl.className = "sheet" + (withNav ? " has-nav" : ""); sheetEl.innerHTML = `<div class="handle"></div>${html}`;
    sheetEl.classList.remove("hidden");
  }
  function placeRow(p, act, data) {
    return `<button class="place" data-act="${act}" ${data || ""}><span class="ic">${ic(p.type === "recent" ? "clock" : "pin")}</span><span class="grow"><div class="t ellip">${esc(p.name)}</div><div class="a ellip">${esc(p.addr || "")}</div></span></button>`;
  }
  function driverCard(drv, extra) {
    return `<div class="row"><div class="avatar">${initials(drv.name)}</div><div class="grow"><div class="b" style="font-size:18px">${esc(drv.name)} <span class="badge">${ic("check").replace('class="i ', 'style="width:12px;height:12px" class="i ')} Externadista</span></div><div class="sm muted">${esc(drv.uni)}</div><div class="sm">★ ${drv.rating.toFixed(1)} · ${drv.trips} viajes</div></div><div style="text-align:right"><div class="sm muted">${esc(drv.color)} ${esc(drv.car)}</div><div class="plate" style="margin-top:4px">${esc(drv.plate)}</div></div></div>${extra || ""}`;
  }

  // ----- barra superior -----
  function renderTop() {
    const ph = R.phase, rid = R.mode === "rider";
    let h = "";
    if (R.screen) { topEl.innerHTML = ""; return; }
    if (rid && (ph === "idle")) h = `<button class="round" data-act="menu" aria-label="Menú">${ic("menu")}</button><div class="brand">wheels<b>.</b></div><span style="width:46px"></span>`;
    else if (rid && ph === "options") h = `<button class="round" data-act="back-idle" aria-label="Atrás">${ic("back")}</button><span></span><span></span>`;
    else if (rid && ph === "searching") h = `<span></span><span></span><span></span>`;
    else if (rid && (ph === "assigned" || ph === "arrived" || ph === "intrip")) h = `<span></span><span></span><button class="round" data-act="sos" aria-label="Seguridad" style="color:var(--danger)">${ic("shield")}</button>`;
    else if (!rid) {
      const on = R.drv.online;
      const canMenu = ["d_off", "d_on"].includes(ph);
      h = `${canMenu ? `<button class="round" data-act="menu" aria-label="Menú">${ic("menu")}</button>` : "<span></span>"}<div class="pill"><span class="dot ${on ? "on" : ""}"></span>${on ? "En línea" : "Desconectado"} · ${cop(S.drv.today)}</div><span style="width:46px"></span>`;
    }
    topEl.innerHTML = h;
  }

  // ----- barra de navegación -----
  function renderNav() {
    const show = R.navOn && ((R.mode === "rider" && R.phase === "idle") || (R.mode === "driver" && ["d_off", "d_on"].includes(R.phase)) || (R.screen && ["activity", "account"].includes(R.screen)));
    navEl.classList.toggle("hidden", !show);
    if (!show) return;
    const cur = R.screen === "activity" ? "activity" : R.screen === "account" ? "account" : "home";
    const b = (id, icn, lbl) => `<button class="${cur === id ? "on" : ""}" data-act="go" data-to="${id}">${ic(icn)}${lbl}</button>`;
    navEl.innerHTML = b("home", "home", "Inicio") + b("activity", "list", "Actividad") + b("account", "user", "Cuenta");
  }

  // ----- hoja inferior según la fase -----
  function renderSheet() {
    if (R.screen) { sheetEl.classList.add("hidden"); return; }
    const rid = R.mode === "rider";
    const nav = !$("#nav").classList.contains("hidden");
    if (rid) {
      const f = { idle: sheetIdle, options: sheetOptions, searching: sheetSearching, assigned: sheetAssigned, arrived: sheetArrived, intrip: sheetTrip }[R.phase];
      if (f) setSheet(f(), nav);
    } else {
      const f = { d_off: sheetDOff, d_on: sheetDOn, d_req: sheetDReq, d_pick: sheetDPick, d_wait: sheetDWait, d_trip: sheetDTrip, d_done: sheetDDone }[R.phase];
      if (f) setSheet(f(), nav);
    }
  }

  function sheetIdle() {
    const rec = S.recents.slice(0, 3);
    const sug = rec.length ? rec.map((p) => ({ ...p, type: "recent" })) : [D.places[0], D.places[3], D.places[13]];
    return `
      <button class="row sm" data-act="open-search" data-f="pickup" style="margin-bottom:10px;color:var(--muted)">${ic("pin")}<span>Recogida: <b style="color:#000">${esc(R.pickup.name)}</b></span>${ic("chevron")}</button>
      <div class="where" data-act="open-search" data-f="dest" role="button"><span class="sq"></span><span>¿A dónde vas?</span><span class="later" data-act="schedule">${ic("clock")}Después</span></div>
      <div class="chips" style="margin-top:12px"><button class="chip" data-act="to-campus">${ic("home")}Ir al campus</button><button class="chip" data-act="open-search" data-f="dest">${ic("search")}Buscar lugar</button><button class="chip" data-act="schedule">${ic("cal")}Programar</button></div>
      <div style="margin-top:4px">${sug.map((p, i) => placeRow(p, "pick-sug", `data-i="${i}"`)).join("")}</div>
      <div class="promo"><div class="ic">${ic("gift")}</div><div class="sm"><b>WHEELS50</b> · 50 % en tu primer viaje compartido. Solo para la comunidad Externadista.</div></div>`;
  }

  function sheetOptions() {
    if (!R.route) return `<h2>Calculando tu ruta…</h2><p class="sub">${esc(R.pickup.name)} → ${esc(R.dest.name)}</p><div class="bar"><i style="width:60%"></i></div>`;
    const km = (R.route.meters / 1000).toFixed(1), min = Math.max(1, Math.round(R.route.seconds / 60));
    const now = Date.now();
    const opts = OPTS.map((o) => {
      const pr = priceOf(R.route, o.id), dsc = promoDiscount(pr), fin = pr - dsc;
      const arr = new Date(now + (R.approachMin * 60 + R.route.seconds * o.extra) * 1000);
      return `<button class="opt ${R.opt === o.id ? "sel" : ""}" data-act="opt" data-id="${o.id}"><span class="car">${ic(o.icon)}</span><span class="grow"><div class="nm">${o.name}${o.id === "pool" ? ' <span class="badge">Recomendado</span>' : ""}</div><div class="ds">${o.seats} · llegas ${hhmm(arr)}</div><div class="ds">${o.desc}</div></span><span class="pr">${cop(fin)}${dsc ? `<span class="old">${cop(pr)}</span>` : ""}</span></button>`;
    }).join("");
    const o = OPTS.find((x) => x.id === R.opt), fin = priceOf(R.route, o.id) - promoDiscount(priceOf(R.route, o.id));
    return `
      <div class="row" style="margin-bottom:6px"><div class="grow"><h2>Elige tu viaje</h2><div class="sub ellip">${esc(R.pickup.name)} → ${esc(R.dest.name)} · ${km} km · ${min} min</div></div></div>
      ${opts}
      <button class="payrow" data-act="pay-modal">${ic(payIcon(R.pay))}<span class="grow b">${payLabel(R.pay)}</span><span class="muted sm">Cambiar</span></button>
      <button class="payrow" data-act="promo-modal">${ic("gift")}<span class="grow b">${S.wallet.promo ? "Promo: " + S.wallet.promo : "Agregar código promocional"}</span>${ic("chevron")}</button>
      <button class="btn accent" data-act="confirm" style="margin-top:8px">Pedir ${o.name} · ${cop(fin)}</button>
      <button class="btn ghost" data-act="schedule" style="margin-top:8px">${ic("cal")}Programar para después</button>`;
  }

  function sheetSearching() {
    const t = R.trip;
    return `<div class="radar"><div class="core">${ic("car")}</div></div>
      <h2 style="text-align:center">${t.opt === "pool" ? "Buscando compañeros de tu ruta…" : "Buscando un conductor Externadista…"}</h2>
      <p class="sub" style="text-align:center">Solo te emparejamos con estudiantes verificados de la U.</p>
      <div class="bar"><i id="sbar"></i></div>
      <button class="btn soft" data-act="cancel-search">Cancelar</button>`;
  }

  function sheetAssigned() {
    const t = R.trip, d = t.driver;
    const co = t.opt === "pool" && t.co.length ? `<div class="co">${ic("users")}<span>Compartes con ${t.co.map((c) => esc(c.name)).join(" y ")} — ya están en tu ruta.</span></div>` : "";
    return `<div class="eta"><div class="big" id="etaTxt">Llega en ${Math.max(1, R.eta)} min</div><span class="badge dark">PIN ${t.pin}</span></div>
      <div class="bar"><i id="etaBar"></i></div>
      ${driverCard(d)}
      ${co}
      <div class="sm muted" style="margin-top:8px">Dale este PIN al conductor al subir: <b style="color:#000;letter-spacing:2px">${t.pin}</b></div>
      <div class="acts"><button data-act="chat">${ic("chat")}Mensaje</button><button data-act="call">${ic("phone")}Llamar</button><button data-act="share">${ic("share")}Compartir</button><button class="sos" data-act="sos">${ic("alert")}Seguridad</button></div>
      <button class="btn danger" data-act="cancel-trip" style="margin-top:8px">Cancelar viaje</button>`;
  }

  function sheetArrived() {
    const t = R.trip, d = t.driver;
    return `<h2>Tu conductor llegó</h2><p class="sub">Búscalo en ${esc(R.pickup.name)}. Verifica la placa antes de subir.</p>
      ${driverCard(d)}
      <div class="pin">${String(t.pin).split("").map((n) => `<span>${n}</span>`).join("")}</div><div class="sm muted" style="margin-bottom:10px">Tu PIN de verificación</div>
      <button class="btn accent" data-act="board">Ya subí al carro</button>
      <div class="acts"><button data-act="chat">${ic("chat")}Mensaje</button><button data-act="call">${ic("phone")}Llamar</button><button data-act="share">${ic("share")}Compartir</button><button class="sos" data-act="sos">${ic("alert")}Seguridad</button></div>`;
  }

  function sheetTrip() {
    const t = R.trip;
    return `<div class="eta"><div class="big" id="tripTxt">Llegas a las ${hhmm(new Date(Date.now() + R.route.seconds * 1000))}</div><span class="badge">En viaje</span></div>
      <div class="bar"><i id="tripBar"></i></div>
      <div class="row">${ic("pin")}<div class="grow"><div class="b ellip">${esc(R.dest.name)}</div><div class="sm muted ellip">${esc(R.dest.addr || "")}</div></div></div>
      <hr class="sep">
      <div class="row"><div class="avatar" style="width:40px;height:40px;font-size:15px">${initials(t.driver.name)}</div><div class="grow"><div class="b">${esc(t.driver.name)}</div><div class="sm muted">${esc(t.driver.color)} ${esc(t.driver.car)} · ${esc(t.driver.plate)}</div></div></div>
      <div class="acts"><button data-act="chat">${ic("chat")}Mensaje</button><button data-act="call">${ic("phone")}Llamar</button><button data-act="share">${ic("share")}Compartir</button><button class="sos" data-act="sos">${ic("alert")}Seguridad</button></div>`;
  }

  // ----- pantallas completas -----
  function showScreen(name) { R.screen = name; screenEl.className = "screen" + (["activity", "account"].includes(name) ? " with-nav" : "") + (name === "welcome" ? " welcome" : ""); renderScreen(); renderTop(); renderSheet(); renderNav(); }
  function closeScreen() { R.screen = null; screenEl.className = "screen hidden"; screenEl.innerHTML = ""; renderAll(); }
  const head = (title, back) => `<div class="head">${back ? `<button class="round" style="box-shadow:none;background:var(--soft)" data-act="${back}">${ic("back")}</button>` : ""}<h1>${title}</h1></div>`;

  function renderScreen() {
    const s = R.screen; if (!s) return;
    const f = { welcome: scrWelcome, login: scrLogin, code: scrCode, search: scrSearch, activity: scrActivity, account: scrAccount, wallet: scrWallet, safety: scrSafety, rating: scrRating }[s];
    screenEl.innerHTML = f ? f() : ""; if (s === "search") bindSearch(); if (s === "code") bindCode();
  }

  function scrWelcome() {
    return `<div><div class="logo">wheels<b>.</b></div><div class="tag">Viaja con tu comunidad Externadista</div><p>Comparte el camino a la U con estudiantes verificados. Más barato, más seguro y entre conocidos.</p></div>
      <div><span class="badge dark" style="background:#1d1d22;color:#9ae9dc;margin-bottom:12px">${ic("lock").replace('class="i ', 'style="width:13px;height:13px" class="i ')} Acceso solo con correo de la Universidad Externado</span>
      <button class="btn accent" data-act="to-login" style="margin-bottom:10px">Continuar con mi correo institucional</button>
      <button class="btn" data-act="guest" style="background:#1d1d22;color:#fff">Entrar como invitado (solo demo)</button>
      <div class="demo-note">Demo sin servidor: tus datos no salen de este dispositivo.</div></div>`;
  }
  function scrLogin() {
    return `${head("Tu correo institucional", "to-welcome")}<div class="body"><p class="sub">Wheels es solo para la comunidad de la <b>Universidad Externado de Colombia</b>. Usa tu correo @uexternado.edu.co o @est.uexternado.edu.co.</p>
      <div class="field" id="emailF">${ic("user")}<input id="email" type="email" inputmode="email" autocomplete="email" placeholder="nombre.apellido@est.${CFG.EMAIL_DOMAIN_HINT}" value="${esc(R.emailTmp || "")}"></div><div class="err-t hidden" id="emailE">Usa tu correo institucional de la Universidad Externado.</div>
      <button class="btn" data-act="login-submit" style="margin-top:16px">Enviar código</button></div>`;
  }
  function scrCode() {
    return `${head("Verifica tu correo", "to-login")}<div class="body"><p class="sub">Enviamos un código de 4 dígitos a <b>${esc(R.emailTmp)}</b>.<br>Demo: el código es <b>${CFG.DEMO_CODE}</b>.</p>
      <div class="codebox">${[0, 1, 2, 3].map((i) => `<input inputmode="numeric" maxlength="1" data-i="${i}" aria-label="Dígito ${i + 1}">`).join("")}</div><div class="err-t hidden" id="codeE" style="text-align:center">Código incorrecto. Prueba con ${CFG.DEMO_CODE}.</div>
      <button class="btn" data-act="code-submit" style="margin-top:12px">Verificar</button></div>`;
  }

  // búsqueda de lugares ---------------------------------------------------------------
  function scrSearch() {
    const f = R.sField;
    return `<div class="head"><button class="round" style="box-shadow:none;background:var(--soft)" data-act="close-search">${ic("back")}</button><h1>Tu ruta</h1></div>
      <div class="body"><div class="route-box"><div class="rail"><span class="a"></span><span class="l"></span><span class="z"></span></div>
        <div class="fields"><div class="field ${f === "pickup" ? "focus" : ""}"><input id="qp" data-f="pickup" placeholder="Recogida" value="${esc(f === "pickup" ? R.sQ : R.pickup.name)}"></div>
        <div class="field ${f === "dest" ? "focus" : ""}"><input id="qd" data-f="dest" placeholder="¿A dónde vas?" value="${esc(f === "dest" ? R.sQ : R.dest ? R.dest.name : "")}"></div></div></div>
        <div id="sres">${resultsHtml()}</div></div>`;
  }
  function localMatches(q) {
    const n = nrm(q); const all = D.pickups.concat(D.places);
    return n ? all.filter((p) => nrm(p.name + " " + p.addr).includes(n)) : [];
  }
  function suggestions() {
    if (R.sField === "pickup") {
      const base = D.pickups.slice(); if (R.userPos) base.unshift({ id: "me", name: "Mi ubicación", addr: "Según tu dispositivo", ...R.userPos });
      return base;
    }
    return S.recents.slice(0, 3).map((p) => ({ ...p, type: "recent" })).concat(D.places.slice(0, 8));
  }
  function resultsHtml() {
    const list = R.sQ.trim() ? R.sResults : suggestions();
    R.sList = list;
    let h = "";
    if (R.sField === "pickup") h += `<button class="place" data-act="use-me"><span class="ic" style="background:#e6efff;color:#226fff">${ic("nav")}</span><span class="grow"><div class="t">Usar mi ubicación actual</div><div class="a">Pedirá permiso al navegador</div></span></button>`;
    if (!list.length) return h + `<div class="empty">${ic("search")}<div>${R.sQ.trim() ? "Sin resultados en Bogotá. Prueba con otro nombre." : "Escribe un lugar."}</div></div>`;
    return h + `<h3>${R.sQ.trim() ? "Resultados" : R.sField === "pickup" ? "Puntos de encuentro" : "Sugeridos"}</h3>` + list.map((p, i) => placeRow(p, "pick-res", `data-i="${i}"`)).join("");
  }
  function bindSearch() {
    ["qp", "qd"].forEach((id) => {
      const el = $("#" + id, screenEl); if (!el) return;
      el.addEventListener("focus", () => { if (R.sField !== el.dataset.f) { R.sField = el.dataset.f; R.sQ = ""; R.sResults = []; el.value = ""; refreshSearch(); } });
      el.addEventListener("input", () => { R.sQ = el.value; const tok = ++R.sTok; R.sResults = localMatches(R.sQ); refreshResults();
        if (R.sQ.trim().length >= 3) { clearTimeout(R.sDeb); R.sDeb = setTimeout(async () => { const near = R.pickup || WM.DEF; const more = await WM.search(R.sQ, near); if (tok !== R.sTok) return; const seen = new Set(R.sResults.map((p) => nrm(p.name))); R.sResults = R.sResults.concat(more.filter((p) => !seen.has(nrm(p.name)))); refreshResults(); }, 450); } });
    });
    const t = $(R.sField === "pickup" ? "#qp" : "#qd", screenEl); if (t) { t.focus(); }
  }
  function refreshSearch() { const k = R.sField; renderScreen(); const t = $(k === "pickup" ? "#qp" : "#qd", screenEl); if (t) { t.focus(); const v = t.value; t.value = ""; t.value = v; } }
  function refreshResults() { const el = $("#sres", screenEl); if (el) el.innerHTML = resultsHtml(); }

  // actividad -------------------------------------------------------------------------
  function scrActivity() {
    const past = S.history.map((t, i) => `<button class="trip-card" data-act="trip-detail" data-i="${i}"><div class="row"><div class="grow"><div class="b ellip">${esc(t.to)}</div><div class="sm muted ellip">${esc(t.from)} · ${dayStr(new Date(t.date))}</div></div><div class="b">${cop(t.price)}</div></div><div class="sm muted" style="margin-top:4px">${t.opt === "pool" ? "Compartido" : "Directo"} · ${esc(t.driver)} · ${"★".repeat(t.rating || 0)}${t.demo ? " · ejemplo" : ""}</div></button>`).join("");
    const sch = S.scheduled.map((t, i) => `<div class="trip-card"><div class="row"><div class="grow"><div class="b ellip">${esc(t.to)}</div><div class="sm muted ellip">${esc(t.from)}</div></div><button class="btn sm danger" data-act="del-sched" data-i="${i}">Quitar</button></div><div class="sm" style="margin-top:6px">${ic("cal").replace('class="i ', 'style="width:15px;height:15px;vertical-align:-3px" class="i ')} ${new Date(t.when).toLocaleString("es-CO", { weekday: "long", day: "numeric", month: "short", hour: "numeric", minute: "2-digit" })}${t.repeat !== "none" ? " · se repite " + (t.repeat === "weekdays" ? "de lunes a viernes" : "cada semana") : ""}</div></div>`).join("");
    return `${head("Actividad")}<div class="body"><div class="seg"><button class="${R.tabSched ? "" : "on"}" data-act="tab" data-t="past">Pasados</button><button class="${R.tabSched ? "on" : ""}" data-act="tab" data-t="sched">Programados (${S.scheduled.length})</button></div>
      ${R.tabSched ? (sch || `<div class="empty">${ic("cal")}<div>Aún no tienes viajes programados.<br>Úsalos para tus clases de todas las semanas.</div></div>`) : (past || `<div class="empty">${ic("car")}<div>Aquí verás tus viajes.</div></div>`)}</div>`;
  }

  function scrAccount() {
    const u = S.user, trips = S.history.length;
    return `${head("Cuenta")}<div class="body"><div class="row" style="margin:6px 0 12px"><div class="avatar lg">${initials(u.name)}</div><div class="grow"><div class="b" style="font-size:22px;letter-spacing:-.3px">${esc(u.name)}</div><div class="sm muted ellip">${esc(u.email)}</div><span class="badge" style="margin-top:6px">${ic("check").replace('class="i ', 'style="width:12px;height:12px" class="i ')} Verificado · Universidad Externado</span></div></div>
      <div class="stat"><div><b>${trips}</b><span>Viajes</span></div><div><b>4,9 ★</b><span>Calificación</span></div><div><b>${cop(S.wallet.balance)}</b><span>Saldo</span></div></div>
      <button class="payrow" data-act="wallet">${ic("wallet")}<span class="grow b">Pagos y promociones</span>${ic("chevron")}</button>
      <button class="payrow" data-act="safety">${ic("shield")}<span class="grow b">Seguridad</span>${ic("chevron")}</button>
      <button class="payrow" data-act="to-driver">${ic("car")}<span class="grow"><span class="b">Modo conductor</span><div class="sm muted">Ofrece cupos en tu carro (demo)</div></span>${ic("chevron")}</button>
      <button class="payrow" data-act="help">${ic("help")}<span class="grow b">Ayuda</span>${ic("chevron")}</button>
      <button class="payrow" data-act="logout">${ic("out")}<span class="grow b">Cerrar sesión</span></button>
      <p class="sm muted" style="margin-top:16px">wheels · demo v0.1. Los datos se guardan solo en este navegador.</p></div>`;
  }

  function scrWallet() {
    const m = [["cash", "Efectivo", "Pagas al conductor"], ["nequi", "Nequi", "Demo · ••••3021"], ["card", "Tarjeta Visa •••• 4242", "Demo"], ["wallet", "Saldo Wheels", cop(S.wallet.balance)]];
    return `${head("Pagos", "close-screen")}<div class="body"><h3>Método de pago</h3>${m.map((x) => `<button class="payrow" data-act="set-pay" data-id="${x[0]}">${ic(payIcon(x[0]))}<span class="grow"><div class="b">${x[1]}</div><div class="sm muted">${x[2]}</div></span>${R.pay === x[0] ? ic("check") : ""}</button>`).join("")}
      <button class="btn soft" data-act="topup" style="margin-top:14px">Recargar $ 20.000 (demo)</button>
      <h3>Código promocional</h3><div class="field"><input id="promoIn" placeholder="WHEELS50" value="${esc(S.wallet.promo || "")}" style="text-transform:uppercase"></div>
      <button class="btn" data-act="apply-promo-screen" style="margin-top:10px">Aplicar</button>
      <p class="sm muted" style="margin-top:12px">Códigos de prueba: <b>WHEELS50</b> (50 % en el primer viaje, máx. $ 8.000) y <b>UNI10</b> (10 %).</p></div>`;
  }

  function scrSafety() {
    return `${head("Seguridad", "close-screen")}<div class="body"><p class="sub">Wheels solo conecta a personas verificadas de la Universidad Externado. Aun así, puedes protegerte más:</p>
      <div class="card-row"><div class="b">${ic("check").replace('class="i ', 'style="width:16px;height:16px;vertical-align:-3px" class="i ')} Verificación con correo institucional</div><div class="sm muted">Solo entra quien tiene correo de la U.</div></div>
      <div class="card-row"><div class="b">${ic("lock").replace('class="i ', 'style="width:16px;height:16px;vertical-align:-3px" class="i ')} PIN de abordaje</div><div class="sm muted">El conductor confirma tu PIN antes de iniciar el viaje.</div></div>
      <div class="card-row"><div class="b">${ic("share").replace('class="i ', 'style="width:16px;height:16px;vertical-align:-3px" class="i ')} Compartir viaje</div><div class="sm muted">Envía la placa y el destino a alguien de confianza.</div></div>
      <h3>Contacto de confianza</h3><div class="field">${ic("phone")}<input id="contactIn" type="tel" placeholder="Número de celular" value="${esc(S.contact)}"></div>
      <button class="btn" data-act="save-contact" style="margin-top:10px">Guardar contacto</button>
      <a class="btn danger" href="tel:123" style="margin-top:14px;text-decoration:none">${ic("phone")}Línea de emergencias 123</a>
      <p class="sm muted" style="margin-top:12px">Demo: en la versión real aquí también iría el contacto de seguridad del campus.</p></div>`;
  }

  function scrRating() {
    const t = R.trip, pr = t.price, dsc = t.promo, tipv = R.tip, total = pr - dsc + tipv;
    return `${head("Viaje terminado")}<div class="body"><div style="text-align:center;margin:4px 0 8px"><div class="avatar lg" style="margin:0 auto 8px">${initials(t.driver.name)}</div><div class="b" style="font-size:20px">Llegaste a ${esc(R.dest.name)}</div><div class="sm muted">${(t.route.meters / 1000).toFixed(1)} km · ${Math.round(t.route.seconds / 60)} min</div></div>
      <div class="kv"><span>Tarifa ${t.opt === "pool" ? "directa" : "del viaje"}</span><span>${cop(t.direct)}</span></div>
      ${t.opt === "pool" ? `<div class="kv"><span>Descuento por compartir</span><span class="neg">- ${cop(t.direct - pr)}</span></div>` : ""}
      ${dsc ? `<div class="kv"><span>Promo ${esc(S.wallet.promo)}</span><span class="neg">- ${cop(dsc)}</span></div>` : ""}
      ${tipv ? `<div class="kv"><span>Propina</span><span>${cop(tipv)}</span></div>` : ""}
      <div class="kv tot"><span>Total · ${payLabel(R.pay)}</span><span>${cop(total)}</span></div>
      <h3 style="text-align:center">¿Cómo estuvo ${esc(t.driver.name)}?</h3>
      <div class="stars">${[1, 2, 3, 4, 5].map((n) => `<button class="${R.rating >= n ? "on" : ""}" data-act="star" data-n="${n}" aria-label="${n} estrellas">${ic("star")}</button>`).join("")}</div>
      <div class="tags">${D.ratingTags.map((g) => `<button class="${R.tags.includes(g) ? "on" : ""}" data-act="tag" data-t="${esc(g)}">${esc(g)}</button>`).join("")}</div>
      <h3 style="text-align:center">Propina (opcional)</h3>
      <div class="chips" style="justify-content:center">${[0, 1000, 2000, 3000].map((v) => `<button class="chip ${R.tip === v ? "on" : ""}" data-act="tip" data-v="${v}">${v ? cop(v) : "Sin propina"}</button>`).join("")}</div>
      <button class="btn accent" data-act="rate-submit" style="margin-top:14px" ${R.rating ? "" : "disabled"}>Enviar</button></div>`;
  }

  // ----- menú lateral -----
  function renderDrawer() {
    const u = S.user || { name: "", email: "" };
    drawerEl.innerHTML = `<div class="who"><div class="avatar">${initials(u.name)}</div><div><div class="nm">${esc(u.name)}</div><div class="sm muted">★ 4,9</div></div></div>
      <a data-act="drawer-go" data-to="home">${ic("home")}Inicio</a><a data-act="drawer-go" data-to="activity">${ic("list")}Actividad</a><a data-act="wallet">${ic("wallet")}Pagos</a><a data-act="safety">${ic("shield")}Seguridad</a>
      <a data-act="toggle-mode">${ic("car")}${R.mode === "rider" ? "Cambiar a modo conductor" : "Cambiar a modo pasajero"}</a><a data-act="help">${ic("help")}Ayuda</a>
      <div class="foot">wheels · demo v0.1<br>Solo comunidad Universidad Externado de Colombia.<br>Mapa: ${WM.kind === "google" ? "Google Maps" : "OpenStreetMap (respaldo)"}</div>`;
  }
  const openDrawer = () => { renderDrawer(); $("#drawer-bg").classList.remove("hidden"); drawerEl.classList.add("open"); };
  const closeDrawer = () => { $("#drawer-bg").classList.add("hidden"); drawerEl.classList.remove("open"); };
  $("#drawer-bg").addEventListener("click", closeDrawer);

  // ----- conductor: hojas -----
  function sheetDOff() {
    return `<h2>Conduce con Wheels</h2><p class="sub">Ofrece cupos a estudiantes de tu universidad que van hacia donde vas.</p>
      <div class="stat"><div><b>${cop(S.drv.today)}</b><span>Hoy</span></div><div><b>${S.drv.trips}</b><span>Viajes</span></div><div><b>${S.drv.rating.toFixed(1)} ★</b><span>Calificación</span></div></div>
      <div class="card-row row">${ic("car")}<div class="grow"><div class="b">Tu carro</div><div class="sm muted">Mazda 2 gris · WHL 214 (demo)</div></div></div>
      <button class="big-go" data-act="go-online" style="width:120px;margin:10px auto;display:grid">Conectar</button>
      <p class="sm muted" style="text-align:center">Demo: las solicitudes son simuladas.</p>`;
  }
  function sheetDOn() {
    return `<div class="radar"><div class="core">${ic("car")}</div></div><h2 style="text-align:center">Buscando solicitudes…</h2><p class="sub" style="text-align:center">Estás en línea. Te avisaremos cuando un compañero necesite un cupo.</p>
      <button class="btn soft" data-act="go-offline">Desconectarme</button>`;
  }
  function sheetDReq() {
    const q = R.drv.req;
    return `<div class="row"><div class="count" id="cd">${q.left}</div><div class="grow"><div class="b" style="font-size:19px">Nueva solicitud</div><div class="sm muted">${esc(q.rider.name)} · ★ ${q.rider.rating.toFixed(1)}</div><div class="sm muted">${esc(q.rider.uni)}</div></div><div style="text-align:right"><div class="b" style="font-size:20px">${cop(q.earn)}</div><div class="sm muted">ganarías</div></div></div>
      <hr class="sep"><div class="row">${ic("pin")}<div class="grow"><div class="sm muted">Recoger en</div><div class="b ellip">${esc(q.from.name)}</div></div></div>
      <div class="row" style="margin-top:8px">${ic("nav")}<div class="grow"><div class="sm muted">Destino · ${(q.route.meters / 1000).toFixed(1)} km · ${Math.round(q.route.seconds / 60)} min</div><div class="b ellip">${esc(q.to.name)}</div></div></div>
      <div class="row" style="margin-top:14px"><button class="btn soft" data-act="decline">Rechazar</button><button class="btn accent" data-act="accept">Aceptar</button></div>`;
  }
  function sheetDPick() {
    const q = R.drv.req;
    return `<div class="eta"><div class="big" id="etaTxt">Recoge a ${esc(q.rider.name)} en ${Math.max(1, R.eta)} min</div></div><div class="bar"><i id="etaBar"></i></div>
      <div class="row"><div class="avatar">${initials(q.rider.name)}</div><div class="grow"><div class="b">${esc(q.rider.name)}</div><div class="sm muted">${esc(q.rider.uni)}</div></div></div>
      <div class="row" style="margin-top:10px">${ic("pin")}<div class="grow b ellip">${esc(q.from.name)}</div></div>
      <div class="acts"><button data-act="chat">${ic("chat")}Mensaje</button><button data-act="call">${ic("phone")}Llamar</button><button data-act="share">${ic("share")}Compartir</button><button class="sos" data-act="sos">${ic("alert")}Seguridad</button></div>`;
  }
  function sheetDWait() {
    const q = R.drv.req;
    return `<h2>Llegaste al punto de encuentro</h2><p class="sub">Espera a ${esc(q.rider.name)} y pídele su PIN de 4 dígitos antes de iniciar.</p>
      <div class="row"><div class="avatar">${initials(q.rider.name)}</div><div class="grow"><div class="b">${esc(q.rider.name)}</div><div class="sm muted">Destino: ${esc(q.to.name)}</div></div></div>
      <button class="btn accent" data-act="d-pin" style="margin-top:14px">Ingresar PIN e iniciar viaje</button>`;
  }
  function sheetDTrip() {
    const q = R.drv.req;
    return `<div class="eta"><div class="big">En viaje con ${esc(q.rider.name)}</div><span class="badge">${cop(q.earn)}</span></div><div class="bar"><i id="tripBar"></i></div>
      <div class="row">${ic("nav")}<div class="grow"><div class="b ellip">${esc(q.to.name)}</div><div class="sm muted">${(q.route.meters / 1000).toFixed(1)} km</div></div></div>
      <div class="acts"><button data-act="chat">${ic("chat")}Mensaje</button><button data-act="call">${ic("phone")}Llamar</button><button data-act="share">${ic("share")}Compartir</button><button class="sos" data-act="sos">${ic("alert")}Seguridad</button></div>`;
  }
  function sheetDDone() {
    const q = R.drv.req;
    return `<div style="text-align:center"><div class="avatar lg" style="margin:0 auto 8px">${ic("check")}</div><h2>Viaje completado</h2><p class="sub">Dejaste a ${esc(q.rider.name)} en ${esc(q.to.name)}.</p></div>
      <div class="kv"><span>Tarifa del viaje</span><span>${cop(q.fare)}</span></div><div class="kv"><span>Comisión de Wheels (demo, ${Math.round(CFG.PRICING.serviceFee * 100)} %)</span><span>- ${cop(q.fare - q.earn)}</span></div><div class="kv tot"><span>Tus ganancias</span><span>${cop(q.earn)}</span></div>
      <p class="sm muted" style="text-align:center">${esc(q.rider.name)} te calificó con 5 ★ (simulado)</p>
      <button class="btn accent" data-act="d-next" style="margin-top:8px">Seguir conectado</button><button class="btn soft" data-act="go-offline" style="margin-top:8px">Desconectarme</button>`;
  }

  // render global
  function renderAll() { renderNav(); renderTop(); renderSheet(); drawMap(); }

  // ===================================================================================
  // 5. ACCIONES (todos los botones usan data-act)
  // ===================================================================================
  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-act]"); if (!el) return;
    const a = el.dataset.act; const d = el.dataset;
    if (a === "schedule" || (el.closest(".where") && a === "schedule")) e.stopPropagation();
    ACT[a] && ACT[a](d, el);
  });

  const ACT = {
    // acceso
    "to-welcome"() { showScreen("welcome"); },
    "to-login"() { showScreen("login"); },
    guest() { loginAs("Estudiante Demo", "demo@est." + CFG.EMAIL_DOMAIN_HINT); },
    "login-submit"() {
      const v = ($("#email") || {}).value || ""; R.emailTmp = v.trim();
      const ok = /^[^\s@]+@(est\.)?uexternado\.edu\.co$/i.test(R.emailTmp);
      $("#emailF").classList.toggle("err", !ok); $("#emailE").classList.toggle("hidden", ok);
      if (ok) showScreen("code");
    },
    "code-submit"() {
      const code = [...screenEl.querySelectorAll(".codebox input")].map((i) => i.value).join("");
      if (code === CFG.DEMO_CODE) { const local = R.emailTmp.split("@")[0]; const name = local.replace(/[0-9]/g, "").split(/[._-]+/).filter(Boolean).map((w) => w[0].toUpperCase() + w.slice(1)).join(" ") || "Estudiante"; loginAs(name, R.emailTmp); }
      else $("#codeE").classList.remove("hidden");
    },
    logout() { stopAll(); store.clear(); location.href = location.pathname; },

    // navegación
    menu() { openDrawer(); },
    go(d) { closeDrawer(); if (d.to === "home") closeScreen(); else showScreen(d.to); },
    "drawer-go"(d) { closeDrawer(); if (d.to === "home") closeScreen(); else showScreen(d.to); },
    "close-screen"() { if (R.screen === "wallet" || R.screen === "safety") showScreen("account"); else closeScreen(); },
    "back-idle"() { stopAll(); R.phase = "idle"; R.route = null; R.dest = null; renderAll(); },
    tab(d) { R.tabSched = d.t === "sched"; renderScreen(); },
    wallet() { closeDrawer(); showScreen("wallet"); },
    safety() { closeDrawer(); showScreen("safety"); },
    help() { closeDrawer(); openModal(`<h2>Ayuda</h2><div class="card-row"><b>¿Quién puede usar Wheels?</b><div class="sm muted">Solo estudiantes, egresados y personal con correo de la Universidad Externado.</div></div><div class="card-row"><b>¿Cómo se paga?</b><div class="sm muted">Efectivo, Nequi o tarjeta (en esta demo es simulado). Compartir cuesta menos.</div></div><div class="card-row"><b>¿Es real esta app?</b><div class="sm muted">Es una demo: los conductores y los viajes son simulados y no hay servidor.</div></div><button class="btn" data-act="close-modal">Entendido</button>`); },
    "close-modal"() { closeModal(); },
    "save-contact"() { S.contact = ($("#contactIn") || {}).value || ""; save("contact"); toast("Contacto guardado en este dispositivo"); },

    // búsqueda
    "open-search"(d) { R.sField = d.f || "dest"; R.sQ = ""; R.sResults = []; showScreen("search"); },
    "close-search"() { closeScreen(); },
    "pick-sug"(d) { const list = (S.recents.length ? S.recents.slice(0, 3) : [D.places[0], D.places[3], D.places[13]]); choose(list[+d.i], "dest"); },
    "pick-res"(d) { choose(R.sList[+d.i], R.sField); },
    "use-me"() { useMyLocation(); },
    "to-campus"() { R.dest = D.pickups[0]; if (WM.haversine(R.pickup, R.dest) < 200) { R.pickup = null; R.sField = "pickup"; toast("Elige desde dónde sales hacia el campus"); showScreen("search"); } else goOptions(); },

    // pedir viaje
    opt(d) { R.opt = d.id; renderSheet(); requestAnimationFrame(() => fitMap()); },
    "pay-modal"() { openModal(`<h2>Método de pago</h2>${["cash", "nequi", "card", "wallet"].map((id) => `<button class="payrow" data-act="set-pay-modal" data-id="${id}">${ic(payIcon(id))}<span class="grow b">${payLabel(id)}${id === "wallet" ? " · " + cop(S.wallet.balance) : ""}</span>${R.pay === id ? ic("check") : ""}</button>`).join("")}`); },
    "set-pay-modal"(d) { R.pay = d.id; closeModal(); renderSheet(); },
    "set-pay"(d) { R.pay = d.id; renderScreen(); toast("Pago: " + payLabel(R.pay)); },
    topup() { S.wallet.balance += 20000; save("wallet"); renderScreen(); toast("Recargaste $ 20.000 (demo)"); },
    "promo-modal"() { openModal(`<h2>Código promocional</h2><div class="field"><input id="promoM" placeholder="WHEELS50" style="text-transform:uppercase"></div><div class="err-t hidden" id="promoE">Ese código no existe.</div><button class="btn" data-act="apply-promo-modal" style="margin-top:12px">Aplicar</button>`); },
    "apply-promo-modal"() { const c = ($("#promoM").value || "").trim().toUpperCase(); if (D.promos[c]) { S.wallet.promo = c; save("wallet"); closeModal(); renderSheet(); toast("Promo aplicada: " + D.promos[c].label); } else $("#promoE").classList.remove("hidden"); },
    "apply-promo-screen"() { const c = ($("#promoIn").value || "").trim().toUpperCase(); if (!c) { S.wallet.promo = null; save("wallet"); toast("Promo quitada"); } else if (D.promos[c]) { S.wallet.promo = c; save("wallet"); toast("Promo aplicada: " + D.promos[c].label); } else toast("Ese código no existe"); },
    confirm() { startSearching(); },
    "cancel-search"() { stopAll(); R.phase = "options"; R.trip = null; renderAll(); },
    "cancel-trip"() { openModal(`<h2>¿Por qué cancelas?</h2><p class="sub">Cancelar es gratis durante el primer minuto.</p>${["Cambié de planes", "El conductor está muy lejos", "Pedí por error", "Otro motivo"].map((r) => `<button class="payrow" data-act="do-cancel" data-why="${r}"><span class="grow b">${r}</span>${ic("chevron")}</button>`).join("")}<button class="btn soft" data-act="close-modal" style="margin-top:8px">Volver</button>`); },
    "do-cancel"() { closeModal(); stopAll(); R.phase = "idle"; R.trip = null; R.route = null; R.dest = null; R.approach = null; toast("Viaje cancelado"); renderAll(); },
    board() { startTrip(); },
    star(d) { R.rating = +d.n; renderScreen(); },
    tag(d) { R.tags = R.tags.includes(d.t) ? R.tags.filter((x) => x !== d.t) : R.tags.concat(d.t); renderScreen(); },
    tip(d) { R.tip = +d.v; renderScreen(); },
    "rate-submit"() { finishRating(); },

    // programar
    schedule() {
      if (!R.dest) { toast("Primero elige tu destino"); R.sField = "dest"; showScreen("search"); return; }
      const t = new Date(Date.now() + 864e5); t.setHours(7, 0, 0, 0); const iso = new Date(t.getTime() - t.getTimezoneOffset() * 6e4).toISOString().slice(0, 16);
      openModal(`<h2>Programar viaje</h2><p class="sub">${esc(R.pickup.name)} → ${esc(R.dest.name)}</p><div class="field"><input id="schWhen" type="datetime-local" value="${iso}"></div>
        <h3>Repetir</h3><div class="chips"><button class="chip on" data-act="rep" data-v="none">No repetir</button><button class="chip" data-act="rep" data-v="weekdays">Lunes a viernes</button><button class="chip" data-act="rep" data-v="weekly">Cada semana</button></div>
        <button class="btn accent" data-act="sched-save" style="margin-top:12px">Guardar</button>`);
      R.schRep = "none";
    },
    rep(d, el) { R.schRep = d.v; modalEl.querySelectorAll("[data-act=rep]").forEach((b) => b.classList.toggle("on", b === el)); },
    "sched-save"() { const v = $("#schWhen").value; if (!v) return; S.scheduled.push({ id: uid(), when: new Date(v).toISOString(), from: R.pickup.name, to: R.dest.name, pickup: R.pickup, dest: R.dest, repeat: R.schRep }); save("scheduled"); closeModal(); toast("Viaje programado"); },
    "del-sched"(d) { S.scheduled.splice(+d.i, 1); save("scheduled"); renderScreen(); },
    "trip-detail"(d) { const t = S.history[+d.i]; openModal(`<h2>${esc(t.to)}</h2><p class="sub">${new Date(t.date).toLocaleString("es-CO", { dateStyle: "long", timeStyle: "short" })}</p><div class="kv"><span>Desde</span><span>${esc(t.from)}</span></div><div class="kv"><span>Tipo</span><span>${t.opt === "pool" ? "Compartido" : "Directo"}</span></div><div class="kv"><span>Conductor</span><span>${esc(t.driver)}</span></div><div class="kv"><span>Distancia</span><span>${t.km} km · ${t.min} min</span></div><div class="kv tot"><span>Total</span><span>${cop(t.price)}</span></div><button class="btn" data-act="repeat" data-i="${d.i}" style="margin-top:10px">Repetir este viaje</button>`); },
    repeat(d) { const t = S.history[+d.i]; const place = D.pickups.concat(D.places).find((p) => p.name === t.to) || D.places[0]; closeModal(); closeScreen(); R.dest = place; R.pickup = D.pickups.concat(D.places).find((p) => p.name === t.from) || D.pickups[0]; goOptions(); },

    // durante el viaje
    chat() { openChat(); },
    "chat-send"() { const i = $("#chatIn"); if (!i.value.trim()) return; sendChat(i.value.trim()); },
    "chat-quick"(d) { sendChat(d.q); },
    call() { toast("Llamada simulada (en la versión real marca al conductor)"); },
    share() { shareTrip(); },
    sos() { openModal(`<h2 style="color:var(--danger)">Ayuda de emergencia</h2><p class="sub">Si estás en peligro, llama ya a la línea de emergencias.</p><a class="btn danger" href="tel:123" style="text-decoration:none">${ic("phone")}Llamar al 123</a><button class="btn soft" data-act="alert-contact" style="margin-top:8px">Avisar a mi contacto de confianza</button><button class="btn soft" data-act="share" style="margin-top:8px">${ic("share")}Compartir mi viaje</button><button class="btn ghost" data-act="close-modal" style="margin-top:8px">Cerrar</button><p class="sm muted" style="margin-top:10px">Demo: en la versión real se enviaría tu ubicación en vivo.</p>`); },
    "alert-contact"() { closeModal(); toast(S.contact ? "Aviso enviado a " + S.contact + " (simulado)" : "Guarda un contacto en Cuenta → Seguridad"); },

    // modo conductor
    "to-driver"() { setMode("driver"); },
    "toggle-mode"() { closeDrawer(); setMode(R.mode === "rider" ? "driver" : "rider"); },
    "go-online"() { goOnline(); },
    "go-offline"() { goOffline(); },
    accept() { driverAccept(); },
    decline() { stopAll(); R.drv.req = null; R.phase = "d_on"; renderAll(); later(incomingRequest, T(rnd(4000, 6000))); },
    "d-pin"() { const pin = R.drv.req.pin; openModal(`<h2>PIN del pasajero</h2><p class="sub">Pídele el PIN a ${esc(R.drv.req.rider.name)}. (Demo: ya está escrito.)</p><div class="codebox">${String(pin).split("").map((n) => `<input value="${n}" readonly>`).join("")}</div><button class="btn accent" data-act="d-start">Iniciar viaje</button>`); },
    "d-start"() { closeModal(); driverStartTrip(); },
    "d-next"() { R.phase = "d_on"; R.drv.req = null; renderAll(); later(incomingRequest, T(rnd(3500, 6000))); }
  };

  // ===================================================================================
  // 6. FLUJO DEL PASAJERO
  // ===================================================================================
  function loginAs(name, email) {
    S.user = { name, email }; save("user"); R.screen = null; screenEl.className = "screen hidden"; screenEl.innerHTML = ""; renderAll(); toast("¡Hola, " + name.split(" ")[0] + "!");
  }

  function addRecent(p) { const k = nrm(p.name); S.recents = [{ id: p.id, name: p.name, addr: p.addr, lat: p.lat, lng: p.lng }].concat(S.recents.filter((x) => nrm(x.name) !== k)).slice(0, 6); save("recents"); }

  async function choose(p, field) {
    if (!p) return;
    if (p.resolve) { try { const pos = await p.resolve(); p = { ...p, ...pos }; } catch (e) { toast("No pude ubicar ese lugar"); return; } }
    if (p.lat == null) return;
    if (field === "pickup") { R.pickup = p; if (!R.dest) { R.sField = "dest"; R.sQ = ""; R.sResults = []; renderScreen(); return; } }
    else { R.dest = p; addRecent(p); }
    if (R.pickup && R.dest) {
      if (WM.haversine(R.pickup, R.dest) < 150) { toast("El destino debe ser distinto a la recogida"); R.dest = null; R.sField = "dest"; R.sQ = ""; renderScreen(); return; }
      R.screen = null; screenEl.className = "screen hidden"; screenEl.innerHTML = ""; goOptions();
    } else { R.sField = R.pickup ? "dest" : "pickup"; R.sQ = ""; R.sResults = []; renderScreen(); }
  }

  function useMyLocation() {
    if (!navigator.geolocation) { toast("Tu navegador no permite ubicación"); return; }
    navigator.geolocation.getCurrentPosition((pos) => {
      const p = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      if (WM.haversine(p, WM.DEF) > 60000) { toast("Estás lejos de Bogotá; usaré el campus para la demo"); return; }
      R.userPos = p; choose({ id: "me", name: "Mi ubicación", addr: "Según tu dispositivo", ...p }, "pickup");
    }, () => toast("No pude obtener tu ubicación"), { timeout: 8000, maximumAge: 60000 });
  }

  async function goOptions() {
    stopAll(); R.phase = "options"; R.route = null; R.approachMin = Math.round(rnd(3, 6)); renderAll();
    const r = await WM.route(R.pickup, R.dest);
    if (R.phase !== "options") return;
    R.route = r; renderAll();
  }

  function startSearching() {
    const t = { id: uid(), opt: R.opt };
    const base = priceOf(R.route, R.opt); t.price = base; t.direct = direct(R.route); t.promo = promoDiscount(base); t.route = R.route;
    R.trip = t; R.phase = "searching"; R.chat = []; R.rating = 0; R.tags = []; R.tip = 0; renderAll();
    const bar = $("#sbar"); let w = 0; const iv = setInterval(() => { w = Math.min(95, w + 100 / (T(4200) / 200)); const b = $("#sbar"); if (b) b.style.width = w + "%"; }, 200); R.timers.push(iv);
    later(() => { clearInterval(iv); assignDriver(); }, T(4500));
  }

  async function assignDriver() {
    if (R.phase !== "searching") return;
    const t = R.trip; t.driver = pick(D.drivers); t.pin = String(Math.floor(1000 + Math.random() * 9000));
    t.co = t.opt === "pool" ? D.riders.slice().sort(() => Math.random() - 0.5).slice(0, Math.random() < 0.5 ? 1 : 2) : [];
    const start = nearby(R.pickup, rnd(700, 1100)); R.carPos = start;
    R.approach = await WM.route(start, R.pickup);
    if (R.phase !== "searching") return;
    R.eta = Math.min(7, Math.max(2, Math.round(R.approach.seconds / 60)));
    R.phase = "assigned"; renderAll(); toast("¡Encontramos a " + t.driver.name + "!");
    const ms = T(13000), eta0 = R.eta;
    animate(R.approach.path, ms, (pos, f) => { R.carPos = pos; WM.marker("car", pos, "car"); R.eta = Math.max(1, Math.ceil(eta0 * (1 - f))); const e = $("#etaTxt"); if (e) e.textContent = "Llega en " + R.eta + " min"; const b = $("#etaBar"); if (b) b.style.width = f * 100 + "%"; },
      () => { R.phase = "arrived"; R.carPos = R.pickup; renderAll(); toast("Tu conductor llegó"); });
  }

  function startTrip() {
    closeModal(); R.phase = "intrip"; R.carPos = R.pickup; renderAll();
    animate(R.route.path, T(18000), (pos, f) => { R.carPos = pos; WM.marker("car", pos, "car"); const b = $("#tripBar"); if (b) b.style.width = f * 100 + "%"; const el = $("#tripTxt"); if (el) el.textContent = "Llegas a las " + hhmm(new Date(Date.now() + R.route.seconds * 1000 * (1 - f))); },
      () => { R.phase = "done"; R.rating = 0; R.tags = []; R.tip = 0; showScreen("rating"); });
  }

  function finishRating() {
    const t = R.trip, total = t.price - t.promo + R.tip;
    S.history.unshift({ id: t.id, date: new Date().toISOString(), from: R.pickup.name, to: R.dest.name, price: total, opt: t.opt, driver: t.driver.name, rating: R.rating, km: +(R.route.meters / 1000).toFixed(1), min: Math.round(R.route.seconds / 60) }); save("history");
    if (t.promo && S.wallet.promo === "WHEELS50") { S.wallet.firstUsed = true; }
    if (R.pay === "wallet") S.wallet.balance = Math.max(0, S.wallet.balance - total); save("wallet");
    R.phase = "idle"; R.trip = null; R.route = null; R.dest = null; R.approach = null; R.carPos = null;
    closeScreen(); toast("¡Gracias por calificar!");
  }

  // chat y compartir ------------------------------------------------------------------
  function openChat() {
    const who = R.mode === "rider" ? (R.trip && R.trip.driver ? R.trip.driver.name : "Conductor") : (R.drv.req ? R.drv.req.rider.name : "Pasajero");
    R.lockModal = false;
    openModal(`<h2>${esc(who)}</h2><div class="chat" id="chatBox"></div><div class="chips">${["Ya voy", "Estoy en la entrada", "Gracias", "¿Cuánto falta?"].map((q) => `<button class="chip" data-act="chat-quick" data-q="${q}">${q}</button>`).join("")}</div><div class="row" style="margin-top:8px"><div class="field grow"><input id="chatIn" placeholder="Escribe un mensaje"></div><button class="btn sm accent" data-act="chat-send">Enviar</button></div><button class="btn soft" data-act="close-modal" style="margin-top:10px">Cerrar</button>`);
    paintChat();
  }
  function paintChat() { const b = $("#chatBox"); if (!b) return; b.innerHTML = R.chat.length ? R.chat.map((m) => `<div class="msg ${m.me ? "me" : "them"}">${esc(m.t)}</div>`).join("") : '<div class="empty sm">Escríbele a tu contraparte. Es una conversación simulada.</div>'; b.scrollTop = 9999; }
  function sendChat(text) {
    R.chat.push({ me: true, t: text }); paintChat(); const i = $("#chatIn"); if (i) i.value = "";
    later(() => { R.chat.push({ me: false, t: pick(D.replies) }); paintChat(); }, T(1400));
  }
  async function shareTrip() {
    const d = R.trip && R.trip.driver;
    const text = d ? `Voy en un viaje de wheels hacia ${R.dest.name} con ${d.name} (${d.color} ${d.car}, placa ${d.plate}).` : "Estoy en un viaje de wheels.";
    try { if (navigator.share) { await navigator.share({ title: "Mi viaje en wheels", text }); closeModal(); return; } } catch (e) { if (e && e.name === "AbortError") return; }
    try { await navigator.clipboard.writeText(text); toast("Copié los datos de tu viaje para que los compartas"); } catch (e) { toast(text); }
    closeModal();
  }

  // ===================================================================================
  // 7. FLUJO DEL CONDUCTOR (simulado)
  // ===================================================================================
  function setMode(m) {
    if (m === "driver" && R.phase !== "idle") { toast("Termina tu viaje antes de cambiar de modo"); return; }
    if (R.mode === "driver" && R.drv.online && !["d_off", "d_on"].includes(R.phase)) { toast("Termina el viaje antes de cambiar de modo"); return; }
    stopAll(); R.mode = m; R.screen = null; screenEl.className = "screen hidden"; screenEl.innerHTML = "";
    if (m === "driver") { R.phase = "d_off"; R.drv.online = false; R.carPos = D.pickups[0]; } else { R.phase = "idle"; R.carPos = null; }
    renderAll(); toast(m === "driver" ? "Modo conductor (demo)" : "Modo pasajero");
  }
  function goOnline() { R.drv.online = true; R.phase = "d_on"; renderAll(); later(incomingRequest, T(rnd(4500, 7000))); }
  function goOffline() { stopAll(); R.drv.online = false; R.drv.req = null; R.phase = "d_off"; renderAll(); }

  async function incomingRequest() {
    if (!R.drv.online || R.phase !== "d_on") return;
    const rider = pick(D.riders), from = pick(D.pickups), to = pick(D.places);
    const route = await WM.route(from, to);
    if (!R.drv.online || R.phase !== "d_on") return;
    const fare = priceOf(route, "pool"), earn = R2(fare * (1 - CFG.PRICING.serviceFee));
    R.drv.req = { rider, from, to, route, fare, earn, left: 15, pin: String(Math.floor(1000 + Math.random() * 9000)) };
    R.drv.from = from; R.drv.to = to; R.drv.route = route; R.phase = "d_req"; renderAll(); toast("¡Nueva solicitud!");
    const iv = setInterval(() => {
      if (R.phase !== "d_req") { clearInterval(iv); return; }
      R.drv.req.left--; const c = $("#cd"); if (c) c.textContent = R.drv.req.left;
      if (R.drv.req.left <= 0) { clearInterval(iv); ACT.decline(); toast("Solicitud expirada"); }
    }, T(1000)); R.timers.push(iv);
  }

  async function driverAccept() {
    stopAll(); const q = R.drv.req; R.carPos = nearby(q.from, rnd(700, 1100));
    R.drv.approach = await WM.route(R.carPos, q.from);
    R.eta = Math.min(7, Math.max(2, Math.round(R.drv.approach.seconds / 60))); R.phase = "d_pick"; renderAll();
    const eta0 = R.eta;
    animate(R.drv.approach.path, T(11000), (pos, f) => { R.carPos = pos; WM.marker("car", pos, "car"); R.eta = Math.max(1, Math.ceil(eta0 * (1 - f))); const e = $("#etaTxt"); if (e) e.textContent = "Recoge a " + q.rider.name + " en " + R.eta + " min"; const b = $("#etaBar"); if (b) b.style.width = f * 100 + "%"; },
      () => { R.phase = "d_wait"; R.carPos = q.from; renderAll(); toast("Llegaste al punto de encuentro"); });
  }
  function driverStartTrip() {
    const q = R.drv.req; R.phase = "d_trip"; R.carPos = q.from; renderAll();
    animate(q.route.path, T(18000), (pos, f) => { R.carPos = pos; WM.marker("car", pos, "car"); const b = $("#tripBar"); if (b) b.style.width = f * 100 + "%"; },
      () => { S.drv.today += q.earn; S.drv.trips += 1; save("drv"); R.phase = "d_done"; renderAll(); });
  }

  // ===================================================================================
  // 8. INICIO
  // ===================================================================================
  function bindCode() {
    const ins = [...screenEl.querySelectorAll(".codebox input")];
    ins.forEach((el, i) => {
      el.addEventListener("input", () => { el.value = el.value.replace(/\D/g, ""); if (el.value && ins[i + 1]) ins[i + 1].focus(); if (ins.every((x) => x.value)) ACT["code-submit"](); });
      el.addEventListener("keydown", (e) => { if (e.key === "Backspace" && !el.value && ins[i - 1]) ins[i - 1].focus(); });
    });
    if (ins[0]) ins[0].focus();
  }

  async function init() {
    WM.onFallback = (m) => { toast(m + " Usando el mapa de respaldo."); drawMap(); };
    await WM.init($("#map"), { forceLeaflet: Q.get("map") === "osm" });
    // pruebas: ?guest=1 entra directo; ?driver=1 abre el modo conductor
    if (!S.user && Q.get("guest")) loginAs("Estudiante Demo", "demo@est." + CFG.EMAIL_DOMAIN_HINT);
    if (!S.user) showScreen("welcome"); else renderAll();
    if (Q.get("driver") && S.user) setMode("driver");
    window.__wheels = { R, S, ACT, WM, goOptions };   // útil para depurar en la consola
  }
  init();
})();
