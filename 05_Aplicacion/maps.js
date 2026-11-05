// =====================================================================================
// MAPAS: un solo "adaptador" con dos motores
//   · Google Maps (si hay clave en config.js)  · Leaflet + OpenStreetMap (respaldo)
// El resto de la app solo habla con  WheelsMap.*  y no sabe cuál motor está debajo.
// =====================================================================================
(function () {
  const CFG = window.WHEELS_CONFIG || {};
  const DEF = { lat: 4.5951, lng: -74.0680 };

  // ---------- utilidades geográficas ----------
  const rad = (d) => (d * Math.PI) / 180;
  function haversine(a, b) {
    const R = 6371000, dLat = rad(b.lat - a.lat), dLng = rad(b.lng - a.lng);
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  }
  function straightRoute(a, b) {
    const n = 40, path = [];
    for (let i = 0; i <= n; i++) path.push({ lat: a.lat + ((b.lat - a.lat) * i) / n, lng: a.lng + ((b.lng - a.lng) * i) / n });
    const meters = Math.round(haversine(a, b) * 1.3);
    return { path, meters, seconds: Math.round(meters / 6.1), source: "linea" };   // ~22 km/h urbano
  }
  async function osrmRoute(a, b) {
    const ctl = new AbortController(); const to = setTimeout(() => ctl.abort(), 7000);
    try {
      const url = `https://router.project-osrm.org/route/v1/driving/${a.lng},${a.lat};${b.lng},${b.lat}?overview=full&geometries=geojson`;
      const r = await fetch(url, { signal: ctl.signal }); const j = await r.json();
      const rt = j.routes && j.routes[0]; if (!rt) throw new Error("sin ruta");
      // El OSRM público es rápido (sin tráfico): se ajusta a un promedio urbano más realista.
      const seconds = Math.max(Math.round(rt.duration * 1.6), Math.round(rt.distance / 7));
      return { path: rt.geometry.coordinates.map(([lng, lat]) => ({ lat, lng })), meters: Math.round(rt.distance), seconds, source: "osrm" };
    } catch (e) { return straightRoute(a, b); } finally { clearTimeout(to); }
  }
  const norm = (s) => (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

  // ---------- HTML/SVG de los marcadores (idénticos en ambos motores) ----------
  const MK = {
    pickup: { w: 26, h: 26, svg: '<circle cx="13" cy="13" r="11" fill="#fff" stroke="#000" stroke-width="2"/><circle cx="13" cy="13" r="5" fill="#000"/>' },
    dest: { w: 26, h: 26, svg: '<rect x="2" y="2" width="22" height="22" rx="3" fill="#fff" stroke="#000" stroke-width="2"/><rect x="8" y="8" width="10" height="10" fill="#000"/>' },
    car: { w: 40, h: 40, svg: '<circle cx="20" cy="20" r="17" fill="#000" stroke="#19D3B6" stroke-width="3"/><path d="M11 22h18M12 22v3M28 22v3M9.5 20l2-6h17l2 6v5h-21z" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>' },
    me: { w: 24, h: 24, svg: '<circle cx="12" cy="12" r="11" fill="rgba(34,111,255,.22)"/><circle cx="12" cy="12" r="6" fill="#226FFF" stroke="#fff" stroke-width="2.5"/>' },
    rider: { w: 32, h: 32, svg: '<circle cx="16" cy="16" r="14" fill="#19D3B6" stroke="#000" stroke-width="2"/><circle cx="16" cy="12.5" r="4" fill="#000"/><path d="M8.5 24c1-4 4-5.5 7.5-5.5s6.5 1.5 7.5 5.5" fill="#000"/>' }
  };
  const mkSvg = (t) => { const m = MK[t] || MK.pickup; return `<svg xmlns="http://www.w3.org/2000/svg" width="${m.w}" height="${m.h}" viewBox="0 0 ${m.w} ${m.h}">${m.svg}</svg>`; };
  const mkUrl = (t) => "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(mkSvg(t));

  // =====================================================================================
  // MOTOR LEAFLET
  // =====================================================================================
  function makeLeaflet(el) {
    const map = L.map(el, { zoomControl: false, attributionControl: true }).setView([DEF.lat, DEF.lng], 15);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19, attribution: "© OpenStreetMap"
    }).addTo(map);
    const markers = {}; let line = null, halo = null;
    const icon = (t) => { const m = MK[t] || MK.pickup; return L.divIcon({ className: "wl-mk", html: mkSvg(t), iconSize: [m.w, m.h], iconAnchor: [m.w / 2, m.h / 2] }); };
    return {
      kind: "leaflet",
      setView(ll, z) { map.setView([ll.lat, ll.lng], z || map.getZoom(), { animate: true }); },
      marker(id, ll, type) {
        if (!ll) { if (markers[id]) { map.removeLayer(markers[id]); delete markers[id]; } return; }
        if (markers[id]) { markers[id].setLatLng([ll.lat, ll.lng]); if (markers[id]._t !== type) { markers[id].setIcon(icon(type)); markers[id]._t = type; } }
        else { const m = L.marker([ll.lat, ll.lng], { icon: icon(type), interactive: false, zIndexOffset: type === "car" ? 1000 : 0 }).addTo(map); m._t = type; markers[id] = m; }
      },
      line(path) {
        if (line) { map.removeLayer(line); line = null; } if (halo) { map.removeLayer(halo); halo = null; }
        if (!path || !path.length) return;
        const pts = path.map((p) => [p.lat, p.lng]);
        halo = L.polyline(pts, { color: "#fff", weight: 9, opacity: 0.9, lineCap: "round", lineJoin: "round" }).addTo(map);
        line = L.polyline(pts, { color: "#000", weight: 5, opacity: 1, lineCap: "round", lineJoin: "round" }).addTo(map);
      },
      fit(points, pad) {
        if (!points.length) return;
        if (points.length === 1) { map.setView([points[0].lat, points[0].lng], 16, { animate: true }); return; }
        map.fitBounds(L.latLngBounds(points.map((p) => [p.lat, p.lng])), { paddingTopLeft: [40, pad.top], paddingBottomRight: [40, pad.bottom], animate: true, maxZoom: 17 });
      },
      resize() { map.invalidateSize(); },
      async route(a, b) { return osrmRoute(a, b); },
      async search(q, near) {
        // Nominatim (OpenStreetMap): buscador abierto, solo para la demo
        try {
          const u = `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=5&countrycodes=co&accept-language=es&viewbox=-74.30,4.85,-73.95,4.45&bounded=1&q=${encodeURIComponent(q)}`;
          const r = await fetch(u); const j = await r.json();
          return j.map((x) => ({ id: "n" + x.place_id, name: (x.name || x.display_name.split(",")[0]), addr: x.display_name.split(",").slice(1, 3).join(",").trim(), lat: +x.lat, lng: +x.lon }));
        } catch (e) { return []; }
      },
      destroy() { map.remove(); }
    };
  }

  // =====================================================================================
  // MOTOR GOOGLE MAPS
  // =====================================================================================
  function loadGoogle(key) {
    return new Promise((resolve, reject) => {
      if (window.google && window.google.maps) return resolve();
      window.__gmReady = () => resolve();
      const s = document.createElement("script");
      s.async = true; s.onerror = () => reject(new Error("No cargó Google Maps"));
      s.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&libraries=places,geometry&v=weekly&language=es&region=CO&callback=__gmReady`;
      document.head.appendChild(s);
      setTimeout(() => reject(new Error("Google Maps tardó demasiado")), 12000);
    });
  }
  const ll = (p) => ({ lat: typeof p.lat === "function" ? p.lat() : p.lat, lng: typeof p.lng === "function" ? p.lng() : p.lng });
  const GSTYLE = [
    { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] },
    { featureType: "transit", stylers: [{ visibility: "off" }] },
    { featureType: "road", elementType: "labels.icon", stylers: [{ visibility: "off" }] },
    { elementType: "geometry", stylers: [{ saturation: -60 }, { lightness: 8 }] }
  ];
  async function makeGoogle(el, key) {
    await loadGoogle(key);
    const gm = google.maps;
    const map = new gm.Map(el, { center: DEF, zoom: 15, disableDefaultUI: true, clickableIcons: false, gestureHandling: "greedy", styles: GSTYLE });
    const markers = {}; let line = null, halo = null;
    const gicon = (t) => { const m = MK[t] || MK.pickup; return { url: mkUrl(t), scaledSize: new gm.Size(m.w, m.h), anchor: new gm.Point(m.w / 2, m.h / 2) }; };
    return {
      kind: "google",
      setView(p, z) { map.panTo(p); if (z) map.setZoom(z); },
      marker(id, p, type) {
        if (!p) { if (markers[id]) { markers[id].setMap(null); delete markers[id]; } return; }
        if (markers[id]) { markers[id].setPosition(p); if (markers[id]._t !== type) { markers[id].setIcon(gicon(type)); markers[id]._t = type; } }
        else { const m = new gm.Marker({ position: p, map, icon: gicon(type), clickable: false, zIndex: type === "car" ? 1000 : 1 }); m._t = type; markers[id] = m; }
      },
      line(path) {
        if (line) { line.setMap(null); line = null; } if (halo) { halo.setMap(null); halo = null; }
        if (!path || !path.length) return;
        halo = new gm.Polyline({ path, map, strokeColor: "#fff", strokeOpacity: 0.9, strokeWeight: 9, zIndex: 1 });
        line = new gm.Polyline({ path, map, strokeColor: "#000", strokeOpacity: 1, strokeWeight: 5, zIndex: 2 });
      },
      fit(points, pad) {
        if (!points.length) return;
        if (points.length === 1) { map.setCenter(points[0]); map.setZoom(16); return; }
        const b = new gm.LatLngBounds(); points.forEach((p) => b.extend(p));
        map.fitBounds(b, { top: pad.top, bottom: pad.bottom, left: 40, right: 40 });
      },
      resize() { gm.event.trigger(map, "resize"); },
      async route(a, b) {
        // 1) Routes API (nueva)  2) Directions (clásica)  3) OSRM  4) línea recta
        try {
          const { Route } = await gm.importLibrary("routes");
          const { routes } = await Route.computeRoutes({ origin: a, destination: b, travelMode: "DRIVING", fields: ["path", "distanceMeters", "durationMillis"] });
          const r = routes && routes[0];
          if (r && r.path && r.path.length) return { path: r.path.map(ll), meters: r.distanceMeters, seconds: Math.round(r.durationMillis / 1000), source: "google" };
        } catch (e) { console.warn("[Wheels] Routes API no disponible:", e && e.message ? e.message : e); }
        try {
          const res = await new gm.DirectionsService().route({ origin: a, destination: b, travelMode: "DRIVING" });
          const r = res.routes[0], leg = r.legs[0];
          return { path: r.overview_path.map(ll), meters: leg.distance.value, seconds: leg.duration.value, source: "google" };
        } catch (e) { console.warn("[Wheels] Directions no disponible:", e && e.message ? e.message : e); }
        return osrmRoute(a, b);
      },
      async search(q, near) {
        const c = near || DEF;
        try {   // Places API (nueva)
          const { AutocompleteSuggestion } = await gm.importLibrary("places");
          const { suggestions } = await AutocompleteSuggestion.fetchAutocompleteSuggestions({
            input: q, includedRegionCodes: ["co"], language: "es", locationBias: { center: c, radius: 30000 }
          });
          return suggestions.filter((s) => s.placePrediction).slice(0, 6).map((s) => {
            const pp = s.placePrediction;
            return { id: pp.placeId, name: pp.mainText ? pp.mainText.text : pp.text.text, addr: pp.secondaryText ? pp.secondaryText.text : "",
              resolve: async () => { const pl = pp.toPlace(); await pl.fetchFields({ fields: ["location", "displayName", "formattedAddress"] }); return { lat: pl.location.lat(), lng: pl.location.lng() }; } };
          });
        } catch (e) { console.warn("[Wheels] Places (nueva) no disponible:", e && e.message ? e.message : e); }
        try {   // Places clásica
          const svc = new gm.places.AutocompleteService();
          const preds = await new Promise((res) => svc.getPlacePredictions({ input: q, componentRestrictions: { country: "co" }, location: new gm.LatLng(c.lat, c.lng), radius: 30000 }, (p) => res(p || [])));
          return preds.slice(0, 6).map((p) => ({ id: p.place_id, name: p.structured_formatting.main_text, addr: p.structured_formatting.secondary_text || "",
            resolve: async () => { const r = await new gm.Geocoder().geocode({ placeId: p.place_id }); return ll(r.results[0].geometry.location); } }));
        } catch (e) { console.warn("[Wheels] Places (clásica) no disponible:", e && e.message ? e.message : e); return []; }
      },
      destroy() { Object.values(markers).forEach((m) => m.setMap(null)); if (line) line.setMap(null); if (halo) halo.setMap(null); el.innerHTML = ""; }
    };
  }

  // =====================================================================================
  // FACHADA PÚBLICA
  // =====================================================================================
  const WheelsMap = {
    impl: null, kind: "ninguno", onFallback: null, DEF, haversine, norm, mkSvg,
    async init(el, opts) {
      opts = opts || {};
      const key = (CFG.GOOGLE_MAPS_API_KEY || "").trim();
      window.gm_authFailure = () => {               // Google avisa cuando la clave es inválida o no tiene permisos
        console.warn("[Wheels] Google Maps rechazó la clave. Se usa el mapa de respaldo.");
        WheelsMap.useFallback("La clave de Google Maps no es válida o le faltan permisos.");
      };
      if (key && !opts.forceLeaflet) {
        try { this.impl = await makeGoogle(el, key); this.kind = "google"; return this.impl; }
        catch (e) { console.warn("[Wheels] Google Maps no cargó:", e.message); }
      }
      this.impl = makeLeaflet(el); this.kind = "leaflet"; return this.impl;
    },
    useFallback(motivo) {
      const el = document.getElementById("map"); if (!el) return;
      try { if (this.impl && this.impl.destroy) this.impl.destroy(); } catch (e) {}
      el.innerHTML = ""; el.className = "";
      this.impl = makeLeaflet(el); this.kind = "leaflet";
      if (this.onFallback) this.onFallback(motivo);
    },
    // atajos
    marker(id, p, t) { this.impl && this.impl.marker(id, p, t); },
    line(path) { this.impl && this.impl.line(path); },
    fit(pts, pad) { this.impl && this.impl.fit(pts, pad || { top: 90, bottom: 300 }); },
    view(p, z) { this.impl && this.impl.setView(p, z); },
    resize() { this.impl && this.impl.resize(); },
    route(a, b) { return this.impl ? this.impl.route(a, b) : Promise.resolve(straightRoute(a, b)); },
    search(q, near) { return this.impl ? this.impl.search(q, near) : Promise.resolve([]); },
    straightRoute
  };
  window.WheelsMap = WheelsMap;
})();
