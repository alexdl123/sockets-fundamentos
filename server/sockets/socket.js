
const {io} = require('../server');

io.on('connection',(client) => {
    console.log("Usuario Conectado");
    //console.log(client);

    //Respusta
    client.emit('enviarMensaje',{
        usuario: 'Admin',
        mensaje: 'Bienvenido Admin'
    });

    client.on('disconnect',() => {

        console.log("Un usuario se a desconectado");

    });

    //escuchando al cliente
    client.on('enviarMensaje',(data,callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje',data);
        /*
        if(mensaje.usuario){
            callback({
                resp : "Todo salio Bien!!"
            });
        }else{
            callback({
                resp : "Todo salio Mal!!!!"
            });
        }
        */
    });
})