# Prototype Instructions

## Decisiones aprobadas para Karpa

- Seguir los mockups completos de `design/mockups/`: fondo blanco, azul profundo, tipografía sans serif firme, secciones abiertas y sin tarjetas ni etiquetas decorativas.
- Actualización del usuario: regenerar las fotografías deterioradas con IA usando las originales como base, manteniendo escena y aspecto natural. Conservar siempre originales en `img/` y distinguir versiones generadas de originales en la documentación.
- La conexión de envío del formulario queda pendiente por pedido explícito del usuario: aún no definió el correo destinatario. No simular envíos exitosos.
- Las nuevas fotos no tienen identificación confirmada de proyecto/cliente; no atribuirles nombres por inferencia.
- Mostrar las divisiones de obra individualmente, incluyendo Fibra óptica como división propia. Basar el alcance técnico en los documentos aportados; no atribuir servicios de telecomunicaciones no documentados.
- Fibra óptica debe tener un apartado destacado y acceso desde el menú. Evitar bloques largos de texto: mostrar síntesis y detalles desplegables para una lectura ágil.
- Fibra óptica va después de Divisiones: escena de obra de gran escala, no FTTH ni macro de cable. Sus capacidades se comunican mediante el listado de trabajos, sin bloque de experiencia o metros de General Roca en la portada.
- Siempre que exista material real adecuado de Karpa, priorizarlo sobre imágenes generadas por IA. Conservar el archivo original sin regenerarlo ni alterarlo visualmente.
- La fotografía aérea real de la instalación industrial es la imagen principal del Hero. La fotografía vertical real del montaje se utiliza en Qué hacemos, dentro de Obras nuevas y ampliaciones. El video real de la maniobra de izaje se muestra únicamente en el modal de Equipos propios.
- Divisiones: descripciones cortas siempre visibles en desktop; conservar descripción completa desplegable en mobile. Obras: antecedentes visibles sin controles que los oculten, foto principal panorámica.
- Quitar consultar disponibilidad de equipos; mantener el bloque y ampliar sus capacidades. Logo regenerado fiel al emblema, con fondo blanco. Animaciones sutiles con respeto a movimiento reducido.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

- Clientes: mostrar los logos oficiales en una cinta automática continua, sin botones ni arrastre. Pausar al pasar el puntero y respetar la preferencia de movimiento reducido.
- Título principal basado en la presentación corporativa: Ingeniería, construcciones y servicios. Retirar el epígrafe visible Imagen ilustrativa.
- La portada debe mostrar Fibra óptica en lugar de Servicios especializados dentro de las capacidades principales. Mantener el título corporativo general.
- Ordenar el menú como Empresa, Qué hacemos, Divisiones, Fibra óptica, Equipos y Contacto. El Hero prioriza la fotografía aérea real de infraestructura industrial. En el bloque azul de fibra, comunicar canalización y tritubo, tendido, cruces especiales y obras civiles mediante el listado de capacidades, sin mostrar el bloque de experiencia o metros ejecutados de General Roca en la portada. No agregar un enlace adicional en el hero.
- Qué hacemos: conservar las filas editoriales e imágenes del diseño aprobado, pero comunicar capacidades amplias —obras, mantenimiento, pruebas, verificaciones y certificaciones— en lugar de una muestra corta de proyectos. No mostrar el índice pequeño de Más antecedentes en la portada.
