# Karpa Ingeniería

Página corporativa responsive implementada con React y Vite a partir del diseño aprobado en `design/mockups/`.

## Desarrollo

```sh
npm install
npm run dev -- --host 127.0.0.1 --port 4173
```

`npm run build` genera la versión estática en `dist/client/`. El runtime del template conserva también la opción de alojamiento en Sites; no se ha publicado el sitio.

## Alcance

- Inicio, empresa, divisiones de obra, servicios especializados, antecedentes, equipos y contacto.
- Nueve divisiones visibles, incluida Fibra óptica con alcance de canalización y tendido respaldado por los antecedentes aportados.
- Navegación responsive y teclado; especialidades y obras desplegables; detalle de equipos con diálogo accesible.
- Fotografías regeneradas con GPT Image sobre las originales aportadas por el usuario, por pedido actualizado. No son reproducciones técnicas exactas. Originales preservadas en `img/`, versiones generadas en `img/generated/` y copias web en `public/images/ai/`.
- Fibra óptica tiene una sección destacada con acceso propio en el menú, imagen ilustrativa y antecedente de General Roca. Las demás divisiones presentan detalles desplegables para reducir texto simultáneo.
- Formulario con validación local: **envío pendiente por decisión del usuario**, hasta definir correo y servicio de recepción. No transmite ni almacena datos y nunca simula una confirmación de envío.

## Contenido y recursos

`src/content.js` contiene las especialidades, los antecedentes seleccionados y las categorías de equipos, basados en los PDF proporcionados. Se omiten importes de contratos, participaciones y patentes. Las fotos añadidas durante la implementación no se atribuyen a proyectos o clientes sin identificación confirmada.

Los originales están en `img/`; las copias optimizadas y los recursos extraídos del brochure están en `public/images/`. Ver `design/asset-sources.md`.

## Pendientes antes de publicar

1. Definir destinatario y servicio para el formulario; implementar el envío en servidor con validación y protección contra abuso.
2. Obtener, si están disponibles, el logo original en SVG/PNG transparente y las fotos históricas en mayor resolución.
3. Confirmar los datos corporativos y el contenido final; definir dominio y alojamiento.

No se configuraron estadísticas, cookies de seguimiento ni servicios externos de formulario.

La actualización de la presentación corporativa mencionada en el pedido original es un entregable separado y permanece pendiente.

## Ajuste de composición

Fibra óptica precede a Divisiones. Las divisiones se leen abiertas en desktop y desplegables en mobile. Los antecedentes son visibles, con imagen panorámica de la obra principal. Equipos incluye capacidades y una franja posterior presenta clientes documentados. Entradas al hacer scroll y despliegues tienen movimiento sutil, desactivado con la preferencia de movimiento reducido.
