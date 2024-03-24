const express = require('express');
var cors = require('cors')
class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'
        //middlewares: funcion que siempre se ejecutará cuando levantemos nuestro servidor
        //podemos configurarlo para que reciba cualquier tipo de request: xml, json, etc.
        this.middlewares();
        //rutas d emi aplicacion
        this.routes();
    }
    middlewares(){
        //cors
        this.app.use(cors());
        //parseo y lectura del body: serializará a formato json
        this.app.use(express.json());
        //directorio público
        this.app.use(express.static('public'))
    }
    routes(){
       this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en el puerto: ', this.port);
        })
    }
}

module.exports = Server;