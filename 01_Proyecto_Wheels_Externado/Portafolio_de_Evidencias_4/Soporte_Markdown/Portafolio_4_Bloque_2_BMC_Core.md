# Portafolio de Evidencias No. 4: Modelo de Negocio Consolidado
## Bloque 2: Modelo de Negocio (BMC Total) — Componentes 1 a 4 y 6 a 8

**Proyecto:** Wheels Externado — Plataforma Inteligente de Carpooling Universitario  
**Curso:** Emprendimiento | Pregrado en Ciencia de Datos  
**Institución:** Universidad Externado de Colombia  
**Fecha:** Octubre de 2026  
**Equipo 5:** Santiago Sandoval, Sebastián Ramos, Julián Duarte, Tomás Rincón, Julián Jiménez  

---

## 🧭 Paso 4.0 El BMC en una Página y Valores (Eje Cero)

### Valores: El Eje Cero del Lienzo

Los valores no representan una casilla aislada del lienzo de modelo de negocio; constituyen el **filtro transversal** que gobierna todas las decisiones operativas, financieras y de crecimiento de Wheels Externado.

| Dimensión | Definición Estratégica en Acción | Evidencia / Decisión Tomada en Campo |
| :--- | :--- | :--- |
| **Propósito Trascendente** | Democratizar una movilidad universitaria digna, segura, asequible y sostenible para la comunidad de la Universidad Externado de Colombia, transformando el estrés y la incertidumbre del transporte diario en tiempo útil de estudio, descanso y tejido comunitario. | Decisión de pivotar desde *StatCredit AI* hacia un problema directo de nuestra comunidad estudiantil. |
| **Valor 1: Transparencia Radical en el Precio** | Conducta: Desglosar públicamente en cada viaje cómo se distribuye cada peso: \$6.800 COP directos al conductor para amortizar gasolina/parqueadero y \$1.200 COP de tarifa de servicio y pasarela de pago. | Regla derivada de E12: los conductores abandonan la plataforma si perciben comisiones ocultas o abusivas. |
| **Valor 2: Confianza y Cuidado Comunitario** | Conducta: Exigir verificación obligatoria con correo institucional `@uexternado.edu.co` antes de permitir la publicación o reserva de cualquier cupo, sin excepciones comerciales. | Regla derivada de 12/12 entrevistados: la seguridad y pertenencia al campus es la condición #1 para abordar. |
| **Valor 3: Equidad y Protección al Conductor** | Conducta: El depósito de penalización por cancelación tardía indemniza en un 80% al conductor (quien asume el costo de la silla vacía) y solo el 20% cubre costos de procesamiento de la plataforma. | Corrige el supuesto inicial del equipo tras el reclamo fundado de los conductores E7 y E12. |
| **No Negociables** | 1. **Cero monetización de datos:** Jamás comercializar, perfilar ni compartir datos de ubicación o movilidad de los estudiantes con terceros publicitarios.<br>2. **Cero intermediación abusiva:** No aplicar algoritmos de tarifa dinámica que especulen con la urgencia en días de parciales o lluvias intensas.<br>3. **Cero tolerancia al acoso:** Expulsión inmediata e irrevocable de la plataforma ante cualquier reporte de conducta inapropiada o vulneración a la integridad. | Decisiones metodológicas y éticas asentadas en el estándar del proyecto. |
| **Filtro del Lienzo** | • **A quién sí atendemos:** Exclusivamente a la comunidad con vínculo activo en la universidad.<br>• **A quién no atendemos:** Conductores de plataformas abiertas (Uber/InDrive) que busquen lucrarse profesionalmente.<br>• **En qué no ahorramos:** En soporte humano directo para emergencias e infraestructura de cifrado de credenciales. | El modelo prioriza la seguridad y la confianza comunitaria sobre el volumen masivo descontrolado. |

---

### Cuadro de Mando: Business Model Canvas (BMC) Consolidado

