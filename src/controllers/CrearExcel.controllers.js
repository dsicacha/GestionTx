const excel = require('../models/datosExcel');
const transmision = require('../models/transmision');
const origen = require('../models/origen');
const destino =  require('../models/destino');


const excelCtrl = {};
let consultaTransmision;
let consultaOrigen;
let consultaDestino;


excelCtrl.download =  async (req, res) => {

  consultaTransmision =  await transmision.findById(req.params.id);
  consultaOrigen = await origen.findById(consultaTransmision['origen']);
  consultaDestino = await destino.findById(consultaTransmision['destino']);
    
  excel.ValoresComputo(consultaOrigen,consultaDestino);



  
  

  
  
  

  
  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=" + "GestionTx.xlsx"
  );

  excel.crearExcel(res).then(function () {
    res.status(200).end();
  });
  
  
};

module.exports = excelCtrl;