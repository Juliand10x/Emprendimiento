# Entrega 1: Presentación de la Idea y Primer Prototipo (MVP)
## Proyecto: Wheels Externado — Plataforma Inteligente de Movilidad Compartida (Carpooling)

**Curso:** Emprendimiento (Pregrado en Ciencia de Datos)  
**Institución:** Universidad Externado de Colombia — Semestre 2026-II  
**Grupo 5:** Santiago Sandoval, Sebastián Ramos, Julián Duarte, Tomás Rincón, Julián Jiménez  

---

## 📌 Resumen Ejecutivo
**Wheels Externado** es una plataforma móvil y colaborativa de viajes compartidos (*carpooling*) diseñada a la medida de la comunidad de la Universidad Externado de Colombia. Transforma la precaria y riesgosa dinámica actual de coordinación informal en grupos de WhatsApp en un ecosistema formal, seguro y sincronizado con horarios académicos, autenticación federada institucional (`@uexternado.edu.co`) y liquidación digital de pagos (Nequi / Daviplata).

> **Enunciado Insignia:**  
> *«No inventamos la necesidad de viajar juntos hacia el Externado; eliminamos la incertidumbre de cupo, el caos de WhatsApp y el riesgo de seguridad para que la comunidad viaje puntual, tranquila y protegida.»*

---

## 1. Ubicación Industrial y Sector Económico
- **Smart Mobility & Shared Transportation (Movilidad Inteligente y Compartida):** Subsector de *Carpooling P2P* (viajes compartidos entre pares universitarios sin fines de lucro comercial), enfocado en elevar el factor de ocupación de vehículos privados existentes de 1,2 a 3,5 ocupantes por carro hacia el centro histórico de Bogotá.
- **Plataformas Digitales de Dos Lados (Two-Sided Marketplaces):** Ecosistema digital que conecta la oferta descentralizada de cupos (conductores con vehículo propio que buscan amortizar parqueadero y gasolina) con una demanda cautiva y recurrente de pasajeros universitarios.
- **Distinción Legal y Regulatoria:** A diferencia de Uber o InDrive, Wheels Externado **no es un servicio público de transporte comercial**. El conductor no percibe un salario de subsistencia ni es chofer contratado; es un estudiante que de todos modos realizaría el trayecto hacia el campus, y la tarifa ($8.000 COP) se destina exclusivamente a la **amortización colaborativa de costos operativos reales (gasolina y parqueadero diario de $22.000 COP en La Candelaria)**.

---

## 2. Necesidad del Mercado vs. Problema Específico (Árbol Causal de Ishikawa)

### Diferenciación Conceptual (Bianchi & Verganti, 2021)
- **Necesidad General del Mercado:** Los más de 12.000 estudiantes y colaboradores de la Universidad Externado necesitan transportarse diariamente hacia el campus en los Cerros Orientales de forma económica, puntual y digna, superando el colapso del transporte público distrital.
- **Problema Específico Reencuadrado:** Ya existe una flota privada de cientos de carros de estudiantes con cupos desocupados viajando a diario a la universidad. El verdadero problema radica en que **la coordinación se realiza a través de chats planos de WhatsApp, generando saturación de mensajes, incertidumbre de cupo, riesgo de personas ajenas a la institución y desequilibrio económico ante cancelaciones imprevistas (*ghosting*)**.

### Diagrama de Ishikawa (Espina de Pescado)
- **Cabeza del Problema Raíz:** *Coordinación ineficiente, incierta e insegura de carpooling en la comunidad de la Universidad Externado de Colombia.*
- **Causas Duras (Superiores):**
  1. *Infraestructura y Geografía:* Campus en cerros empinados; vías estrechas de un solo carril en La Candelaria; parqueadero universitario y comercial costoso ($22.000 COP/día).
  2. *Procesos y Métodos Operativos:* Asignación de cupos por velocidad de tipeo ("yo") en WhatsApp; manejo de efectivo sin cambio ($50.000); fallas de señal en sótanos al pagar por Nequi.
  3. *Tecnología y Canales:* WhatsApp carece de filtros de ruta u horario; ofertas sepultadas bajo cientos de mensajes en minutos; ausencia de trazabilidad GPS.
