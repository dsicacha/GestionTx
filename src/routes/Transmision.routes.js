const { Router } = require('express');
const router = Router();
const transmisionCtrl =  require('../controllers/Transmision.controllers')

//Listar 
router.get('/',transmisionCtrl.getTransmisiones);

//Crear
router.post('/',transmisionCtrl.createTransmision);




module.exports = router;