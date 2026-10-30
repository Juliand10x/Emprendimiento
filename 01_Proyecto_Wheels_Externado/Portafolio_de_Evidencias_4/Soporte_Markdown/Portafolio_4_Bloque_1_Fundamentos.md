# Portafolio de Evidencias No. 4: Modelo de Negocio Consolidado
## Bloque 1: Fundamentos, Diagnóstico de la Industria, Árbol de Causas y Prototipo (Pasos 0 a 3)

**Proyecto:** Wheels Externado — Plataforma Inteligente de Carpooling Universitario  
**Curso:** Emprendimiento | Pregrado en Ciencia de Datos  
**Institución:** Universidad Externado de Colombia  
**Fecha:** Octubre de 2026  
**Equipo 5:** Santiago Sandoval, Sebastián Ramos, Julián Duarte, Tomás Rincón, Julián Jiménez  

---

## 📌 Paso 0. La Idea: Impulso del Mercado, Empuje Tecnológico o Híbrida

De acuerdo con la metodología de Bill Aulet (*Disciplined Entrepreneurship*, 2017), los emprendimientos de base tecnológica pueden originarse por **impulso del mercado** (*market pull*) o por **empuje tecnológico** (*technology push*). El proyecto **Wheels Externado** se define como una **iniciativa híbrida con fuerte dominancia del impulso del mercado**: parte de una fricción cotidiana crítica y observada directamente en la comunidad universitaria (desplazamientos complejos, demorados e inseguros hacia los cerros orientales), habilitada por tecnologías accesibles y ampliamente adoptadas de georreferenciación, matching algorítmico y pagos digitales inmediatos.

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

#### Matriz Comparativa de Competidores en Movilidad Universitaria (Bogotá)

A partir de la investigación del ecosistema universitario de Bogotá, se identifican iniciativas tecnológicas comparables en instituciones pares (Universidad de los Andes, Pontificia Universidad Javeriana, Universidad del Rosario), permitiendo un benchmarking riguroso:

| Competidor | Actividad / Campus | Problema que resuelve | Tarifa / Escala | En qué se parece a nosotros | En qué nos diferenciamos (Wheels Externado) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Vai** | App de carpooling estudiantil (**UniAndes**) | Conecta rutas de estudiantes hacia Los Andes | \$7.000 - \$9.000 COP / Cobertura UniAndes | Resegmentación por nicho, filtro institucional `@uniandes` y ruteo móvil | Enfocado exclusivamente en Los Andes; no resuelve la asimetría de penalización por ghosting que indemniza al conductor ni cubre rutas a La Candelaria/Externado. |
| **2. UniWheels** | Plataforma de carpooling universitario | Conecta miembros de comunidades académicas | \$6.000 - \$8.000 COP / Multicampus Bogotá | Correo institucional, reserva digital y código PIN de abordaje | Enfoque genérico multicampus; carece de filtro de género («Solo Chicas»), historial acumulado visible y adaptación a los horarios de clase del Externado. |
| **3. Try My Ride** | Software B2B de movilidad sostenible | Gestión institucional de viajes (**Javeriana, Rosario**) | Contratos corporativos B2B | Entorno institucional cerrado y medición de huella de carbono | Plataforma rígida de compliance empresarial; no resuelve la inmediatez P2P ni la liquidación instantánea a billeteras Nequi/Daviplata. |
| **4. WhatsApp Wheels Externado / UniAndes** | Redes informales de carpooling entre pares | Conexión rápida orgánica en chats masivos | \$6.000 COP por puesto / ~400 viajes sem. | Misma comunidad estudiantil y tarifa base solidaria | WhatsApp carece de filtros de ruta, reservas garantizadas, verificación de identidad, reputación bilateral y pagos digitales. |
| **5. InDrive / Uber** | Ride-hailing masivo bajo demanda | Transporte urbano puerta a puerta | \$20.000 - \$45.000 COP / Global Bogotá | Tecnología de geolocalización y reserva previa móvil | Tarifa 3 a 5 veces más cara (inviable para uso diario estudiantil) y plataforma abierta no verificada con alto riesgo percibido. |

