# wheels · demo (solo Universidad Externado de Colombia)

App web para celular, estilo Uber, para viajes compartidos entre la comunidad Externadista.
**Demo sin base de datos:** conductores, viajes y pagos son simulados; lo único que se guarda
(perfil, historial, promo) queda en el navegador (`localStorage`).

## Cómo abrirla
1. Doble clic en `iniciar.bat` (necesita Python instalado). Abre `http://localhost:8000`.
2. En el celular: conecta el celular al mismo WiFi y entra a `http://IP-DE-TU-PC:8000`
   (o usa el modo celular del navegador: F12 → icono de celular).
   Para "instalarla" como app: menú del navegador → *Agregar a pantalla de inicio*.

## Cómo entrar
- Correo permitido: solo `@uexternado.edu.co` o `@est.uexternado.edu.co` (cualquier otro se rechaza).
- Código de verificación de la demo: **1234**.
- Botón "Entrar como invitado" para probar rápido.

## Qué tiene (adaptado de Uber)
Pasajero: elegir recogida (porterías del campus) y destino, buscar lugares, opciones **Compartido / Directo**
con tarifa en COP, método de pago, promos (`WHEELS50`, `UNI10`), buscar conductor, PIN de abordaje,
conductor llegando en el mapa, chat, llamar, compartir viaje, botón de seguridad (123 + contacto de confianza),
cancelar, viaje en curso, recibo, calificación y propina, historial, viajes programados (repetibles),
billetera, cuenta.
Conductor (demo): conectarse, recibir solicitud con cuenta regresiva, aceptar, ir por el pasajero,
pedir PIN, llevarlo y ver ganancias.

## Google Maps
Por defecto usa un mapa de respaldo (OpenStreetMap). Para usar Google Maps:
1. En Google Cloud crea un proyecto y activa facturación (hay crédito gratis mensual).
2. Activa **Maps JavaScript API**, **Routes API** y **Places API (New)**.
3. Crea una API key y **restríngela** (HTTP referrers: `http://localhost:8000/*` y tu dominio).
4. Pégala en `config.js` → `GOOGLE_MAPS_API_KEY: "tu_llave"`.
Si la llave falla, la app vuelve sola al mapa de respaldo.
> La ruta de Google Maps no pudo probarse sin llave; el mapa de respaldo sí fue probado de punta a punta.

## Pruebas rápidas
- `?fast=6` acelera las simulaciones. `?map=osm` fuerza el mapa de respaldo. `?guest=1` entra directo.

## Lo que sigue (cuando lo pidas)
Base de datos real, logins con correo institucional verificado de verdad, perfiles guardados,
pagos reales y conductores reales.

## Archivos
`index.html` · `styles.css` · `app.js` (pantallas y flujos) · `maps.js` (Google/Leaflet) ·
`data.js` (lugares, conductores ficticios) · `config.js` (llave, precios) · `vendor/leaflet`.
