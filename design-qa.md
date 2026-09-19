# Revisión del diseño Karpa

**final result: passed**

Alcance: implementación local de la página de inicio aprobada, con la conexión del formulario expresamente pendiente por decisión del usuario. No es una aprobación para publicar ni una prueba de envío de correo.

## Referencias y método

- Mockup desktop: `design/mockups/karpa-inicio-desktop-v1.png` (793 × 1983, concebido para 1440 px CSS).
- Mockup mobile: `design/mockups/karpa-inicio-mobile-v1.png` (958 × 1641; dos tramos consecutivos, no pantallas diferentes).
- Navegador: Codex In-app Browser, aplicación local en `http://127.0.0.1:4173/`.
- Viewports comprobados: 1440 × 1000, 768 × 1000, 390 × 844 y 320 × 800. Sin desbordamiento horizontal.
- Se guardaron capturas con la API del navegador y se compararon con los mockups mediante `view_image` sobre composiciones con referencia y resultado normalizados por ancho. La captura completa por scroll del navegador produjo fragmentos repetidos, por lo que se descartó; se revisaron capturas por sección y se verificó el DOM real.
- Capturas entregables: `design/preview/karpa-desktop.png` y `design/preview/karpa-mobile.png`. Las referencias son imágenes generadas; se normalizaron sus tamaños al viewport de implementación, sin exigir igualdad de píxeles entre fotografía generada y original.

## Hallazgos corregidos y revisión posterior

1. Tipografía: se ajustaron tamaños desktop de títulos, cuerpo y marca; se refinó la escala y el salto de línea del encabezado institucional mobile. Inter local, sin descarga de tipografía desde servicios externos.
2. Espacios: se redujo el espacio superior de la portada mobile y se ajustaron sus márgenes y cuerpo para acercar el inicio de la fotografía al mockup.
3. Controles: se aumentó el tamaño desktop del CTA; campos con altura útil de 44 px, foco visible, etiquetas y validación nativa.
4. Imágenes: las imágenes originales de baja resolución se ampliaron con Lanczos y nitidez suave tras aprobación del usuario. Se rechazaron los candidatos generativos que alteraban detalles técnicos. Se verificaron 17 imágenes, relaciones de aspecto exactas y dimensiones del manifiesto.
5. Fotografías nuevas: portada con la foto original de 1600 px enviada por el usuario; fotos de taller en el detalle de servicios y tiendetubos en el detalle de equipos. No se les atribuyeron clientes ni obras por inferencia.

## Superficies de fidelidad

| Superficie | Resultado |
| --- | --- |
| Tipografía y jerarquía | Título principal en tres líneas, títulos firmes, textos y navegación con escala responsive. Ajustadas las diferencias de tamaño detectadas. |
| Composición y espacios | Mismo orden de secciones, portada dividida y foto a ancho completo, secciones abiertas, imagen/texto alternados y reordenamiento mobile. |
| Colores y superficies | Blanco y azul profundo; sin tarjetas, degradados, etiquetas decorativas ni métricas inventadas. |
| Imágenes | Fotografías auténticas, encuadres responsive. Los originales no se sobrescriben. Reescalado convencional, sin prometer detalle fotográfico inexistente. |
| Textos | Comparación de portada exacta: título, párrafo y CTA coinciden con el mockup, sin copy adicional. Información secundaria trazable a los PDF aportados. |
| Iconos | Flechas, menú y cierre de Phosphor, trazo fino y alineación consistente; no gráficos sustitutos hechos con CSS. |

## Interacciones verificadas

- Menú mobile abre y cierra; elegir sección cierra el menú y navega al ancla.
- Especialidades desplegables, texto y fotos de taller accesibles.
- “Ver antecedentes” amplía la lista y permite volver al estado inicial; detalle de obra desplegable.
- “Conocer nuestros equipos” abre diálogo nativo, enfoca el cierre, limita el foco al diálogo; Escape cierra, restaura foco al botón y habilita nuevamente el scroll.
- Formulario valida campos obligatorios y correo. Una prueba local con datos ficticios muestra explícitamente que no se envió la consulta; no hay red, almacenamiento ni falsa confirmación de envío.
- Enlace telefónico disponible; no se inició una llamada durante las pruebas.
- Todos los recursos visibles cargados; sin errores ni avisos en la consola inspeccionada.
- Movimiento reducido y navegación de teclado contemplados.

## Diferencias intencionales / pendientes

