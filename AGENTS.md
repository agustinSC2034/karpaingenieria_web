# Prototype Instructions

## Decisiones aprobadas para Karpa

- Seguir los mockups completos de `design/mockups/`: fondo blanco, azul profundo, tipografía sans serif firme, secciones abiertas y sin tarjetas ni etiquetas decorativas.
- Actualización del usuario: regenerar las fotografías deterioradas con IA usando las originales como base, manteniendo escena y aspecto natural. Conservar siempre originales en `img/` y distinguir versiones generadas de originales en la documentación.
- La conexión de envío del formulario queda pendiente por pedido explícito del usuario: aún no definió el correo destinatario. No simular envíos exitosos.
- Las nuevas fotos no tienen identificación confirmada de proyecto/cliente; no atribuirles nombres por inferencia.
- Mostrar las divisiones de obra individualmente, incluyendo Fibra óptica como división propia. Basar el alcance técnico en los documentos aportados; no atribuir servicios de telecomunicaciones no documentados.
- Fibra óptica debe tener un apartado destacado y acceso desde el menú. Evitar bloques largos de texto: mostrar síntesis y detalles desplegables para una lectura ágil.
- Fibra óptica va antes de Divisiones: escena de obra de gran escala, no FTTH ni macro de cable. Sin botones de conocer/consultar fibra; sumar explicación breve.
- Divisiones: descripciones cortas siempre visibles en desktop; conservar descripción completa desplegable en mobile. Obras: antecedentes visibles sin controles que los oculten, foto principal panorámica.
- Quitar consultar disponibilidad de equipos; mantener el bloque y ampliar sus capacidades. Logo regenerado fiel al emblema, con fondo blanco. Animaciones sutiles con respeto a movimiento reducido.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

- Clientes: mostrar los logos oficiales de las empresas mencionadas en una franja con carrusel sobrio, flechas y deslizamiento móvil; sin reproducción automática.

