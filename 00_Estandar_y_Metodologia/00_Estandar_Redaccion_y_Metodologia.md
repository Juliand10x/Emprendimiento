# Guía Maestra de Estándar de Redacción, Metodología y Formato TeX
## Proyecto StatCredit AI — Scoring Crediticio Alternativo B2B & XAI
**Curso:** Emprendimiento (Pregrado en Ciencia de Datos — Universidad Externado de Colombia)  
**Grupo 5:** Santiago Sandoval, Sebastián Ramos, Julián Duarte, Tomás Rincón, Julián Jiménez

---

## 1. Reglas de Oro sobre Tono, Lenguaje y Posicionamiento (Feedback Oficial de la Profesora)

### A. Lo que NUNCA debemos decir (Prohibiciones Narrativas)
De acuerdo con las observaciones y correcciones docentes (`Complementacion.pdf`):
- ❌ **NUNCA** decir *"la banca está equivocada y nosotros tenemos la solución"*.
- ❌ **NUNCA** afirmar que *"la banca está ciega"*, que *"los modelos bancarios son obsoletos"* o que *"los bancos rechazan por malicia o desinterés"*.
- ❌ **NUNCA** asegurar que *"eliminamos por completo los sesgos"* o que *"resolvemos mágicamente el riesgo"*.

> **Justificación Académica y Profesional:** La banca tradicional ya utiliza modelos de scoring y datos alternativos en alguna medida. Afirmaciones arrogantes o no demostradas generan fricción inmediata con los jurados evaluadores y demuestran falta de comprensión del sector financiero real.

### B. Tono y Posicionamiento Correcto (La Narrativa Aprobada)
- ✅ **Planteamiento Constructivo:** *"Existe información transaccional y financiera alternativa (billeteras de bajo monto, pagos por QR, facturación electrónica) que hoy no se aprovecha lo suficiente en los procesos tradicionales de evaluación crediticia."*
- ✅ **Enfoque de Complementariedad B2B:** StatCredit AI no busca reemplazar a la banca ni competir contra ella, sino actuar como un **motor analítico complementario B2B** que les permite evaluar mejor y ampliar su colocación rentable.
- ✅ **Enunciado Insignia del Proyecto:**
  > *"No buscamos cambiar quién puede acceder al crédito; buscamos cambiar la forma en que se mide quién puede pagarlo."*

---

## 2. Marco Teórico y Metodológico de Reencuadre (Bianchi & Verganti, 2021)

El proyecto se rige estrictamente por la metodología de **Problem Framing & Reframing** y la creación de nuevo sentido (*Innovation of Meaning*):

### A. Los 4 Pasos del Marco de Reencuadre
1. **Problema Visible:** *"Los micronegocios y trabajadores independientes no tienen historial crediticio formal en centrales de riesgo."*
2. **Replanteamiento:** *"Los independientes sí cuentan con información financiera diaria y observable (ventas, flujos en billeteras digitales), pero esta información está fragmentada y no se incorpora eficientemente en las evaluaciones bancarias tradicionales."*
3. **Nueva Oportunidad:** *"Convertir esa información transaccional observable en una medida objetiva y auditable de riesgo crediticio."*
4. **Solución Tecnológica (StatCredit AI):** Proporcionar la infraestructura SaaS/API de Ciencia de Datos que transforma ventas y flujos de caja en variables estadísticas y modelos probabilísticos con explicabilidad SHAP.

### B. Los 4 Movimientos de Diseño de Problemas
- **1. De Déficit a Potencial:** El comerciante independiente no "carece" de historial; posee un historial transaccional que todavía no se ha convertido en información crediticia utilizable.
- **2. De Problema a Oportunidad:** Los bancos no "rechazan por malicia"; existe la oportunidad de mejorar la evaluación de millones de micronegocios desatendidos con datos alternativos.
- **3. De Intuición a Evidencia:** Reemplazar afirmaciones subjetivas ("este negocio parece solvente") por el cálculo riguroso de la probabilidad de incumplimiento mediante flujos de ingresos, estabilidad y modelos de Machine Learning / Inferencia Causal.
- **4. De Decisión Binaria a Probabilística:** Pasar de la lógica rígida de "aprobar/rechazar" a un scoring probabilístico continuo, nivel de riesgo calibrado y variables explicativas auditables (XAI/SHAP).

