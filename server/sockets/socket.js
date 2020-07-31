const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    });

    // escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        // con broadcast se envia a todos los usuario conectados en la sesion 
        client.broadcast.emit('enviarMensaje', data);


        /*         if (mensaje.usuario) {
                    callback({
                        resp: 'TODO SALIO BIEN!'
                    });
                } else {
                    callback({
                        resp: 'TODO SALIO MAL!!!!'
                    })
                } */


    });

});