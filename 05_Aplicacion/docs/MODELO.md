# wheels · modelo de operación y algoritmo de reparto

Documento de diseño del prototipo (v0.2). Describe cómo se reparten los cupos, qué
reglas rigen las ofertas y cómo se sostiene el negocio. Los valores concretos viven en
`config.js` y se pueden cambiar sin tocar el código.

---

## 1. Decisión de diseño: el campus como punto fijo

En lugar del modelo Uber (el pasajero pide y un conductor aparece), wheels usa un
**mercado de ofertas de ruta**:

- **Mañana:** el conductor sale de su zona y va **siempre al Externado**.
- **Tarde/noche:** el conductor sale **del Externado** hacia puntos de la ciudad.
- El conductor **publica** su oferta; el pasajero **reserva** un cupo.

Esto convierte el problema de matching de 2 puntos variables (origen y destino) en
**1 punto variable (la recogida)**, porque el destino ya está fijado: el campus (o la
salida del campus). Es la decisión que hace viable el algoritmo en esta etapa.

---

## 2. Roles e interfaces

La pantalla de entrada muestra dos caminos separados:

| Pasajero | Conductor |
|---|---|
| Ve el **feed de ofertas** compatibles | Ve su **panel de ofertas** |
| Elige punto de recogida y reserva | Publica ruta, puntos, hora, cupos y precio |
| Recibe un **PIN de abordaje** | Gestiona pasajeros y cierra la oferta |
| Historial, lista de espera, cancelación | Recorrido simulado, ganancias y comisión |

Ambos entran con **correo institucional** (`@uexternado.edu.co` o
`@est.uexternado.edu.co`) y un código de verificación (demo: `1234`). Un mismo correo
puede tener los dos roles y cambiarlos desde la cuenta.

---

## 3. La oferta

```js
{
  dir: "to_campus" | "from_campus",
  points: [ ...2 a 4 puntos de encuentro... ],
  at: "2026-11-07T12:20:00.000Z",   // llegada al campus o salida del campus
  seats: 2..4,
  price: 6000,                       // por cupo (COP)
  taken: [ { nombre, punto, PIN } ],
  publishedAt, status: "open" | "full" | "closed" | "cancelled" | "done"
}
```

Reglas de publicación:

- **2 a 4 puntos** elegidos de una lista de estaciones/sitios conocidos (los elige el
  conductor; así no hay desvíos sorpresa). Todos deben ser de **la misma zona** y estar a
  **máximo 3 km entre sí**: la oferta va a una zona, no reparte pasajeros por la ciudad.
- **Rumbo al campus:** ideal publicar el día anterior; el prototipo exige mínimo
  **12 h** de anticipación.
- **Regreso del campus:** mínimo **1 h** de anticipación.
- **Precio:** la app sugiere un valor según la distancia de los puntos al campus; el
  conductor puede ajustarlo **±30 %** (piso y techo para evitar guerra de precios).

---

## 4. Algoritmo de reparto (matcheo)

### 4.1 Filtro duro

Para cada oferta abierta y cada pasajero:

1. Misma dirección (`to_campus` / `from_campus`).
2. Hora futura y, si el pasajero pidió "llegar antes de X", la oferta llega a tiempo.
3. Al menos **un punto de encuentro a ≤ 2 km** de la zona de referencia del pasajero.
4. Cupos disponibles (si está llena, se puede entrar a **lista de espera**).

### 4.2 Ranking (score)

Entre las ofertas que pasan el filtro, se ordenan por:

```
score = w1 · distancia_a_pie       (menor es mejor)
      + w2 · desfase_de_hora        (menor es mejor)
      + w3 · precio                 (menor es mejor)
      + w4 · reputación_conductor   (mayor es mejor)
```

En la práctica el orden es: **caminata → hora → precio → reputación**. La caminata es
el factor dominante porque es lo que más le duele al pasajero (2 km ≈ 25 min a pie).

### 4.3 Difusión

- Al publicar una oferta, el pasajero la ve en su feed si algún punto cae dentro de su
  radio de 2 km.
- La "zona" del pasajero es una referencia editable (su ubicación o un punto conocido).
- El feed se puede filtrar por **Al campus / Del campus**.

### 4.4 Reserva y cierre

- El pasajero elige uno de los puntos y reserva: el cupo queda bloqueado y recibe un
  **PIN** que el conductor valida al subir.
- La oferta pasa a **llena** cuando se acaban los cupos.
- El conductor puede **cerrar** la oferta antes (si ya tiene pasajeros) o **cancelarla**.
- Al terminar el recorrido, la oferta queda **completada** y se liquidan las ganancias.

---

## 5. Cancelaciones y confiabilidad

