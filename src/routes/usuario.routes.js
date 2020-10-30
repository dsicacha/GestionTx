const { Router } = require('express');
const router = Router();
const usuarioCtrl =  require('../controllers/usuario.controllers');
const { route } = require('./Excel.routes');

//Listar 
router.get('/',usuarioCtrl.getUsuarios);

//Listar 
router.get('/:id',usuarioCtrl.getUsuarios);

router.post('/',usuarioCtrl.createUsuario);







module.exports = router;