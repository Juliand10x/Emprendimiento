# Portafolio de Evidencias No. 3 — StatCredit AI
**Curso:** Emprendimiento (Pregrado en Ciencia de Datos)  
**Institución:** Universidad Externado de Colombia — Semestre 2026-II  
**Grupo 5:** Santiago Sandoval, Sebastián Ramos, Julián Duarte, Tomás Rincón, Julián Jiménez  

---

## 📌 1. Descripción del Entregable
Este directorio contiene los archivos fuente, insumos visuales y el documento compilado oficial correspondiente al **Portafolio de Evidencias No. 3** de **StatCredit AI**, enfocado en la validación en profundidad del modelo de negocio y el esquema del **Primer Lienzo Canvas (Zona ENTREGAR: P1 a P3)**, según las indicaciones de la Sesión 10 y los lineamientos de la profesora.

---

## 📂 2. Archivos del Portafolio

| Archivo | Tipo | Descripción |
| :--- | :--- | :--- |
| **`Portafolio_de_Evidencias_3_StatCredit_AI.tex`** | Código Fuente LaTeX | Documento maestro con estructura académica, diseño modular con `tcolorbox`, colores institucionales y redacción ajustada al estándar docente. |
| **`Portafolio_de_Evidencias_3_StatCredit_AI.pdf`** | Documento Compilado | Versión final oficial en formato PDF lista para entrega y sustentación. |
| **`trabajo_clase_2_octubre_2026.png`** | Evidencia Gráfica | Registro fotográfico del taller creativo presencial de ideación con post-its (Sesión 10, 2 de octubre de 2026). |
| **`README.md`** | Documentación | Guía descriptiva del entregable y trazabilidad metodológica. |

---

## 📑 3. Estructura y Contenidos Desarrollados

El documento está estructurado de manera lineal y rigurosa en seis secciones principales:

### **Sección 1: Evidencias de Campo — Entrevistas a Expertos del Sector**
- Transcripciones literales y análisis cualitativo de entrevistas con:
  - **Diego Ramos (Experto en Riesgo Crediticio):** Valida la asimetría de información, el rechazo sistemático del 65% de independientes solventes por sesgo de nómina fija y el cuello de botella operativo de los analistas (límite de 15 a 20 casos manuales al día).
  - **Paola Cárdenas (Analista Microempresarial y Experta SARC):** Detalla las exigencias normativas de la Superintendencia Financiera de Colombia (Circular Externa 026 de 2022), la prohibición de modelos opacos de «caja negra» y la obligatoriedad de interpretabilidad algorítmica (SHAP / XAI).

### **Sección 2: Segmento de Clientes (Metodología Aulet & Ciencia de Datos)**
- **1.1 Segmentación de Mercado:** Identificación del cliente que paga (B2B: neobancos, cooperativas, bancos pequeños) y del beneficiario final (B2B2C: 4,5 millones de micronegocios e independientes urbanos).
- **1.2 Mercado Total Potencial (TAM):** Dimensionamiento macroeconómico y transaccional en Colombia.
- **1.3 Perfil del Usuario Final:** Personificación de «Don Carlos» (52 años, comerciante de víveres en Corabastos, ingresos de $4,5M COP/mes, bancarizado en Nequi pero rechazado en la banca tradicional).
- **1.4 Dimensionamiento TAM / SAM / SOM:**
  - **TAM:** \$36,0M USD anuales (4,5 millones de microempresarios evaluables).
  - **SAM:** \$9,0M USD anuales (25% en bancarización digital activa).
  - **SOM:** \$1,08M USD anuales (primeros 3 años, foco en Bogotá, Medellín y Cali).
- **1.5 Primeros 10 Clientes Institucionales:** Mapeo de entidades diana (Lulo Bank, Ualá Colombia, Banco Finandina, Banco Mundo Mujer, Contactar, Coofisam, Coopcentral, Monet, R5 y Addi).
- **1.6 Evidencias de Experimentos y Preguntas de Campo:** Marco formal de Ciencia de Datos para validar hipótesis y cuestionario de 10 preguntas de validación directa.

### **Sección 3: Propuesta de Valor y Prototipo MVP**
- **2.1 Core Business — Portafolio de Valor Multidimensional:**
  - *Core Business (Usuario):* Evaluación en $<2$ segundos, inclusiva y explicable.
  - *Dimensión Económica (Profit):* Incremento del 20%--30% en colocación con reducción del 70% en costos de estudio.
  - *Dimensión Social (People):* Inclusión formal digna frente a la usura del gota a gota (20%--40% mensual).
  - *Dimensión Ambiental (Planet):* Cero papel, arquitectura nativa en la nube.
  - Registro fotográfico y transcripción completa de los post-its del taller del 2 de octubre de 2026.
- **2.2 Primer Prototipo del Producto (MVP):** Pipeline funcional en 4 pasos (Ingesta API REST $\rightarrow$ Limpieza y extracción de 40+ variables $\rightarrow$ Motor analítico de scoring $\rightarrow$ Módulo explicativo XAI/SHAP).

### **Sección 4: Canales y Flujo de Ventas (Aulet Paso 18)**
- **3.1 Mapeo de Adquisición B2B:** Proceso de 6 etapas desde la prospección consultiva hasta la firma de contrato SaaS.
- **3.2 Embudo de Ventas (Aulet Paso 18):**
  - *Corto Plazo:* Venta directa consultiva (*Field Sales*) a vicepresidencias de riesgo y PoC de 30 días.
  - *Mediano Plazo:* Alianzas estratégicas con Colombia Fintech y proveedores de core bancario.
  - *Largo Plazo:* Efecto red, auto-onboarding y marketplace de APIs financieras.
- **3.3 Modelo de Relación y Retención:** Onboarding guiado, soporte analítico 24/7 (SLA 99,9%) y recalibración regulatoria continua bajo norma SARC (churn proyectado $<5\%$).

### **Sección 5: Fuentes de Ingreso y Economía del Negocio (Aulet Cap. 15)**
- **Esquema de Monetización SaaS B2B:** Tarifa base de mantenimiento (\$1.500 USD/mes) + Cobro variable por consulta (*pay-per-query* escalonado de \$0,80 a \$0,50 USD).
- **Unit Economics (LTV vs. CAC):**
  - CAC estimado: \$4.000 USD por entidad vinculada.
  - LTV proyectado: \$60.000 USD (permanencia mínima de 36 meses).
  - Relación LTV / CAC: **$>15\times$**, superando con holgura el umbral de Aulet ($\text{LTV} \ge 3\times \text{CAC}$).

### **Sección 6: Primer Lienzo Canvas (Zona ENTREGAR: P1 a P3)**
- Síntesis estratégica del modelo de negocio en formato visual ejecutivo (`tcolorbox` cards):
  - **Bloque 1 (P1):** Problema y Oportunidad.
  - **Bloque 2 (P1):** Segmentos de Actores.
  - **Bloque 3 (P2):** Portafolio de Valor Multidimensional.
  - **Bloque 7 (P3):** Canales y Relación con el Cliente.
  - Conexión metodológica con las entregas futuras (P4: Capturar Valor y P6: Compartir Valor).

---

## 🛠️ 4. Instrucciones de Compilación
Para compilar el documento LaTeX localmente:
```bash
pdflatex -interaction=nonstopmode Portafolio_de_Evidencias_3_StatCredit_AI.tex
pdflatex -interaction=nonstopmode Portafolio_de_Evidencias_3_StatCredit_AI.tex
```
*(Se recomienda dos pasadas para actualizar la tabla de contenidos).*
