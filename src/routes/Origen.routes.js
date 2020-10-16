const { Router } = require('express');
const router = Router();
const origenCtrl =  require('../controllers/origen.controllers')

//Listar 
router.get('/',origenCtrl.getOrigenes);
//Crear 
router.post('/',origenCtrl.deleteOrigen);
//Listar 
router.get('/:id',origenCtrl.getOrigen);
//Editar 
router.put('/:id',origenCtrl.editOrigen);
//Eliminar 
router.delete('/:id',origenCtrl.deleteOrigen);



module.exports = router;