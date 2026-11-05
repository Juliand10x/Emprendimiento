// =====================================================================================
// CONFIGURACIÓN DE WHEELS (demo)
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

  // Tarifas de ejemplo en pesos colombianos (COP). No son tarifas reales.
  PRICING: {
    base: 3000,        // tarifa base
    km: 1250,          // por kilómetro
    min: 190,          // por minuto
    minimum: 6000,     // tarifa mínima
    poolFactor: 0.62,  // el viaje compartido cuesta el 62 % del directo
    serviceFee: 0.12   // comisión de ejemplo de Wheels (la ve el conductor)
  }
};
