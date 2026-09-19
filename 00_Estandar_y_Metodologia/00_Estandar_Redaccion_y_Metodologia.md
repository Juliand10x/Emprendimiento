# Guía Maestra de Estándar de Redacción, Metodología y Formato TeX
## Proyecto StatCredit AI — Scoring Crediticio Alternativo B2B & XAI
**Curso:** Emprendimiento (Pregrado en Ciencia de Datos — Universidad Externado de Colombia)  
**Grupo 5:** Santiago Sandoval, Sebastián Ramos, Julián Duarte, Tomás Rincón, Julián Jiménez

---

## 1. Propósito de esta Guía
Esta guía define las reglas de juego para redactar, presentar y estructurar todos los trabajos, talleres y portafolios del proyecto **StatCredit AI**. La idea es que cualquier persona (compañero de equipo, profesor o jurado externo) que lea nuestro repositorio entienda exactamente qué hacemos, con qué metodología trabajamos y cómo explicamos nuestras ideas de forma clara, sencilla y rigurosa.

---

## 2. Formato Oficial de Presentación: LaTeX (`.tex`)
1. **Regla de Oro:** Todos los entregables oficiales y portafolios finales para evaluación se deben trabajar y compilar en **LaTeX (`.tex`)**.
2. **Estilo Limpio y Profesional:**
   - Usar siempre paquetes oficiales en español (`\usepackage[spanish]{babel}`).
   - Mantener portadas limpias y elegantes con el nombre del proyecto **StatCredit AI**.
   - Diseñar tablas claras utilizando `booktabs` (`\toprule`, `\midrule`, `\bottomrule`) o `tabularx` sin recargar de líneas verticales innecesarias.
   - Usar cajas `tcolorbox` para resaltar resúmenes ("¿De qué trata este entregable?") o experimentos clave.

---

## 3. Lenguaje, Tono y Estilo de Redacción

Buscamos un equilibrio perfecto entre **claridad pedagógica** y **rigor en Ciencia de Datos**:

### A. Explicativo, Cercano y Sencillo
- Explicar las ideas complejas "de forma sencilla" para que cualquier persona entienda el impacto real en la vida de un trabajador independiente en Colombia.
- Preguntarnos siempre: *¿Lo entendería un estudiante de pregrado o un analista de crédito en su primer día?*

### B. Estructura Clara por Preguntas e Impacto
En los talleres y experimentos, usar siempre el esquema de tres pasos:
1. **Lo que queremos saber:** La hipótesis o pregunta concreta que queremos responder.
2. **Cómo lo probamos:** El método sencillo de Ciencia de Datos o validación de campo.
3. **Por qué importa la métrica:** La razón financiera o de negocio por la cual ese número cambia las cosas.

### C. Rigor Conceptual sin Palabrería Innecesaria
- Evitar términos abstractos o relleno comercial sin sustento.
- Cuando utilicemos términos técnicos de Ciencia de Datos (*Inferencia Causal, Regresión Logística, SHAP, Falsos Negativos, MLOps*) o de Emprendimiento (*SaaS, B2B, TAM/SAM/SOM, Canvas*), debemos explicarlos en una línea de forma intuitiva.

---

## 4. Guía de Conceptos Metodológicos del Proyecto

### A. Reencuadre del Problema (Problem Framing & Reframing)
Siguiendo la metodología de Bianchi & Verganti (2021):
- **Supuesto Tradicional:** *"Los trabajadores independientes son riesgosos porque no tienen historial bancario en DataCrédito."*
- **Reencuadre StatCredit AI:** *"Los independientes sí mueven dinero a diario en billeteras digitales (Nequi, Daviplata), pero los bancos usan fórmulas viejas que no saben leer esa información digital."*
- **Enunciado Insignia:** *"No buscamos cambiar quién puede acceder al crédito; buscamos cambiar la forma en que se mide quién puede pagarlo."*

### B. Diagrama de Causa y Efecto (Ishikawa)
- **Cabeza del Problema Raíz:** *Falta de información financiera estructurada en los bancos para evaluar el riesgo crediticio en independientes.*
- **Causas Raíz:** Fragmentación de datos, modelos lineales rígidos, economía informal no bancarizada y barreras regulatorias SARC.
- **Consecuencias (No confundir con la causa):** *Exclusión crediticia, sobrecostos por préstamos usureros (gota a gota), pérdida de margen bancario y muerte prematura de micronegocios.*

### C. Definición del Cliente B2B y Beneficiario B2B2C
- **Cliente Comercial Directo (B2B):** Entidades Financieras, Neobancos, Fintechs de originación, Cooperativas de Ahorro y Crédito y Microfinancieras. Son las empresas que compran y pagan la suscripción/API.
- **Población Objetivo Beneficiaria (B2B2C):** *Trabajadores independientes solventes de la economía informal y semi-informal urbana en Colombia* (comerciantes, profesionales autónomos y micronegociantes con ingresos transaccionales digitales de 2 a 10 SMMLV).

### D. Modelo de Negocio Software as a Service (SaaS)
- **Operación vía REST API:** Conexión directa al motor de originación del banco o fintech.
- **Cobro Híbrido:** Suscripción mensual base (mantenimiento MLOps) + Tarifa variable por consulta de score realizada (*Pay-per-Query*).
- **Explicabilidad SARC:** Entrega simultánea del Score y el reporte explicativo local SHAP para superar auditorías ante la Superintendencia Financiera (Circular 026).

---

## 5. Organización del Repositorio en GitHub
Todo el proyecto debe mantenerse estrictamente ordenado en carpetas numeradas:
- `00_Estándar_y_Metodología/`: Esta guía normativa de redacción.
- `01_Proyecto_StatCredit_AI/`: Talleres de ideación, Term Sheet, diagnósticos estratégicos y presentaciones.
- `02_Portafolios_de_Evidencias/`: Carpetas individuales para cada Portafolio (Portafolio 1, Portafolio 2, Portafolio 3).
- `03_Materiales_de_Clase/`: Diapositivas de sesiones, apuntes y notas del curso.
- `04_Lecturas_y_Bibliografía/`: Artículos académicos y referencias teóricas.
