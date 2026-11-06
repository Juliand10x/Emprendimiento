// =====================================================================================
// DATOS DE LA DEMO (todo es ficticio o aproximado; no hay base de datos)
// =====================================================================================
window.WHEELS_DATA = {
  // El Externado es el punto fijo del prototipo: todo viaje va hacia el campus
  // (en la mañana) o sale del campus hacia un punto de la ciudad (en la tarde).
  campus: { name: "Universidad Externado de Colombia", short: "Externado", lat: 4.5951, lng: -74.0680 },

  // Puntos de encuentro que el conductor elige (2 a 4) al publicar su oferta.
  // Sirven como recogida (rumbo al campus) o como llegada (saliendo del campus).
  meetingPoints: [
    { id: "unicentro",   name: "Unicentro",                 addr: "Cra 15 con Cl 127",        lat: 4.7013, lng: -74.0415, zone: "Norte" },
    { id: "portalnorte", name: "Portal Norte",              addr: "Autopista Norte",           lat: 4.7546, lng: -74.0464, zone: "Norte" },
    { id: "calle100",    name: "Estación Calle 100",        addr: "Autopista Norte",         lat: 4.6870, lng: -74.0540, zone: "Norte" },
    { id: "calle63",     name: "Estación Calle 63",         addr: "Av. Caracas",             lat: 4.6490, lng: -74.0640, zone: "Chapinero" },
    { id: "calle72",     name: "Estación Calle 72",         addr: "Av. Caracas",             lat: 4.6580, lng: -74.0610, zone: "Chapinero" },
    { id: "zonat",       name: "Zona T",                    addr: "Cl 85 con Cra 13",        lat: 4.6667, lng: -74.0535, zone: "Chapinero" },
    { id: "museo",       name: "Estación Museo Nacional",   addr: "Av. Caracas",                lat: 4.6156, lng: -74.0700, zone: "Centro" },
    { id: "aguas",       name: "Estación Las Aguas",        addr: "Av. Jiménez",         lat: 4.6020, lng: -74.0684, zone: "Centro" },
    { id: "ricaurte",    name: "Estación Ricaurte",         addr: "Av. 13",              lat: 4.6117, lng: -74.0832, zone: "Centro" },
    { id: "calle26",     name: "Estación Calle 26",         addr: "Av. 26",                lat: 4.6379, lng: -74.0879, zone: "Centro" },
    { id: "portal80",    name: "Portal 80",                 addr: "Av. 80",                   lat: 4.7140, lng: -74.1115, zone: "Occidente" },
    { id: "portalsuba",  name: "Portal Suba",               addr: "Av. Suba",                     lat: 4.7448, lng: -74.0846, zone: "Occidente" },
    { id: "suba140",     name: "Suba · Calle 140",          addr: "Av. Suba con Cl 140",          lat: 4.7380, lng: -74.0820, zone: "Occidente" },
    { id: "americas",    name: "Estación Américas",         addr: "Av. Américas",              lat: 4.6288, lng: -74.1066, zone: "Occidente" },
    { id: "calle134",    name: "Autopista Norte · Calle 134", addr: "Autopista Norte con Cl 134", lat: 4.7350, lng: -74.0490, zone: "Norte" },
    { id: "portal20",    name: "Portal 20 de Julio",        addr: "Av. 1",               lat: 4.5666, lng: -74.0900, zone: "Sur" },
    { id: "tunal",       name: "Portal Tunal",              addr: "Av. Caracas Sur",        lat: 4.5762, lng: -74.1300, zone: "Sur" }
  ],

  // Conductores ficticios (estudiantes verificados) para las ofertas de ejemplo.
  drivers: [
    { name: "Camila R.",   rating: 4.9, trips: 312, car: "Mazda 2",        color: "Gris",   plate: "WHL 214", uni: "Derecho · 8.º semestre" },
    { name: "Andrés M.",   rating: 4.8, trips: 187, car: "Renault Logan",  color: "Blanco", plate: "WHL 508", uni: "Administración · 9.º semestre" },
    { name: "Valentina G.", rating: 5.0, trips: 96,  car: "Kia Picanto",    color: "Rojo",   plate: "WHL 731", uni: "Economía · 7.º semestre" },
    { name: "Felipe O.",   rating: 4.7, trips: 241, car: "Chevrolet Spark", color: "Azul",  plate: "WHL 092", uni: "Comunicación Social · 10.º semestre" }
  ],

  // Pasajeros ficticios (para llenar cupos de las ofertas de ejemplo).
  riders: [
    { name: "Daniela P.",  rating: 4.9, uni: "Derecho · 6.º semestre" },
    { name: "Santiago M.", rating: 4.8, uni: "Finanzas · 5.º semestre" },
    { name: "Laura V.",    rating: 5.0, uni: "Comunicación · 4.º semestre" },
    { name: "Julián A.",   rating: 4.7, uni: "Administración · 8.º semestre" },
    { name: "Mariana C.",  rating: 4.9, uni: "Ciencia de Datos · 3.º semestre" }
  ],

  replies: [
    "¡Voy en camino! 🚗",
    "Estoy a pocos minutos.",
    "Ya casi llego, espérame en el punto de encuentro.",
    "Listo, te veo en el punto acordado.",
    "¡Con gusto!"
  ],

  ratingTags: ["Conducción segura", "Buena conversación", "Carro limpio", "Puntual", "Ruta eficiente"],

  promos: {
    WHEELS50: { label: "50 % en tu primer viaje (máx. $8.000)", pct: 0.5, cap: 8000 },
    UNI10: { label: "10 % en cualquier viaje", pct: 0.1, cap: 5000 }
  }
};