```
┌─────────────────────────┬─────────────────────────┬─────────────────────────┬─────────────────────────┬─────────────────────────┐
│ 8. ASOCIACIONES CLAVE   │ 7. ACTIVIDADES CLAVE    │ 2. PROPUESTA DE VALOR   │ 4. RELACIÓN CON CLIENTES│ 1. SEGMENTO DE CLIENTES │
│                         │                         │                         │                         │                         │
│ • Universidad Externado │ • Algoritmo de matching │ • Cupo garantizado sin  │ • Confianza basada en   │ • PLATAFORMA DE DOS     │
│   (Bienestar y Decanatu-│   y ruteo en tiempo real│   lotería de mensajes.  │   verificación @uexter- │   LADOS:                │
│   ras de Facultad).     │ • Verificación institu- │ • Comunidad 100% verifi-│   nado.edu.co.          │                         │
│ • Administradores de los│   cional continua.      │   cada institucional.   │ • Soporte híbrido: bot  │ Lado Demanda (Pasajeros)│
│   4 grupos de WhatsApp  │ • Gestión de pagos digi-│ • Liquidación instantá- │   FAQ + humano para     │ • Estudiantes de pregra-│
│   existentes (aliados). │   tales y custodia.     │   nea a conductores.    │   incidencias en viaje. │   do con trayectos >60m │
│ • Pasarelas de micropago│ • Soporte al usuario.   │ • Seguridad reforzada y │ • Compensación directa  │   en corredores Norte,  │
│   (Nequi, Daviplata,    ├─────────────────────────┤   visibilidad de género.│   al conductor por can- │   Occidente, Sur y Sabana│
│   Wompi / PSE).         │ 6. RECURSOS CLAVE       │ • Amortización efectiva │   celación tardía.      │ • Subsegmento: Pasajeras│
│ • Gremios y pólizas de  │                         │   de parqueadero y gas. │ • Viralidad por referi- │   con demanda de viaje  │
│   asistencia vial.      │ • Algoritmo y backend.  │                         │   dos entre facultades. │   solo mujeres.         │
│                         │ • Comunidad estudiantil.│                         ├─────────────────────────┤                         │
│                         │ • Equipo Data Science.  │                         │ 3. CANALES              │ Lado Oferta (Conductores│
│                         │ • Infraestructura cloud.│                         │                         │ • Estudiantes con carro │
│                         │                         │                         │ • Grupos de WhatsApp    │   propio que buscan     │
│                         │                         │                         │   existentes (tracción).│   amortizar parqueadero │
│                         │                         │                         │ • Embajadores campus.   │   ($22.000) y gasolina. │
│                         │                         │                         │ • App móvil iOS/Android.│                         │
├─────────────────────────┴─────────────────────────┴─────────────────────────┴─────────────────────────┴─────────────────────────┤
│ 9. ESTRUCTURA DE COSTOS                                   │ 5. FUENTES DE INGRESO                                               │
│                                                           │                                                                     │
│ • Infraestructura de servidores y base de datos (AWS/GCP).│ • Comisión por transacción (Take-rate de plataforma):               │
│ • Costo de pasarela de pagos (comisión por recaudo/API).  │   $1.000 a $1.200 COP por cupo efectivo reservado y viajado         │
│ • Gastos de soporte, verificación y operaciones.          │   (Pasajero paga $8.000 COP; Conductor recibe $6.800-$7.000 COP).   │
│ • CAC en corto plazo (tiempo de fundadores y material).   │ • Modelo de retención de valor: cero costo fijo de suscripción.     │
└───────────────────────────────────────────────────────────┴─────────────────────────────────────────────────────────────────────┘
```

---

## 👥 1. Segmento de Clientes

### 1.1 Segmentación del Mercado (Aulet, Paso 1)
Se evaluaron cuatro segmentos potenciales dentro de la comunidad de la Universidad Externado de Colombia:

