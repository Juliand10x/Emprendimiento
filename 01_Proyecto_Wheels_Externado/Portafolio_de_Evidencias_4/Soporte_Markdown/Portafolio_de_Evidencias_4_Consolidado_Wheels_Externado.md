# Portafolio de Evidencias No. 4: Modelo de Negocio Consolidado
## Business Model Canvas (BMC), Unit Economics (LTV / CAC) e Impactos ODS

**Proyecto:** Wheels Externado — Plataforma Inteligente de Carpooling Universitario  
**Curso:** Emprendimiento | Pregrado en Ciencia de Datos  
**Institución:** Universidad Externado de Colombia  
**Fecha:** Octubre de 2026  
**Equipo 5:** Santiago Sandoval, Sebastián Ramos, Julián Duarte, Tomás Rincón, Julián Jiménez  

---

## 📌 Paso 0. La Idea: Impulso del Mercado, Empuje Tecnológico o Híbrida

De acuerdo con la metodología de Bill Aulet (*Disciplined Entrepreneurship*, 2017), el proyecto **Wheels Externado** se define como una **iniciativa híbrida con fuerte dominancia del impulso del mercado**: parte de una fricción cotidiana crítica y observada directamente en la comunidad universitaria (desplazamientos complejos, demorados e inseguros hacia los cerros orientales), habilitada por tecnologías masivas de georreferenciación, matching algorítmico y pagos digitales inmediatos.

### Mini Lienzo de la Idea (Aulet, 2017)

| Casilla | Formulación Estratégica del Proyecto |
| :--- | :--- |
| **1. Impulso del mercado** | Esta idea es relevante para **la comunidad de estudiantes y conductores de la Universidad Externado de Colombia (~12.000 miembros)** porque producirá un valor significativo al **eliminar la incertidumbre de viaje, el colapso de mensajes y el riesgo de inseguridad de los grupos informales de WhatsApp, garantizando cupos reservados, rutas sincronizadas y transacciones digitales sin fricción**. *(Evidencia: Campo 2, 12 de 12 entrevistados reportan saturación diaria y falta de certeza)*. |
| **2. Tecnología** | La tecnología que lo hace posible es **la integración de algoritmos de optimización de rutas y matching espacial en tiempo real, autenticación federada con correo institucional `@uexternado.edu.co` y pasarelas de micropagos móviles (Nequi / Daviplata / PSE)**, y hoy es viable porque **el 100% del segmento objetivo cuenta con smartphones con GPS activo, adopción generalizada de billeteras digitales y el hábito consolidado de compartir vehículo en canales informales**. |
| **3. Por qué nosotros** | Lo que hace al equipo especialmente capaz es la combinación de tres activos determinantes:<br>1. **Acceso directo e inmersión en el mercado:** Como estudiantes activos del Externado, los 5 integrantes vivimos a diario el problema de movilidad hacia el campus y formamos parte activa de los grupos informales de WhatsApp.<br>2. **Capacidad técnica en Ciencia de Datos e Ingeniería:** Perfiles especializados en arquitectura de datos, desarrollo backend/APIs, modelado de optimización de rutas geoespaciales y análisis de grafos para la asignación eficiente de cupos.<br>3. **Capacidad de validación rápida y bajo costo:** Posibilidad de reclutar, iterar y realizar pruebas de campo in situ dentro de nuestra propia comunidad sin barreras de entrada regulatorias corporativas. |

---

## 🏭 Paso 1. Análisis de la Industria

El análisis integra el **Diamante de Porter** (condiciones contextuales de la industria de movilidad compartida universitaria en Bogotá) y las **Cinco Fuerzas de Porter** (intensidad competitiva y atractivo de entrada), concluyendo de manera explícita la viabilidad de entrada para Wheels Externado.

### 1a. Condiciones de los factores y poder de negociación de los proveedores
- **Recursos requeridos:** Vehículos particulares de estudiantes con cupos disponibles (oferta), infraestructura vial de Bogotá (corredores Calle 80, Calle 26, Autopista Norte, Av. Boyacá, Av. Circunvalar), conectividad móvil 4G/5G y servicios en la nube (AWS/Google Cloud) para base de datos y algoritmos.
- **Poder de negociación de los proveedores (Conductores externadistas):** **Medio-Alto**. Los conductores no dependen de la plataforma para subsistir; su motivación exclusiva es **amortizar costos fijos diarios de parqueadero (\$22.000 COP) y gasolina** *(Campo 2, E5, E7, E11, E12)*. Si una app les cobra comisiones abusivas (que reduzcan su recaudo neto a $<\$5.000$ por cupo) o les retrasa el pago, sencillamente vuelven al WhatsApp directo.
- **Conclusión de entrada:** **Favorece la entrada condicionada a una baja fricción y take-rate moderado**. La oferta vehicular ya existe y está ociosa; diseñar un modelo que respete la rentabilidad del conductor y liquide al instante asegura la fidelidad de la oferta.

