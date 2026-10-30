# Portafolio de Evidencias No. 4: Modelo de Negocio Consolidado
## Bloque 3: Fuentes de Ingreso, Modelación LTV, Estructura de Costos, CAC y Análisis de Impacto (Componentes 5, 9 y 10)

**Proyecto:** Wheels Externado — Plataforma Inteligente de Carpooling Universitario  
**Curso:** Emprendimiento | Pregrado en Ciencia de Datos  
**Institución:** Universidad Externado de Colombia  
**Fecha:** Octubre de 2026  
**Equipo 5:** Santiago Sandoval, Sebastián Ramos, Julián Duarte, Tomás Rincón, Julián Jiménez  

---

## 💰 5. Fuentes de Ingreso y Valor de Vida del Cliente (LTV)

### 5.1 Modelo de Negocio y Fijación de Precios (Aulet, Pasos 15 y 16)
El modelo de monetización de Wheels Externado es un **cobro por uso transaccional (*take rate* por cupo reservado y completado)**. No se cobra tarifa fija de registro ni suscripción mensual, lo que elimina cualquier barrera de entrada tanto para el pasajero como para el conductor.

#### Justificación del Esquema Tarifario Frente a Tres Referencias:
1. **Valor Entregado al Usuario:** El pasajero ahorra entre \$17.000 y \$37.000 COP por trayecto frente a plataformas tradicionales de taxi o Uber (\$25.000-\$45.000 COP), y ahorra entre 60 y 90 minutos frente al transporte público. Pagar una tarifa de servicio de \$1.200 COP representa apenas el 5% del valor económico ahorrado.
2. **Referencia de la Competencia y del Mercado Actual:** En los grupos informales de WhatsApp, la tarifa base establecida orgánicamente por la comunidad es de **\$6.000 COP**.
3. **Evidencia Empírica de Validación de Campo (Trabajo de Campo 2):**
   - El *Willingness to Pay* (WTP) medio validado en las 12 entrevistas fue de **\$8.000 COP** (con picos de \$10.000 y \$15.000 en días de evaluaciones o parciales, reportados por E2 y E6).
   - Los conductores externadistas (E5, E7, E11, E12) declararon de forma unánime que no buscan lucrarse, sino **amortizar el parqueadero (\$22.000 COP) y la gasolina**. Su condición para usar la app es recibir al menos **\$6.800 a \$7.000 COP netos por puesto**, cubriendo con 3 o 4 pasajeros sus costos fijos completos.

#### Desglose Unitario de la Transacción:
$$\begin{aligned}
\text{Tarifa Total Pagada por el Pasajero} &= \mathbf{\$8.000 \text{ COP}} \\
\text{Ingreso Neto Transferido al Conductor} &= \mathbf{\$6.800 \text{ COP}} \quad (85,0\%) \\
\text{Ingreso Bruto de la Plataforma (Take Rate)} &= \mathbf{\$1.200 \text{ COP}} \quad (15,0\%) \\
\text{Costo Directo Transaccional (Pasarela API Nequi/Wompi + Cloud)} &= \$200 \text{ COP} \\
\text{Margen Bruto de la Plataforma} &= \mathbf{\$1.000 \text{ COP}} \quad (83,3\%)
\end{aligned}$$

---

### 5.2 Valor de Vida del Cliente (LTV) — Paso 17 de Aulet

El cálculo del **LTV (Lifetime Value)** se estructuró a partir de la **plantilla oficial de Excel de Bill Aulet (Capítulo 17)**, proyectando a un horizonte de **5 años** (la duración típica de un ciclo de pregrado universitario en el Externado, correspondiente a 10 semestres académicos).

