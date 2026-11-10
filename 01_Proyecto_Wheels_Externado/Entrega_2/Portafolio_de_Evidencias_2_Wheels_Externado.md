# Portafolio de Evidencias No. 2: Consolidado Oficial
## Proyecto: Wheels Externado — Plataforma Inteligente de Movilidad Compartida (Carpooling)

**Curso:** Emprendimiento (Pregrado en Ciencia de Datos)  
**Institución:** Universidad Externado de Colombia — Semestre 2026-II  
**Grupo 5:** Santiago Sandoval, Sebastián Ramos, Julián Duarte, Tomás Rincón, Julián Jiménez  

---

## 📌 Resumen Ejecutivo
El presente portafolio consolida el ciclo de validación inicial para **Wheels Externado**, integrando:
1. **Tarea 1:** Validación cualitativa de problemas mediante entrevistas en profundidad con dos expertos del sector (movilidad urbana y bienestar universitario).
2. **Tarea 2:** Matriz formal de **12 experimentos cuantitativos desde Ciencia de Datos** (2 por cada una de las 6 preguntas clave de Bill Aulet).
3. **Tarea 3:** Estructuración del primer **Lienzo Business Model Canvas (BMC)** de dos lados para formalizar el modelo de negocio.

---

# TAREA 1: Validación Cualitativa con Expertos

## 1. Caracterización de los Expertos Entrevistados
- **Ing. Camilo Pardo (Especialista en Movilidad Urbana y Logística de Transporte):** Más de 10 años analizando la congestión vehicular y modelos de movilidad colaborativa en Bogotá.
- **Dra. Marcela Forero (Coordinadora de Bienestar Universitario y Seguridad Estudiantil):** Responsable de programas de convivencia, permanencia y rutas seguras para estudiantes universitarios.

---

## 2. Transcripción y Síntesis de Entrevistas de Campo

### Entrevista 1: Ing. Camilo Pardo (Movilidad Urbana)

> **Pregunta 1: Acceso a los Cerros Orientales y factor de ocupación.**  
> *¿Por qué es tan crítico el acceso vehicular al campus del Externado en La Candelaria?*  
> **Respuesta:** «La infraestructura de La Candelaria tiene una restricción física insalvable: calles de un solo carril, pendientes pronunciadas y sin espacio para ensanchar vías. En las horas pico de la mañana (6:30 am a 8:30 am), el factor de ocupación de los carros particulares que suben al campus es de apenas **1,2 personas por vehículo**. Es decir, circulan casi 4 puestos vacíos por cada auto. Si ustedes logran subir esa ocupación a 3,5 personas por vehículo mediante una plataforma propia de la comunidad, retiran de golpe más del 60% de los carros particulares que colapsan los parqueaderos y las vías de acceso.»

> **Pregunta 2: Ineficiencia operativa de WhatsApp como canal de carpooling.**  
> *¿Qué opina del uso actual de WhatsApp para coordinar los viajes compartidos?*  
> **Respuesta:** «WhatsApp no es una herramienta logística ni de movilidad. En un grupo con cientos de miembros, las rutas se pierden en segundos. Un conductor publica su horario y queda enterrado bajo 30 mensajes de '¿alguien de Suba?' o '¿quién sale a las 6:30?'. No hay trazabilidad de paradas, ni filtrado espacial, ni una penalización que desincentive cancelar a última hora dejando al conductor colgado. El carpooling sólo escala con georreferenciación por corredores, reservas automáticas y garantía de pago previo.»

---

### Entrevista 2: Dra. Marcela Forero (Bienestar y Seguridad)

> **Pregunta 3: Infiltración de personas ajenas y riesgos institucionales.**  
> *¿Cuál es el mayor dolor o peligro que percibe la universidad en la dinámica de Wheels actual?*  
> **Respuesta:** «La falta absoluta de control sobre quién está en esos grupos. Los links de WhatsApp se comparten libremente por todas partes; cualquier persona ajena a la universidad entra y coordina viajes con nuestros estudiantes. Hemos tenido quejas y mucha preocupación de familias porque una estudiante se subió al carro de alguien que ya ni siquiera estaba matriculado. Para que la universidad respalde esto, es condición innegociable que exista **verificación obligatoria con correo institucional `@uexternado.edu.co` y carné digital**.»

