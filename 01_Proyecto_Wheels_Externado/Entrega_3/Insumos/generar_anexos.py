import docx
from docx import Document
from docx.shared import Pt, Inches, RGBColor, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.section import WD_ORIENT
from docx.enum.table import WD_TABLE_ALIGNMENT

doc = Document()

# Estilos base
style = doc.styles['Normal']
style.font.name = 'Calibri'
style.font.size = Pt(10.5)

# Orientación apaisada para las tablas anchas
sec = doc.sections[0]
sec.orientation = WD_ORIENT.LANDSCAPE
sec.page_width, sec.page_height = sec.page_height, sec.page_width
for m in ('left_margin', 'right_margin'):
    setattr(sec, m, Cm(1.5))
sec.top_margin = Cm(1.5)
sec.bottom_margin = Cm(1.5)

AZUL = RGBColor(0x00, 0x33, 0x66)

def heading(text, level=1):
    h = doc.add_heading(text, level=level)
    for r in h.runs:
        r.font.color.rgb = AZUL
    return h

def para(text, bold=False, italic=False, size=10.5):
    p = doc.add_paragraph()
    r = p.add_run(text)
    r.bold = bold
    r.italic = italic
    r.font.size = Pt(size)
    return p

def bullet(text):
    return doc.add_paragraph(text, style='List Bullet')

def table(headers, rows, widths=None):
    t = doc.add_table(rows=1, cols=len(headers))
    t.style = 'Light Grid Accent 1'
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    hdr = t.rows[0].cells
    for i, h in enumerate(headers):
        hdr[i].text = h
        for p in hdr[i].paragraphs:
            for r in p.runs:
                r.bold = True
                r.font.size = Pt(8)
    for row in rows:
        cells = t.add_row().cells
        for i, v in enumerate(row):
            cells[i].text = str(v)
            for p in cells[i].paragraphs:
                for r in p.runs:
                    r.font.size = Pt(8)
    return t

# ============ PORTADA ============
h = doc.add_heading('Entrega 3 — Equipo 5 — Anexos', level=0)
for r in h.runs:
    r.font.color.rgb = AZUL
para('Trabajo de Campo 2 con Clientes — Customer Discovery', bold=True, size=13)
para('Proyecto: Wheels Externado — Plataforma Móvil de Carpooling Universitario')
para('Curso: Emprendimiento | Pregrado en Ciencia de Datos | Universidad Externado de Colombia')
para('Fecha: Octubre de 2026 | Grupo 5: Santiago Sandoval, Sebastián Ramos, Julián Duarte, Tomás Rincón, Julián Jiménez')
para('Contenido (orden sección 7.2 de la guía): Anexo A Ficha técnica · Anexo B Instrumentos · Anexo C Concepto mostrado · Anexo D Base de datos · Anexo E Evidencia de consentimientos y compromisos · Anexo F Declaraciones.', italic=True)

doc.add_page_break()