El problema detectado: los pasajeros cancelan 1–2 h antes y el conductor pierde el
cupo. La solución combina reglas simples con reemplazo automático:

| Momento | Regla |
|---|---|
| Hasta **2 h antes** (rumbo al campus) | Cancelación libre, sin costo |
| Últimas **2 h** | **Bloqueada**. Solo existe "Emergencia" |
| Emergencia / no-show | Libera el cupo, aplica **recargo de $2.000** y marca la reputación |
| Regreso del campus | Cancelación permitida hasta **5 min antes** |

Mecanismos de soporte:

1. **Lista de espera con reemplazo automático:** si se libera un cupo, se reasigna al
   primero de la lista. El conductor ve "cupo reasignado", no un hueco.
2. **Reputación visible:** tasa de cancelaciones tardías y no-shows. Con correo
   institucional real, la reputación tiene peso social.
3. **No-show más caro que cancelar a tiempo:** desincentiva el "fantasma" que hace
   esperar al conductor sin avisar.
4. **Simetría:** si el conductor cancela tarde, pierde reputación y queda registrado.

> Para la demo, el recargo y la reputación son simulados en `localStorage`. En
> producción se cobraría con Nequi/PSE y quedaría en el historial del usuario.

---

## 6. Ingresos y sostenibilidad

| Fuente | Mecánica | Ejemplo |
|---|---|---|
| **Comisión por cupo** (principal) | 8 % del valor del cupo, solo cuando el viaje se completa | cupo de $7.300 → **$584** para wheels |
| **Boost de oferta** (futuro) | pago pequeño para aparecer primero en el feed | $500–$1.000 |
| **Wheels Pro** (futuro) | suscripción mensual con comisión reducida y analíticas | conductores recurrentes |
| **Recargo por no-show** | parte compensa al conductor, parte queda para la operación | $2.000 |

La comisión es baja y solo se cobra sobre viajes realizados: si la oferta no se llena,
el conductor no paga nada. El volumen (rutas diarias de miles de estudiantes) es lo
que sostiene la empresa, no el margen por viaje.

---

## 7. Riesgos y huecos a resolver

- **Regulación:** el carpooling universitario no es taxi; conviene un convenio con la
  universidad y revisar requisitos de transporte en Bogotá.
- **Confianza:** verificación real de documentos del conductor (licencia, SOAT,
  revisión) antes de publicar; en el prototipo es un badge simulado.
- **Pagos:** integrar Nequi/Daviplata/PSE y dividir el pago entre conductor y app.
- **Seguridad:** compartir viaje, contacto de confianza y línea 123 ya están; falta
  ubicación en vivo y botón de pánico real.
- **Escala:** el matching hoy corre en el navegador; en producción necesita índice
  geográfico (geohash) y un servidor de ofertas en tiempo real.

---

## 8. Roadmap técnico

1. **Prototipo local (hecho):** roles, login, ofertas, reservas, reglas, comisión.
2. **Backend:** auth con correo real, base de datos, matching en servidor.
3. **Tiempo real:** WebSockets para cupos, ubicación y notificaciones push.
4. **Pagos:** pasarela y billetera del conductor.
5. **Admin:** moderación, verificación de conductores y métricas (ocupación,
   cancelaciones, LTV).
6. **Deploy:** Netlify/GitHub Pages para la demo; luego dominio y HTTPS.

---

## 9. Parámetros configurables (`config.js`)

| Parámetro | Valor | Significado |
|---|---|---|
| `MAX_WALK_METERS` | 2000 | radio de recogida |
| `MAX_POINT_SPREAD_METERS` | 3000 | separación máxima entre los puntos de una oferta |
| `MIN_POINTS` / `MAX_POINTS` | 2 / 4 | puntos por oferta |
| `MIN_SEATS` / `MAX_SEATS` | 2 / 4 | cupos por oferta |
| `MIN_PAX_TO_CLOSE` | 2 | pasajeros mínimos para cerrar antes de llenarse |
| `MIN_LEAD_HOURS_TO_CAMPUS` | 12 | anticipación mínima al campus |
| `MIN_LEAD_HOURS_FROM_CAMPUS` | 1 | anticipación mínima del regreso |
| `CANCEL_LOCK_HOURS_TO_CAMPUS` | 2 | bloqueo antes de la salida |
| `CANCEL_LOCK_MINUTES_FROM_CAMPUS` | 5 | bloqueo de los regresos |
| `NO_SHOW_FEE` | 2000 | recargo por no-show |
| `SERVICE_FEE` | 0.08 | comisión de wheels |
| `PRICE_TOLERANCE` | 0.3 | ajuste permitido del precio |
