const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario Conectado');

    client.emit('enviarMensaje',{
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    })

    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    });

    //escuchar el cliente
    client.on('enviarMensaje', (data,callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if(mensaje.usuario){
        //     callback({
        //         respuesta: 'Todo Salio bien'
        //     });
        // }else{
        //     callback({
        //         respuesta: 'Todo Salio mal!!!!!!!!!!!'
        //     });
        // }

        

    })
});


