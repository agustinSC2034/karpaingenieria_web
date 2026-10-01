# Publicación en Ferozo

Dominio: https://karpaingenieria.com.ar/

El formulario usa PHP 7.4 y el servicio de correo local del hosting. `public/api/contact-config.php` configura el destinatario definitivo `info@karpaingenieria.com.ar`, también utilizado como remitente y correo visible. El usuario confirmó la recepción en su correo de prueba y autorizó el cambio a Karpa el 1 de octubre de 2026. La respuesta de `mail()` confirma aceptación local, no entrega en la bandeja.

El endpoint valida campos, tamaño, origen, un campo trampa y límites de frecuencia por IP y globales. No acepta destinatarios aportados por el navegador. El formulario conserva los datos ante errores y se limpia únicamente cuando el servidor acepta el envío.

## Archivos y recuperación

- Carpeta de publicación: `/public_html/karpa-site-20261001/`.
- Construcción: definir `KARPA_DEPLOY_BASE=/karpa-site-20261001/` y ejecutar `npm run build`. Publicar solamente `dist/client/` en esa carpeta y su `index.html` en la raíz web.
- `.htaccess` prioriza el nuevo `index.html` para la portada y conserva las reglas anteriores. Los archivos y la base de datos de WordPress no se modifican.
- Respaldo de los archivos de entrada existentes: `/karpa-backups/20261001-before-new-site/`, fuera de `public_html`. Copia local ignorada por Git en `tmp/ferozo-backup-20261001/`.
- Para volver a la portada anterior, restaurar `.htaccess` desde ese respaldo y retirar el `index.html` nuevo si no existía antes (ver `root-files.json` local). Conservar la carpeta de publicación para diagnóstico.
- No guardar contraseñas FTP en archivos, documentación ni Git. Transferencia con FTPS explícito y validación de certificado.

GitHub Pages sirve archivos estáticos: puede mostrar el diseño, pero no ejecuta el formulario PHP. El envío real corresponde al dominio de Karpa.

## Comprobaciones de publicación — 1 de octubre de 2026

- Nueva portada publicada y verificada en HTTPS, con y sin www. HTTP redirige a HTTPS.
- Video original 1920×1080 reproduciéndose; respuestas parciales HTTP 206 y tamaño de 44.092.075 bytes verificados.
- Compilación y las cuatro pruebas de Sites aprobadas. Archivos subidos por FTPS con comprobación de tamaños y comparación del HTML y PHP.
- Ferozo bloquea el quinto argumento de `mail()` (`additional_parameters`); usar cuatro argumentos y encabezado From con el correo institucional.
- Prueba desde el formulario alojado completada: el servidor aceptó el mensaje KARPA-20261001 y el formulario mostró confirmación y limpió los campos. El usuario confirmó la recepción y autorizó el destinatario definitivo de Karpa.
- Comprobaciones temporales retiradas del servidor. No se modificó WordPress ni su base de datos.
