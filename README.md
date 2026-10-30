# 🏛️ Repositorio Oficial — Curso de Emprendimiento
## Pregrado en Ciencia de Datos | Universidad Externado de Colombia — Semestre 2026-II
**Grupo 5:** Santiago Sandoval, Sebastián Ramos, Julián Duarte, Tomás Rincón, Julián Jiménez

[![Institución: Univ. Externado](https://img.shields.io/badge/Instituci%C3%B3n-Universidad_Externado-blue?style=for-the-badge)](https://www.uexternado.edu.co/)
[![Estado: Pivote a Wheels Externado](https://img.shields.io/badge/Estado-Pivote_Estrat%C3%A9gico-orange?style=for-the-badge)](01_Proyecto_Wheels_Externado/)
[![Entregable: Entrega 3 & Portafolio 4](https://img.shields.io/badge/En_Desarrollo-Entrega_3_%7C_Portafolio_4-success?style=for-the-badge)](02_Portafolios_de_Evidencias/Portafolio_4/)

---

## 🔄 1. Declaración Oficial del Pivote Estratégico

El equipo de emprendimiento ha ejecutado formalmente un **pivote estratégico de modelo y producto**, pasando de la solución inicial de scoring bancario (*StatCredit AI*) al desarrollo de una **plataforma y app institucional de viajes compartidos y carpooling universitario: "Wheels Externado"**.

| Dimensión | Etapa Previa: StatCredit AI (Archivado) | Etapa Vigente: Wheels Externado (Activo) |
| :--- | :--- | :--- |
| **Problema** | Falta de datos de independientes en burós de crédito. | Saturación, inseguridad y caos en grupos informales de WhatsApp de "Wheels". |
| **Solución** | API SaaS B2B de scoring explicable con SHAP. | App móvil institucional con SSO `@uexternado.edu.co`, matching de rutas y pagos digitales. |
| **Validación** | Restringida por barreras de acceso bancario y regulación SARC. | Acceso directo y diario a más de 12.000 estudiantes en el campus del Externado. |
| **Ubicación** | `Proyecto_StatCredit_AI/` (Preservado e Intacto) | `01_Proyecto_Wheels_Externado/` |

---

## 🚗 2. Proyecto Activo: Wheels Externado

**"Wheels Externado"** es una solución de movilidad inteligente diseñada específicamente para resolver el cuello de botella geográfico y de seguridad de la **Universidad Externado de Colombia** (ubicada en los Cerros Orientales / barrio La Candelaria).

Reemplaza los grupos desestructurados de WhatsApp mediante:
- **Autenticación Institucional Mandatoria:** Acceso exclusivo con credenciales de la Universidad Externado.
- **Validación de Vehículos y Conductores:** Integración con bases de datos públicas (RUNT) para verificar SOAT, revisión técnico-mecánica y antecedentes.
- **Matching Algorítmico Geoespacial:** Agrupación inteligente de pasajeros y conductores según corredores de viaje (Chía, Norte, Calle 80, Suba, Sur) y horarios de clase.
- **Pagos Digitales Transparentes:** Aportes colaborativos estandarizados sin discusiones de cambio en efectivo.
- **Seguridad y Confianza:** Trazabilidad GPS, botón de pánico y sistema bidireccional de reseñas y reputación.

---

## 👥 3. Integrantes del Equipo (Grupo 5)

| Nombre | Rol en Wheels Externado | Enfoque Técnico y Estratégico |
| :--- | :--- | :--- |
| **Santiago Sandoval** | Product & Algorithm Lead | Algoritmo geoespacial de rutas, heurísticas de matching y cálculo de tiempos. |
| **Sebastián Ramos** | Director de Estrategia & Finanzas | Modelo de capturar valor (take-rate), Unit Economics (LTV/CAC) y proyecciones. |
| **Julián Duarte** | Data Engineer & Backend | Arquitectura de APIs, autenticación institucional y pasarelas de pago. |
| **Tomás Rincón** | Operaciones, Seguridad & Compliance | Verificación RUNT/SOAT, términos legales y protocolos de seguridad estudiantil. |
| **Julián Jiménez** | UX/UI & Mobile Engineering | Diseño de interfaces de usuario (conductor/pasajero) y pruebas funcionales. |

---

## 📂 4. Estructura General del Repositorio

```
Emprendimiento/
├── README.md                                      # Cuadro de mando principal y registro del pivote
├── .gitignore                                     # Configuración de exclusiones git
│
├── 00_Estandar_y_Metodologia/                     # Guías docentes y manual de estilo
│   ├── 00_Guia_Maestra_y_Estandar_del_Proyecto.md
│   └── 00_Estandar_Redaccion_y_Metodologia.md
│
├── 01_Proyecto_Wheels_Externado/                  # 🚗 PROYECTO ACTIVO: Carpooling Universitario
│   ├── README.md                                  # Contexto, pivote e idea del proyecto
│   ├── Entrega_3/                                 # 📌 Carpeta para Entrega 3
│   └── Portafolio_de_Evidencias_4/                # 📌 Carpeta para Portafolio de Evidencias 4
│
├── Proyecto_StatCredit_AI/                        # 🏛️ PROYECTO PREVIO (Archivado)
│   ├── 01_Talleres_y_Contratos/                   # Talleres iniciales y Term Sheet
│   ├── 02_Presentaciones_y_Diapositivas/          # Diapositivas Entrega 1, Glosario y recursos
│   └── Portafolios_de_Evidencias/                 # Portafolios históricos (1, 2 y 3)
│       ├── Portafolio_1/
│       ├── Portafolio_2/
│       └── Portafolio_3/
│
├── 03_Materiales_de_Clase/
└── 04_Lecturas_y_Bibliografia/
```

---

## 🌿 5. Configuración de Ramas en GitHub

1. **`main`**: Rama principal del repositorio.
2. **`entrega-3`**: Rama para trabajar lo relacionado con la Entrega 3 (`01_Proyecto_Wheels_Externado/Entrega_3/`).
3. **`portafolio-4`**: Rama para trabajar lo relacionado con el Portafolio de Evidencias 4 (`01_Proyecto_Wheels_Externado/Portafolio_de_Evidencias_4/`).

---
*Universidad Externado de Colombia — Pregrado en Ciencia de Datos — 2026*