- **Causas Blandas (Inferiores):**
  4. *Riesgo y Seguridad:* Enlaces de WhatsApp públicos; ingreso de personas ajenas a la universidad; temor y vulnerabilidad en estudiantes mujeres en horas de baja luminosidad.
  5. *Conducta y Ghosting:* Cancelaciones a 15 minutos sin penalización al pasajero; el conductor asume el 100% de la pérdida económica ($12.000 a $24.000 COP).
  6. *Costos de Transacción Psicológicos:* Fatiga mental matutina; incertidumbre al madrugar sin saber si habrá cupo disponible.

---

## 3. Matriz Comparativa de 5 Competidores Directos e Indirectos

| Competidor | Actividad Comercial | Problema que Resuelve | Ventas / Escala | En qué se parece | En qué nos diferenciamos |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. WhatsApp Wheels Externado** | Carpooling informal entre pares | Conecta oferta y demanda de cupos sin intermediarios | $0 formales; ~400 viajes por semana | Misma comunidad estudiantil y tarifa base ($6.000 COP) | **WhatsApp no tiene filtros de ruta, sepulta mensajes, no penaliza el ghosting, carece de verificación institucional y no tiene pagos integrados.** |
| **2. InDrive** | Movilidad urbana P2P con contraoferta de precio | Transporte directo puerta a puerta a tarifa negociable | Global; >$200M USD facturación anual | Viajes en autos particulares con fijación de precio | **Mercado abierto sin filtro universitario (alto riesgo de seguridad), sin sincronización de horarios académicos y tarifas dinámicas elevadas ($18k-$30k).** |
| **3. Uber / DiDi** | Plataformas masivas de viaje bajo demanda (*Ride-hailing*) | Movilidad inmediata punto a punto monitoreada por GPS | Global; miles de millones de USD anuales | Tecnología de reserva por app, mapas GPS y pago electrónico | **Tarifas prohibitivas para uso diario estudiantil ($25.000 a $45.000 COP por trayecto, 3 a 5 veces más caras que Wheels).** |
| **4. TransMilenio / SITP** | Transporte público masivo de Bogotá | Movilidad urbana masiva de bajo costo | Empresa pública; billones de COP anuales | Mueve la mayor parte de la masa estudiantil hacia el centro | **Tiempos extremos (90 a 150 min), congestión severa, transbordos forzados, caminata empinada y riesgo de hurto en puentes y estaciones.** |
| **5. Try My Ride** | Software corporativo de carpooling institucional | Reducción de huella de carbono y congestión en empresas | Pyme tecnológica especializada | Carpooling enfocado en comunidades cerradas | **Enfoque rígido en compliance corporativo; no resuelve el dinamismo P2P estudiantil ni los micropagos inmediatos.** |

---

## 4. Tres Preguntas Clave sobre el Problema y el Mercado (Steve Blank)

### (1) ¿Qué hacen los clientes hoy?
Los estudiantes del Externado coordinan a través de más de 4 grupos masivos de WhatsApp (con hasta 1.000 personas por grupo). Madrugan a las 5:00 am a revisar decenas de mensajes dispersos para ganar un cupo en fracciones de segundo. Pagan $6.000 COP informales (o recurren a taxis/Uber de $25.000 a $40.000 cuando les cancelan). Los conductores recaudan entre $18.000 y $24.000 por viaje lleno para pagar los $22.000 del parqueadero del día. Quienes van en bus pagan $3.200 pero pierden hasta 2,5 horas por trayecto.

### (2) ¿Por qué el problema es difícil de resolver?
- **Dilema del mercado de dos lados:** Coordinar simultáneamente oferta (conductores) y demanda (pasajeros) sin generar desbalances en las rutas.
- **Inadecuación del canal actual:** WhatsApp no fue diseñado para gestión logística, búsqueda espacial ni cobro transaccional.
- **Economía de bajo margen:** Un operador formal de transporte privado no es viable cobrando $8.000 COP por pasajero; solo un modelo de economía colaborativa entre estudiantes (con CAC casi nulo y sin pagar choferes comerciales) logra sostenibilidad financiera.

### (3) ¿Qué tipo de mercado estamos abordando?
Abordamos un **MERCADO RESEGMENTADO POR NICHO (Resegmented Market - Niche Strategy)** de acuerdo con Steve Blank (2021). Aprovechamos un mercado maduro (movilidad urbana en Bogotá) y lo resegmentamos hacia una comunidad cautiva cerrada (Universidad Externado) con atributos indispensables: confianza institucional exclusiva, sincronización con horarios académicos y tarifas universitarias accesibles.

---