# ============ ANEXO A: FICHA TÉCNICA ============
heading('Anexo A. Ficha técnica del trabajo de campo', 1)
table(
    ['Campo', 'Contenido'],
    [
        ['Objetivo general',
         'Validar con 12 estudiantes de la Universidad Externado de Colombia (8 pasajeros y 4 conductores de Wheels) cómo gestionan hoy sus viajes al campus, quién y cómo decide el pago del trayecto, qué canales usan y qué relación esperan de una plataforma institucional, mediante entrevistas semiestructuradas realizadas entre el 17 y el 21 de octubre de 2026, para tomar la decisión de perseverar, ajustar o pivotar el prototipo antes del Trabajo de Campo 3.'],
        ['Objetivos específicos',
         'OE1. Identificar la frecuencia, los dolores y los costos en tiempo y dinero que estudiantes y conductores enfrentan en su desplazamiento diario hacia el Externado.\nOE2. Describir quién usa, quién paga, quién recomienda y quién puede frenar la decisión de un Wheels, y por qué canales se enteran de las opciones disponibles.\nOE3. Determinar qué compromiso (reserva, prueba del prototipo, referido) estarían dispuestos a dar los usuarios para el Campo 3, y qué valor dan al concepto de una app institucional.'],
        ['Hipótesis y criterios de aceptación',
         'H1 (Problema): Creemos que los estudiantes y conductores del Externado viven el transporte al campus como un dolor de alta prioridad y consideran a los grupos de WhatsApp ineficientes e inseguros. Se valida si ≥10 de 12 lo reportan con ejemplos.\nH2 (Compra): Creemos que el pasajero decide y paga individualmente el Wheels, que la tarifa de referencia es $6.000 COP y que estaría dispuesto a pagar una prima por certeza y seguridad; el conductor amortiza costos fijos. Se valida si ≥9 de 12 lo describen así.\nH3 (Relación): Creemos que el usuario probaría una app institucional verificada (@uexternado.edu.co) si garantiza cupo, reputación y pagos digitales, y que daría un compromiso para el Campo 3. Se valida si ≥8 de 12 lo nombran como condición y ≥4 de 12 aceptan participar en la prueba.'],
        ['Tipo de investigación y métodos',
         'Primaria, cualitativa y exploratoria. Método principal: entrevista semiestructurada (16 preguntas, 6 temas de la guía, con repreguntas). Apoyo: investigación secundaria (tarifas de referencia, corredores). No se realizó observación. Solicitud de compromiso obligatoria al cierre.'],
        ['Población y criterios de inclusión y exclusión',
         'Población: estudiantes de pregrado del Externado que se desplazan al campus en vehículo propio (conductores) o transporte público/carpooling (pasajeros).\nInclusión: (1) estudiante activo del Externado; (2) usa o presta Wheels ≥1 vez/semana; (3) vive o sale de un corredor de Bogotá/Sabana; (4) disponible 30 minutos.\nExclusión: familiares cercanos, amigos íntimos y compañeros directos del equipo (sesgo de deseabilidad social); expertos ya entrevistados; ajenos al ecosistema Externado.'],
        ['Muestra planeada y lograda',
         'Planeada: 10 pasajeros + 4 conductores (modelo de plataforma de dos lados: 8-10 lado demanda / 4-5 lado oferta).\nLograda: 12 entrevistas válidas (8 pasajeros + 4 conductores). Brecha de 2 pasajeros asumida como limitación.'],
        ['Reclutamiento: lugares y canales',
         'Lugares de encuentro del segmento: grupos de WhatsApp de Wheels Externado y red de contactos del campus. Recorrido: ~25 contactados por mensaje de invitación → ~15 respondieron → 12 aprobaron el filtro y fueron entrevistados.'],
        ['Instrumentos',
         'Cuestionario de filtro (5 preguntas cerradas); texto de consentimiento informado; guía de entrevista (16 preguntas, 6 temas); hoja de concepto de la solución (1 página visual); hoja de registro diario por entrevista. Ver Anexos B y C.'],
        ['Fechas y lugares de las entrevistas',
         'Diseño e instrumentos: 16-17 de octubre. Reclutamiento: 16-18 de octubre. Entrevistas y registro: 17-21 de octubre (8 entrevistas iniciales) y 28-30 de octubre (4 entrevistas complementarias E9-E12). Lugares: campus Externado, cafés cercanos y videollamada, a elección del entrevistado.'],
        ['Responsables de entrevistar y de tomar notas',
         'Parejas de trabajo rotativas del Grupo 5: un integrante conduce la entrevista y otro toma notas; se compararon notas el mismo día.'],
        ['Consideraciones éticas',
         'Consentimiento informado al inicio de cada entrevista (aceptación grabada en el audio de E9-E12; confirmación posterior por mensaje en E1-E8). Participación voluntaria. Códigos E1-E12 en los entregables en lugar de nombres (Ley 1581 de 2012). Datos de acceso restringido al equipo.'],
        ['Limitaciones',
         '1) Sin expertos de movilidad en el Campo 1 (correspondió a la idea anterior StatCredit AI por el pivote); las hipótesis parten de observación directa. 2) Consentimiento tardío en E1-E8 (remediado). 3) Reclutamiento por red de contactos universitaria: posible homogeneidad de respuestas. 4) N=12: resultados indiciarios, no estadísticamente representativos.'],
    ]
)

doc.add_page_break()

# ============ ANEXO B: INSTRUMENTOS ============
heading('Anexo B. Instrumentos', 1)

