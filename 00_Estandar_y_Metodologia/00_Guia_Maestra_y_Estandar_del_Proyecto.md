# Guía Maestra de Navegación, Estándar y Feedback Oficial del Proyecto
## StatCredit AI — Scoring Crediticio Alternativo B2B & XAI
**Curso:** Emprendimiento (Pregrado en Ciencia de Datos — Universidad Externado de Colombia)  
**Grupo 5:** Santiago Sandoval, Sebastián Ramos, Julián Duarte, Tomás Rincón, Julián Jiménez

---

## 📌 Propósito de esta Guía
Esta guía constituye el **documento normativo máster** del repositorio. Define:
1. La estructura y jerarquía de carpetas del proyecto.
2. El estándar oficial e inviolable para la creación y compilación de documentos en **LaTeX (`.tex`)** (con énfasis en portadas simples y elegantes).
3. El consolidado oficial del **Feedback de la Profesora** (incorporando las correcciones escritas, el feedback verbal en clase, el marco de Bianchi & Verganti, la guía de complementación y las normas de sustentación de datos).

---

## 1. Estructura Organizada del Repositorio

Todo el proyecto debe mantenerse ordenado en las siguientes carpetas numeradas:

```
Emprendimiento/
├── 00_Estandar_y_Metodologia/                     # Guía Maestra, Normativas y Estándar del Proyecto
│   └── 00_Guia_Maestra_y_Estandar_del_Proyecto.md # (ESTE ARCHIVO MÁSTER)
│
├── 01_Proyecto_StatCredit_AI/                     # Desarrollo Estratégico y Técnico del Proyecto
│   ├── 00_Guia_Maestra_y_Estandar_del_Proyecto.md # Copia sincronizada de la Guía Maestra
│   ├── 01_Talleres_y_Contratos/                   # Talleres de Ideación, Term Sheet y Entregables (.tex y .docx)
│   │   ├── Taller_2_Contrato_de_Equipo_Term_Sheet.tex
│   │   ├── Taller_3_Feedback_y_Presentacion_de_la_Idea.tex
│   │   ├── Entrega_1_Presentacion_de_la_Idea_y_Primer_Prototipo.tex
│   │   └── Control_Lectura_Bianchi_Verganti.docx
│   └── 02_Presentaciones_y_Diapositivas/          # Presentaciones y estructuras de diapositivas (.pptx, .md)
│       └── Entrega_1_Estructura_Diapositivas_PPTX.md
│
├── 02_Portafolios_de_Evidencias/                  # Portafolios Oficiales de Evidencias del Curso
│   ├── Portafolio_1/                              # Referencia y respaldo de Portafolio 1
│   ├── Portafolio_2/                              # Portafolio 2 (Máster LaTeX y Tareas 1, 2, 3)
│   └── Portafolio_3/                              # Espacio reservado para Portafolio 3
│
├── 03_Materiales_de_Clase/                        # Material Pedagógico, Notas y Feedback de la Profesora
│   ├── Sesion 08_20260918_Emprendimiento_Entrega 1.pdf
│   ├── Complementacion.pdf                        # Guía oficial de reencuadre y corrección docente
│   └── NotesEmpr.pdf                              # Apuntes de clase
│
└── 04_Lecturas_y_Bibliografía/                   # Lecturas Académicas y Marcos Teóricos
    ├── JBVD_2021_Bianchi, Roberto Verganti_Entrepreneurs as designers of problems worth solving.pdf
    └── 2021_A path towards a MVP_Steve blank.pdf
```

---

## 2. Estándar Oficial para Documentos LaTeX (`.tex`)

