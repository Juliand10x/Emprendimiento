# Entrega 2: Canvas y Análisis Detallado (Metodología Aulet & Osterwalder)
## Proyecto: Wheels Externado — Plataforma Inteligente de Movilidad Compartida (Carpooling)

**Curso:** Emprendimiento (Pregrado en Ciencia de Datos)  
**Institución:** Universidad Externado de Colombia — Semestre 2026-II  
**Grupo 5:** Santiago Sandoval, Sebastián Ramos, Julián Duarte, Tomás Rincón, Julián Jiménez  

---

## 📌 Resumen Ejecutivo de la Entrega 2
La presente entrega desarrolla el **Lienzo Business Model Canvas (BMC)** gráfico y el **análisis detallado de los 19 pasos aplicables de la metodología de Bill Aulet (*Disciplined Entrepreneurship*, 2017)** agrupados en las 4 preguntas estratégicas clave, adaptados 100% al proyecto **Wheels Externado** y respaldados por los hallazgos de campo y la analítica de Ciencia de Datos.

---

# PARTE 1: Lienzo Gráfico Business Model Canvas (BMC)
Desglose formal de los 9 componentes con énfasis en los bloques clave solicitados: **Portafolio de Valor, Segmentos, Canales y Fuentes de Ingresos**.

| 8. Asociaciones Clave | 7. Actividades Clave | 2. Propuesta / Portafolio de Valor | 4. Relaciones con Clientes | 1. Segmentos de Clientes |
| :--- | :--- | :--- | :--- | :--- |
| • Universidad Externado de Colombia (Decanatura de Estudiantes y Bienestar Universitario).<br>• Administradores de parqueaderos de La Candelaria y campus.<br>• Billeteras digitales móviles (Nequi, Daviplata, PSE / Wompi).<br>• Proveedores de APIs de mapas y geocodificación (Mapbox / OpenStreetMap). | • Matching algorítmico y optimización de rutas por corredores.<br>• Autenticación federada obligatoria con correo `@uexternado.edu.co`.<br>• Conciliación transaccional y garantía de custodia de pagos (Escrow).<br>• Mantenimiento y despliegue continuo de la PWA móvil. | • **Certeza Absoluta de Cupo:** Reserva garantizada desde la noche anterior; fin a la lotería de WhatsApp.<br>• **Comunidad 100% Verificada:** Seguridad integral entre pares externadistas.<br>• **Ahorro Radical de Tiempo:** Reducción de 50 a 65 minutos por trayecto frente a TransMilenio.<br>• **Economía Justa y Amortización:** Conductor amortiza parqueadero ($22.000) y gasolina; pasajero viaja cómodo por $8.000 COP. | • Comunidad cerrada de mutua confianza, respeto y empatía.<br>• Transparencia radical en tarifas (cero cobros dinámicos abusivos).<br>• Política estricta anti-ghosting con indemnización al conductor.<br>• Soporte ágil dentro de la app para contingencias. | • **Pasajeros Externadistas:** Estudiantes y colaboradores sin carro propio con trayectos >60 min hacia los cerros orientales (Kennedy, Bosa, Suba, Engativá, Soacha, Sabana Norte).<br>• **Conductores Externadistas:** Miembros de la comunidad con vehículo particular y 3 a 4 cupos desocupados que buscan amortizar parqueadero ($22.000/día) y gasolina. |
| **6. Recursos Clave** | | | **3. Canales** | |
| • Algoritmo de emparejamiento geoespacial y grafo vial.<br>• Flota vehicular privada ociosa de los estudiantes.<br>• Directorio institucional de estudiantes activos.<br>• Equipo técnico de Ciencia de Datos y Desarrollo de Software. | | | • PWA móvil responsiva y app nativa.<br>• Migración guiada desde los 4 grupos activos de WhatsApp.<br>• Campañas de activación física en campus (Marketing de Guerrilla).<br>• Inducciones de Bienestar Universitario y voz a voz viral. | |
| **9. Estructura de Costos** | | | **5. Fuentes de Ingresos** | |
| • Servidores cloud elásticos (AWS / GCP / Supabase): ~$280.000 COP/mes.<br>• APIs de geocodificación y mapas: ~$120.000 COP/mes.<br>• Costo transaccional por pasarela de pagos: $200 COP por cupo procesado.<br>• Activación en campus y material publicitario: ~$150.000 COP/mes.<br>• Licencias de desarrollo, mantenimiento y soporte. | | | • **Comisión de Intermediación (Take-Rate):** $1.200 COP (15%) por cupo completado sobre la tarifa de $8.000 COP (el conductor recibe $6.800 COP netos).<br>• **Penalización por Cancelación Tardía (Anti-Ghosting):** Retención de $4.000 COP si se cancela a menos de 30 min ($3.200 se transfieren al conductor y $800 a la plataforma).<br>• **Convenios Institucionales Futuros:** Validación para parqueadero preferencial compartido con la universidad. | |