- La foto de portada fue reemplazada por una de las nuevas imágenes reales aportadas durante la implementación.
- Las fotografías reales tienen variaciones de nitidez, color y encuadre frente a su reinterpretación en el mockup. Se prioriza veracidad y conservación del contenido.
- P3: el emblema conserva el fondo y la definición del brochure. Un original vectorial o PNG transparente permitiría mejorar su acabado sin inventar el logo.
- Pendiente acordado: destinatario y servicio de recepción del formulario. No se ha implementado envío a un correo ficticio.

## Validación técnica

- `npm run build`: correcto.
- Cuatro pruebas del empaquetado/runtime: correctas con `node --test --test-isolation=none tests/sites-worker.test.mjs`. El comando por defecto encuentra una restricción de creación de subprocesos del sandbox; se ejecutaron las mismas pruebas sin aislamiento de proceso.
- Manifiesto de 17 fotografías: dimensiones y proporciones verificadas; diferencia media RGB máxima al reducir nuevamente al tamaño original, 4,13/255. Esto comprueba conservación general, no recuperación de detalle perdido.

No quedan diferencias P0/P1/P2 detectadas dentro del alcance acordado. La recepción de consultas y los recursos originales de mayor calidad permanecen explícitamente pendientes.

## Ajuste al pedido original de la empresa

- Se agregó una sección de nueve divisiones con encabezados y descripciones siempre visibles. Fibra óptica tiene entrada propia y ancla `#fibra-optica`.
- La presentación corporativa (páginas 3–5) aporta gasoductos, poliductos, incendio, montaje, suelos, civiles y tritubo. Los antecedentes aportan acueductos/saneamiento, obras eléctricas y tendido de fibra en General Roca. No se atribuyen certificaciones ni servicios adicionales de telecomunicaciones.
- Se mantiene la composición abierta con separadores finos: dos columnas desktop y una mobile. Esta ampliación de contenido responde al nuevo requisito del usuario y no estaba en el mockup inicial.
- Revisión posterior en 1440, 768, 390 y 320 px: sin desbordamiento horizontal; nueve divisiones presentes, contenido de fibra legible y consola sin errores ni avisos. Capturas adicionales: `design/preview/divisiones-desktop.png` y `design/preview/fibra-optica-mobile.png`.
- Compilación y cuatro pruebas del runtime nuevamente correctas tras el cambio.

## Revisión posterior: fotos IA y apartado destacado de Fibra óptica

Esta revisión reemplaza las decisiones anteriores sobre fotografía y división de fibra. Por pedido del usuario se incorporaron siete regeneraciones basadas en las originales y una imagen ilustrativa de fibra óptica. No se promete identidad técnica ni detalle recuperado: se conservan las originales y la trazabilidad en design/generated-images.json.

Fibra óptica ahora tiene sección propia en azul, imagen, CTA y datos del antecedente de General Roca. Las otras ocho divisiones muestran títulos con descripciones desplegables. Se conserva la tipografía y composición general aprobadas; la nueva sección y las fotografías son cambios deliberadamente solicitados.

Se verificaron acceso desde el menú desktop/mobile, cierre del menú al navegar, enlace a contacto y apertura de una división. Sin desbordamiento horizontal a 320, 390, 768, 1024 y 1440 px. Se corrigió la altura de la imagen de fibra para respetar el encuadre responsive. Capturas actualizadas en design/preview/fibra-destacada-desktop.png y fibra-destacada-mobile.png.

## Revisión: obras abiertas, divisiones responsive y marca

La última dirección del usuario sustituye el orden y la presentación anteriores: Fibra óptica precede a Divisiones, sin enlaces de conocer/consultar fibra. La escena ilustrativa muestra tendido de canalizaciones en obra de gran escala. Se amplió la explicación sin atribuir servicios no documentados.

Las ocho divisiones restantes tienen textos resumidos siempre visibles en desktop y descripciones completas desplegables en mobile. Los cinco antecedentes y la obra principal se muestran sin ocultarlos: foto panorámica y ficha abierta, seguida del índice de obras.

Se amplió Equipos con tres líneas de capacidades y se retiró Consultar disponibilidad del diálogo. Se agregó una franja de seis clientes basados en los antecedentes visibles, sin logos inventados ni carrusel automático. El emblema se regeneró sobre blanco a partir de la referencia del usuario; se conserva la identidad visual, no se afirma igualdad exacta de píxeles.

