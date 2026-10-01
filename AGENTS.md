# Prototype Instructions

## Decisiones aprobadas para Karpa

- Seguir los mockups completos de `design/mockups/`: fondo blanco, azul profundo, tipografía sans serif firme, secciones abiertas y sin tarjetas ni etiquetas decorativas.
- Actualización del usuario: regenerar las fotografías deterioradas con IA usando las originales como base, manteniendo escena y aspecto natural. Conservar siempre originales en `img/` y distinguir versiones generadas de originales en la documentación.
- Las nuevas fotos no tienen identificación confirmada de proyecto/cliente; no atribuirles nombres por inferencia.
- Siempre que exista material real adecuado de Karpa, priorizarlo sobre imágenes generadas por IA. Conservar el archivo original sin regenerarlo ni alterarlo visualmente.
- El Hero utiliza únicamente el video institucional original 1920×1080 de Karpa, sin una recompresión que reduzca su definición, con carga progresiva, precarga automática, autoplay silencioso y loop. La fotografía aérea real funciona como poster/fallback del Hero y como imagen de Empresa; con movimiento reducido, el Hero muestra solamente esa fotografía.
- La fotografía vertical real del montaje se utiliza en Qué hacemos, dentro de Obras nuevas y ampliaciones. No integrar por ahora el video vertical anterior en Equipos ni en otra sección.
- Quitar consultar disponibilidad de equipos; mantener el bloque y ampliar sus capacidades. Logo regenerado fiel al emblema, con fondo blanco. Animaciones sutiles con respeto a movimiento reducido.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

- Clientes: mostrar los logos oficiales en una cinta automática continua, sin botones ni arrastre. Pausar al pasar el puntero y respetar la preferencia de movimiento reducido.

## Revisión del cliente — 28 de septiembre de 2026

- Enfoque principal: ingeniería e infraestructura energética, obras EPC, ductos y piping. Título: Ingeniería e infraestructura energética. Mantener el video institucional y la cinta de clientes.
- Menú: Empresa, Qué hacemos, Experiencia y Contacto. Orden: Hero, Empresa, Qué hacemos, Experiencia, Servicios de obra, Personas y equipos, Clientes, Contacto.
- Empresa: más de 45 años ejecutando obras, alcance nacional e internacional en Argentina y Uruguay. Capacidades: infraestructura energética, obras EPC y piping, tendido de tritubo y CCTV (resumen de Lucía del 1 de octubre).
- Qué hacemos se condensa en una composición editorial. Servicios de obra tiene menor jerarquía, como listado compacto. Obras civiles significa obras complementarias a la infraestructura, no edificación general.
- Fondos: blanco como base; Qué hacemos y Personas y equipos llevan gris suave #F5F6F8 de borde a borde, conservando los espacios y la composición actuales.
- Eliminar la sección independiente y el enlace de menú de fibra óptica. Diferenciar canalización/tendido de tritubo del tendido de fibra; mencionar este último solamente en alcances respaldados.
- Experiencia: nueve obras del resumen (Leleque retirado por decisión del usuario); primero las seis resaltadas en amarillo por Lucía en Resumen Informacion.docx: General Roca, tritubo en Punta Alta, tercera posición Puerto Rosales, ERP–EMED Pirovano y Henderson, recobertura LGSM y Segundo Anillo Sur. Fotografías reales de sus carpetas, con galería en el modal; Punta Alta usa, por aprobación del usuario, la foto de tritubo de la presentación como referencia, con aclaración en el modal; su ubicación sigue sin confirmar. No inventar fechas ni sustituir una obra por otra.
- Nuestro equipo: usar el texto confirmado por Lucía sobre personal capacitado, normas de Calidad y SSHH&MA, amplia flota y base operativa con talleres propios de prefabricados y pintura. Retirar el inventario provisional; no afirmar certificaciones concretas.
- Contacto: formulario PHP publicado en Ferozo; destinatario definitivo y correo visible info@karpaingenieria.com.ar. El 1 de octubre el usuario confirmó recepción en su correo de prueba y autorizó el cambio a Karpa. Configuración en public/api/contact-config.php. No simular envíos exitosos ni confundir aceptación del servidor con recepción en la bandeja.

## Material de Lucía — 1 de octubre de 2026

- Resumen Informacion.docx es la referencia actual de contenido; conservar el video institucional y el diseño aprobado, incluidos los dos fondos grises.
- Servicios asociados: pruebas hidráulicas, prefabricados de cañerías, cruces especiales dirigidos, obra civil, movimiento de suelos, montaje electromecánico y recoating/recobertura.
- Fotografías recibidas sin regenerar ni alterar, con originales en img/lucia-2026-10-01 y trazabilidad en design/lucia-2026-10-01.md.
- Logo: azul ligeramente más oscuro y menos brillante, cercano al de títulos y botones; conservar la forma y el fondo blanco. Aplicar el mismo ajuste en encabezado y footer.

- Tritubo Punta Alta: por pedido del usuario, usar tritubo-ia-dron-v3.png, recreación con IA en vista aérea distante, con tendido paralelo a la ruta, una retroexcavadora al fondo y luz cálida de tarde con textura fotográfica suave. Retirar la retro del primer plano por ubicación incoherente con la cuadrilla. Conservar la referencia y las variantes anteriores; documentar su origen generado sin leyenda visible en el modal, por decisión del usuario. No afirmar que acredita la obra.