| Segmento Evaluado | Capacidad de Pago | Acceso al Cliente | Urgencia del Dolor | Intensidad Competitiva | Decisión Estratégica |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **A. Estudiantes Pasajeros en Corredores de Alta Dispersión** (Suba, Calle 80, Bosa, Kennedy, Facatativá) | Media (\$8.000/viaje) | Inmediato (Pares) | **Crítica (90-150 min viaje)** | Baja (SITP saturado) | **SELECCIONADO (Beachhead Demand)** |
| **B. Estudiantes Conductores con Carro Propio** (2.° a 10.° semestre) | Alta (vehículo propio) | Inmediato (Parqueaderos/Campus) | **Alta (\$22.000 parqueadero)** | Media (WhatsApp) | **SELECCIONADO (Beachhead Supply)** |
| **C. Docentes y Personal Administrativo** | Alta | Medio-Bajo | Media | Alta (horarios rígidos / Uber) | *Descartado para etapa inicial* |
| **D. Estudiantes de Trayectos Cortos** (Chapinero / La Candelaria) | Media | Inmediato | Media (dolor de filtro) | Media (caminar / TransMilenio) | *Incorporado como mercado secundario* |

### 1.2 Mercado Cabeza de Playa / Beachhead Market (Aulet, Paso 2)
El mercado cabeza de playa elegido comprende a los **estudiantes de pregrado de la Universidad Externado de Colombia que viajan diariamente al campus desde corredores periféricos y municipios aledaños (Norte, Occidente, Sur y Sabana Occidente), junto con los estudiantes que ingresan en vehículo particular**.
- **Justificación:** Cumple las tres condiciones de Aulet:
  1. Los clientes compran productos similares (usan la misma tarifa de referencia de \$6.000-\$8.000 COP).
  2. Tienen un ciclo de ventas idéntico (horarios pico universitarios de 7:00 am y 9:00 am).
  3. Existe un **efecto boca a boca de alta densidad**: los estudiantes comparten facultades, semestres y grupos de WhatsApp, permitiendo una recomendación viral inmediata.

### 1.3 Perfil del Usuario Final y Personas (Aulet, Pasos 3 y 5)

#### Persona 1: Conductor Externadista Amortizador ("Daniel")
- **Datos demográficos:** 21 años, estudiante de 7.° semestre de Ingeniería Industrial, reside en Fontibón / Calle 26 *(basado en E12 y E5)*.
- **Comportamiento:** Conduce diariamente su vehículo al campus; gasta \$22.000 COP diarios de parqueadero más \$30.000 de gasolina cada 3 días.
- **Dolor crítico:** Publica cupos en 3 chats; le escriben 10 personas pero 2 le cancelan 10 minutos antes (*ghosting*), perdiendo \$12.000 COP netos y teniendo que pagar el parqueadero de su propio bolsillo.
- **Objetivo:** Amortizar sus costos fijos sin perder tiempo en cobrar en efectivo ni discutir por cambios.

#### Persona 2: Pasajera Externadista de Larga Distancia ("Camila")
- **Datos demográficos:** 19 años, estudiante de 3.er semestre de Derecho, reside en Timiza / Kennedy *(basada en E9 y E2)*.
- **Comportamiento:** Sale de su casa a las 5:20 am para llegar a clase de 7:00 am; gasta 100 minutos en SITP/TransMilenio con dos transbordos.
- **Dolor crítico:** La incertidumbre de no saber si encontrará Wheels; el miedo a bajarse a oscuras en un paradero solitario; y el estrés de subirse a un carro sin saber quién maneja (le envía la placa a su mamá antes de subir).
- **Objetivo:** Garantizar su cupo desde la noche anterior, viajar con personas verificadas de la universidad y llegar en 45 minutos sentada y tranquila.

### 1.4 Tamaño del Mercado Total (TAM) (Aulet, Paso 4)

#### Cálculo Top-Down (De arriba hacia abajo):
- Total estudiantes universitarios presenciales en Bogotá: ~750.000 estudiantes.
- Estudiantes en universidades de cerros orientales / zona centro (Externado, Andes, Rosario, América, Central): ~65.000 estudiantes.
- Participación estimada de viajes en carpooling / vehículo compartido (15%): ~9.750 viajes diarios.
- Ingreso anual por comisiones de plataforma (\$2.000 COP/día x 160 días académicos): **TAM Regional = \$3.120 millones de COP/año (~$780.000 USD)**.