### 1b. Condiciones de la demanda y poder de negociación de los clientes
- **Fricciones y necesidades no resueltas:** Tiempos de desplazamiento extremos de 90 a 150 minutos en transporte público; necesidad de realizar transbordos y caminar tramos inclinados en horas de baja luminosidad; incertidumbre total en WhatsApp (cupos ganados por milisegundos); y temor por seguridad personal *(Campo 2, E1, E2, E9, E10)*.
- **Poder de negociación de los clientes (Pasajeros):** **Bajo-Medio individualmente, pero con alta elasticidad de sustitución**. El pasajero no puede imponer el precio (\$6.000 es la tarifa uniforme orgánica), pero si la app impone recargos excesivos ($>\$8.000$), se ve forzado a regresar a TransMilenio o al riesgo de WhatsApp.
- **Conclusión de entrada:** **Altamente favorable**. Existe una demanda cautiva, insatisfecha y con disposición a pagar (*Willingness to Pay*) una prima de valor del +33% (\$8.000 COP) por certeza y seguridad.

### 1c. Industrias relacionadas y de apoyo, y amenaza de sustitutos
- **Sectores de apoyo:** Ecosistema fintech de pagos de bajo monto (Nequi, Daviplata, Transfiya), plataformas de mapas y geocodificación (Mapbox, OpenStreetMap, Google Maps Platform), y la propia Universidad Externado (Decanatura de Estudiantes y Bienestar Universitario).
- **Amenaza de sustitutos:** **Alta en volumen, Baja en paridad de valor**.
  - *TransMilenio / SITP:* Tarifa baja (\$3.200 COP), pero tiempos excesivos (2 horas), incomodidad y riesgo de hurto.
  - *Ride-hailing masivo (Uber / DiDi / Cabify):* Cómodo y seguro, pero costo prohibitivo para estudiantes (\$25.000 a \$45.000 COP por trayecto).
  - *No hacer nada (seguir en grupos de WhatsApp):* Gratis pero altamente ineficiente e incierto.
- **Conclusión de entrada:** **Favorece la entrada**. No existe en el mercado un sustituto que entregue simultáneamente **tarifa estudiantil (\$7.000 - \$8.000) + comunidad cerrada verificada + ruta directa puerta a campus**.

### 1d. Estrategia, estructura y rivalidad competitiva

#### Matriz Comparativa de 5 Competidores Directos e Indirectos

| Competidor | Actividad | Problema que resuelve | Producto principal | Dónde opera | Ventas anuales / Escala | En qué se parece a nosotros | En qué nos diferenciamos |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Grupos de WhatsApp de Wheels Externado** | Carpooling informal entre pares | Conecta oferta y demanda de cupos sin intermediarios formales | Chats grupales administrados por estudiantes | Universidad Externado de Colombia | \$0 facturación formal; opera ~300-500 viajes/semana informales | Comunidad estudiantil idéntica; misma tarifa base (\$6.000 COP) | **WhatsApp no tiene filtros de ruta, ni reservas garantizadas, ni verificación institucional, ni reputación, ni pagos integrados.** |
| **2. InDrive** | Plataforma de movilidad por negociación de precio (P2P) | Transporte urbano directo a tarifa negociable | App móvil con contraoferta de precio | Nacional / Internacional (Bogotá activa) | Ingresos globales >\$200M USD (empresa privada) | Viajes en vehículos particulares con fijación de precio | **InDrive es un mercado abierto no verificado (riesgo de seguridad), sin sincronización de horarios académicos ni tarifa fija estudiantil.** |
| **3. Uber / DiDi** | Plataformas de intermediación de viajes bajo demanda (*Ride-hailing*) | Movilidad puerta a puerta rápida y monitoreada | Apps móviles con tarifas dinámicas y GPS | Global / Cobertura total en Bogotá | Facturación multimillonaria en dólares; líderes de mercado | Tecnología de reserva, rastreo GPS y pasarela de pago digital | **Sus tarifas (\$25.000-\$45.000 COP) son inviables para uso diario universitario (3 a 5 veces más caras que Wheels).** |
| **4. TransMilenio / SITP** | Sistema de transporte público masivo de Bogotá | Movilidad urbana masiva de bajo costo | Buses troncales y zonales | Bogotá y Soacha | Empresa pública / ingresos tarifarios billonarios | Mueve a la gran masa de estudiantes hacia la zona centro | **Tiempos de viaje 2 a 3 veces mayores (90-150 min), congestión extrema, falta de confort y riesgo de seguridad.** |
| **5. Try My Ride / Movilidad Corporativa** | Software de carpooling institucional y empresarial | Reducción de huella de carbono y congestión en organizaciones | App B2B con métricas de sostenibilidad | Bogotá, Medellín, empresas y universidades selectas | Pyme tecnológica especializada (ingresos B2B) | Enfoque de carpooling en comunidad cerrada (B2B/institucional) | **Enfoque rígido en compliance corporativo; no resuelve el dinamismo P2P, los micropagos inmediatos ni la penetración orgánica en el Externado.** |

