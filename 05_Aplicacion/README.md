# wheels · prototipo (Universidad Externado de Colombia)

App web móvil para **compartir cupos de carro** dentro de la comunidad Externadista.
El campus es el punto fijo: los viajes van **hacia el Externado** (mañana) o **salen
del Externado** hacia puntos de la ciudad (tarde/noche).

**Sin servidor todavía:** todo corre en el navegador y los datos se guardan en
`localStorage`. Los conductores/pasajeros de ejemplo son ficticios, pero el flujo
completo (oferta → reserva → PIN → recorrido → comisión) es funcional.

## Cómo abrirla en local

### WSL / Linux
```bash
cd "05_Aplicacion"
./iniciar.sh            # equivale a: python3 -m http.server 8000
```
Abre **http://localhost:8000** en el navegador de Windows (WSL2 reenvía localhost solo).

### Windows
Doble clic en `iniciar.bat` (requiere Python).

### Celular (misma WiFi)
Entra desde el celular a `http://IP-DE-TU-PC:8000` y usa "Agregar a pantalla de inicio"
para probarla como app.

### Atajos de URL
| URL | Qué hace |
|---|---|
| `?guest=1` | entra directo como pasajero demo |
| `?guest=1&role=driver` | entra directo como conductor demo |
| `?map=osm` | fuerza el mapa de respaldo (OpenStreetMap) |
| `?reset=1` | borra los datos de la demo y arranca de cero |

## Cómo entrar
1. Elige **Soy pasajero** o **Soy conductor** (la app tiene dos interfaces separadas).
2. Usa un correo `@uexternado.edu.co` o `@est.uexternado.edu.co`.
3. Código de la demo: **1234**.
4. También hay "Entrar como invitado" para pruebas rápidas.

Un mismo correo puede tener ambos roles: desde **Cuenta → Cambiar de rol** vuelves a
la pantalla de selección.

## Reglas del modelo (resumen)
- **El conductor publica una oferta**, no se pide un viaje al estilo Uber.
- Elige **2 a 4 puntos de encuentro** (estaciones de TransMilenio o sitios conocidos) **de una misma zona y a máximo 3 km entre sí**: la oferta lleva a una zona, no reparte a la gente por toda la ciudad.
- La oferta se cierra llena, o antes si el conductor ya tiene **2 o más pasajeros**.
- Rumbo al campus: se publica **el día anterior** (mínimo 12 h en el prototipo) y los
  pasajeros **no pueden cancelar en las últimas 2 h**; solo queda el botón de
  **Emergencia** (libera el cupo a la lista de espera y cobra el recargo de no-show).
- Regreso desde el campus: **se publica mínimo 1 h antes**, se puede cancelar hasta
  5 min antes y el conductor cierra la oferta cuando termina el recorrido.
- Los pasajeros ven ofertas con **puntos a máximo 2 km** de su zona de referencia.
- **Lista de espera:** si alguien cancela, el cupo se reasigna automáticamente.
- **Ingreso de Wheels:** 8 % por cupo completado (solo si el viaje se hace).

Todos los valores están en `config.js` → `OFFERS` y `PRICING`.

## Qué incluye
- Selección de rol + login con correo institucional + código.
- Interfaz pasajero: feed de ofertas, filtro al campus / del campus, zona de
  referencia, detalle con distancia a pie, reserva, PIN, cancelación con reglas,
  lista de espera y actividad.
- Interfaz conductor: panel, publicación de ofertas (2-4 puntos, hora, cupos,
  precio sugerido), gestión de pasajeros, simulación de recorrido y ganancias con
  comisión.
- Seguridad (PIN, compartir viaje, contacto, línea 123), pagos demo y promos.

## Qué falta (siguiente etapa)
- Backend real: autenticación con correo, base de datos, matching en servidor.
- Notificaciones push y ubicación en vivo.
- Pagos reales (Nequi/PSE) y verificación de documentos del conductor.
- Panel administrativo y métricas del negocio.

## Deploy
Es 100 % estático (HTML/CSS/JS + Leaflet vendorizado). Opciones:
- **Netlify (arrastrar la carpeta `05_Aplicacion`)**: publica tal cual.
- **Netlify conectando el repo**: configura `base = "05_Aplicacion"` y `publish = "."`.
- **GitHub Pages**: publica la carpeta y abre `index.html`.

## Archivos
`index.html` · `styles.css` · `app.js` (roles, ofertas y flujos) · `maps.js`
(Google/Leaflet) · `data.js` (puntos, conductores y pasajeros ficticios) ·
`config.js` (reglas y precios) · `vendor/leaflet` · `icons/`.
`docs/MODELO.md` explica el algoritmo de reparto y las reglas con más detalle.