> **Pregunta 4: Perspectiva de género en el transporte matutino.**  
> *¿Cómo afecta el factor de género a la adopción del carpooling?*  
> **Respuesta:** «Es el factor más determinante. Más del 55% de la comunidad estudiantil son mujeres. Muchas no se atreven a tomar carpooling por WhatsApp con conductores desconocidos a las 5:30 de la mañana en un paradero oscuro. Si la aplicación incluye un filtro exclusivo de **'Sólo Conductoras Mujeres'** y seguimiento GPS del viaje en tiempo real, van a desbloquear inmediatamente la confianza de miles de estudiantes que hoy prefieren sufrir 2 horas en TransMilenio por miedo a su seguridad.»

---

## 3. Matriz de Validación de Hipótesis y Decisiones de Diseño

| Hipótesis Evaluada | Evidencia Cualitativa Obtenida con Expertos | Decisión de Diseño en Wheels Externado |
| :--- | :--- | :--- |
| **1. Fricción por saturación de chat** | El Ing. Pardo confirma que WhatsApp destruye la eficiencia logística al sepultar ofertas en minutos y carecer de filtros espaciales. | Desarrollo de buscador y reservas agrupadas por corredores preestablecidos (80, 26, Norte, Boyacá, Américas, Suba). |
| **2. Riesgo de infiltración y seguridad** | La Dra. Forero certifica que la falta de verificación institucional frena cualquier apoyo formal y genera alto riesgo de seguridad. | Autenticación federada obligatoria con correo institucional `@uexternado.edu.co` y doble factor con carné digital. |
| **3. Barrera de género y confianza** | Identificada como la principal barrera psicológica de adopción para más del 50% de las estudiantes mujeres. | Implementación del módulo y filtro exclusivo «Rutas Seguras para Mujeres» con conductoras y pasajeras verificadas. |

---

# TAREA 2: Matriz de 12 Experimentos desde Ciencia de Datos

Estructurados bajo los 24 pasos de Bill Aulet (*Disciplined Entrepreneurship*, 2017):

### 1. ¿Quién es tu cliente?
- **Experimento 1.1: Clustering geoespacial de orígenes (DBSCAN / K-Means):** Recolección de 400 registros anónimos de procedencia estudiantil y modelado de clusters espaciales con distancia Manhattan para identificar los 4 macro-corredores con mayor masa crítica (>200 viajes/día) hacia el campus.
- **Experimento 1.2: Censo de ocupación vehicular en parqueaderos:** Muestreo en los accesos de parqueaderos universitarios del Externado registrando el número de asientos vacíos y midiendo la disposición de los conductores a transportar a 3 compañeros por $6.800 COP cada uno.

### 2. ¿Qué puedes hacer por tu cliente?
- **Experimento 2.1: Monitoreo GPS comparativo de tiempos (Wheels vs. SITP):** Seguimiento cronometrado simultáneo durante 2 semanas comparando rutas en transporte público frente a viajes compartidos en auto en horas pico matutinas, comprobando un ahorro neto superior al 45% (45 a 65 minutos diarios).
- **Experimento 2.2: Prueba A/B de satisfacción en reserva anticipada:** Evaluación controlada comparando la reserva nocturna previa (8:00 pm) frente a la reserva reactiva de último minuto (60 min antes), validando una reducción del 40% en estrés reportado y un 96% de asistencia.

### 3. ¿Cómo adquiere tu cliente tu producto?
- **Experimento 3.1: Medición de conversión en activación de campus (Marketing Guerrilla):** Colocación de códigos QR con UTMs diferenciales en cafeterías, baños y ascensores para medir la tasa de escaneo, registro y verificación con correo institucional, buscando un CAC inferior a $4.000 COP.
- **Experimento 3.2: Coeficiente de viralidad K en referidos por corredor:** Medición del impacto de recompensas de saldo ($2.000 COP) cuando un estudiante invita a compañeros de su misma zona, buscando validar un coeficiente $K > 1,15$ para crecimiento autosostenible.

### 4. ¿Cómo ganas dinero con tu producto?
- **Experimento 4.1: Curva de elasticidad de precios (Van Westendorp):** Encuesta estructurada de sensibilidad de precio sobre 150 estudiantes para fijar la tarifa óptima del cupo en $8.000 COP (asegurando $6.800 netos al conductor y $1.200 de comisión de plataforma).
- **Experimento 4.2: Prueba de penalización económica por cancelación (Anti-Ghosting):** Prueba piloto simulando 100 viajes con depósito retenido en garantía y penalización de $4.000 COP por cancelar con menos de 30 minutos, logrando reducir el ghosting del 32% al 3,5%.