heading('B.1 Cuestionario de filtro (aplicado antes de agendar)', 2)
para('1. ¿Eres estudiante o exalumno de la Universidad Externado de Colombia? (Sí/No)')
para('2. ¿Con qué frecuencia usas o prestas Wheels hacia la universidad? (Diario / Varias veces por semana / Ocasionalmente / Nunca)')
para('3. ¿En qué zona vives o sale tu carro hacia el campus? (Abierta)')
para('4. ¿Viajas como pasajero o como conductor en tu ruta al Externado? (Pasajero/Conductor/Ambos)')
para('5. ¿Estás disponible para una conversación de 30 minutos esta semana? (Sí/No)')
para('Aprobación del filtro: Sí a la pregunta 1, frecuencia ≥ ocasional y disponibilidad Sí.', italic=True)

heading('B.2 Texto de consentimiento informado', 2)
para('"Buenos días/tardes, [nombre]. Gracias por recibirnos. Somos [nombres], estudiantes del pregrado en Ciencia de Datos de la Universidad Externado de Colombia, y estamos haciendo una investigación para el curso de Emprendimiento sobre cómo se organizan los viajes compartidos (Wheels) hacia la universidad.', italic=True)
para('La conversación dura alrededor de 30 minutos. Queremos conocer tu experiencia; aquí no hay respuestas correctas ni incorrectas. Tu participación es voluntaria y puedes dejar de responder o terminar la entrevista cuando quieras.', italic=True)
para('Lo que nos cuentes se usará solo con fines académicos. En el informe no aparecerá tu nombre ni el de tu organización; usaremos un código. ¿Nos autorizas a grabar el audio para no perder detalles? La grabación solo la escuchará el equipo y la borraremos al terminar el curso.', italic=True)
para('¿Tienes alguna pregunta antes de empezar? ¿Estás de acuerdo en participar?"', italic=True)

heading('B.3 Guía de entrevista (16 preguntas, 6 temas)', 2)
table(
    ['Tema', 'Preguntas'],
    [
        ['1. El cliente y su contexto',
         '1) ¿Cuál es tu rol en la universidad y cuánto tiempo llevas en él?\n2) Cuéntame cómo es un día normal para ti en cuanto a desplazamiento: a qué hora sales, cuánto te toma.'],
        ['2. El problema',
         '3) Cuéntame la última vez que tuviste un problema con tu viaje al Externado. ¿Qué pasó exactamente?\n4) ¿Cada cuánto te pasa algo así? ¿Cuántas veces en el último mes?\n5) ¿Qué consecuencias tuvo: tiempo perdido, dinero, llegar tarde a una clase o parcial?'],
        ['3. Cómo lo resuelve hoy',
         '6) ¿Qué haces hoy para conseguir el viaje?\n7) ¿Cuánto pagas o cobras por eso, y en cuánto tiempo del día se te va resolverlo?\n8) ¿Qué es lo que más te molesta de cómo lo resuelves hoy?'],
        ['4. Quién decide y cómo compra',
         '9) La última vez que pagaste un Wheels (o que decidiste cobrar por llevar a alguien), ¿cómo fue el proceso?\n10) ¿Quién más influye en esa decisión?\n11) ¿Cómo te enteras de rutas nuevas o de conductores nuevos?'],
        ['5. La relación que espera',
         '12) Conseguir: ¿Qué te llevaría a probar una app nueva del Externado? ¿Qué necesitarías para confiar en ella?\n13) Retener: ¿Qué te haría dejar de usar esa app?\n14) Hacer crecer: Si te funciona, ¿a quién se lo recomendarías?'],
        ['6. Concepto, valor y compromiso',
         '15) Con tus palabras, ¿qué es esto y para quién crees que es? ¿Qué parte te serviría más y cuál te sobra? ¿Qué le falta?\n16) Compromiso: En dos semanas vamos a probar un prototipo. ¿Te gustaría participar? ¿Qué día y medio te contactamos? Referido: ¿Conoces a alguien con tu misma situación que deberíamos entrevistar?'],
    ]
)

doc.add_page_break()

