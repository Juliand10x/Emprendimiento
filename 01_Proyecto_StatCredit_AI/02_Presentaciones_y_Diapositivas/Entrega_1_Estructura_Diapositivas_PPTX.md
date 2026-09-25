# Guía Estructurada de Diapositivas — Entrega 1 (Versión 8 minutos)
## StatCredit AI — Motor SaaS B2B de Scoring Crediticio Alternativo & XAI
**Curso de Emprendimiento — Pregrado en Ciencia de Datos | Universidad Externado de Colombia**
**Grupo 5:** Santiago Sandoval · Sebastián Ramos · Julián Duarte · Tomás Rincón · Julián Jiménez

> **Formato:** 12 diapositivas · ~40 segundos por slide · total ≈ 8 minutos.
> **Regla de oro:** enamorarse del PROBLEMA, no de la solución. Toda cifra va sustentada en fuente.

---

## 🎯 Problema central (fijo, se repite literal en toda la presentación)

> **Los bancos no tienen información ni datos estructurados suficientes para evaluar el riesgo crediticio de los trabajadores independientes.** La ausencia de historial en buró es *ausencia de evidencia*, no *evidencia de insolvencia*.

Esta misma redacción aparece en: portada (subtítulo), slide 4 (cabeza de espina), slide 7 (pregunta "¿por qué es difícil?") y slide 12 (conclusión).

---

## 📊 Diapositiva 1 — Portada (15 s)
- **Título:** StatCredit AI — Motor SaaS B2B de Scoring Crediticio Alternativo & XAI
- **Subtítulo (problema central en una línea):** *Los bancos no tienen datos estructurados para evaluar el riesgo de los independientes.*
- **Frase insignia:** *"No buscamos cambiar quién puede acceder al crédito; buscamos cambiar la forma en que se mide quién puede pagarlo."*
- **Integrantes (Grupo 5)** y **Semestre 2026-II**.

---

## 📊 Diapositiva 2 — [Spec 1] ¿En qué industria nos ubicamos? + ¿Qué es un score? (40 s)
**Sectores de intersección:**
1. Fintech — Alternative Credit Scoring & Credit Analytics.
2. SaaS B2B / API-First (latencia < 2 segundos).
3. Inteligencia Artificial Aplicada (XAI + Inferencia Causal).
4. Inclusión Financiera & Open Finance.

**¿Qué es un score?** *(respuesta al feedback)*
- Métrica probabilística estandarizada, escala **150–950 puntos**.
- Cuantifica la probabilidad de mora severa (**≥ 90 días**) en un horizonte de **12 meses**.

---

## 📊 Diapositiva 3 — [Feedback] Cálculo tradicional vs. Valor agregado (40 s)

| | **Scoring tradicional** | **StatCredit AI (valor agregado)** |
|---|---|---|
| **¿Cómo se calcula?** | Regresión logística alimentada solo con historial formal en buró (DataCrédito/TransUnion). | Ingesta de caja transaccional en tiempo real: Nequi/Daviplata + facturación DIAN, procesada con XGBoost + Inferencia Causal + SHAP. |
| **Qué mide** | Antecedentes formales **pasados**. | Capacidad de repago **actual** (flujo de caja observable). |
| **Resultado** | Rechaza al independiente sin historial. | Convierte la *ausencia de evidencia* en prueba matemática de solvencia. |

---

## 📊 Diapositiva 4 — [Spec 2] Necesidad vs. Problema específico (espina de pescado) (45 s)
**Necesidad general:** acceso a crédito productivo formal con tasas reguladas para independientes solventes.

**Espina de pescado — cabeza = problema raíz (fijo):**
> *Falta de información financiera estructurada en los bancos para evaluar el riesgo en independientes.*

**4 causas estructurales:**
1. **Fragmentación de datos** — billeteras aisladas, extractos en PDF.
2. **Fricción operacional** — revisión manual: 15–20 extractos/día en Excel.
3. **Economía informal urbana** — >50% de ocupación sin soporte tributario.
4. **Rigidez regulatoria SARC** — temor a modelos "caja negra".