#### Parámetros y Supuestos del Modelo Financiero:
- **Periodicidad y Calendario Académico:** 2 semestres por año = 32 semanas efectivas de clases presenciales (excluyendo vacaciones intersemestrales).
- **Frecuencia Promedio de Uso:** 4 trayectos semanales por estudiante activo = 128 viajes anuales.
- **Tasa de Retención Anual ($ret$):** Estimada en un **80% anual** para el caso esperado, fundamentada en que una vez adoptada la solución en primer y segundo año, la tasa de deserción estudiantil es $<5\%$ anual y la cohorte permanece cautiva hasta el grado.
- **Tasa de Costo de Capital ($r$):** Se fijó en **50% anual** según el estándar de la guía docente de Aulet para emprendimientos tecnológicos en fase temprana financiados con capital propio (*bootstrapping* / *equity*). Se presenta además el comparativo al **12%** (financiamiento por deuda).

$$\text{LTV} = \sum_{t=1}^{5} \frac{\text{Ingreso Anual} \times (\text{Tasa Retención})^{t-1} \times \text{Margen Bruto}}{(1 + r)^t}$$

#### Tabla de Supuestos y Resultados en Tres Escenarios (5 Años, $r = 50\%$):

| Parámetro / Supuesto | Escenario Pesimista | Escenario Esperado | Escenario Optimista | Fuente / Justificación |
| :--- | :---: | :---: | :---: | :--- |
| **Viajes promedio por semana** | 3 viajes / semana | **4 viajes / semana** | 6 viajes / semana | Campo 2 (pasajeros habituales vs. ocasionales) |
| **Semanas académicas anuales** | 28 semanas | **32 semanas** | 34 semanas | Calendario oficial Universidad Externado |
| **Viajes anuales por usuario** | 84 viajes | **128 viajes** | 204 viajes | Cálculo ($viajes \times semanas$) |
| **Ingreso Anual por Cliente** | **\$100.800 COP** | **\$153.600 COP** | **\$244.800 COP** | $Viajes \times \$1.200 \text{ COP}$ |
| **Margen Bruto de la Plataforma** | **75,0%** | **83,3%** | **85,0%** | Descontando pasarela financiera de bajo monto |
| **Tasa de Retención Anual** | **70,0%** | **80,0%** | **85,0%** | Retención de cohortes universitarias (Aulet Cap 17) |
| **Costo de Capital ($r$)** | 50,0% | **50,0%** | 50,0% | Estándar docente Aulet para capital propio |
| **LTV Calculado (VPN a 5 Años)** | **\$92.408 COP** | **\$174.897 COP** | **\$301.418 COP** | **Resultado formal Plantilla Excel Aulet** |

*Nota Comparativa:* En el escenario esperado, si el costo de capital se calcula con deuda ($r = 12\%$), el LTV alcanza los **\$325.496 COP**.

---

## 🏗️ 9. Estructura de Costos y Costo de Adquisición de Clientes (CAC)

### Estructura de Costos Operativos

| Rubro | Tipo de Costo | Valor Estimado Mensual (COP) | Fuente / Justificación |
| :--- | :---: | :---: | :--- |
| **Infraestructura Cloud (Firebase / Supabase / AWS)** | Fijo / Semifijo | \$280.000 COP (\$70 USD) | Cotización capa elástica de base de datos y cloud functions |
| **APIs de Mapas y Ruteo (Mapbox)** | Variable | \$120.000 COP | Capa gratuita hasta 50.000 peticiones + pago por uso |
| **Pasarela de Pagos (Wompi / Nequi API)** | Variable | \$200 COP / transacción | Tarifa estándar de agregador de micropagos |
| **Mantenimiento y Soporte Técnico** | Fijo | Asumido por los fundadores | Equipo de 5 estudiantes de Ciencia de Datos |
| **Gastos Legales y Licencias de Tiendas (Apple/Google)** | Fijo anualizado | \$65.000 COP / mes | Cuenta Google Play (\$25 USD única) + Apple Dev (\$99 USD/año) |
| **Presupuesto Comercial y de Mercadeo Inicial** | Semifijo | \$150.000 COP / mes | Material POP campus, stickers QR y pauta local |

