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
- Empresa: más de 40 años ejecutando obras, alcance nacional e internacional en Argentina y Uruguay. Capacidades: Gasoductos y redes, Tendido de tritubo y Obras EPC.
- Qué hacemos se condensa en una composición editorial. Servicios de obra tiene menor jerarquía, como listado compacto. Obras civiles significa obras complementarias a la infraestructura, no edificación general.
- Fondos: blanco como base; Qué hacemos y Personas y equipos llevan gris suave #F5F6F8 de borde a borde, conservando los espacios y la composición actuales.
- Eliminar la sección independiente y el enlace de menú de fibra óptica. Diferenciar canalización/tendido de tritubo del tendido de fibra; mencionar este último solamente en alcances respaldados.
- Experiencia: grilla preparada para seis obras, fotografía y título con modal de detalle. Selección y fotografías actuales provisionales, pendientes de confirmación por el cliente. No inventar fechas ni atribuir fotografías no identificadas; indicar las fotos de referencia en el detalle.
- Personas y equipos: destacar personal propio capacitado, seguridad, higiene, calidad, talleres de prefabricados y pintura y maquinaria disponible. Inventario final pendiente; sin cantidades ni certificaciones no confirmadas.
- Contacto: correo institucional info@karpaingenieria.com.ar; futuro destinatario de prueba agustin.scutari@it-tel.com.ar. El envío queda pendiente hasta disponer del hosting/servicio de correo, por decisión del usuario del 28 de septiembre. No simular envíos exitosos.