- **Conclusión de entrada:** **Oportunidad de Océano Azul en nicho universitario cerrado**. La rivalidad tradicional se disputa en el mercado abierto de alta tarifa (Uber vs. DiDi) o en el transporte público masivo. En el ámbito universitario, plataformas como *Vai* se limitan a UniAndes y *Try My Ride* es percibida como burocrática; Wheels Externado captura el dinamismo informal pero con la formalización y seguridad que demanda el campus.

### 1e. Tamaño de la Industria y Mercado de Referencia
- **Mercado de Ride-Sharing y Carpooling en Colombia:** Según la Cámara Colombiana de Informática y Telecomunicaciones (CCIT) y reportes de movilidad urbana, el mercado de movilidad intermediada por plataformas en Colombia supera los **\$1,2 billones de COP anuales**.
- **Población Universitaria en Bogotá:** Bogotá cuenta con más de **750.000 estudiantes de educación superior** (Secretaría de Educación Distrital / Ministerio de Educación Nacional). En la Universidad Externado de Colombia, la población estudiantil activa es de aproximadamente **12.000 alumnos**.
- **Estimación del Beachhead:** Con un 20% de estudiantes que provienen de corredores de difícil acceso y alta dispersión geográfica (más de 2.400 desplazamientos potenciales diarios), el valor transaccional bruto anual del carpooling solo en el campus Externado se estima en **\$4.600 millones de COP** anuales (considerando 160 días académicos y 4 viajes promedio semanales).

---

## 🐟 Paso 2. Árbol de Causas del Problema (Espina de Pescado / Ishikawa)

**Problema Central:**  
> *"Ineficiencia, incertidumbre de cupo y riesgos de seguridad en la coordinación de viajes compartidos (Wheels) para los estudiantes y conductores de la Universidad Externado de Colombia."*

```
                       CAUSAS DURAS (Recursos, Procesos y Tecnología)
   INFRAESTRUCTURA Y RECURSOS              PROCESOS Y GESTIÓN                  TECNOLOGÍA Y CANALES
        ┌────────────────────────┐         ┌────────────────────────┐         ┌────────────────────────┐
        │ Ubicación en cerros    │         │ Coordinación manual por│         │ Saturación extrema de  │
        │ y difícil acceso vial  │         │ texto en chats masivos │         │ mensajes en WhatsApp   │
        └──────────┬─────────────┘         └──────────┬─────────────┘         └──────────┬─────────────┘
                   │                                  │                                  │
                   └─────────────────┬────────────────┴──────────────────────────────────┘
                                     │
───► [ PROBLEMA CENTRAL: Ineficiencia, incertidumbre y riesgos de seguridad en Wheels ] ───►
                                     │
                   ┌─────────────────┴────────────────┬──────────────────────────────────┐
                   │                                  │                                  │
        ┌──────────┴─────────────┐         ┌──────────┴─────────────┐         ┌──────────┴─────────────┐
        │ Asimetría de riesgos y │         │ Incertidumbre de viaje │         │ Desconfianza social y  │
        │ pérdidas económicas    │         │ y falta de compromiso  │         │ riesgos de integridad  │
        └────────────────────────┘         └────────────────────────┘         └────────────────────────┘
          ECONOMÍA Y TRANSACCIÓN               FACTORES CONDUCTUALES             CULTURA Y SEGURIDAD
                       CAUSAS BLANDAS (Factores Psicológicos y Culturales)
```

### Detalle de Causas por Categoría y Validación en Campo:

#### A. Causas Duras (Superiores)
1. **Infraestructura y Geografía:**
   - Ubicación del campus en los Cerros Orientales (La Candelaria), con acceso peatonal empinado y vías estrechas de alta congestión.
   - Déficit de parqueaderos institucionales y costo diario elevado (\$22.000 COP/día para conductores). *(Validado con conductores E5, E7, E12)*.
