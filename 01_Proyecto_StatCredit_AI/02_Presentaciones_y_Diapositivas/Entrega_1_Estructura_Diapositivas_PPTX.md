# Guía Estructurada de Diapositivas para PowerPoint (PPT)
## Entrega 1: Presentación de la Idea y Primer Prototipo — StatCredit AI
**Curso de Emprendimiento — Pregrado en Ciencia de Datos | Universidad Externado de Colombia**
**Grupo 5:** Santiago Sandoval, Sebastián Ramos, Julián Duarte, Tomás Rincón, Julián Jiménez

---

### 📌 Alineación con la Guía Maestra y Feedback Docente
Esta presentación refleja el **reencuadre constructivo, la complementariedad B2B y las evidencias cualitativas de campo**:
- **No atacamos a la banca.** Planteamos que *existe información transaccional y financiera alternativa (billeteras de bajo monto, pagos QR, facturación DIAN) que hoy no se aprovecha lo suficiente en las evaluaciones crediticias tradicionales*.
- **Sustentación de Cifras:** Toda métrica (TAM, SAM, SOM, latencias) está debidamente justificada en fuentes oficiales (Superfinanciera, DANE, Grand View Research).
- Fundamentado en el documento máster en LaTeX: `Entrega_1_Presentacion_de_la_Idea_y_Primer_Prototipo.tex`.

---

### 📊 Diapositiva 1: Portada de la Presentación
- **Título:** StatCredit AI — Motor SaaS B2B de Scoring Crediticio Alternativo & XAI
- **Subtítulo:** Entrega 1: Presentación de la Idea y Primer Prototipo (MVP)
- **Frase Insignia:** *"No buscamos cambiar quién puede acceder al crédito; buscamos cambiar la forma en que se mide quién puede pagarlo."*
- **Integrantes (Grupo 5):** Santiago Sandoval | Sebastián Ramos | Julián Duarte | Tomás Rincón | Julián Jiménez

---

### 📊 Diapositiva 2: 1. Ubicación Industrial y Definición del Score
- **Sectores:** Fintech (Alternative Credit Scoring), SaaS B2B / API-First, Inteligencia Artificial Aplicada (XAI e Inferencia Causal) e Inclusión Financiera.
- **Definición del Credit Score:** Métrica probabilística estandarizada (150 a 950 puntos) que mide la probabilidad de mora a 12 meses ($\ge 90$ días).
- **Diferenciación:**
  - *Scoring Tradicional:* Modelos rígidos basados en historial de pago formal previo en buros.
  - *StatCredit AI:* Transformación de la *ausencia de evidencia* en prueba matemática de solvencia evaluando la caja transaccional observable.

---

### 📊 Diapositiva 3: 2. Necesidad del Mercado vs. Problema Raíz (Reencuadre & Ishikawa)
- **Necesidad General:** Evaluación justa de la capacidad de repago para acceder a crédito productivo formal con tasas reguladas.
- **Problema Visible:** Los independientes y micronegocios no tienen historial formal en centrales de riesgo.
- **Replanteamiento StatCredit AI:** Sí cuentan con información financiera diaria (ventas, flujos en Nequi/Daviplata), pero esta información está fragmentada y no se incorpora eficientemente a la evaluación crediticia.
- **Problema Raíz (Ishikawa):** **Falta de información financiera estructurada y de datos integrados en los bancos para evaluar el riesgo en independientes**. *(La exclusión y el gota a gota son consecuencias de 2do orden)*.

---

### 📊 Diapositiva 4: 3. Análisis de Competidores y Validación con Expertos
- **Matriz de Competencia:**
  - *DataCrédito Experian / TransUnion:* Burós tradicionales (proveedores de score formal).
  - *Belvo:* Agregador Open Finance (tubería de datos pura; no emite scoring).
  - *Sempli / Addi:* Fintechs originadoras directas (lenders que asumen riesgo de balance).
  - *Bancos Tradicionales:* **Clientes B2B objetivo**, no competidores de la API.
- **Testimonios de Expertos de Campo:**
  - *Diego Ramos (Riesgo Crediticio):* Valida la fricción manual: los analistas solo procesan 15-20 extractos al día en Excel.
  - *Paola Cárdenas (Regulación SARC):* Valida la exigencia de explicabilidad Circular 026: el reporte SHAP es indispensable para defender las decisiones ante auditores.

---

### 📊 Diapositiva 5: 4. Las Tres Preguntas Clave del Mercado
- **(1) ¿Qué hacen los clientes hoy?**
  - *Entidades Financieras (B2B):* Aplican revisiones manuales lentas (15-20 casos/día) o declinan solicitudes sin herramientas.
  - *Independientes (B2B2C):* Recurren a financiación informal usurera ("gota a gota" >500% EA) o paralizan su negocio.