Animación de entrada suave mediante IntersectionObserver y Web Animations, sin ocultar contenido por defecto. Despliegues y diálogo con transiciones breves. Movimiento reducido desactiva las animaciones; la implementación también cancela las activas si cambia la preferencia.

Verificación en navegador: orden de secciones, ocho divisiones abiertas en desktop / ocho desplegables en mobile, cinco antecedentes visibles, apertura de un desplegable, apertura y cierre del diálogo de equipos y ausencia del enlace retirado. Compilación correcta.

Actualización de acabado: el usuario pidió que la escena de fibra se vea menos pulida. La versión fibra-obra-v3 aplica suavidad, grano leve y menor contraste/saturación mediante GPT Image; conserva la escena general. Prompts en design/fibra-photo-finish.json. Se verificó además ausencia de desbordamiento en 320, 390, 768 y 1440 px; consola sin errores ni avisos. Cuatro pruebas del runtime correctas.


Clientes: seis logos oficiales alojados localmente, carrusel manual con flechas, desplazamiento táctil y teclado (flechas, Inicio y Fin). Controles deshabilitados en los extremos y movimiento reducido respetado. Verificado en 1440, 390 y 320 px sin desbordamiento horizontal; los seis recursos cargan correctamente. Generación Mediterránea se identifica con la marca oficial Grupo Albanesi y su nombre debajo. Fuentes en design/client-logo-sources.json.
Compilación de producción y cuatro pruebas del runtime aprobadas en esta revisión.

Revisión final del carrusel: cinta continua de logos sin controles ni arrastre, con pausa al pasar el puntero y versión estática para movimiento reducido. Verificado sin desbordamiento en 390 px. Se retiró también la palabra ilustrativa del texto alternativo de la imagen de fibra.

Título principal actualizado a la denominación corporativa del brochure Presentación Karpa (páginas 2 y 3). Eliminado el epígrafe Imagen ilustrativa. Carrusel con avance cada cuatro segundos, pausa explícita, suspensión al interactuar, fuera de vista y en pestaña oculta; inicia pausado con preferencia de movimiento reducido.
Verificación: avance automático observado sin interacción, botón de pausa operativo, título revisado a 1440 y 390 px y sin desbordes a 320 px. Compilación de producción aprobada.

## QA final — Obras editorial

- Source visual truth: `design/mockups/obras-editorial-selected.png`
- Implementation desktop: `design/qa-obras-desktop.png`
- Implementation mobile: `design/qa-obras-mobile.png`
- Side-by-side comparison: `design/qa-obras-comparison.jpg`
- Viewports: 1536 × 1024 desktop and 390 × 844 mobile; device scale factor 1.
- Source and desktop capture: 1536 × 1024 px, compared at equal pixel density. Mobile capture: 390 × 844 px.
- State: sección Obras, contenido cargado, navegación por ancla probada.

**Fidelity surfaces**

- Typography: Inter, pesos, tamaños, interlineado y quiebres reproducen la jerarquía del mock. Los títulos largos conservan una lectura clara en desktop y mobile.
- Spacing and layout: tres filas editoriales alternadas, reglas finas, espacios abiertos e índice final reproducidos. Mobile apila fotografía y texto sin desbordamiento.
- Colors and tokens: se mantienen blanco, azul profundo y gris de reglas del sistema actual.
- Image quality: se usan los tres recursos fotográficos reales que dieron origen al mock, con `object-fit: cover` y puntos de recorte revisados.
- Copy: clientes, lugares, alcances y los tres títulos de Más antecedentes coinciden con el contenido aprobado.

**Comparison history**

- Primera pasada: P2 — las filas secundarias tenían 310 px de alto y desplazaban el tercer proyecto y el índice respecto del mock.
- Corrección: filas segunda y tercera reducidas a 250 px en desktop; encabezado sin borde ni padding superior adicional.
- Evidencia posterior: `design/qa-obras-comparison.jpg`; la jerarquía, alternancia y densidad coinciden. La diferencia residual de posición vertical responde al contexto de desplazamiento de la página y no altera la sección.

No fue necesario un recorte enfocado adicional: títulos, metadatos, imágenes y separadores son legibles en la comparación a resolución completa. La versión mobile se comprobó por separado.

**Checks**

- Tres historias destacadas y tres antecedentes presentes.
- Sin desbordamiento horizontal a 390 px.
- Consola sin errores ni advertencias.
- Compilación de producción y cuatro pruebas del runtime aprobadas.

final result: passed