### A. Regla Estricta sobre la Portada (Simple, Corta y Elegante)
- ❌ **PROHIBIDO:** Portadas largas cargadas de texto explicativo, listas detalladas de roles por persona o parrafadas introductorias en el título.
- ✅ **REGLA DE ORO:** La portada debe ser **corta, limpia y directa**. Solo debe contener:
  1. Nombre de la institución: `UNIVERSIDAD EXTERNADO DE COLOMBIA`.
  2. Programa y asignatura: `PREGRADO EN CIENCIA DE DATOS --- EMPRENDIMIENTO`.
  3. Título del entregable: (Ej. `ENTREGA 1: PRESENTACIÓN DE LA IDEA Y PRIMER PROTOTIPO`).
  4. Nombre del proyecto: `Proyecto: StatCredit AI --- Motor SaaS B2B de Scoring Crediticio Alternativo & XAI`.
  5. Lista limpia de integrantes: `Santiago Sandoval | Sebastián Ramos | Julián Duarte | Tomás Rincón | Julián Jiménez`.
  6. Fecha / Semestre: `Semestre 2026-II`.

### B. Formato de Preamble y Paquetes Requeridos
```latex
\documentclass[11pt,a4paper]{article}
\usepackage[utf8]{inputenc}
\usepackage[spanish]{babel}
\usepackage{amsmath,amsfonts,amssymb}
\usepackage{geometry}
\geometry{top=2.5cm,bottom=2.5cm,left=2.5cm,right=2.5cm}
\usepackage{hyperref}
\usepackage{booktabs}
\usepackage{xcolor}
\usepackage{tcolorbox}
\usepackage{enumitem}
\usepackage{tikz}
\usetikzlibrary{shapes.geometric, arrows, positioning, calc}

\definecolor{externadoDarkBlue}{RGB}{10, 34, 64}
\definecolor{externadoAccent}{RGB}{0, 114, 206}
\definecolor{lightGray}{RGB}{245, 247, 250}
```

### C. Estilo de Tablas y Cajas de Resaltado
- Usar siempre `booktabs` (`\toprule`, `\midrule`, `\bottomrule`) sin líneas verticales recargadas.
- Usar cajas `tcolorbox` para resúmenes de entregables o hallazgos clave.

---

## 3. Consolidado Maestro del Feedback Oficial de la Profesora (Escrito y Verbal)

Este apartado reúne **todas las observaciones escritas y verbales emitidas por la docente** para el equipo **StatCredit AI**. Estas 9 reglas son de obligatorio cumplimiento en cada taller, entregable o presentación futura:

### 1. Causa Raíz vs. Consecuencias en la Espina de Pescado (Ishikawa)
- ❌ **Error Frecuente:** Tratar la *"exclusión crediticia"*, el *"gota a gota"* o la *"falta de acceso al crédito"* como la cabeza del problema. Esos son **efectos o consecuencias de segundo orden**.
- ✅ **Regla de Corrección:** Ante la pregunta *"¿Por qué pasa la exclusión crediticia?"*, regresamos al problema raíz: **Los bancos no tienen suficiente información ni datos estructurados para evaluar el riesgo y tomar decisiones de crédito en independientes**.

### 2. Definición Formal y Cálculo del "Credit Score"
- ✅ **Definición Actuarial:** Métrica probabilística estandarizada (escala 150 a 950 puntos) que cuantifica la probabilidad de que un deudor incurra en mora severa ($\ge 90$ días) en un horizonte de 12 meses.
- ✅ **Cálculo Tradicional vs. Valor Agregado StatCredit AI:**
  - *Tradicional:* Modelos de regresión logística alimentados únicamente por el historial formal previo en buros (DataCrédito/TransUnion).
  - *Valor Agregado StatCredit AI:* Ingesta en tiempo real de la caja transaccional observable de billeteras de bajo monto (Nequi, Daviplata) y facturación DIAN, procesada con Machine Learning (XGBoost), Inferencia Causal y Explicabilidad SHAP (XAI).

### 3. Ausencia de Evidencia vs. Evidencia de Ausencia & Por qué los Bancos No Lo Han Logrado
- ✅ **El Argumento:** La falta de reporte en DataCrédito es *ausencia de evidencia* de historial, no *evidencia de insolvencia*.
- ✅ **¿Cómo se logra la evidencia?** Transformando la actividad transaccional diaria observable en variables cuantitativas de capacidad de repago.
- ✅ **¿Por qué los bancos no lo han logrado?**
  1. *Infraestructura Legacy:* Sistemas diseñados para procesamiento por lotes (*batch processing*) nocturno, no para consumo de APIs en tiempo real.
  2. *Exigencia Regulatoria SARC (Circular 026):* Temor de comités de riesgo a adoptar Inteligencia Artificial por considerarla "caja negra". StatCredit AI resuelve esto con reportes explicables SHAP.
  3. *Sesgo por Descuento de Nómina:* Preferencia histórica por asalariados formales con deducción automática.