- **(2) ¿Por qué el problema es difícil de resolver?**
  - Heterogeneidad de datos en múltiples billeteras e infraestructura bancaria legacy batch.
  - Exigencia estricta de explicabilidad SARC (Circular 026 de la Superfinanciera).
- **(3) ¿Qué tipo de mercado abordamos?**
  - Mercado B2B SaaS / API-First de Credit Analytics. Motor analítico **complementario** especializado en datos transaccionales.

---

### 📊 Diapositiva 6: 5. Tamaño de la Industria Sustentado (TAM, SAM, SOM)
- **TAM (Total Addressable Market):** **$220M USD/año** — Mercado de software de Credit Scoring y Analytics en América Latina (Fuente: Grand View Research 2025).
- **SAM (Serviceable Addressable Market):** **$45M USD/año** — Evaluaciones estimadas para 13.2M de independientes en Colombia (Fuente: Superfinanciera \& DANE).
- **SOM (Serviceable Obtainable Market):** **$3.5M USD ARR** — Captura comercial meta a 3 años (25 Fintechs/Cooperativas a $2.50 USD por score).

---

### 📊 Diapositiva 7: 6. Caracterización del Cliente Potencial y Beneficiario
- **Cliente Comercial Directo B2B (Comprador de la API):**
  - Neobancos, Fintechs, Cooperativas de Ahorro y Crédito y Microfinancieras.
  - Decision makers: CROs (Riesgo), CTOs (Tecnología) y Gerentes de Producto.
- **Población Objetivo Beneficiaria B2B2C (Perfil Persona):**
  - Hombres y mujeres de 22 a 55 años en centros urbanos (Bogotá, Medellín, Cali, Barranquilla, Bucaramanga).
  - Ingresos transaccionales de 2 a 10 SMMLV ($2.6M a $13M COP) recibidos en Nequi, Daviplata y facturación electrónica.

---

### 📊 Diapositiva 8: 7. Propuesta de Solución y Prototipo MVP (Diseño Gráfico)
- **Arquitectura de Integración API REST:**
  1. *Ingesta:* Ingesta en tiempo real de historial Nequi/Daviplata + Facturas DIAN + Extractos digitalizados.
  2. *Procesamiento:* Pipeline XGBoost + Inferencia Causal + Explicabilidad SHAP.
  3. *Salida B2B:* Respuesta en $<2$ segundos con Score (150-950), nivel de riesgo y Hash de auditoría SARC.
- **Vista Gráfica del Prototipo:** *(Usar diagrama de flujo API e interfaz JSON del documento LaTeX)*.

---

### 📊 Diapositiva 9: 8. ¿Por qué este Prototipo Resuelve el Problema?
- **1. Aprovecha información transaccional real:** Convierte flujos de caja en evidencias actuariales de repago.
- **2. Cumplimiento Regulatorio SARC:** Métricas SHAP que respaldan a oficiales de cumplimiento ante auditores (Circular 026).
- **3. Agilidad y Eficiencia:** Automatiza el proceso manual reduciendo el tiempo de evaluación de 15 minutos a $<2$ segundos.

---

### 📊 Diapositiva 10: 9. Impacto Social Multidimensional
- **Positivos:** Inclusión financiera real, alternativa al gota a gota, estimulo a la formalización, crédito productivo y equidad económica.
- **Negativos & Mitigación:**
  - *Sobreendeudamiento:* Mitigado con cupos dinámicos ajustados a caja real.
  - *Sesgo algorítmico:* Mitigado con auditorías periódicas de equidad (Fairness AI).
  - *Brecha digital:* Mitigado con UX minimalista y explicaciones claras.

---

### 📊 Diapositiva 11: 10. Impacto Ambiental Multidimensional
- **Positivos:** Proceso 100% paperless, reducción de desplazamientos, digitalización de facturación y eficiencia serverless.
- **Negativos & Mitigación:**
  - *Consumo cloud:* Mitigado con nubes certficadas 100% renovables (AWS Green Regions).
  - *Huella hídrica:* Mitigado con enfriamiento por aire de circuito cerrado.
  - *E-Waste:* Mitigado con convenios de reciclaje tecnológico.

---

### 🎬 Conclusión de la Presentación
- **Mensaje Final:** StatCredit AI ofrece la infraestructura analítica para que las entidades financieras puedan convertir la actividad transaccional de los independientes en decisiones de riesgo objetivas, seguras y auditables ante la Superintendencia Financiera.
