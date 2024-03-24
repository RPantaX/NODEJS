const {response} = require('express');
const usuariosGet = (req, resp = response) =>{
    const {q, nombre = 'No name', apiKey, page=1, limit} = req.query;
    resp.json({
        msg:'get api - Controlador',
        q,
        nombre, 
        apiKey,
        page,
        limit
    });
}
const usuariosPut = (req, resp) =>{
    const {id} = req.params;
    resp.json({
        msg:'put api - Contolador',
        id:id
    });
}
const usuariosDelete = (req, resp) =>{
    resp.json({
        msg:'delete api - Controlador'
    });
}
const usuariosPost = (req, resp) =>{
    const {username, password} = req.body;
    resp.json({
        msg:'post api -Controlador',
        username,
        password
    });
}
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosDelete,
    usuariosPost
}