- **Conclusión de entrada:** **Oportunidad de Océano Azul en nicho universitario cerrado**. La rivalidad tradicional se disputa en el mercado abierto de alta tarifa (Uber vs. DiDi) o en el transporte público masivo. El segmento de carpooling universitario no tiene un actor tecnológico dominante y formalizado.

### 1e. Tamaño de la Industria y Mercado de Referencia
- **Mercado de Ride-Sharing y Carpooling en Colombia:** Según la Cámara Colombiana de Informática y Telecomunicaciones (CCIT) y reportes de movilidad urbana, el mercado de movilidad intermediada por plataformas en Colombia supera los **\$1,2 billones de COP anuales**.
- **Población Universitaria en Bogotá:** Bogotá cuenta con más de **750.000 estudiantes de educación superior** (Secretaría de Educación Distrital / Ministerio de Educación Nacional). En la Universidad Externado de Colombia, la población estudiantil activa es de aproximadamente **12.000 alumnos**.
- **Estimación del Beachhead:** Con un 20% de estudiantes que provienen de corredores de difícil acceso y alta dispersión geográfica (más de 2.400 desplazamientos potenciales diarios), el valor transaccional bruto anual del carpooling solo en el campus Externado se estima en **\$4.600 millones de COP** anuales (considerando 160 días académicos y 4 viajes promedio semanales).

---

## 🐟 Paso 2. Árbol de Causas del Problema (Espina de Pescado / Ishikawa)

**Problema Central:**  
> *"Ineficiencia, incertidumbre de cupo y riesgos de seguridad en la coordinación de viajes compartidos (Wheels) para los estudiantes y conductores de la Universidad Externado de Colombia."*

### Detalle de Causas por Categoría y Validación en Campo:

#### A. Causas Duras (Superiores)
1. **Infraestructura y Geografía:** Ubicación del campus en los Cerros Orientales (La Candelaria), con acceso peatonal empinado y vías estrechas de alta congestión. Déficit de parqueaderos institucionales y costo diario elevado (\$22.000 COP/día para conductores). *(Validado con conductores E5, E7, E12)*.
2. **Procesos y Métodos Operativos:** Ausencia de un protocolo estándar de reserva: el cupo se asigna por velocidad de tipeo ("yo") en WhatsApp. *(Validado: E1, E3, E10)*. Métodos de pago caóticos: manejo de efectivo sin cambio (\$50.000) o transferencias Nequi bloqueadas por fallas de señal al bajar del carro en sótanos. *(Validado: E5, E11)*.
3. **Tecnología y Canales:** Uso de una herramienta no transaccional (WhatsApp): incapacidad técnica de filtrar por ruta, corredor u horario. Sepultamiento de ofertas en minutos: una ruta publicada a las 6:00 am queda oculta bajo 200 mensajes de spam o charlas secundarias. *(Validado por 12/12 entrevistados)*.