---

# PARTE 2: Análisis Detallado por Preguntas y Pasos de Bill Aulet

---

## BLOQUE 1: ¿Quién es tu cliente?

### 1. Segmentación del Mercado (Paso 1 Aulet)
Se segmentó la población total de la Universidad Externado (~12.000 estudiantes) en 4 grupos representativos:
1. *Estudiantes de pregrado periféricos sin vehículo:* Viven a más de 15 km del campus (Suba, Kennedy, Bosa, Portal 80, Sabana Norte). Padecen trayectos de 90 a 140 minutos en TransMilenio. Representan el 42% del alumnado.
2. *Estudiantes con vehículo particular propio:* Viajan solos o con 1 compañero hacia el campus. Asumen costos fijos severos de parqueadero ($22.000 diarios / $440.000 mensuales) y combustible ($250.000/mes). Representan el 18% del alumnado.
3. *Estudiantes en zonas céntricas o intermedias (Chapinero, Teusaquillo):* Tiempos de viaje menores a 40 minutos en bus o bicicleta. Baja sensibilidad al dolor de transporte (25%).
4. *Docentes y funcionarios administrativos:* Horarios fijos, capacidad de pago superior, pero con patrones de desplazamiento más rígidos (15%).

### 2. Mercado Inicial Seleccionado (Beachhead Market - Paso 2 Aulet)
- **Selección:** *Estudiantes de pregrado de facultades con alta carga horaria matutina (Derecho, Finanzas, Economía, Comunicación) que residen en corredores viales críticos (Calle 80, Calle 26, Autopista Norte y Américas) y viajan hacia el campus entre las 6:30 am y las 8:00 am.*
- **Justificación:** Cumple con las 3 condiciones de Aulet: (1) Los clientes compran productos similares (usan activamente los grupos de WhatsApp de Wheels); (2) Tienen un proceso de compra idéntico y presupuesto similar ($6.000 a $8.000 COP por trayecto); (3) Cuentan con un boca a boca extraordinariamente rápido dentro de las aulas y cafeterías del campus.

### 3. Perfil del Usuario Final (Paso 3 Aulet)
- **Rango de Edad:** 18 a 24 años.
- **Nivel Formativo:** Pregrado en curso (2.° a 8.° semestre).
- **Dotación Tecnológica:** 100% usuarios de smartphone (iOS/Android), con GPS activo y cuentas bancarias móviles (Nequi / Daviplata).
- **Hábito de Movilidad:** Se desplazan de lunes a viernes hacia La Candelaria; experimentan estrés y fatiga matutina por el hacinamiento y retrasos de TransMilenio.

### 4. Tamaño del Mercado Total Disponible (TAM) para el Beachhead (Paso 4 Aulet)
- **Población en el Beachhead:** ~2.400 estudiantes activos con desplazamientos diarios desde corredores periféricos.
- **Frecuencia Anual:** 4 viajes semanales $\times$ 32 semanas académicas = 128 viajes por sentido (256 trayectos anuales de ida y vuelta).
- **Valor Transaccional Bruto Anual (GMV):**  
  $$2.400 \text{ estudiantes} \times 256 \text{ viajes} \times \$8.000 \text{ COP} = \mathbf{\$4.915.200.000\text{ COP/año}} \quad (\approx \$1.228.800\text{ USD/año})$$