# ============ ANEXO C: CONCEPTO ============
heading('Anexo C. Concepto mostrado a los clientes', 1)
para('Hoja visual de 1 página presentada al cierre de la entrevista (tema 6), etiquetada como "idea en etapa temprana". Muestra el problema (WhatsApp saturado, cancelaciones, sin verificación), los beneficios (cupos garantizados, comunidad verificada, reputación bilateral, pago digital) y tres pantallas estáticas (ruta con reserva, calificación + pago, reporte de seguridad).')
try:
    doc.add_picture('Insumos/Concepto_Wheels.png', width=Inches(9.5))
except Exception:
    para('[Imagen del concepto: Insumos/Concepto_Wheels.png]', italic=True)
para('Nota: el concepto es easy de modificar; las observaciones de los clientes sobre "qué le falta" se registraron en el Anexo D y alimentan el backlog del prototipo del Campo 3.', italic=True)

doc.add_page_break()

# ============ ANEXO D: BASE DE DATOS ============
heading('Anexo D. Base de datos del campo (códigos en lugar de nombres)', 1)
para('Una fila por persona entrevistada. Nombres reales omitidos por confidencialidad (Ley 1581 de 2012).')

filas = [
    ['E1','Pasajero',90,'Sí','Diaria','$6.000/pasaje','Grupos WhatsApp','Él mismo (pago individual)','WhatsApp; pares de carrera','Cupo garantizado + GPS','Serviría: reserva y GPS. Sobra: nada. Falta: seguimiento en vivo.','Prueba prototipo (sí)','"Es una lotería responder \'yo\'."'],
    ['E2','Pasajero',90,'Sí','Diaria','$6.000 (hoy)','Grupos WhatsApp','Él mismo','WhatsApp; pares','Reserva fija + mapa de ruta','Serviría: reserva fija y ruta en mapa.','Referido ofrecido','"Sería la salvación… pagaría hasta $10.000."'],
    ['E3','Pasajero',85,'Sí','3-4/semana','$5.000-$6.000','Grupos WhatsApp','Él mismo','WhatsApp; redes','Filtros por ruta/hora + pago digital','Serviría: filtros. Falta: billetera integrada.','No compromiso explícito','"Te toca leer 400 mensajes para encontrar una sola ruta."'],
    ['E4','Pasajero',90,'Sí','Diaria','$6.000','Grupos WhatsApp','Él mismo','WhatsApp','GPS en tiempo real','Serviría: GPS. Falta: nada.','Referido ofrecido','"Terminas tomando Uber de afán pagando $25.000."'],
    ['E5','Conductor',95,'Sí','Diaria','$6.000×3 cupos','Publica en WhatsApp','Él (oferta)','WhatsApp (4 grupos)','Verificación + reserva + penalización','Serviría: verificación y reservas.','Prueba como conductor','"El mensaje se pierde… me cancelan 5 minutos antes."'],
    ['E6','Pasajero',85,'Sí','Diaria','$6.000 (hasta $15k en parciales)','Flota + conexión con Wheels','Él mismo','WhatsApp; pares','Paradas intermedias + llegada en vivo','Serviría: llegada en vivo. Falta: paradas intermedias.','Prueba prototipo','"Duermo cuatro horas al día por el transporte."'],
    ['E7','Conductor',95,'Sí','Diaria','$6.000×4 cupos','Publica en WhatsApp','Él (oferta)','WhatsApp (4 grupos)','Abono de reserva + puntuación + chatbot','Serviría: depósito de $2.000 de reserva.','Prueba como conductor','"Me dejan colgado con el puesto."'],
    ['E8','Pasajero',85,'Sí','Tardes/noches','$5.000-$6.000','Grupos WhatsApp','Él mismo','WhatsApp; pares','Verificación estricta + botón de pánico + reseñas','Serviría: verificación y reporte. Falta: atención humana.','Referido ofrecido','"Se le notaba el aliento alcohólico y manejaba agresivo."'],
    ['E9','Pasajera',80,'Sí','Diaria','$6.000','Grupos WhatsApp','Ella misma','WhatsApp; pares; familia','Verificación + viaje en vivo con familia + género visible','Serviría: viaje en vivo. Falta: filtro conductoras mujeres.','Prueba prototipo + referido (Timiza)','"Uno revisa la placa y se la manda a la mamá antes de subirse."'],
    ['E10','Pasajero',75,'Sí','3/semana','$6.000','Grupos WhatsApp','Él mismo','WhatsApp; pares','Filtros + pago digital + calendario','Serviría: filtros. Sobra: calibración obligatoria. Falta: calendario.','Prueba prototipo','"Leer 400 mensajes para encontrar un viaje es perder la mañana."'],
    ['E11','Conductora',90,'Sí','Diaria','$6.000×3 cupos','Publica en WhatsApp','Ella (oferta)','WhatsApp; pares','Verificación + pago inmediato + historial visible','Serviría: pago inmediato. Sobra: botón de pánico. Falta: historial.','Prueba como conductora + referido (Portal Sur)','"Si el pago no me llega al terminar el viaje, vuelvo al WhatsApp."'],
    ['E12','Conductor',95,'Sí','Diaria','$6.000×4 cupos','Publica en WhatsApp','Él (oferta)','WhatsApp; pares','Reserva con abono + calificaciones + control de cupos','Serviría: reserva con penalización. Falta: control de cupos y avisos.','Prueba como conductor + referido (Kennedy)','"Me cancelan a última hora y viajo con dos cupos vacíos: pierdo $12.000."'],
]