### 4. Economía Informal Urbana y Caracterización de Población Específica
- ✅ **Economía Informal:** Mencionar explícitamente la dinámica de la economía informal y semi-informal urbana en Colombia (>50% de ocupación laboral sin soporte tributario formal).
- ✅ **Población Objetivo Beneficiaria (B2B2C):** Caracterizar explícitamente a trabajadores independientes solventes, comerciantes y micronegociantes con ingresos transaccionales mensuales de 2 a 10 SMMLV (\$2.6M a \$13M COP) ubicados en principales centros urbanos.

### 5. Claridad B2B vs. B2C (¿Quiénes son los clientes?)
- ✅ **Separación Estricta:**
  - **Cliente Comercial Directo (B2B):** Entidades Financieras, Neobancos, Fintechs y Cooperativas de Ahorro y Crédito (son quienes compran y pagan la suscripción/API).
  - **Población Objetivo Beneficiaria (B2B2C):** Trabajadores independientes y micronegociantes.
  - Al responder *"¿Qué hacen los clientes hoy?"*, se debe responder por separado para B2B y B2B2C.

### 6. Modelo Software as a Service (SaaS B2B) y Estructura del Score
- ✅ **Operación:** Motor analítico distribuido como **Score-as-a-Service** vía REST API / gRPC.
- ✅ **Esquema de Ingresos Híbrido:** Suscripción mensual base (mantenimiento MLOps y conexión) + Tarifa variable por consulta de score realizada (*Pay-per-Query*).
- ✅ **Latencia Real:** Inferencia y respuesta de la API en $<2$ segundos.

### 7. Clarificación Estricta de la Competencia
- ✅ **Categorización Correcta:**
  - *DataCrédito Experian / TransUnion:* Buros crediticios tradicionales (proveedores de score formal).
  - *Belvo:* Agregador Open Finance (tubería de datos pura; no emite scoring).
  - *Sempli / Addi:* Fintechs originadoras directas (lenders que asumen riesgo de balance).
  - *Bancos Tradicionales:* **Potenciales clientes B2B**, no competidores de la API.

### 8. Estimación y Ajuste de Mercado (TAM, SAM, SOM)
- ✅ **Estructura Requerida:**
  - *TAM ($220M USD/año):* Mercado de software y analítica de Credit Scoring en América Latina.
  - *SAM ($45M USD/año):* Evaluaciones requeridas para los 13.2M de independientes en Colombia.
  - *SOM ($3.5M USD ARR):* Captura meta a 3 años (25 entidades/cooperativas en Colombia).

### 9. 🚨 REGLA DE ORO: Sustentación Obligatoria de Cifras y Porcentajes
- ❌ **PROHIBIDO:** Incluir porcentajes, métricas financieras o cifras "porque sí" o no justificadas.
- ✅ **OBLIGATORIEDAD DE RESPALDO:** Toda cifra, porcentaje o estimación citada en cualquier documento LaTeX o presentación debe estar **debidamente justificada, respaldada y fundamentada** en fuentes formales (e.g., DANE, Superintendencia Financiera de Colombia, reportes sectoriales de KPMG, Grand View Research o literatura académica).

---

## 4. Histórico de Versiones y Mantenimiento
- **v1.0 (2026-II):** Creación inicial del estándar de redacción.
- **v2.0 (2026-II):** Integración completa del Feedback de la Profesora (`Complementacion.pdf`, observaciones escritas de evaluación) y normativa estricta de portadas LaTeX simples.
- **v2.1 (2026-II):** Consolidación del Feedback Verbal (8 puntos clave), normas de sustentación estricta de cifras y porciendos, y sincronización entre carpetas.
