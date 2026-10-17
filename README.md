# 🏛️ Repositorio Oficial del Proyecto StatCredit AI
## Curso de Emprendimiento — Pregrado en Ciencia de Datos
**Universidad Externado de Colombia | Semestre 2026-II**

[![Status: Portafolio 3 Completado](https://img.shields.io/badge/Portafolio_3-Completado_y_Validado-success?style=for-the-badge&logo=latex)](02_Portafolios_de_Evidencias/Portafolio_3/)
[![Institución: Univ. Externado](https://img.shields.io/badge/Instituci%C3%B3n-Universidad_Externado-blue?style=for-the-badge)](https://www.uexternado.edu.co/)
[![Enfoque: B2B FinTech & XAI](https://img.shields.io/badge/Enfoque-SaaS_B2B_%7C_XAI_%7C_SARC-0072CE?style=for-the-badge)](#-sobre-el-proyecto-statcredit-ai)

---

## 🚀 Sobre el Proyecto: StatCredit AI

**StatCredit AI** es un motor analítico de scoring crediticio alternativo en modelo **Software as a Service (SaaS B2B)** diseñado para transformar la inclusión financiera en Colombia.

Nuestra plataforma permite a entidades financieras, neobancos y cooperativas de crédito evaluar la solvencia real y capacidad de repago de trabajadores independientes y micronegocios urbanos a partir de sus transacciones en billeteras digitales (Nequi, Daviplata) y facturación electrónica. Lo hace mediante modelos avanzados de Machine Learning e **Inteligencia Artificial Explicable (XAI / SHAP)**, cumpliendo estrictamente con la normativa **SARC (Circular Externa 026 de 2022 de la Superintendencia Financiera de Colombia)**.

> **Enunciado Insignia del Proyecto:**  
> *"No buscamos cambiar quién puede acceder al crédito; buscamos cambiar la forma en que se mide quién puede pagarlo."*

---

## 👥 Integrantes del Equipo (Grupo 5)

| Nombre | Rol Principal | Enfoque Técnico y Estratégico |
| :--- | :--- | :--- |
| **Santiago Sandoval** | Data Science Lead / ML Architect | Algoritmos de scoring, inferencia causal, explicabilidad SHAP y MLOps. |
| **Sebastián Ramos** | Director de Estrategia & Negocios B2B | Modelo de monetización SaaS, unit economics (LTV/CAC) y TAM/SAM/SOM. |
| **Julián Duarte** | Data Engineer / Backend Architect | Ingesta transaccional, pipelines de extracción y arquitectura REST API. |
| **Tomás Rincón** | Analista de Riesgo & Compliance SARC | Regulación financiera, normatividad SARC de la SFC y auditoría algorítmica. |
| **Julián Jiménez** | Software Engineer / QA | Integración de módulos, calidad de código y pruebas de latencia (<2s). |

---

## 🧭 Trazabilidad y Linealidad del Proyecto

El desarrollo del proyecto avanza de manera acumulativa y estructurada, respaldado en cada etapa por evidencias de campo y marcos metodológicos rigurosos:

```
[Portafolio 1] ──> [Portafolio 2] ──> [Entrega 1] ──> [Portafolio 3] ──> [Portafolio 4] ──> [Portafolios 5 y 6]
  Ideación &         Validación         Sustentación      Validación de      Capturar Valor:     Compartir Valor:
   Reencuadre          Inicial            Magistral       Campo & Canvas     Costos/Ingresos     Impacto & ODS
  (Completado)       (Completado)       (Completado)       (Completado)        (En Ruta)           (En Ruta)
```

### Resumen de Hitos:
1. **[Portafolio 1](02_Portafolios_de_Evidencias/Portafolio_1/):** Formulación del problema visible vs. reencuadre de sentido bajo el marco de **Bianchi & Verganti (2021)**, Ikigai del equipo y contrato de socios (*Term Sheet*).
2. **[Portafolio 2](02_Portafolios_de_Evidencias/Portafolio_2/):** Validación cualitativa inicial con actores financieros, matriz de experimentación de hipótesis críticas y primer esbozo de modelo de negocio.
3. **[Entrega 1](01_Proyecto_StatCredit_AI/):** Presentación magistral de la propuesta de valor y arquitectura analítica conceptual.
4. **[Portafolio 3](02_Portafolios_de_Evidencias/Portafolio_3/):** 
   - **Validación con Expertos:** Entrevistas a Diego Ramos (Riesgo de Consumo) y Paola Cárdenas (Regulación SARC de la SFC).
   - **Segmentación Disciplinada (Bill Aulet):** Definición del Beachhead Market, persona «Don Carlos», dimensionamiento TAM/SAM/SOM y mapeo de los primeros 10 clientes institucionales.
   - **Propuesta de Valor Multidimensional:** Portafolio de 4 dimensiones (Core Business, Profit, People, Planet), registro fotográfico del taller de post-its del 2 de octubre y prototipo MVP en 4 pasos.
   - **Canales y Ventas (Aulet Paso 18):** Estrategia a Corto, Mediano y Largo Plazo, embudo B2B y retención con SLA 99,9%.
   - **Economía del Negocio (Aulet Cap 15):** Modelo SaaS B2B, cobro por consulta (*pay-per-query*), CAC = \$4.000 USD, LTV = \$60.000 USD y ratio **LTV/CAC $>15\times$**.
   - **Primer Lienzo Canvas:** Formalización ejecutiva de la **Zona ENTREGAR (P1 a P3)** en tarjetas visuales de alta legibilidad.

---

## 📂 Estructura General del Repositorio

```
Emprendimiento/
├── README.md                                      # Cuadro de mando principal y presentación del repositorio
│
├── 00_Estandar_y_Metodologia/                     # Guía Maestra, Normativas y Estándar del Proyecto
│   ├── 00_Guia_Maestra_y_Estandar_del_Proyecto.md # Documento normativo máster del proyecto
│   └── 00_Estandar_Redaccion_y_Metodologia.md     # Manual de estilo narrativo y Bianchi & Verganti
│
├── 01_Proyecto_StatCredit_AI/                     # Desarrollo Estratégico y Técnico Inicial
│   ├── 01_Talleres_y_Contratos/                   # Talleres presenciales, Term Sheet y acuerdos
│   └── 02_Presentaciones_y_Diapositivas/          # PPTX, HTML, PDF y Glosario oficial
│
├── 02_Portafolios_de_Evidencias/                  # Portafolios Oficiales Evaluables del Curso
│   ├── Portafolio_1/                              # Respaldo de evidencias de Ideación (Notion)
│   ├── Portafolio_2/                              # Tareas 1, 2 y 3 de validación inicial
│   └── Portafolio_3/                              # ENTREGA VIGENTE: Validación de Campo y Primer Lienzo
│       ├── Portafolio_de_Evidencias_3_StatCredit_AI.tex
│       ├── Portafolio_de_Evidencias_3_StatCredit_AI.pdf
│       ├── trabajo_clase_2_octubre_2026.png
│       └── README.md
│
├── 03_Materiales_de_Clase/                        # Presentaciones magistrales, apuntes y circulares
│   └── README.md                                  # Índice de diapositivas y vinculación temática
│
└── 04_Lecturas_y_Bibliografia/                   # Artículos científicos y marcos teóricos
    ├── 2021_A path towards a MVP_Steve blank.pdf
    ├── JBVD_2021_Bianchi, Roberto Verganti_Entrepreneurs as designers of problems worth solving.pdf
    └── README.md                                  # Resumen académico y aportes al proyecto
```

---

## 📑 Principios Metodológicos y Reglas de Oro

1. **Complementariedad B2B:** StatCredit AI no critica ni busca sustituir a la banca tradicional; actúa como su aliado de analítica avanzada para resolver el cuello de botella de la revisión manual de extractos.
2. **Explicabilidad Mandatoria (SARC):** Todo modelo predictivo debe ofrecer interpretabilidad matemática (SHAP) para blindar legalmente a los comités de riesgo ante la Superintendencia Financiera.
3. **Rigor Cuantitativo:** Ninguna cifra de mercado o desempeño es inventada; todas se fundamentan en fuentes oficiales (DANE, Banca de las Oportunidades, SFC) y métodos formales de Ciencia de Datos.

---
*Universidad Externado de Colombia — Pregrado en Ciencia de Datos — 2026*