#### B. Causas Blandas (Inferiores)
4. **Economía de Comportamiento y Costos de Transacción:** Asimetría de pérdidas: el pasajero que incumple no asume penalización económica alguna; el conductor asume el 100% de la pérdida del cupo vacío (\$6.000-\$12.000 COP) y llega tarde por esperar. *(Validado con conductores E7 y E12)*.
5. **Factores Psicológicos y Conductuales:** Cultura del *Ghosting* y falta de compromiso: cancelar 15 minutos antes sin consecuencias morales ni operativas. *(Validado por 9/12 entrevistados)*. Estrés por incertidumbre: el pasajero se levanta a las 5:00 am sin saber con certeza si tendrá cupo o deberá caminar a TransMilenio. *(Validado por E2 y E9)*.
6. **Seguridad, Confianza y Género:** Ausencia de verificación institucional: los enlaces de WhatsApp circulan públicamente, permitiendo el ingreso de personas ajenas a la universidad. *(Validado por 12/12 como barrera crítica)*. Vulnerabilidad del segmento femenino: pasajeras que deben enviar placas y ubicaciones en tiempo real a sus familias antes de abordar un vehículo desconocido. *(Validado con E9)*.

---

## 🎯 Paso 3. Problema, Mercado y Primer Prototipo

### 3.1 ¿Qué hacen los clientes hoy?
Actualmente, los estudiantes resuelven su necesidad mediante una red fragmentada de **más de 4 grupos de WhatsApp de Wheels Externado**. 
- **Costos en dinero:** El pasajero paga una tarifa plana informal de **\$6.000 COP** por trayecto (o recurre a Uber/taxi por \$25.000-\$45.000 en contingencias). El conductor recauda entre **\$18.000 y \$24.000 COP** por viaje (3 a 4 cupos), destinando la totalidad a pagar parqueadero (\$22.000) y combustible *(H2 validada con 12/12)*.
- **Costos en tiempo:** Los pasajeros gastan entre **90 y 150 minutos diarios** en transporte público masivo frente a 40-50 minutos en Wheels (ahorro de 1 a 1,5 horas por trayecto).
- **Lo que les molesta (Pains validados):** La tragedia del chat masivo, las cancelaciones intempestivas y la falta de verificación de seguridad.

### 3.2 ¿Por qué el problema es difícil de resolver?
Barreras técnicas (ruteo dinámico ausente en chats planos), barreras económicas (un transporte masivo tradicional no es rentable a \$8.000 COP; solo opera bajo economía de amortización colaborativa) y el dilema de red de dos lados (*Two-Sided Market*).

### 3.3 ¿Qué tipo de mercado se está abordando? (Steve Blank)
**MERCADO RESEGMENTADO POR NICHO (Resegmented Market - Niche Strategy)**. Atiende las necesidades hiperlocales de un campus universitario cerrado con verificación institucional, rutas concentradas y tarifa estudiantil, permitiendo un CAC cercano a cero.

### 3.4 Primer Prototipo y Ajustes del Trabajo de Campo 2
Concepto de 3 pantallas con 4 ajustes obligatorios tras el Campo 2: historial acumulado de viajes, penalización anti-ghosting que indemniza al conductor, filtro de conductoras mujeres y microzonas para corredores cortos.

---

## 🧭 Paso 4. Modelo de Negocio (BMC Total) y Unit Economics

### 4.0 Valores: El Eje Cero del Lienzo
- **Propósito:** Democratizar una movilidad universitaria digna, segura, asequible y sostenible para la Universidad Externado de Colombia.
- **Valores en Acción:** Transparencia radical en el desglose del precio (\$6.800 al conductor y \$1.200 a la plataforma); confianza comunitaria (@uexternado.edu.co obligatorio); equidad y protección al conductor (80% del depósito de cancelación tardía lo indemniza a él).
- **No Negociables:** Cero monetización de datos privados, cero tarifas dinámicas abusivas y cero tolerancia al acoso.

### 1. Segmento de Clientes
- **Plataforma de dos lados:** Demanda (pasajeros con viajes >60 min) y Oferta (conductores externadistas amortizadores de parqueadero).
- **Beachhead Market:** Estudiantes en corredores periféricos (Suba, Calle 80, Kennedy, Bosa, Facatativá).
- **TAM Bottom-Up (Externado):** 2.400 alumnos activos x 256 viajes/año x \$1.000 COP comisión = **\$614.400.000 COP/año (~$153.600 USD/año)**.
- **Primeros 10 Clientes:** Informantes reales E1 a E10 identificados en el Campo 2 con 85%-100% de probabilidad de adopción.

