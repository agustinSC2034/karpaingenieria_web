<?php
// Compatible con PHP 7.4 del hosting. Nunca aceptar destinatarios del navegador.
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond($status, $message, $ok = false) {
    http_response_code($status);
    echo json_encode(['ok' => $ok, 'message' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, 'Método no permitido.');
}
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
if ($origin !== '' && !in_array($origin, ['https://karpaingenieria.com.ar', 'https://www.karpaingenieria.com.ar'], true)) {
    respond(403, 'Origen no permitido.');
}
if (stripos(isset($_SERVER['CONTENT_TYPE']) ? $_SERVER['CONTENT_TYPE'] : '', 'application/json') !== 0) {
    respond(415, 'Formato no permitido.');
}
$raw = file_get_contents('php://input', false, null, 0, 24001);
if ($raw === false || strlen($raw) > 24000) respond(413, 'El mensaje es demasiado largo.');
$data = json_decode($raw, true);
if (!is_array($data)) respond(400, 'Revisá los datos del formulario.');
foreach (['name', 'email', 'message'] as $field) {
    if (!isset($data[$field]) || !is_string($data[$field]) || trim($data[$field]) === '') {
        respond(422, 'Completá nombre, correo y mensaje.');
    }
}
if (!empty($data['website'])) respond(422, 'No pudimos procesar la consulta.');
$name = trim($data['name']);
$email = trim($data['email']);
$message = trim($data['message']);
if (preg_match_all('/./us', $name) > 160 || strlen($email) > 254 || preg_match_all('/./us', $message) > 4000
    || preg_match('/[\r\n\x00]/', $name . $email) || strpos($message, "\0") !== false
    || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, 'Revisá el correo y la extensión de los campos.');
}

// Límite compartido con bloqueo para evitar envíos simultáneos y abuso.
$rateFile = sys_get_temp_dir() . '/karpa-contact-' . hash('sha256', __DIR__) . '.json';
$lock = @fopen($rateFile, 'c+');
if (!$lock || !flock($lock, LOCK_EX)) respond(503, 'El envío no está disponible. Intentá más tarde.');
$events = json_decode(stream_get_contents($lock), true);
if (!is_array($events)) $events = [];
$now = time();
$events = array_values(array_filter($events, function ($event) use ($now) { return $event['time'] > $now - 3600; }));
$ip = hash('sha256', isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 'unknown');
$recent = array_filter($events, function ($event) use ($now, $ip) { return $event['ip'] === $ip && $event['time'] > $now - 60; });
$perHour = array_filter($events, function ($event) use ($ip) { return $event['ip'] === $ip; });
if (count($recent) > 0 || count($perHour) >= 10 || count($events) >= 100) {
    flock($lock, LOCK_UN);
    fclose($lock);
    header('Retry-After: 60');
    respond(429, 'Esperá un momento antes de enviar otra consulta.');
}
$events[] = ['ip' => $ip, 'time' => $now];
rewind($lock);
ftruncate($lock, 0);
$stored = fwrite($lock, json_encode($events));
fflush($lock);
flock($lock, LOCK_UN);
fclose($lock);
if ($stored === false) respond(503, 'El envío no está disponible. Intentá más tarde.');

$config = require __DIR__ . '/contact-config.php';
$body = "Consulta desde la web de Karpa\n\nNombre y empresa: " . $name . "\nCorreo: " . $email . "\n\nMensaje:\n" . $message . "\n";
$headers = 'From: Karpa Web <' . $config['sender'] . ">\r\n"
    . 'Reply-To: ' . $email . "\r\n"
    . "MIME-Version: 1.0\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: base64";
try {
    $sent = @mail($config['recipient'], 'Nueva consulta - Karpa Ingenieria', chunk_split(base64_encode($body)), $headers);
} catch (Throwable $error) {
    error_log('Karpa contact: ' . $error->getMessage());
    $sent = false;
}
if (!$sent) respond(503, 'No pudimos enviar la consulta. Intentá más tarde o escribinos a info@karpaingenieria.com.ar.');
respond(200, 'Consulta recibida.', true);