> **¿Qué están haciendo mal los bancos?** *(feedback)* — dependen de infraestructura *legacy batch*, temen la "caja negra" ante SARC y tienen sesgo cultural de "nómina fija = seguridad". La exclusión y el gota a gota son **consecuencias de 2.º orden**, no la raíz.

---

## 📊 Diapositiva 5 — [Arreglo 2] Economía informal + población específica (40 s)
**Economía informal y semi-informal urbana:**
- **54,6%** de ocupados informales en Colombia (total nacional, trimestre mayo–julio 2026).
- En las 13 ciudades y áreas metropolitanas: ~40% (39,6% mujeres / 41,4% hombres).
- **Fuente:** DANE — GEIH, Empleo informal y seguridad social (mayo–julio 2026).
- **18+ millones** de usuarios de Nequi en Colombia (fuente: Infobae / Wikipedia).

**Población objetivo específica (B2B2C):**
- Independientes, comerciantes y micronegocios solventes.
- Ingresos transaccionales de **2 a 10 SMMLV** ($2,6M–$13M COP) vía Nequi/Daviplata y facturación DIAN.

---

## 📊 Diapositiva 6 — [Spec 3] 5 competidores (tabla comparativa) (50 s)

| Competidor | Actividad | Problema que resuelve | Producto | Opera en | Ventas anuales | Se parece en… | Se diferencia en… |
|---|---|---|---|---|---|---|---|
| **DataCrédito Experian** | Buró de crédito | Historial de deuda formal | Score DataCrédito (150–950) | Global, líder en Colombia | >$6.500M USD global | Emite métrica de riesgo | Evalúa pasado formal; StatCredit mide caja presente |
| **TransUnion** | Buró + prevención fraude | Reportes de pago e identidad | Credit Score + Fraud Suite | >30 países | >$3.800M USD | Probabilidad de incumplimiento | Sin causalidad; StatCredit usa inferencia causal |
| **Belvo** | Open Finance (API) | Conexión de datos financieros | Data API (bancos + DIAN) | México, Brasil, Colombia | $15–25M USD (Serie A/B) | API B2B de datos | Solo "tubería"; no emite scoring |
| **Juvo / Mambu** | Scoring por datos móviles | Identidad financiera no bancarizada | Financial Identity Scoring | LatAm, África, Asia | $20–40M USD | Atiende no bancarizados | Analiza recargas; StatCredit usa caja real |
| **Sempli / Addi** | Fintech originadora (lender) | Crédito digital ágil | Préstamos PoS / capital de trabajo | Colombia, México | >$80.000M COP | Evaluación algorítmica | Prestan (asumen riesgo); StatCredit es SaaS sin riesgo de balance |

> Cada "se diferencia en…" refuerza el **valor agregado** del slide 3. Los bancos tradicionales son **clientes B2B**, no competidores.

---

## 📊 Diapositiva 7 — [Spec 4] Tres preguntas clave (45 s)
1. **¿Qué hacen los clientes hoy?**
   - *B2B (bancos/fintechs):* revisión manual lenta (15–20 extractos/día) o rechazo sin herramientas.
   - *B2B2C (independientes):* gota a gota (>500% EA) o frenan su negocio.
2. **¿Por qué el problema es difícil de resolver? / ¿Por qué los bancos no lo han logrado?** *(feedback)*
   - Infraestructura *legacy* por lotes (no consume APIs en tiempo real).
   - Exigencia SARC (Circular 026): rechazo a la "caja negra" → hace falta SHAP.
   - Sesgo cultural de nómina fija.
3. **¿Qué tipo de mercado abordamos?** → **Mercado NUEVO / de nicho** (océano azul): motor de scoring transaccional con XAI; nadie en LatAm lo hace así.

---

## 📊 Diapositiva 8 — [Spec 5 + Arreglo 3] Tamaño de la industria (TAM/SAM/SOM) (45 s)

- **TAM — $26.100M USD (2026)** · mercado global de software de Credit Scoring, creciendo a $40.550M USD en 2030 (CAGR 11,9%).
  *Fuente: The Business Research Company, Credit Scoring Market Report 2026.*