#### Cálculo Bottom-Up (De abajo hacia arriba - Beachhead Externado):
- Comunidad total estudiantil Externado: **12.000 estudiantes**.
- Proporción en corredores críticos que demandan Wheels: **20% = 2.400 estudiantes activos**.
- Frecuencia media de uso: **4 días por semana (8 trayectos semanales x 32 semanas académicas = 256 viajes/año por usuario)**.
- Comisión neta de la plataforma: **\$1.000 COP por viaje reservado**.
- **TAM Cabeza de Playa (Externado):**  
  $$2.400 \text{ usuarios} \times 256 \text{ viajes/año} \times \$1.000 \text{ COP} = \mathbf{\$614.400.000 \text{ COP/año}} \approx \mathbf{\$153.600 \text{ USD/año}}.$$

### 1.5 Primeros 10 Clientes (Aulet, Paso 9)

Derivados directamente del Trabajo de Campo 2 (verificados y codificados según Ley 1581 de 2012):

| Cód. | Rol | Carrera / Semestre | Corredor / Procedencia | Disposición a Pagar / Uso | Probabilidad de Adopción |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **E1** | Pasajero | Derecho (8.°) | La Floresta / Cll 80 | \$8.000 COP / 4 días sem. | **Alta (95%)** |
| **E2** | Pasajero | Ciencia de Datos (4.°) | Facatativá / Calle 13 | \$10.000 COP / 5 días sem. | **Muy Alta (99%)** |
| **E3** | Pasajero | Adm. Empresas (6.°) | Suba / Av. Boyacá | \$8.000 COP / 4 días sem. | **Alta (90%)** |
| **E4** | Pasajero | Enfermería (5.°) | Bosa / Autopista Sur | \$8.000 COP / 3 días sem. | **Alta (85%)** |
| **E5** | Conductor | Economía (7.°) | Cedritos / Autonorte | Amortiza \$22k parqueadero | **Muy Alta (95%)** |
| **E6** | Pasajero | Derecho (2.°) | San Cristóbal Sur | \$8.000 - \$15.000 COP (parciales) | **Alta (90%)** |
| **E7** | Conductor | Ciencia de Datos (5.°) | Salitre / Cll 26 | Amortiza 4 cupos diarios | **Muy Alta (99%)** |
| **E8** | Pasajero | Comunicación Social (3.°) | Colina Campestre | \$8.000 COP / 3 días sem. | **Alta (85%)** |
| **E9** | Pasajera | Derecho (6.°) | Timiza / Kennedy | \$8.000 COP / Viaje Seguro Chicas | **Muy Alta (100%)** |
| **E10**| Pasajero | Ing. Industrial (4.°) | Chapinero / Cll 67 | \$7.000 COP / Filtro rápido | **Alta (90%)** |

### 1.6 Evidencias de los Experimentos

#### 1.6.1 Métodos de Ciencia de Datos e Investigación de Mercados
1. **Entrevistas semiestructuradas a profundidad:** Aplicación de guía de 16 preguntas a $N=12$ informantes clave (8 pasajeros y 4 conductores), procesadas con codificación temática y conteo de frecuencias de dolor.
2. **Análisis de grafos y corredores de movilidad:** Mapeo de clusters de origen-destino de los estudiantes externadistas, identificando 4 corredores troncales de alta densidad.
3. **Prueba de concepto visual:** Validación de mockup de 3 pantallas con solicitud formal de compromiso para prueba de usabilidad en Campo 3.

#### 1.6.2 Pasos del Experimento y Decisiones