- **TAM de Ingresos para Wheels Externado (Take-rate de \$1.200 COP / 15%):**  
  $$2.400 \times 256 \times \$1.200 \text{ COP} = \mathbf{\$737.280.000\text{ COP/año}} \quad (\approx \$184.320\text{ USD/año})$$

### 5. Perfil de la "Persona" para el Mercado Inicial (Paso 5 Aulet)
- **Nombre:** Camila Sánchez.
- **Perfil:** 19 años, estudiante de 3.er semestre de Derecho en el Externado. Reside en Timiza (localidad de Kennedy, Sur-Occidente de Bogotá).
- **Rutina Cotidiana:** Su primera clase inicia a las 7:00 am en el Bloque A. Debe levantarse a las 5:10 am para tomar el alimentador y TransMilenio en el Portal Américas hasta la estación Las Aguas. El viaje dura entre 90 y 110 minutos de pie, con riesgo constante de cosquilleo y una subida empinada y fría por La Candelaria.
- **Prioridad Número Uno:** Certeza de llegar a tiempo y seguridad física (especialmente como mujer en paraderos solitarios a primera hora de la mañana).
- **Comportamiento en WhatsApp:** Intenta conseguir cupo en los grupos la noche anterior, pero los mensajes son caóticos y rara vez logra escribir «yo» a tiempo antes de que otro gane el puesto.
- **Disposición a Pagar (WTP):** Pagaría gustosa $8.000 COP (frente a los $6.000 informales) si tiene el asiento asegurado desde las 9:00 pm de la víspera con una conductora o compañero verificado.

### 9. Próximos 10 Clientes Identificados (Paso 9 Aulet)
Basados en las validaciones de campo y usuarios activos de los grupos de WhatsApp de Wheels:
1. *Federico P. (7.° semestre Finanzas, conductor desde Colina Campestre - Autonorte):* Busca amortizar $22.000 de parqueadero.
2. *David C. (5.° semestre Derecho, conductor desde Modelia - Calle 26):* Quiere compañeros fijos y puntuales.
3. *Samuel C. (4.° semestre Economía, pasajero desde Cedritos):* Cansado de que le cancelen a última hora.
4. *Sebastián Z. (6.° semestre Ciencia de Datos, pasajero desde Kennedy):* Necesita reservar cupo la noche anterior para optimizar tiempo de estudio.
5. *Claudio E. (8.° semestre Derecho, conductor desde Chía / Cota):* Trayecto largo y peaje costoso; necesita llenar 4 cupos diarios.
6. *Juan José M. (3.er semestre Finanzas, conductor desde Salitre):* Le incomoda cobrar en efectivo o que no le transfieran a tiempo por Nequi.
7. *Mauricio T. (5.° semestre Gobierno, pasajero desde Suba Rincón):* Tarda 2 horas en SITP; prefiere pagar $8.000 por ir sentado en 50 min.
8. *Sebastián S. (4.° semestre Derecho, pasajero desde Américas):* Exige filtro de verificación para evitar subirse con extraños.
9. *Valentina R. (3.er semestre Derecho, pasajera desde Castilla):* Prioriza rutas exclusivas de conductoras mujeres.
10. *Daniel M. (6.° semestre Administración, conductor desde Villas de Granada - Calle 80):* Quiere penalización si le hacen ghosting a las 6:15 am.

---

## BLOQUE 2: ¿Qué puedes hacer por tu cliente?

