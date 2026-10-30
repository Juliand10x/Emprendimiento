# 🚗 Proyecto: Plataforma de Carpooling Universitario ("Wheels Externado")
## Curso de Emprendimiento — Pregrado en Ciencia de Datos
**Universidad Externado de Colombia | Semestre 2026-II**
**Grupo 5:** Santiago Sandoval, Sebastián Ramos, Julián Duarte, Tomás Rincón, Julián Jiménez

---

## 📌 1. Visión General y Resumen del Proyecto

Este directorio alberga la documentación estratégica, técnica y de negocio del nuevo proyecto formulado tras el **pivote estratégico** del equipo: el desarrollo de una **aplicación móvil y plataforma analítica de viajes compartidos (Carpooling / "Wheels")** diseñada específicamente para la comunidad de la **Universidad Externado de Colombia**, con arquitectura modular y escalable para futuras redes interuniversitarias.

### 🎯 Enunciado del Problema
> **"Actualmente, la comunidad de la Universidad Externado depende de grupos informales y fragmentados de WhatsApp para coordinar viajes compartidos ('Wheels'), lo que genera altos riesgos de seguridad, saturación e ineficiencia en la comunicación, cancelaciones sin penalización y una total falta de trazabilidad en los viajes y cobros."**

---

## 🔍 2. Justificación del Pivote Estratégico

| Criterio | Proyecto Anterior (StatCredit AI) | Nuevo Proyecto (Wheels Externado) |
| :--- | :--- | :--- |
| **Enfoque de Negocio** | SaaS B2B Fintech (Scoring crediticio) | Plataforma Marketplace B2C / Institucional (Movilidad y Carpooling) |
| **Acceso a Validación** | Difícil acceso a tomadores de decisión bancarios y datos reales SARC | Acceso directo, diario e inmediato al dolor real de miles de estudiantes del Externado |
| **Dolor Validable** | Proceso de scoring crediticio tradicional | Grupos masivos de WhatsApp saturados e inseguros que operan todos los días |
| **Mercado Beachhead** | Cooperativas y neobancos en Colombia | Comunidad de la Universidad Externado de Colombia (~12.000 estudiantes + docentes y personal) |
| **Escalabilidad** | Sector financiero regulado | Alianza Universitaria del Centro (Andes, Tadeo, Rosario) y posterior red metropolitana |

---

## 👥 3. Integrantes del Equipo y Roles

| Nombre | Rol Principal en Wheels Externado | Enfoque Técnico y Estratégico |
| :--- | :--- | :--- |
| **Santiago Sandoval** | Product & Algorithm Lead | Algoritmo de matching geoespacial de rutas, optimización de trayectos y cálculo de tiempos. |
| **Sebastián Ramos** | Director de Estrategia & Modelo de Negocio | Estructura de comisiones/take-rate, costos operativos, proyecciones financieras y unit economics. |
| **Julián Duarte** | Arquitectura de Datos & Backend | Modelado de base de datos relacional/NoSQL, APIs de autenticación institucional y pasarelas de pago. |
| **Tomás Rincón** | Operaciones, Seguridad & Compliance | Políticas de validación de conductores (SOAT, RUNT, antecedentes), términos de servicio y seguridad de pasajeros. |
| **Julián Jiménez** | UX/UI & Mobile App Engineering | Diseño de interfaces de usuario (conductor vs pasajero), flujos de reserva en tiempo real y pruebas QA. |

---

## 📂 4. Estructura del Directorio

```
01_Proyecto_Wheels_Externado/
├── README.md                                  # Este documento (Visión y mapa general del proyecto)
│
├── Entrega_3/                                 # Materiales, guion y soporte para la Entrega Oficial No. 3
│   ├── README.md                              # Resumen ejecutivo de la Entrega 3
│   └── Guion_Estructura_Presentacion_Entrega_3.md # Estructura slide por slide para la sustentación
│
└── 02_Documentacion_y_Modelo/                 # Especificaciones técnicas y formulación del problema
    ├── 01_Ficha_Tecnica_Problema_y_Pivote.md  # Caracterización a profundidad del dolor y justificación
    └── 02_Arquitectura_Conceptual_App.md      # Flujo funcional, seguridad, matching y monetización
```

---

## 🛣️ 5. Principales Módulos de la Solución

1. **Autenticación Institucional Segura (SSO):** Exclusividad inicial para usuarios activos con credenciales `@uexternado.edu.co`.
2. **Validación Rigurosa de Conductores:** Registro de licencia de conducción, SOAT y revisión técnico-mecánica vigente mediante consulta a RUNT.
3. **Algoritmo Inteligente de Matching de Rutas:** Agrupación automática por zonas (Norte, Chía, Suba, Calle 80, Salitre, Teusaquillo, Sur) y franjas horarias de clases (7:00 AM, 9:00 AM, 1:00 PM, 5:00 PM, etc.).
4. **Reserva y Cuota Colaborativa Transparente:** Fijación de aportes sugeridos estándar según distancia y cobro automatizado digital para evitar disputas de efectivo.
5. **Seguridad y Confianza en Ruta:** Calificación mutua (1 a 5 estrellas), comentarios verificados, seguimiento del viaje en mapa y botón de asistencia de seguridad.