table(
    ['Cód.','Rol','Encaje (%)','Vivió el problema','Frecuencia','Costo estimado','Solución actual','Quién decide','Canal de entrada','Relación preferida','Reacción al concepto','Compromiso','Cita clave'],
    filas
)
para('Base de datos en hoja de cálculo con los mismos datos: ver archivo complementario "Base_Datos_Campo_E1-E12.xlsx" (carpeta de acceso restringido al equipo).', italic=True)

doc.add_page_break()

# ============ ANEXO E: EVIDENCIA ============
heading('Anexo E. Evidencia de consentimientos y compromisos', 1)

heading('E.1 Consentimientos', 2)
table(
    ['Cód.','Registro del consentimiento','Evidencia'],
    [
        ['E9, E10, E11, E12','Consentimiento leído y autorización grabada en los primeros segundos del audio.','Audios E9-E12 (carpeta Audios/).'],
        ['E1-E8','Consentimiento verbal en la entrevista; confirmación posterior por mensaje de WhatsApp (consentimiento tardío, limitación declarada).','Capturas de mensajes de WhatsApp de confirmación (adjuntas por el equipo en la entrega del aula virtual / disponibles a solicitud).'],
    ]
)

heading('E.2 Compromisos obtenidos para el Campo 3', 2)
table(
    ['Cód.','Compromiso','Medio de contacto'],
    [
        ['E9','Aceptar probar el prototipo + presentar pasajera de Timiza.','WhatsApp'],
        ['E10','Aceptar probar el prototipo + presentar compañero de Suba.','WhatsApp'],
        ['E11','Participar como conductora en la prueba + presentar conductor del Portal Sur.','WhatsApp / correo'],
        ['E12','Publicar sus rutas de la Calle 26 en la prueba + presentar conductor de Kennedy.','WhatsApp'],
        ['E2, E4, E6, E8','Prueba del prototipo y/o referido ofrecido en la entrevista.','Registro de entrevista (Anexo D)'],
    ]
)
para('Los compromisos se distinguieron del interés de cortesía mediante la pregunta con fecha: "En dos semanas vamos a probar un prototipo… ¿te gustaría participar? ¿Qué día y por qué medio te contactamos?"', italic=True)

# ============ ANEXO F: DECLARACIONES ============
heading('Anexo F. Declaraciones sobre observación y menores de edad', 1)
bullet('Observación: NO se realizó observación de clientes en este Trabajo de Campo 2; por lo tanto no aplica la guía ni los registros de observación (secciones 2.3 y 7.2 de la guía docente).')
bullet('Menores de edad: TODOS los entrevistados son mayores de 18 años (estudiantes de pregrado universitario); no se recogieron datos de menores ni se requirieron permisos institucionales ni consentimientos de padres o tutores.')
bullet('Poblaciones vulnerables: no se entrevistó a poblaciones en situación de vulnerabilidad; no aplica la sección 3.3 de la guía.')

doc.save('Entrega_3_Equipo_5_Anexos.docx')
print('OK - Anexos generados')
