var socket = io();

// escuchar
socket.on('connect',function(){

    console.log("conectado al servidor");

});
// escuchar
socket.on('disconnect',function(){
    
    console.log("Perdimos conexion con el servidor");

});

//enviar informacion
socket.emit('enviarMensaje',{
    usuario: 'Alex Dominguez Leon',
    mensaje: 'Hola mundo'
},function(resp){
    console.log("Respuesta: ",resp);
});

//escuchar informacion
socket.on('enviarMensaje',function(mensaje){

    console.log("Respuesta:",mensaje);

})