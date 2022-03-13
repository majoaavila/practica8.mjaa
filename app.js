//Maria Jose Avila Amezcua 4H

//http body en request esta vacio
//http body en response contiene html

//http tiene un estado desconectado, no guarda el estado de la conexion o peticion, no pregunta si la info te llega o no
//cambia el metodo
//mismo formato pero diferente info
//HEADERS peticion con GET X MEDIO DEL PROTOCOLO HTTP VERSION 1.1, info del cliente
//HEADERS respuesta protocolo HTTP, version 1.1, 200 ok todo bien, respuesta del servidor, info del servidor, q tipo de contenido se sirve content type
//status code

// inyectar dependencia
var http = require('http');


// se crea servidor (req, res) no cambiar de orden 

// http.createServer(function(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain'});
//     res.end('Hello world\n');
// }).listen(1337, '127.0.0.1');


// se crea un call back, algo q sucedera cuando se haga una peticion o se dispare un evento (request)
http.createServer((req, res) => {
    //crea una repuesta
    res.writeHead(200, { 'Content-Type': 'text/plain'}); //q tipo de contenido se usa: texto plano
    res.end('Hello world\n'); // mensaje que se va a mostrar, respuesta
}).listen(1337, '127.0.0.1'); //local host


//q escuche en puerto 1337, en esta direccion, no hay ruteo, xq solo se contesta en ruta raiz
//ruta es nombre del evento -- route handler: funcion ejecutada al dispararse el evento

//se escribe en la terminal node app, y despues en el navegador se escribe localhost:1337
//el evento es una peticion a la raiz
//la respuesta es un hello world