---

### 9.1 Costo de Adquisición de Clientes (CAC) — Paso 19 de Aulet

El CAC representa el gasto integral de marketing y ventas necesario para convertir a un nuevo estudiante en usuario activo de la plataforma:
$$\text{CAC} = \frac{\text{Gastos Totales de Marketing y Ventas del Período}}{\text{Número de Nuevos Clientes Adquiridos en el Período}}$$

#### Análisis del CAC por Horizontes Temporales:

1. **Corto Plazo (Año 1 — Tracción y Adopción Inicial):**
   - *Estrategia:* Adquisición directa "guerrilla" en el campus por los propios fundadores, stands en plazoletas, códigos QR en cafeterías y migración directa desde los 4 grupos existentes de WhatsApp.
   - *Inversión comercial:* \$600.000 COP en piezas físicas y \$1.200.000 COP en valor de tiempo comercial de los fundadores = \$1.800.000 COP.
   - *Nuevos clientes adquiridos:* 300 estudiantes activos.
   - **CAC Medio:** **\$6.000 COP** (Rango: \$4.000 a \$8.000 COP).

2. **Mediano Plazo (Años 2 y 3 — Expansión Institucional):**
   - *Estrategia:* Presentación en jornadas de inducción de Bienestar Universitario, alianzas con representantes estudiantiles y programa de embajadores remunerados por facultad.
   - *Inversión comercial:* \$2.500.000 COP anuales.
   - *Nuevos clientes adquiridos:* 800 estudiantes por año.
   - **CAC Medio:** **\$3.125 COP** (Rango: \$2.500 a \$4.500 COP).

3. **Largo Plazo (Años 4 y 5 — Madurez y Viralidad de Red):**
   - *Estrategia:* Efecto de red orgánico, recomendación boca a boca entre compañeros y programa digital de referidos ("invita a un compañero y ambos viajan gratis").
   - *Inversión comercial:* \$2.000.000 COP anuales en bonificaciones de viaje.
   - *Nuevos clientes adquiridos:* 1.200 estudiantes por año.
   - **CAC Medio:** **\$1.666 COP** (Rango: \$1.200 a \$2.200 COP).

---

### Verificación de la Regla de las 3X ($LTV > 3 \times CAC$)

| Horizonte Temporal | CAC Estimado (Rango) | CAC Medio | LTV Esperado | Razón $LTV / CAC$ | Cumplimiento y Lectura Metodológica |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **Corto Plazo (Año 1)** | \$4.000 – \$8.000 COP | \$6.000 COP | \$174.897 COP | **29,15 ×** | **Cumple holgadamente la regla (>3×).** Modelo altamente eficiente desde el día 1 gracias al costo de adquisición orgánico en comunidad cautiva. |
| **Mediano Plazo (Años 2 y 3)** | \$2.500 – \$4.500 COP | \$3.125 COP | \$174.897 COP | **55,97 ×** | **Altamente escalable.** Las economías de escala institucionales y los embajadores reducen a la mitad el costo de captación. |
| **Largo Plazo (Años 4 y 5)** | \$1.200 – \$2.200 COP | \$1.666 COP | \$174.897 COP | **104,98 ×** | **Sostenibilidad consolidada.** El efecto de red y el voz a voz convierten a la plataforma en el estándar institucional por defecto. |