### 2. Propuesta de Valor
- **Core del Negocio:** Efecto de red hiperlocal cerrado con verificación institucional obligatoria `@uexternado.edu.co` y algoritmo de ruteo sincronizado a horarios académicos.
- **Portafolio de Valor:** Ahorro de hasta 10 horas semanales y \$22.000 por viaje frente a taxi; sustitución de 3 vehículos individuales por 1 compartido.

### 3. Canales y Proceso de Ventas
- Adquisición B2C autónoma. Embudo: Corto plazo (venta personal en campus y migración guiada de WhatsApp, 40% conversión), Mediano plazo (Bienestar Universitario e inducciones, 25% conversión), Largo plazo (referidos virales, 35% conversión).

### 4. Relación con Clientes
- Conseguir (verificación institucional), Retener (cero comisiones ocultas, transferencias inmediatas Nequi y penalización por ghosting) y Crecer (referidos por corredor).

### 5. Fuentes de Ingreso y Valor de Vida del Cliente (LTV)
- **Modelo:** Take-rate transaccional de **\$1.200 COP** por cupo (15% sobre tarifa de \$8.000 COP). Conductor recibe \$6.800 COP netos. Costo directo: \$200 COP (Margen bruto: 83,3%).

#### Resultados Plantilla Excel de Aulet (5 Años, Costo de Capital r = 50%):
| Escenario | Viajes Anuales | Ingreso Anual | Margen Bruto | Retención Anual | LTV a 5 Años (r=50%) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Pesimista** | 84 viajes | \$100.800 COP | 75,0% | 70,0% | **\$92.408 COP** |
| **Esperado** | **128 viajes** | **\$153.600 COP** | **83,3%** | **80,0%** | **\$174.897 COP** |
| **Optimista** | 204 viajes | \$244.800 COP | 85,0% | 85,0% | **\$301.418 COP** |

*(Con costo de deuda r = 12%, el LTV esperado es de \$325.496 COP).*

### 9. Estructura de Costos, CAC y Regla de las 3X
- Costos fijos mensuales: Servidores cloud (\$280.000 COP), APIs mapas (\$120.000 COP), licencias tiendas (\$65.000 COP), mercadeo campus (\$150.000 COP). Costo variable: \$200 COP/transacción.

#### Comparación LTV vs CAC:
| Horizonte Temporal | Estrategia de Adquisición | CAC Medio | LTV Esperado | Razón $LTV / CAC$ | Cumple Regla 3X |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **Corto Plazo (Año 1)** | Campus guerrilla & WhatsApp | **\$6.000 COP** | \$174.897 COP | **29,15 ×** | **SÍ (Sostenible y Escalable)** |
| **Mediano Plazo (Años 2-3)** | Inducciones & Embajadores | **\$3.125 COP** | \$174.897 COP | **55,97 ×** | **SÍ (Altamente Escalable)** |
| **Largo Plazo (Años 4-5)** | Voz a voz viral & Referidos | **\$1.666 COP** | \$174.897 COP | **104,98 ×** | **SÍ (Consolidado)** |

- **Conclusión Financiera 9.1:** La razón $LTV / CAC$ alcanza **29,15× en el corto plazo y supera los 100× en el largo plazo**, cumpliendo con creces la regla de las 3X ($LTV > 3 \times CAC$). Incluso en el escenario pesimista (\$92.408 COP) frente al CAC más alto (\$8.000 COP), la razón se mantiene en **11,55×**. La eficiencia unitaria se deriva de operar sobre un mercado resegmentado en comunidad cerrada con costo de captación orgánico.

### 10. Análisis de Impactos (ODS)
- **Impacto Social:** Rutas seguras para mujeres con conductoras verificadas y monitoreo GPS en vivo (**ODS 5: Igualdad de Género**); ahorro de 25 a 35 horas mensuales de tiempo útil por estudiante (**ODS 8: Trabajo Decente y Bienestar**); reducción de cancelaciones del 35% al 3% erradicando el ghosting (**ODS 11: Comunidades Sostenibles**).
- **Impacto Medioambiental:** Aumento del factor de ocupación de 1,3 a 3,5 personas por vehículo, evitando más de 45 toneladas de $CO_2$ al año (**ODS 13: Acción por el Clima**); retiro de más de 150 vehículos diarios de circulación hacia los cerros orientales y La Candelaria (**ODS 11: Ciudades Sostenibles**).
