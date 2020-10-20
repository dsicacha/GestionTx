const llenarExcelCtrl = {};

const Origen = require('../models/origen');
const Destino = require('../models/destino');

llenarExcelCtrl.camposComunnity=async(idO,idD)=>{
    const datosOrigen = await Origen.findById(idO);
    const datosDestino = await Destino.findById(idD);

}