#### Párrafo de Conclusión Financiera (Paso 9.1):
La razón $LTV / CAC$ de Wheels Externado en el escenario esperado alcanza **29,15× en el corto plazo y supera los 100× en el largo plazo**, cumpliendo de manera extraordinaria con la regla de las 3X fijada por Bill Aulet ($LTV > 3 \times CAC$). Incluso bajo el escenario pesimista más riguroso (LTV de \$92.408 COP) frente al CAC más elevado (\$8.000 COP), la razón se mantiene en **11,55×**, casi cuatro veces por encima del umbral mínimo de viabilidad. Este excepcional rendimiento unitario se explica porque el negocio opera sobre un **mercado resegmentado de comunidad cerrada**: no incurre en los costosos presupuestos de pauta digital de aplicaciones abiertas (Uber/DiDi), sino que aprovecha la densidad geográfica, las redes de confianza preexistentes y la alta recurrencia de los estudiantes universitarios. Para preservar y fortalecer este indicador en el tiempo, el equipo reinvertirá el 15% del margen bruto en el programa de incentivos para conductores, garantizando la estabilidad de la oferta.

---

## 🌍 10. Análisis de Impactos (Social y Medioambiental)

El modelo de negocio incorpora métricas formales de impacto alineadas con los **Objetivos de Desarrollo Sostenible (ODS)** de las Naciones Unidas y la misión humanista de la Universidad Externado de Colombia.

### 10.1 Impacto Social

| Meta Social | Indicador Clave | Línea Base (WhatsApp Actual) | Meta a 2 Años | ODS Vinculado |
| :--- | :--- | :--- | :--- | :--- |
| **1. Garantía de Seguridad de Género** | % de viajes realizados por pasajeras con conductoras verificadas o monitoreo de ruta activo. | 0% (inseguridad y protocolos individuales en chat informal). | **100% de los viajes con monitoreo en vivo y opción "Solo Chicas".** | **ODS 5: Igualdad de Género** |
| **2. Recuperación de Calidad de Vida y Tiempo** | Horas mensuales de desplazamiento ahorradas por estudiante usuario. | 0 horas ahorradas en transporte público (100-120 min/viaje). | **Ahorro promedio de 25 a 35 horas mensuales de tiempo útil por estudiante.** | **ODS 8: Trabajo Decente y Bienestar** |
| **3. Erradicación del Ghosting e Incumplimiento** | Tasa de viajes cancelados a menos de 30 minutos de la salida. | ~35% de cancelación en grupos informales de WhatsApp. | **Reducción de cancelaciones a menos del 3% mediante penalización.** | **ODS 11: Comunidades Sostenibles** |

- **Riesgos Sociales Potenciales y Mitigación:**
  - *Riesgo:* Conflictos entre conductores y pasajeros por retrasos de tráfico en Bogotá.
  - *Mitigación:* Algoritmo de tolerancia de 7 minutos con geocerca GPS automática que libera la responsabilidad del conductor si el pasajero no llega al punto acordado.

---

### 10.2 Impacto Medioambiental

| Meta Ambiental | Indicador Clave | Línea Base (Sin Plataforma) | Meta a 2 Años | ODS Vinculado |
| :--- | :--- | :--- | :--- | :--- |
| **1. Reducción de Huella de Carbono** | Kilogramos de $CO_2$ evitados por la optimización del factor de ocupación vehicular. | Ocupación promedio actual en Bogotá: 1,3 ocupantes/carro. | **Factor de ocupación de 3,5 ocupantes/carro, evitando >45 toneladas de $CO_2$/año.** | **ODS 13: Acción por el Clima** |
| **2. Descongestión del Eje Centro-Histórico** | Número de vehículos individuales retirados de la vía hacia La Candelaria en horas pico. | Cientos de carros con un solo ocupante buscando parqueadero. | **Retiro de al menos 150 vehículos diarios de circulación hacia los cerros.** | **ODS 11: Ciudades y Comunidades Sostenibles** |

- **Riesgos Ambientales y Mitigación:**
  - *Riesgo:* Efecto rebote (estudiantes que antes usaban bicicleta y ahora prefieran carpooling vehicular).
  - *Mitigación:* Foco del algoritmo en reemplazar trayectos largos en buses de combustión fósil y vehículos particulares individuales, sin incentivar el carpooling en trayectos menores a 3 km.