### 6. Caso de Uso del Ciclo de Vida Completo (Paso 6 Aulet)
1. *Descubrimiento:* Camila ve un adhesivo con código QR en la cafetería del Bloque E o una invitación en el grupo de WhatsApp del curso.
2. *Registro y Verificación:* Descarga la PWA e inicia sesión con Google SSO usando su cuenta `@uexternado.edu.co`. Valida su identidad con el carné institucional en 30 segundos.
3. *Búsqueda y Reserva:* A las 8:30 pm filtra por el corredor «Américas - Primero de Mayo» con llegada 7:00 am. Encuentra la ruta de Daniel, selecciona el punto de recogida (Plaza de las Américas) y reserva su cupo con débito automático de su saldo Nequi ($8.000 COP).
4. *Confirmación:* La app notifica a Daniel y a Camila. El cupo queda garantizado; el dinero queda en custodia en la plataforma.
5. *Día del Viaje:* Daniel llega al punto a las 6:10 am. Camila aborda el vehículo. La app monitorea la trayectoria por GPS y calcula el tiempo estimado de llegada al campus (6:52 am).
6. *Finalización y Pago:* Al llegar al parqueadero del Externado, Daniel escanea el código QR de Camila. El viaje finaliza: se transfieren $6.800 netos a Daniel y la plataforma retiene $1.200 de comisión. Ambos se califican mutuamente con 5 estrellas.

### 7. Especificación de Alto Nivel del Producto (Paso 7 Aulet)
El producto está concebido como una PWA (Progressive Web App) ligera desarrollada en JavaScript moderno y Leaflet Maps:
- *Pantalla 1 (Buscador Geoespacial de Rutas):* Selector visual de corredores (Calle 80, Calle 26, Norte, Américas, Suba, Boyacá, Chía), selector de franja horaria (7am, 8am, 9am) y visualización de cupos disponibles por vehículo con foto del conductor y calificación.
- *Pantalla 2 (Detalle y Reserva con Bóveda Escrow):* Muestra puntos exactos de parada sobre el mapa, vehículo (marca, placa y color), confirmación del débito en garantía ($8.000 COP) y política clara de cancelación anti-ghosting.
- *Pantalla 3 (Panel de Viaje en Vivo y Seguridad):* Monitoreo de ruta en tiempo real, botón de alerta institucional para compartir viaje con contactos de emergencia y generador de código QR offline para confirmación en sótanos.

### 8. Cuantificación de la Propuesta de Valor (Paso 8 Aulet)
Comparativa cuantitativa del estado actual (As-Is) frente al estado con Wheels Externado (To-Be):

| Métrica Clave | Situación Actual (TransMilenio / WhatsApp) | Con Wheels Externado (Propuesta de Valor) | Ganancia Neta para el Cliente |
| :--- | :--- | :--- | :--- |
| **Tiempo de Viaje (Puerta a Campus)** | 90 a 120 minutos por trayecto | 40 a 50 minutos directos | **Ahorro de 50 a 70 min diarios (25+ horas/mes)** |
| **Certeza de Cupo Matutino** | Incierta (lotería en chat; 35% cancelaciones) | 98% garantizada con depósito previo | **Cero estrés matutino y cero ghosting** |
| **Seguridad y Confianza** | Desconocidos en bus / grupos abiertos | 100% comunidad `@uexternado` verificada | **Paz mental y filtro de conductoras mujeres** |
| **Costo Diario Pasajero** | $6.400 en bus (o $35.000 en Uber de afán) | $8.000 COP fijos por trayecto | **Transporte VIP a fracción de tarifa de taxi** |
| **Recaudo Diario Conductor** | $18.000 informal con cobro incómodo | $27.200 COP netos asegurados (4 cupos) | **Cubre el 100% del parqueadero ($22k) + gasolina** |

### 10. Definición del Núcleo del Negocio (Core - Paso 10 Aulet)
El *Core* inexpugnable de Wheels Externado es su **Efecto de Red Hiperlocal Cerrado con Verificación Institucional Exclusiva y Algoritmo de Sincronización a Horarios Universitarios**.
- A gigantes del transporte como Uber o InDrive no les es rentable ni seguro operar una comunidad cerrada a $8.000 COP por viaje.
- A iniciativas estudiantiles informales les resulta imposible programar la arquitectura de ruteo, escrow de pagos y penalizaciones que ofrece la plataforma.

