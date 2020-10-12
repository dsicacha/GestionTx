const excel = require("exceljs");
const estilo = require('../helpers/estiloExcel');
const manejoExcel ={};

manejoExcel.crearExcel = (res) => {

    /*Crear libro de excel*/
  let workbook = new excel.Workbook();

    /*Asignar propiedades de creacion del libro*/
  workbook.creator = 'DHL - Fedex';
  workbook.created = new Date();


  /*Crear Hoja de excel*/
  let worksheet = workbook.addWorksheet("Computo");

  estilo.encabezadoComputo(worksheet);



 return  workbook.xlsx.write(res);
};



module.exports = manejoExcel;
