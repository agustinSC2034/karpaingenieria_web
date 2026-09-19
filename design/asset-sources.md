# Fuentes visuales

## Diseño aprobado

- `mockups/karpa-inicio-desktop-v1.png`: composición desktop, 793 × 1983 píxeles; concebida para 1440 px de ancho.
- `mockups/karpa-inicio-mobile-v1.png`: dos tramos consecutivos de la misma página mobile; no dos variantes.
- Blanco, azul profundo, tipografía sans serif, secciones abiertas, separadores discretos, sin tarjetas, etiquetas decorativas ni métricas inventadas.

## Imágenes usadas

| Recurso público | Fuente | Uso |
| --- | --- | --- |
| `karpa-symbol.png` | Logo recortado de la página 2 de Presentación Karpa.pdf | Identidad original; fondo gris incluido en el documento, pendiente original transparente |
| `izaje-de-caneria.webp` | Quinta foto nueva del usuario, guardada como `img/izaje-de-caneria.png` | Portada; sustituye la foto de 680 px por original de 1600 px |
| `planta-reguladora.webp` | `img/erp-002.jpg` | Empresa y especialidades |
| `segundo-anillo-sur.webp` | Foto de la página 3 de Presentación Karpa.pdf | Proyecto Segundo Anillo Sur / Metrogas, identificado en el brochure |
| `equipos-propios.webp` | `img/IMG-20191108-WA0041.jpg` | Flota |
| `tiendetubos-en-obra.webp` | Cuarta foto nueva del usuario, `img/tiendetubos-en-obra.png` | Detalle de equipos; sin atribución a cliente/obra |
| `equipo-industrial-vertical.webp` | Primera foto nueva | Servicios especializados, detalle desplegable |
| `equipo-industrial-horizontal.webp` | Segunda foto nueva | Servicios especializados, detalle desplegable |

La tercera imagen nueva es un collage con crédito a XIX Ingeniería. Se conserva completo en `img/referencia-instalaciones-xix-2025-2026.png` como referencia; no se publica ni se elimina su crédito.

Las conversiones WebP preservan el contenido fotográfico. Tras probar GPT Image, se rechazaron los candidatos que reconstruían detalles técnicos y no se incorporaron al sitio. El usuario eligió expresamente reescalado convencional sin inventar detalles.

`scripts/prepare-photos.py` aplica Lanczos 2×/3× y nitidez suave a las fotografías de hasta 1200 px, sin modificar los originales ni alterar geometría, contenido o color. Las copias están en `img/hd/`, con un manifiesto de dimensiones y procedencia. Los recursos visibles del sitio utilizan esas copias optimizadas. Este proceso mejora su presentación, pero no recupera detalle real ausente del original.

## Actualización: imágenes generadas por pedido del usuario

El pedido posterior reemplaza la restricción de reescalado convencional: se utiliza GPT Image integrado para regenerar las siete fotografías mostradas en la web sobre sus originales. Las versiones generadas conservan la composición general, pero modifican detalles finos y no deben utilizarse como evidencia técnica exacta de equipos u obras. Los originales y las versiones convencionales permanecen disponibles.

Correspondencias: hero = izaje-de-caneria.png; planta = erp-002.jpg; flota = IMG-20191108-WA0041.jpg; obra = segundo-anillo-sur-original.webp; vertical/horizontal = equipo-industrial-vertical/horizontal.png; tiendetubos = tiendetubos-en-obra.png. Fibra es una nueva imagen ilustrativa de material, no atribuida a una obra.

PNG generados: img/generated/. Copias WebP: public/images/ai/. Prompts completos y método: design/generated-images.json. Las dimensiones reales oscilan entre 1254 y 1673 px de lado mayor; no se afirma entrega 2K/4K ni recuperación exacta de detalle perdido.

La escena macro de fibra fue sustituida por fibra-obra-v3.webp, ilustración de tendido rural a gran escala con referencia estética de tiendetubos.png, y acabado fotográfico deliberadamente menos pulido. Logo-v2.webp recrea el emblema enviado por el usuario sobre blanco. Originales generados en img/generated; prompts en design/generated-images-v2.json y design/fibra-photo-finish.json. Ninguna de estas ilustraciones acredita una obra específica.


Logos de clientes: recursos originales de los sitios oficiales, guardados en public/images/clients/. URLs individuales en design/client-logo-sources.json. Generación Mediterránea usa Grupo Albanesi con identificación textual. No se regeneraron marcas con IA.