### 11. Posición Competitiva (Paso 11 Aulet)
Gráfico de posicionamiento estratégico en dos ejes determinantes:
- **Eje X (Horizontal):** *Seguridad y Verificación Comunitaria* (Baja en mercados abiertos $\rightarrow$ Alta en comunidades cerradas).
- **Eje Y (Vertical):** *Certeza Logística y Asequibilidad de Tarifa* (Baja en WhatsApp y taxis $\rightarrow$ Alta en Wheels).
- *Resultado:* **Wheels Externado se ubica en el cuadrante superior derecho (Océano Azul)**, mientras TransMilenio se ubica abajo a la izquierda (inseguro e incómodo) y Uber arriba a la izquierda (cómodo pero costoso y abierto).

---

## BLOQUE 3: ¿Cómo adquiere tu cliente tu producto?

### 12. Unidad de Toma de Decisiones (DMU) del Cliente (Paso 12 Aulet)
- **Usuario Final (Primary Beneficiary):** El estudiante (Camila / Daniel), quien disfruta del ahorro de tiempo o amortiza su vehículo.
- **Comprador Económico (Economic Buyer):** En el 65% de los casos de pregrado, el estudiante decide de forma autónoma con base en su mesada; en el 35% restante, los padres financian o aprueban el gasto de transporte por motivos de seguridad.
- **Influenciadores Clave:** Compañeros de carrera que comparten la misma ruta, profesores que exigen puntualidad estricta y líderes de Bienestar Universitario.
- **Campeón Interno (Champion):** El conductor que necesita llenar los 4 puestos de su carro a diario y convence a sus amigos de instalar la app.
- **Poder de Veto:** Padres de familia si perciben riesgos de seguridad (mitigado con la verificación institucional y el carné digital).

### 13. Mapeo del Proceso para Adquirir un Cliente de Pago (Paso 13 Aulet)
1. *Conciencia (Awareness):* Visualización de campañas de campus («Deja de pelear cupos en WhatsApp, viaja asegurado»), recomendaciones de amigos y carteles en parqueaderos.
2. *Interés y Descarga:* Escaneo de QR institucional y descarga de la PWA en menos de 10 segundos.
3. *Onboarding y Validación:* Registro con cuenta `@uexternado` y carga de carné digital.
4. *Activación (Primera Reserva):* Promoción de primer viaje con bono de bienvenida ($2.000 COP de saldo a favor).
5. *Retención y Hábito:* Reserva programada semanal de lunes a jueves; alertas matutinas automáticas.

### 18. Mapeo del Proceso de Ventas a Corto, Mediano y Largo Plazo (Paso 18 Aulet)
- **Corto Plazo (Año 1 - Beachhead):** *Venta de Guerrilla Directa y Migración Asistida.* El equipo fundador interviene activamente en los 4 grupos de WhatsApp existentes, contactando a los 30 conductores más activos para ofrecerles el beneficio de cobro automático y protección anti-ghosting.
- **Mediano Plazo (Años 2-3 - Expansión Campus):** *Alianza Institucional con Bienestar Universitario.* Inclusión de Wheels Externado en la agenda oficial de semanas de inducción de primíparos y carpas de registro en plazoletas.
- **Largo Plazo (Años 4-5 - Escalabilidad Multicampus):** *Efecto de Red Viral y Crecimiento Orgánico.* Apertura de corredores compartidos con universidades del centro histórico (Rosario, Andes, Central) apalancado en programas de referidos automáticos ($2.000 COP por invitado activo).

---

## BLOQUE 4: ¿Cómo ganas dinero con tu producto?

### 15. Diseño del Modelo de Negocio (Paso 15 Aulet)
- **Modelo:** *Comisión Transaccional por Intermediación (Take-Rate Marketplace).*
- La plataforma cobra una comisión fija y transparente del **15% (\$1.200 COP)** por cada cupo efectivamente viajado. No cobra mensualidades, ni tarifas de suscripción oculta, ni costos de descarga.
- Se complementa con ingresos extraordinarios por **penalización de cancelaciones tardías** ($800 COP para la plataforma y $3.200 para el conductor).

