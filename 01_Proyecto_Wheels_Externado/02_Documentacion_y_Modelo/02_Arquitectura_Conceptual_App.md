# Arquitectura Conceptual y Especificación del Prototipo
## App de Carpooling Institucional ("Wheels Externado")
**Universidad Externado de Colombia — Pregrado en Ciencia de Datos**

---

## 1. Arquitectura en 4 Pasos Funcionales

```mermaid
sequenceDiagram
    autonumber
    actor C as Conductor Externadista
    participant App as App Wheels Externado
    actor P as Pasajero Externadista

    Note over C,P: 1. Onboarding y Verificación Institucional
    C->>App: Registro con @uexternado.edu.co + Placa + SOAT/Licencia
    P->>App: Registro con @uexternado.edu.co
    App-->>C: Conductor Validado
    App-->>P: Pasajero Validado

    Note over C,P: 2. Publicación y Matching de Ruta
    C->>App: Publica Ruta: "Chía -> Externado" (Salida 6:15 AM, 3 cupos)
    P->>App: Busca viaje en corredor Norte hacia el campus antes de las 7:00 AM
    App-->>P: Sugiere viaje de Conductor (Match 95%, punto de recogida cercano)

    Note over C,P: 3. Reserva y Pago Digital
    P->>App: Reserva 1 asiento (Aporte colaborativo fijado: $6.000 COP)
    App-->>C: Notificación de cupo reservado y confirmación automática

    Note over C,P: 4. Ejecución del Viaje y Reputación
    C->>App: Inicia viaje (Trazabilidad GPS activa)
    P->>App: Confirma abordaje (Check-in con código QR)
    C->>App: Finaliza viaje en el campus
    App->>App: Libera pago al conductor (descontando fee operativo)
    C->>App: Califica a Pasajero (Puntualidad, trato)
    P->>App: Califica a Conductor (Manejo, puntualidad, estado del auto)
```

---

## 2. Componentes Técnicos Clave

### 2.1 Módulo de Seguridad y Confianza
- **Filtro Institucional Obligatorio:** Integración con OAuth / Microsoft 365 de la Universidad Externado (`@uexternado.edu.co`).
- **Verificación de Vehículos:** Consulta automatizada contra el RUNT para validar vigencia de SOAT y revisión técnico-mecánica.
- **Botón SOS / Compartir Viaje:** Opción para compartir el enlace del trayecto en tiempo real con contactos de confianza.

### 2.2 Algoritmo de Matching Geoespacial
- Indexación espacial de rutas sobre los principales corredores de Bogotá (Autopista Norte, Av. Boyacá, Av. Suba, Carrera 30 / NQS, Calle 26, Calle 80, Circunvalar).
- Ventanas de tolerancia temporal ajustadas al horario de clases del Externado (márgenes de 10-15 minutos).

### 2.3 Modelo de Pagos Colaborativos
- No es una tarifa de servicio comercial (evitando problemas regulatorios de transporte no autorizado).
- Es una **cuota colaborativa de compensación de gastos** (combustible, desgaste, peajes y parqueadero).
- Tarifas sugeridas transparentes basadas en zonas geográficas.

