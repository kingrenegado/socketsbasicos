var socket = io();

        //escuchar info
        socket.on('connect', function(){
            console.log('Conectado al servidor');
        })
        //escuchar info
        socket.on('disconnect', function(){
            console.log('Perdimos conexion con el servidor')
        });

        //Enviar info
        socket.emit('enviarMensaje',{
            usuario: 'Enrique',
            mensaje: 'Hola lu'
        }, function(respuesta){
            console.log('respuesta server:' ,respuesta)
        })
        //Escuchar información

        socket.on('enviarMensaje',function(mensaje){
            console.log('Servidor: ',mensaje);
        })