## 5. Tamaño de la Industria y Dimensionamiento del Mercado
- **Mercado Nacional de Plataformas:** Factura más de **$1,2 billones de COP anuales** en Colombia (CCIT, 2025).
- **Mercado Universitario Centro Histórico (TAM Regional):** Más de 85.000 estudiantes de educación superior en La Candelaria (Externado, Andes, Rosario, América, Central), representando un mercado potencial de **$3.120 millones de COP anuales** en carpooling universitario.
- **Mercado Inicial (Beachhead Market - Universidad Externado):**
  - Población comunitaria activa: ~12.000 miembros.
  - Estudiantes con desplazamientos críticos (>60 min o zonas periféricas): ~2.400 estudiantes diarios.
  - Frecuencia media: 256 viajes anuales por estudiante (4 viajes por semana en 32 semanas académicas).
  - **Valor Bruto Transaccional Anual del Beachhead:** $2.400 \times 256 \times \$8.000 = \mathbf{\$4.915.200.000\text{ COP/año}}$.
  - **Ingresos Proyectados de la Plataforma (Take Rate 15% / $1.200 COP):** $\mathbf{\$737.280.000\text{ COP/año}}$ (~$184.000 USD).

---

## 6. Características del Cliente Potencial (Buyer Personas)

### Perfil 1: Pasajera («Camila»)
- **Demografía:** 19 años, estudiante de 3.er semestre de Derecho en el Externado. Vive en Timiza / Kennedy (Sur-Occidente de Bogotá).
- **Presupuesto:** Mesada mensual de $300.000 COP. Alta sensibilidad al precio del transporte.
- **Dolor Principal:** Sale de su casa a las 5:15 am. En TransMilenio gasta 100 minutos apretada y debe caminar sola por la subida de La Candelaria. En WhatsApp casi nunca alcanza cupo matutino.
- **Propuesta de Valor:** Reserva su cupo la noche anterior a las 8:00 pm, viaja en 45 minutos sentada con compañeros verificados y cuenta con la opción de filtro exclusivo con conductora mujer.

### Perfil 2: Conductor («Daniel»)
- **Demografía:** 22 años, estudiante de 7.° semestre de Finanzas. Vive en Modelia / Fontibón. Conduce su vehículo propio.
- **Presupuesto:** El parqueadero diario en el Externado le cuesta $22.000 COP ($440.000 mensuales) más $250.000 de gasolina semanal.
- **Dolor Principal:** En WhatsApp publica su ruta y a los 10 minutos le cancelan sin avisar, quedándose con los puestos vacíos y perdiendo dinero.
- **Propuesta de Valor:** Llena sus 4 cupos asegurados ($27.200 COP netos por viaje), amortiza totalmente el costo diario de parqueadero y gasolina, y si un pasajero cancela tarde, recibe automáticamente el 80% de la penalización ($3.200 COP).

---

## 7. Arquitectura del Primer Prototipo (MVP)
El prototipo de **Wheels Externado** se ha materializado como una Progressive Web App (PWA) móvil interactiva con 3 módulos esenciales:
1. **Descubrimiento y Reserva por Corredores Viales:** Interfaz visual donde las rutas se filtran por corredores (Calle 80, Calle 26, Autonorte, Américas, Boyacá, Suba, Chía) con horarios de llegada a clases (7:00 am, 8:00 am, 9:00 am). La reserva es automática y no depende de la velocidad de tipeo.
2. **Bóveda de Pago Digital en Custodia (Escrow):** El pasajero recarga saldo o paga su cupo ($8.000 COP) mediante integración directa con Nequi o Daviplata. El dinero queda retenido en garantía y solo se libera al conductor ($6.800 COP) tras escanear un código QR dinámico de confirmación de llegada al campus.
3. **Muro de Confianza Institucional y Calificación Bilateral:** Acceso condicionado al inicio de sesión con correo `@uexternado.edu.co` y carné digital. Calificación mutua por puntualidad y respeto, e inclusión del botón de seguridad para compartir trayecto en vivo con contactos de emergencia.

---

## 8. ¿Por Qué este Prototipo Resuelve el Problema de los Clientes?
- **Erradica la lotería del chat:** Centraliza la oferta y demanda en una interfaz geoespacial limpia, eliminando la necesidad de leer 400 mensajes irrelevantes.
- **Elimina el Ghosting:** La penalización económica obligatoria ($4.000 COP por cancelación a menos de 30 min) desincentiva el incumplimiento y compensa económicamente al conductor por su cupo ocioso.
- **Garantiza seguridad institucional 100% verificada:** Impide el ingreso de personas ajenas o dudosas, otorgando tranquilidad absoluta a pasajeros, conductores y familias.

