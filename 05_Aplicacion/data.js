// =====================================================================================
// DATOS DE LA DEMO (todo es ficticio o aproximado; no hay base de datos)
// =====================================================================================
window.WHEELS_DATA = {
  // Puntos de recogida del campus (coordenadas aproximadas para la demo)
  campus: { name: "Universidad Externado de Colombia", short: "Externado", lat: 4.5951, lng: -74.0680 },
  pickups: [
    { id: "g1", name: "Portería principal", addr: "Campus · Universidad Externado", lat: 4.5951, lng: -74.0680, type: "campus" },
    { id: "g2", name: "Portería Carrera 1 Este", addr: "Campus · Universidad Externado", lat: 4.5956, lng: -74.0672, type: "campus" }
  ],
  // Lugares frecuentes (coordenadas aproximadas)
  places: [
    { id: "zt",  name: "Zona T", addr: "Chapinero · Bogotá", lat: 4.6667, lng: -74.0535 },
    { id: "p93", name: "Parque de la 93", addr: "Chapinero · Bogotá", lat: 4.6764, lng: -74.0483 },
    { id: "and", name: "Centro Andino", addr: "Chapinero · Bogotá", lat: 4.6663, lng: -74.0525 },
    { id: "uni", name: "Unicentro", addr: "Usaquén · Bogotá", lat: 4.7013, lng: -74.0415 },
    { id: "usa", name: "Parque de Usaquén", addr: "Usaquén · Bogotá", lat: 4.6945, lng: -74.0307 },
    { id: "chp", name: "Chapinero (Calle 63)", addr: "Chapinero · Bogotá", lat: 4.6490, lng: -74.0640 },
    { id: "uan", name: "Universidad de los Andes", addr: "Candelaria · Bogotá", lat: 4.6014, lng: -74.0661 },
    { id: "jav", name: "Pontificia Universidad Javeriana", addr: "Chapinero · Bogotá", lat: 4.6281, lng: -74.0647 },
    { id: "unal", name: "Universidad Nacional de Colombia", addr: "Teusaquillo · Bogotá", lat: 4.6382, lng: -74.0835 },
    { id: "ros", name: "Universidad del Rosario", addr: "Candelaria · Bogotá", lat: 4.5964, lng: -74.0720 },
    { id: "plb", name: "Plaza de Bolívar", addr: "Centro · Bogotá", lat: 4.5981, lng: -74.0760 },
    { id: "psb", name: "Parque Simón Bolívar", addr: "Teusaquillo · Bogotá", lat: 4.6580, lng: -74.0937 },
    { id: "ter", name: "Terminal de Transporte (Salitre)", addr: "Fontibón · Bogotá", lat: 4.6486, lng: -74.1170 },
    { id: "el",  name: "Aeropuerto El Dorado", addr: "Fontibón · Bogotá", lat: 4.7016, lng: -74.1469 },
    { id: "p80", name: "Portal 80", addr: "Engativá · Bogotá", lat: 4.7140, lng: -74.1115 },
    { id: "pa",  name: "Plaza de las Américas", addr: "Kennedy · Bogotá", lat: 4.6170, lng: -74.1360 },
    { id: "sub", name: "Plaza de Suba", addr: "Suba · Bogotá", lat: 4.7430, lng: -74.0840 }
  ],
  // Conductores ficticios (estudiantes verificados)
  drivers: [
    { name: "Camila R.", rating: 4.9, trips: 312, car: "Mazda 2", color: "Gris", plate: "WHL 214", uni: "Derecho · 8.º semestre" },
    { name: "Andrés M.", rating: 4.8, trips: 187, car: "Renault Logan", color: "Blanco", plate: "WHL 508", uni: "Administración · 9.º semestre" },
    { name: "Valentina G.", rating: 5.0, trips: 96, car: "Kia Picanto", color: "Rojo", plate: "WHL 731", uni: "Economía · 7.º semestre" },
    { name: "Felipe O.", rating: 4.7, trips: 241, car: "Chevrolet Spark", color: "Azul", plate: "WHL 092", uni: "Comunicación Social · 10.º semestre" }
  ],
  // Pasajeros ficticios (para el modo conductor y los viajes compartidos)
  riders: [
    { name: "Daniela P.", rating: 4.9, uni: "Derecho · 6.º semestre" },
    { name: "Santiago M.", rating: 4.8, uni: "Finanzas · 5.º semestre" },
    { name: "Laura V.", rating: 5.0, uni: "Comunicación · 4.º semestre" },
    { name: "Julián A.", rating: 4.7, uni: "Administración · 8.º semestre" },
    { name: "Mariana C.", rating: 4.9, uni: "Ciencia de Datos · 3.er semestre" }
  ],
  replies: [
    "¡Voy en camino! 🚗",
    "Estoy a pocos minutos.",
    "Ya casi llego, espérame en el punto de encuentro.",
    "Listo, te veo en la portería.",
    "¡Con gusto!"
  ],
  ratingTags: ["Conducción segura", "Buena conversación", "Carro limpio", "Puntual", "Ruta eficiente"],
  promos: {
    WHEELS50: { label: "50 % en tu primer viaje (máx. $8.000)", pct: 0.5, cap: 8000 },
    UNI10: { label: "10 % en cualquier viaje", pct: 0.1, cap: 5000 }
  }
};
