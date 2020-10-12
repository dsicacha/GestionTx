const excel = require('../models/datosExcel');
const excelCtrl = {};

excelCtrl.download =  (req, res) => {    
  
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