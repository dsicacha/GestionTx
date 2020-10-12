const { Router } = require('express');
const router = Router();
const excel =  require('../controllers/CrearExcel.controllers')

//CrearExcel
router.get('/api/excel/download',excel.download);





module.exports = router;