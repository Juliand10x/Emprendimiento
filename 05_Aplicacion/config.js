// =====================================================================================
// CONFIGURACIÓN DE WHEELS (prototipo)
// Aquí cambias lo importante sin tocar el resto del código.
// =====================================================================================
window.WHEELS_CONFIG = {
  // 1) Clave de Google Maps. Si la dejas vacía, la app usa un mapa de respaldo (OpenStreetMap)
  //    y TODO lo demás funciona igual. Pasos para obtenerla: ver LEEME.md, sección "Google Maps".
  GOOGLE_MAPS_API_KEY: "",

  APP_NAME: "wheels",
  CITY: "Bogotá",
  CAMPUS: "Universidad Externado de Colombia",
  EMAIL_DOMAIN_HINT: "uexternado.edu.co",

  // Código de verificación de la demo (en producción llegaría por correo).
  DEMO_CODE: "1234",

  // Tarifas de referencia en pesos colombianos (COP). No son tarifas reales.
  PRICING: {
    base: 3000,          // tarifa base
    km: 1250,            // por kilómetro
    min: 190,            // por minuto (usado para estimar la ruta)
    minimum: 6000,       // tarifa mínima de un viaje completo
    poolFactor: 0.62,    // el viaje compartido cuesta el 62 % del directo
    serviceFee: 0.08     // comisión de Wheels por cupo completado (8 %)
  },

  // Reglas del modelo de ofertas (el conductor publica, el pasajero reserva cupo).
  OFFERS: {
    MAX_WALK_METERS: 2000,            // radio de recogida: 2 km a la redonda
    MAX_POINT_SPREAD_METERS: 3000,    // los puntos de una oferta deben estar a ≤ 3 km entre sí
    WALK_METERS_PER_MIN: 75,          // ~4,5 km/h caminando
    MIN_POINTS: 2,                    // el conductor elige entre 2 y 4 puntos
    MAX_POINTS: 4,
    MIN_SEATS: 2,
    MAX_SEATS: 4,
    MIN_PAX_TO_CLOSE: 2,              // para cerrar antes de llenarse hacen falta 2 pasajeros
    MIN_LEAD_HOURS_FROM_CAMPUS: 1,    // los regresos se publican mínimo 1 h antes
    MIN_LEAD_HOURS_TO_CAMPUS: 12,     // las salidas al campus, mínimo 12 h antes
    CANCEL_LOCK_HOURS_TO_CAMPUS: 2,   // no se puede cancelar en las últimas 2 h
    CANCEL_LOCK_MINUTES_FROM_CAMPUS: 5, // los regresos se cancelan hasta 5 min antes
    NO_SHOW_FEE: 2000,                // recargo simulado por no aparecer
    PRICE_TOLERANCE: 0.3              // el conductor puede ajustar el precio ±30 %
  }
};
