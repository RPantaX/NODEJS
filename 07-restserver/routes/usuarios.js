const {Router} = require('express');
const {usuariosGet, usuariosPut,usuariosDelete, usuariosPost } = require('../controllers/usuarios');
const ruter = Router();

ruter.get('/', usuariosGet);
//pathvariable
ruter.put('/:id', usuariosPut);
ruter.delete('/', usuariosDelete);
ruter.post('/',usuariosPost );

module.exports=ruter;