2. **Procesos y Métodos Operativos:**
   - Ausencia de un protocolo estándar de reserva: el cupo se asigna por velocidad de tipeo ("yo") en WhatsApp. *(Validado: E1, E3, E10)*.
   - Métodos de pago caóticos: manejo de efectivo sin cambio (\$50.000) o transferencias Nequi bloqueadas por fallas de señal al bajar del carro en sótanos. *(Validado: E5, E11)*.
3. **Tecnología y Canales:**
   - Uso de una herramienta no transaccional (WhatsApp): incapacidad técnica de filtrar por ruta, corredor u horario.
   - Sepultamiento de ofertas en minutos: una ruta publicada a las 6:00 am queda oculta bajo 200 mensajes de spam o charlas secundarias. *(Validado por 12/12 entrevistados)*.

#### B. Causas Blandas (Inferiores)
4. **Economía de Comportamiento y Costos de Transacción:**
   - Asimetría de pérdidas: el pasajero que incumple no asume penalización económica alguna; el conductor asume el 100% de la pérdida del cupo vacío (\$6.000-\$12.000 COP) y llega tarde por esperar. *(Validado con conductores E7 y E12)*.
5. **Factores Psicológicos y Conductuales:**
   - Cultura del *Ghosting* y falta de compromiso: cancelar 15 minutos antes sin consecuencias morales ni operativas. *(Validado por 9/12 entrevistados)*.
   - Estrés por incertidumbre: el pasajero se levanta a las 5:00 am sin saber con certeza si tendrá cupo o deberá caminar a TransMilenio. *(Validado por E2 y E9)*.
6. **Seguridad, Confianza y Género:**
   - Ausencia de verificación institucional: los enlaces de WhatsApp circulan públicamente, permitiendo el ingreso de personas ajenas a la universidad. *(Validado por 12/12 como barrera crítica)*.
   - Vulnerabilidad del segmento femenino: pasajeras que deben enviar placas y ubicaciones en tiempo real a sus familias antes de abordar un vehículo desconocido. *(Validado con E9)*.

---

## 🎯 Paso 3. Problema, Mercado y Primer Prototipo

### 3.1 ¿Qué hacen los clientes hoy?
Actualmente, los estudiantes resuelven su necesidad mediante una red fragmentada de **más de 4 grupos de WhatsApp de Wheels Externado**. 
- **Costos en dinero:** El pasajero paga una tarifa plana informal de **\$6.000 COP** por trayecto (o recurre a Uber/taxi por \$25.000-\$45.000 en contingencias). El conductor recauda entre **\$18.000 y \$24.000 COP** por viaje (3 a 4 cupos), destinando la totalidad a pagar parqueadero (\$22.000) y combustible *(H2 validada con 12/12)*.
- **Costos en tiempo:** Los pasajeros gastan entre **90 y 150 minutos diarios** en transporte público masivo frente a 40-50 minutos en Wheels (ahorro de 1 a 1,5 horas por trayecto).
- **Lo que les molesta (Pains validados):**
  1. *Tragedia del chat masivo:* Leer 400 mensajes irrelevantes para encontrar una ruta en su sector.
  2. *Cancelaciones intempestivas:* Pasajeros que no aparecen y dejan colgado al conductor en el punto de encuentro.
  3. *Inseguridad:* Desconocer los antecedentes, hábitos de manejo o identidad real del conductor/pasajero.