---

## 9. Análisis de 5 Impactos Sociales: Beneficios, Riesgos y Mitigación

1. **Igualdad de Género y Protección de la Mujer (ODS 5):**  
   - *Impacto Positivo:* Ofrece rutas protegidas con el filtro «Conductora Mujer», mitigando el riesgo de acoso callejero matutino.  
   - *Riesgo:* Quejas por restricción de cupos para hombres en ciertas rutas.  
   - *Mitigación:* Filtro opcional y voluntario para trayectos donde ambas partes así lo convengan.
2. **Salud Mental y Bienestar Estudiantil (ODS 3):**  
   - *Impacto Positivo:* Ahorro de más de 30 horas mensuales por estudiante, reduciendo el estrés y la fatiga crónica.  
   - *Riesgo:* Ansiedad si un conductor se retrasa por contingencias de tráfico.  
   - *Mitigación:* Monitoreo GPS en vivo con cálculo dinámico de hora estimada de llegada (ETA).
3. **Cohesión Comunitaria y Capital Social (ODS 11):**  
   - *Impacto Positivo:* Fomenta el networking e integración entre estudiantes de distintas carreras y semestres.  
   - *Riesgo:* Conflictos menores de convivencia dentro del vehículo (ruido, opiniones).  
   - *Mitigación:* Código de conducta y convivencia visible y sistema de evaluación por estrellas.
4. **Protección Económica del Presupuesto Estudiantil (ODS 8):**  
   - *Impacto Positivo:* Tarifa justa y fija para pasajeros y amortización del 100% del parqueadero para conductores.  
   - *Riesgo:* Intentos de saltarse la app para no pagar la comisión de servicio.  
   - *Mitigación:* Cobertura de seguro de viaje y bonos de combustible por fidelidad exclusivos para viajes registrados en la plataforma.
5. **Seguridad Ciudadana Universitaria (ODS 16):**  
   - *Impacto Positivo:* Erradicación de personas ajenas o delincuentes infiltrados en grupos de carpooling.  
   - *Riesgo:* Préstamo o suplantación de credenciales institucionales.  
   - *Mitigación:* Validación periódica con carné digital con código dinámico y cédula.

---

## 10. Análisis de 5 Impactos Ambientales: Beneficios, Riesgos y Mitigación

1. **Reducción de Emisiones de Gases de Efecto Invernadero (ODS 13):**  
   - *Impacto Positivo:* Aumento del factor de ocupación de 1,2 a 3,5 ocupantes por vehículo, evitando más de 45 toneladas de CO2 al año.  
   - *Riesgo:* Efecto rebote (que más estudiantes compren carro al ver que se amortiza el parqueadero).  
   - *Mitigación:* Priorizar el carpooling sobre vehículos compartidos de alta ocupación (3+ personas).
2. **Descongestión Vial en el Centro Histórico (ODS 11):**  
   - *Impacto Positivo:* Retiro de más de 150 vehículos diarios en los accesos empinados de La Candelaria y Circunvalar.  
   - *Riesgo:* Retrasos por paradas múltiples en vías de un solo carril.  
   - *Mitigación:* Puntos de recogida fijos en bahías sobre corredores principales (sin desvíos puerta a puerta).
3. **Eficiencia Energética y Huella Digital Verde (ODS 12):**  
   - *Impacto Positivo:* Infraestructura cloud elástica optimizada con centros de datos carbono-neutrales.  
   - *Riesgo:* Consumo excesivo de batería y datos móviles por tracking GPS continuo.  
   - *Mitigación:* Polling inteligente de ubicación según velocidad de desplazamiento y modo reposo.
4. **Mejora en la Calidad del Aire Local (ODS 3 / ODS 11):**  
   - *Impacto Positivo:* Menor concentración de material particulado (PM2.5) y óxidos nitrosos en la zona de reserva oriental.  
   - *Riesgo:* Ingreso de vehículos viejos con emisiones contaminantes excesivas.  
   - *Mitigación:* Registro obligatorio de revisión técnico-mecánica vigente para todos los vehículos vinculados.
5. **Cultura de Movilidad Urbana Sostenible:**  
   - *Impacto Positivo:* Educación activa de futuros profesionales en hábitos de movilidad compartida y sostenible.  
   - *Riesgo:* Pérdida de interés en métricas ecológicas si no se percibe valor directo.  
   - *Mitigación:* Módulo de impacto individual en la app con contador de kilogramos de CO2 evitados y árbol de impacto.