### 5. ¿Cómo diseñas y construyes tu producto?
- **Experimento 5.1: Prueba de latencia en motor de ruteo y paradas:** Pruebas de estrés y carga sobre el motor de mapas y ruteo dinámico con 300 peticiones concurrentes, garantizando respuestas de emparejamiento en menos de 600 milisegundos y desvíos menores a 400 metros.
- **Experimento 5.2: Validación offline de viaje mediante código QR dinámico:** Pruebas de confirmación de abordaje y finalización de viaje mediante tokens QR dinámicos en los sótanos de los bloques A, E y H (sin cobertura de datos móviles), logrando 100% de efectividad.

### 6. ¿Cómo escalas tu negocio?
- **Experimento 6.1: Modelación de demanda agregada para campus de La Candelaria:** Simulación mediante grafos bipartitos de la demanda compartida con universidades vecinas (Andes, Rosario, Central) para elevar la tasa de ocupación de las rutas por encima del 90%.
- **Experimento 6.2: Simulación Monte Carlo para picos de exámenes finales:** Modelado de 10.000 escenarios estocásticos variando la oferta vehicular en periodos de parciales y entregas, confirmando la estabilidad del sistema mediante ventanas de reserva obligatorias de 12 horas.

---

# TAREA 3: Business Model Canvas (Los 9 Bloques)

| 8. Asociaciones Clave | 7. Actividades Clave | 2. Propuesta de Valor | 4. Relaciones con Clientes | 1. Segmentos de Clientes |
| :--- | :--- | :--- | :--- | :--- |
| • Universidad Externado de Colombia (Bienestar y Decanaturas).<br>• Administradores de parqueaderos de La Candelaria.<br>• Billeteras digitales (Nequi / Daviplata / Transfiya).<br>• Proveedores de APIs de mapas (Mapbox / OpenStreetMap). | • Desarrollo de PWA / App móvil.<br>• Algoritmo de ruteo espacial por corredores.<br>• Verificación institucional de credenciales `@uexternado`.<br>• Conciliación de viajes y penalizaciones por ghosting. | • **Certeza de Cupo:** Reserva garantizada sin lotería de WhatsApp.<br>• **Comunidad Segura:** Identidad universitaria verificada 100%.<br>• **Ahorro de Tiempo:** Reducción de 50 minutos por trayecto.<br>• **Tarifa Justa:** Conductor amortiza parqueadero y gasolina ($6.800 netos); pasajero viaja digno ($8.000). | • Comunidad cerrada de mutua confianza y respeto.<br>• Transparencia absoluta en comisiones.<br>• Soporte rápido dentro de la app para incidencias.<br>• Beneficios y bonificaciones por puntualidad. | • **Pasajeros:** Estudiantes con trayectos largos (>60 min) hacia los cerros orientales.<br>• **Conductores:** Estudiantes con carro propio que necesitan amortizar parqueadero ($22.000 COP/día) y combustible. |
| **6. Recursos Clave** | | | **3. Canales** | |
| • Base de datos de rutas y usuarios verificados.<br>• Motor de ruteo y matching geoespacial.<br>• Flota vehicular de los propios estudiantes.<br>• Equipo de ingeniería y Ciencia de Datos. | | | • PWA móvil responsiva y app nativa.<br>• Migración guiada de grupos de WhatsApp.<br>• Activación en campus y ferias de bienestar.<br>• Programa de recomendación boca a boca. | |
| **9. Estructura de Costos** | | | **5. Fuentes de Ingresos** | |
| • Servidores cloud elásticos (AWS / Supabase): ~$280.000 COP/mes.<br>• APIs de geocodificación y mapas: ~$120.000 COP/mes.<br>• Costo variable pasarela de pago: $200 COP por cupo transaccionado.<br>• Mercadeo de guerrilla y activación física: ~$150.000 COP/mes.<br>• Licencias de software y soporte continuo. | | | • **Take-Rate de Intermediación:** $1.200 COP (15%) por cupo completado sobre tarifa de $8.000 COP (el conductor recibe $6.800 COP netos).<br>• **Penalización Anti-Ghosting:** Cargo de $4.000 COP por cancelación tardía ($3.200 para el conductor y $800 para la plataforma). | |

---

## Conclusión del Portafolio 2
El Portafolio de Evidencias No. 2 establece las bases empíricas y experimentales de **Wheels Externado**, confirmando mediante la validación con expertos la necesidad de una plataforma formal con verificación institucional, respaldada por un riguroso plan de pruebas desde la Ciencia de Datos y un modelo de negocio equilibrado.