| Experimento / Hipótesis | Métrica Clave | Criterio de Éxito fijado *ex ante* | Muestra | Resultado Obtenido | Decisión Metodológica |
| :--- | :--- | :---: | :---: | :---: | :---: |
| **H1 (Problema):** Saturación e inseguridad en WhatsApp | Proporción que reporta ineficiencia y ejemplos | $\ge 10 / 12$ ($83,3\%$) | 12 | **12 / 12 ($100\%$)** | **VALIDADA** (Perseverar en solucionar la coordinación) |
| **H2 (Compra):** Disposición de pago (\$8.000) y amortización | Frecuencia de tarifa \$6.000 y aceptación de prima | $\ge 9 / 12$ ($75,0\%$) | 12 | **12 / 12 ($100\%$)** | **VALIDADA** (Fijar take-rate de \$1.000 COP) |
| **H3 (Relación):** Verificación institucional y compromiso | Condición de correo `@uexternado` y prueba MVP | $\ge 8/12$ cond. y $\ge 4/12$ prueba | 12 | **11 / 12 cond. y 8 / 12 prueba** | **VALIDADA** (Paso a Campo 3) |

---

## 💎 2. Propuesta de Valor

### 2.1 Core del Negocio (Aulet, Paso 10)
El *Core* que hace a Wheels Externado difícil de copiar no es el software en sí, sino el **efecto de red hiperlocal en comunidad cerrada respaldado por verificación institucional**:
1. **Foso defensivo de confianza:** Integración directa con las credenciales de la Universidad Externado de Colombia, garantizando que el 100% de los usuarios son estudiantes o profesores activos. Una app abierta (como Uber o InDrive) no puede ofrecer este entorno cerrado de seguridad sin sacrificar su modelo masivo.
2. **Densidad de ruteo sincronizado:** Algoritmo que agrupa viajes con un único destino consolidado (el campus de La Candelaria) en franjas horarias estrictamente sincronizadas con los bloques de clase (7:00 am, 9:00 am, 11:00 am).

### 2.2 Prototipo como Portafolio de Valor (Aulet, Pasos 7 y 8)

| Dimensión de Valor | Cuantificación y Beneficios Validados en Campo |
| :--- | :--- |
| **Valor Entregado al Usuario (Pasajero y Conductor)** | • **Ahorro de tiempo diario:** Reducción de 90-150 minutos en bus a 45 minutos en Wheels (ahorro de hasta 10 horas semanales de tiempo útil).<br>• **Ahorro monetario:** Frente al taxi/Uber (\$30.000 COP), el pasajero ahorra \$22.000 COP por viaje.<br>• **Cero estrés de cupo:** El pasajero reserva con cupo garantizado la noche anterior.<br>• **Ingreso predecible para el conductor:** Amortización de \$18.000 a \$24.000 COP diarios con pago digital asegurado y compensación por *ghosting*. |
| **Valor Compartido con la Sociedad y Medioambiente** | • **Descongestión urbana:** Sustitución de 3 vehículos particulares individuales por 1 vehículo compartido de alta ocupación (factor de ocupación de 3,5 pax/vehículo).<br>• **Reducción de huella de carbono:** Ahorro estimado de 1,2 kg de $CO_2$ por trayecto compartido en corredores de 18 km.<br>• **Seguridad comunitaria y equidad:** Creación de rutas seguras para estudiantes mujeres y disminución de riesgos de hurto en paraderos solitarios. |

---

## 📢 3. Canales y Proceso de Ventas

### 3.1 Proceso de Adquisición de Clientes (Aulet, Pasos 12 y 13)
- **Unidad Tomadora de Decisiones (DMU):**
  - *Usuario:* Estudiante pasajero / Conductor externadista.
  - *Comprador / Pagador:* El estudiante (decisión B2C autónoma financiada por su mesada/presupuesto de transporte).
  - *Influenciadores:* Amigos de carrera, compañeros de corredor y líderes de grupos de WhatsApp.
  - *Vetadores potenciales:* Padres de familia (especialmente en pasajeras jóvenes), mitigados al 100% gracias a la verificación institucional y el viaje compartido en GPS.
- **Camino del Cliente (Customer Journey):**
  1. *Descubrimiento (Día 1):* El estudiante ve la invitación y enlace en su grupo de WhatsApp de Wheels habitual.
  2. *Registro y Validación (2 minutos):* Descarga la app, ingresa con su correo `@uexternado.edu.co` y valida su número móvil.
  3. *Reserva / Publicación (1 minuto):* Selecciona su corredor y horario; efectúa el pago digital seguro con Nequi.
  4. *Viaje y Cierre (45 minutos):* Aborda en el punto acordado, viaja monitoreado y califica al cerrar.

