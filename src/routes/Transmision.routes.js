const { Router } = require('express');
const router = Router();
const transmisionCtrl =  require('../controllers/Transmision.controllers')

//Listar 
router.get('/',transmisionCtrl.getTransmisiones);

//Crear
router.post('/',transmisionCtrl.createTransmision);

//Listar 
router.get('/:id',transmisionCtrl.getTransmision);
//Editar 
router.put('/:id',transmisionCtrl.editTransmision);
//Eliminar 
router.delete('/:id',transmisionCtrl.deleteTransmision);






module.exports = router;