### 16. Establecimiento del Marco de Precios (Paso 16 Aulet)
- **Tarifa al Pasajero:** **\$8.000 COP** (fijada con base en el test de sensibilidad Van Westendorp; 80% de WTP positivo frente a los \$6.000 informales de WhatsApp).
- **Compensación al Conductor:** **\$6.800 COP netos** por asiento ocupado. Llenar el carro con 4 pasajeros genera **\$27.200 COP netos**, superando el costo diario de parqueadero (\$22.000) y dejando \$5.200 para gasolina.
- **Ingreso Bruto de la Plataforma:** **\$1.200 COP**.
- **Costo Marginal Transaccional Directo:** **\$200 COP** (comisión de pasarela API Nequi / Transfiya y cómputo de ruteo).
- **Margen de Contribución Unitario:** **\$1.000 COP (83,3% de margen bruto)**.

### 17. Cálculo del Valor de Vida del Cliente (LTV - Paso 17 Aulet)
Calculado rigurosamente siguiendo la metodología y plantilla de Bill Aulet (Capítulo 17), proyectado a **5 años (10 semestres de pregrado)** con una tasa de descuento del costo de capital propio $r = 50\%$ anual:

$$\text{LTV} = \sum_{t=1}^{5} \frac{\text{Margen Bruto Anual}_t \times \text{Retención}^t}{(1 + r)^t}$$

| Escenario | Viajes/Sem. | Viajes Anuales | Ingreso Plataforma/Año | Margen Bruto (83,3%) | Retención Anual | LTV Calculado a 5 Años |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Pesimista** | 3 viajes | 84 viajes | $100.800 COP | $75.600 COP | 70% | **$92.408 COP** |
| **Esperado** | 4 viajes | 128 viajes | $153.600 COP | $128.000 COP | 80% | **$174.897 COP** |
| **Optimista** | 6 viajes | 204 viajes | $244.800 COP | $208.080 COP | 85% | **$301.418 COP** |

### 19. Cálculo del Costo de Adquisición de Clientes (COCA / CAC - Paso 19 Aulet)
- **Corto Plazo (Año 1):** Estrategia de guerrilla en campus, código QR en mesas y moderación directa.
  - Gasto total de mercadeo/ventas mensual: $600.000 COP.
  - Nuevos usuarios activos al mes: 100 estudiantes.
  - **CAC Corto Plazo:** **$6.000 COP** (Rango: $4.000 a $8.000 COP).
- **Mediano Plazo (Años 2-3):** Inducciones institucionales y embajadores universitarios.
  - **CAC Mediano Plazo:** **$3.125 COP**.
- **Largo Plazo (Años 4-5):** Crecimiento viral orgánico y boca a boca.
  - **CAC Largo Plazo:** **$1.666 COP**.

### Cumplimiento Riguroso de la Regla de las 3X (LTV > 3 $\times$ CAC)
- **Razón LTV / CAC en el Corto Plazo:**  
  $$\frac{\text{LTV Esperado}}{\text{CAC Año 1}} = \frac{\$174.897}{\$6.000} = \mathbf{29,15 \times} \quad (\gg 3\times)$$
- Incluso en el escenario pesimista ($92.408 COP) contra el CAC más alto ($8.000 COP):  
  $$\frac{\$92.408}{\$8.000} = \mathbf{11,55 \times} \quad (\text{Supera ampliamente el estándar de sostenibilidad})$$
- En el mediano plazo la razón se eleva a **55,97$\times$** y en el largo plazo supera los **100$\times$**, demostrando la extraordinaria eficiencia de capital inherente a los mercados hiperlocales universitarios en comunidades cerradas.

---

## Conclusión de la Entrega 2
La presente Entrega 2 demuestra que **Wheels Externado** posee un modelo de negocio profundamente validado: responde con exactitud a los 19 pasos aplicables de Bill Aulet, cuenta con una propuesta de valor cuantitativa irremplazable frente al caos de WhatsApp y exhibe unit economics excepcionales ($LTV/CAC = 29,15\times$) que garantizan su viabilidad y escalabilidad financiera.