### 3.2 Embudo de Ventas a Corto, Mediano y Largo Plazo (Aulet, Paso 18)

| Horizonte | Canal Dominante | Estrategia de Venta | Tasa de Conversión Estimada |
| :--- | :--- | :--- | :---: |
| **Corto Plazo (Año 1)** | Directo en Campus & Grupos de WhatsApp | Venta personal directa de los fundadores en facultades y migración guiada de los 4 chats existentes. | **40% de contactados activos** |
| **Mediano Plazo (Años 2-3)** | Alianzas Institucionales & Embajadores | Integración en la semana de inducción de Bienestar Universitario y embajadores por facultad. | **25% de penetración global** |
| **Largo Plazo (Años 4-5)** | Crecimiento Viral Orgánico & Escalabilidad | Red de referidos automatizada ("comparte tu ruta y gana \$2.000 COP") y expansión a campus contiguos (Andes / Rosario). | **35% de conversión viral** |

---

## 🤝 4. Relación con Clientes

Siguiendo el marco de Steve Blank (*Customer Relationship Lifecycle*):
1. **Conseguir (Get):** Adquisición apalancada en la verificación institucional (`@uexternado.edu.co`) como disparador unánime de confianza (11/12 la exigen para abordar), acompañada de incentivos de primer viaje con cupo garantizado.
2. **Retener (Keep):** Excelente experiencia de usuario (tiempo de publicación $<1$ minuto), transferencias inmediatas de saldo a Nequi para los conductores, y sistema anti-ghosting que castiga las cancelaciones tardías y protege el ingreso del conductor.
3. **Crecer (Grow):** Activación de referidos por corredor (8 de 12 entrevistados ofrecieron contactos directos de su zona) y extensión del servicio a eventos nocturnos institucionales o jornadas de integración deportiva.

---

## ⚙️ 6. Recursos Clave
- **Físicos:** Flota vehicular privada preexistente de los estudiantes conductores (cero costo de capital en activos fijos).
- **Humanos:** Equipo multidisciplinar de 5 estudiantes de Ciencia de Datos (desarrollo móvil, backend, ingeniería de datos y soporte).
- **Tecnológicos:** Arquitectura cloud elástica en Firebase/Supabase, API de mapas (Mapbox), pasarela de pagos integrada (Wompi/Nequi API).
- **Financieros:** Capital semilla inicial autofinanciado (\$1.500.000 COP) para licencias de desarrollador (Apple/Google Play) e infraestructura cloud de los primeros 6 meses.

---

## 🔄 7. Actividades Clave
1. **Desarrollo y Mantenimiento Tecnológico:** Mantenimiento de servidores, optimización del algoritmo de coincidencia de rutas y parches de seguridad.
2. **Gestión de Confianza y Verificación:** Validación automatizada de correos institucionales activos y auditoría periódica de perfiles.
3. **Conciliación Financiera y Dispersión de Pagos:** Liquidación diaria de recaudos a los conductores y conciliación de saldos en custodia.
4. **Soporte y Atención al Cliente:** Canal híbrido para resolución de incidencias en viaje y mediación en cancelaciones.

---

## 🤝 8. Asociaciones Clave
1. **Universidad Externado de Colombia:** Decanatura de Estudiantes y Bienestar Universitario (aliado institucional clave para respaldo institucional y difusión en canales oficiales).
2. **Administradores de Grupos de WhatsApp Actuales:** Integración de los estudiantes que hoy gestionan los grupos informales como moderadores o embajadores iniciales con beneficios.
3. **Plataformas de Pago Móvil (Nequi / Daviplata / Wompi):** Habilitadores tecnológicos para recaudos instantáneos y transferencias de bajo costo.
4. **Compañías de Seguros y Asistencia Vial:** Alianza a mediano plazo para incorporar microseguros de accidentes personales durante el trayecto.
