var socket = io();
// escuchar información
socket.on('connect', function() {
    console.log('conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('Perdimos Conección con el servidor');
});

//enviar información 
socket.emit('enviarMensaje', {
    usuario: 'Alex',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta Server: ', resp);
});

//escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});