- **SAM — ≈ $25M USD/año** · Colombia, segmento independiente (bottom-up):
  - ≈ 13M ocupados informales (54,6% × ocupación, DANE GEIH 2026).
  - Supuesto del equipo (a validar con Encuesta de Micronegocios DANE): ~5M independientes urbanos solventes con billetera digital.
  - 2 evaluaciones/año × $2,50 por score = **≈ $25M/año**.
- **SOM — $3,5M ARR a 3 años** · 25 entidades B2B:
  - Suscripción base (~$30K/año × 25 = $750K) + 1,4M consultas/año × $2,50 = $3,5M.

> Nota: los supuestos del SAM se marcan explícitamente para cumplir la regla de "sin cifras sin sustento".

---

## 📊 Diapositiva 9 — [Spec 6] Características del cliente potencial (35 s)
**Cliente comercial directo (B2B — compra la API):**
- Neobancos, fintechs de originación, cooperativas de ahorro y crédito, microfinancieras.
- *Decision makers:* CRO (Riesgo), CTO (Tecnología), Gerentes de Producto.

**Población beneficiaria (B2B2C — perfil persona):**
- **Edad/género:** hombres y mujeres de 22 a 55 años.
- **Ingresos:** 2–10 SMMLV ($2,6M–$13M COP).
- **Formación:** secundaria, técnica o profesionales autónomos.
- **Ubicación:** Bogotá, Medellín, Cali, Barranquilla, Bucaramanga.
- **Estilo de vida:** comercio urbano, uso continuo de Nequi/Daviplata, pagos QR y facturación DIAN.

---

## 📊 Diapositiva 10 — [Spec 7] Solución + diseño gráfico del prototipo (45 s)
**Prototipo MVP — flujo de integración API REST:**

```
 [1. INGRESA]              [2. PROCESA]                [3. RESPONDE]
 Nequi/Daviplata   ──▶    Motor StatCredit AI   ──▶    Respuesta API B2B
 Facturación DIAN         XGBoost + Causal + SHAP      Score 150–950
 Extractos digitales      (< 2 s)                      Hash auditoría SARC
```

**Ejemplo de respuesta JSON:**
```json
{
  "statcredit_score": 745,
  "risk_category": "RIESGO BAJO-MODERADO",
  "recommended_credit_limit_cop": 6500000,
  "shap_explicability": {
    "positive_factors": ["Flujo_Nequi_Constante (+45 pts)"],
    "risk_mitigators": ["Ingresos_Estacionales_Identificados"]
  },
  "sarc_compliance_audit_hash": "a8f9c10d7e2b34910f"
}
```

---

## 📊 Diapositiva 11 — [Spec 8] ¿Por qué resuelve el problema? + [Spec 9] Impactos sociales (45 s)
**¿Por qué resuelve?** (ligado al problema central)
1. Convierte flujos transaccionales reales en evidencia actuarial de repago.
2. Reportes SHAP que defienden decisiones ante auditores SARC (Circular 026).
3. Pasa de 15 minutos a < 2 segundos por evaluación.

**5 impactos sociales (positivo / negativo / mitigación):**

| Positivo | Negativo | Mitigación |
|---|---|---|
| Inclusión financiera real | Sobreendeudamiento | Cupos dinámicos según caja real |
| Alternativa al gota a gota | Sesgo algorítmico | Auditorías de equidad (Fairness AI) |
| Estímulo a la formalización | Brecha digital | UX minimalista, lenguaje claro |
| Financiación de micronegocios | Privacidad de datos | Encriptación + Habeas Data |
| Equidad económica | Exclusión de usuarios solo-efectivo | Corresponsales + digitalización progresiva |

---

## 📊 Diapositiva 12 — Conclusión (15 s)
- StatCredit AI da a las entidades financieras la **infraestructura analítica** para medir el riesgo de los independientes.
- Volver al **problema central:** no es falta de capacidad de pago, es falta de datos estructurados en los bancos.
- Cierre con la frase insignia.
