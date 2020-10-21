const { Router } = require('express');
const router = Router();
const destinoCtrl =  require('../controllers/Destino.controllers')

//Listar 
router.get('/',destinoCtrl.getDestinos);
//Crear 
router.post('/',destinoCtrl.createDestino);
//Listar 
router.get('/:id',destinoCtrl.getDestino);
//Editar 
router.put('/:id',destinoCtrl.editDestino);
//Eliminar 
router.delete('/:id',destinoCtrl.deleteDestino);
module.exports = router;