---

## 3. Principios de Elevación y Expansión (Dorst, 2015 & Alerta a la Creación de Valor)

### A. Elevación (Ascender de la Causa Raíz al Sentido Humano)
No nos quedamos únicamente en la causa raíz técnica (*"falta de API para ingesta de datos"*). Practicamos la **elevación** preguntando por qué el problema importa a las personas reales:
- *Técnico:* Ingestar datos transaccionales de Nequi/Daviplata.
- *Financiero:* Reducir el costo de evaluación y medir la capacidad de repago.
- *Humano / Social:* Evitar que un trabajador independiente solvente tenga que recurrir al crédito informal usurero (*gota a gota*) y permitir la estabilidad de su microempresa familiar.

### B. Expansión (Partes Interesadas y Valor Multidimensional)
En todos los entregables debemos incorporar el análisis de **valor multidimensional**, considerando no solo al cliente comprador B2B, sino a:
- La población beneficiaria B2B2C (trabajadores independientes urbanos).
- El cumplimiento regulatorio y transparencia actuarial (Superintendencia Financiera - SARC Circular 026).
- La sostenibilidad ambiental y ética de la IA (eficiencia energética en cloud, ausencia de discriminación algorítmica).

---

## 4. Formato Oficial de Presentación: LaTeX (`.tex`)

1. **Obligatoriedad:** Todos los entregables finales para evaluación se deben compilar y presentar en **LaTeX (`.tex`)**.
2. **Preamble y Paquetes Requeridos:**
   - Idioma y codificación: `\usepackage[utf8]{inputenc}`, `\usepackage[spanish]{babel}`.
   - Formato de página y márgenes: `\usepackage{geometry}`, `geometry{top=2.5cm,bottom=2.5cm,left=2.5cm,right=2.5cm}`.
   - Tipografía y colores: `\usepackage{xcolor}`, definiendo azul institucional (`externadoDarkBlue`) y azul acento (`externadoAccent`).
   - Tablas limpias: `\usepackage{booktabs}` (usando `\toprule`, `\midrule`, `\bottomrule` sin líneas verticales recargadas).
   - Resaltados estructurados: `\usepackage{tcolorbox}` para resúmenes ejecutivos y matrices de hallazgos.
   - Diagramas metodológicos: `\usepackage{tikz}` para esquematizar flujos y la arquitectura del proyecto.

3. **Estructura Interna de los Experimentos y Talleres:**
   Cada hipótesis o prueba debe seguir el esquema de 3 pasos:
   1. **Lo que queremos saber:** La pregunta o hipótesis de negocio/riesgo a validar.
   2. **Cómo lo probamos:** El método de Ciencia de Datos o prueba de campo.
   3. **Por qué importa la métrica:** La razón financiera o de impacto en el score por la cual ese número transforma la decisión.

---

## 5. Estructura Organizada del Repositorio
- `00_Estandar_y_Metodologia/`: Guía Maestra y normativas del proyecto.
- `01_Proyecto_StatCredit_AI/`: Talleres, diagnósticos estratégicos, entregables y presentaciones (.tex, .pptx).
- `02_Portafolios_de_Evidencias/`: Portafolios oficiales acumulativos de evidencias.
- `03_Materiales_de_Clase/`: Diapositivas de clase, notas y documentos de complementación pedagógica.
- `04_Lecturas_y_Bibliografia/`: Artículos teóricos (Bianchi & Verganti, Steve Blank, etc.).