### 3.2 ¿Por qué el problema es difícil de resolver?
El problema ha persistido debido a una conjunción de barreras:
1. **Técnicas:** Coordinar puntos de encuentro dinámicos en corredores con tráfico impredecible requiere algoritmos de ruteo y geolocalización que un chat plano no puede proveer.
2. **Económicas:** Para una empresa de transporte tradicional (taxi/Uber), las tarifas de \$6.000 a \$8.000 COP no cubren el costo de combustible ni generan margen operativo para conductores de tiempo completo; el modelo **solo funciona como economía colaborativa de amortización entre pares que ya van a la misma sede física**.
3. **De Comportamiento / Red:** Resolver el dilema del huevo y la gallina (*Two-Sided Market*): una app de carpooling necesita densidad crítica simultánea de oferta y demanda en la misma franja horaria (6:00 am - 7:30 am).
4. **Regulatorias y de Confianza:** El temor legal de las universidades a ser catalogadas como operadores de transporte público frena las iniciativas institucionales directas, dejando el problema en la informalidad.

### 3.3 ¿Qué tipo de mercado se está abordando? (Steve Blank)
Según la taxonomía de Steve Blank (*The Four Steps to the Epiphany*), Wheels Externado aborda un **MERCADO RESEGMENTADO POR NICHO (Resegmented Market - Niche Strategy)**:
- **Justificación:** El mercado de movilidad urbana en Bogotá ya existe y está maduro (servido por apps multinacionales y transporte público), pero ninguno atiende las necesidades hiperlocales de un **campus universitario cerrado**: confianza garantizada por credenciales institucionales, rutas concentradas hacia un único destino común en horarios idénticos y una estructura de precios solidaria adaptada al presupuesto estudiantil.
- **Implicación en costos y ventas:** A diferencia de un mercado nuevo (donde educar al usuario es extremadamente costoso) o de un mercado existente abierto (donde el CAC en Google/Meta Ads es insostenible), un mercado resegmentado en comunidad cerrada permite un **CAC cercano a cero**: los clientes ya están agrupados físicamente en las aulas y digitalmente en los grupos de WhatsApp existentes.

### 3.4 Primer Prototipo y Ajustes del Trabajo de Campo 2
El concepto inicial mostrado a los clientes consistió en una interfaz funcional de 3 pantallas clave:
1. **Pantalla 1 — Descubrimiento y Reserva:** Filtrado de rutas por corredor (Norte, Occidente, Sur, Sabana), visualización de cupos disponibles y confirmación inmediata con correo `@uexternado.edu.co`.
2. **Pantalla 2 — Pago y Monedero Digital:** Débito automático mediante Nequi/Daviplata y depósito de reserva en custodia (*escrow*) con liquidación al conductor al finalizar la carrera.
3. **Pantalla 3 — Seguridad y Reputación:** Calificación bilateral de puntualidad y conducción, y botón de compartir trayecto en vivo con contactos de confianza.

#### Ajustes Obligatorios incorporados tras el Campo 2:
A partir de la retroalimentación de las 12 entrevistas de campo (E1 a E12), el prototipo se ajustó con 4 correcciones críticas para el MVP:
- **Ajuste 1 (Módulo de Confianza Avanzada):** Incorporación de **historial visible de viajes acumulados** ("62 viajes realizados en el semestre") en lugar de una simple calificación en estrellas *(Requerido por E11 y E8)*.
- **Ajuste 2 (Gestión Anti-Ghosting):** Implementación de **bloqueo de cupo con penalización por cancelación tardía** que indemniza directamente al conductor si el pasajero cancela a menos de 30 minutos de la salida *(Requerido por E7 y E12)*.
- **Ajuste 3 (Filtro de Seguridad de Género):** Incorporación de un filtro y distintivo de **"Conductoras Mujeres / Viajes Solo Chicas"** para mitigar la vulnerabilidad percibida en horarios de madrugada (5:30 am) *(Demanda explícita de E9)*.
- **Ajuste 4 (Filtro por Microzonas y Corredores Cortos):** Ampliación del motor de búsqueda para incluir trayectos urbanos cortos (Chapinero / Calle 72), donde el dolor validado es el desorden de los chats y no la distancia geográfica *(Aporte de E10)*.
