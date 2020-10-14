const excel = require("exceljs");
const estructura = require('../helpers/estructuraExcel');
const manejoExcel ={};

manejoExcel.crearExcel = (res) => {

    /*Crear libro de excel*/
  let workbook = new excel.Workbook();

    /*Asignar propiedades de creacion del libro*/
  workbook.creator = 'DHL - Fedex';
  workbook.created = new Date();


  /*Crear Hoja de excel*/
  let worksheet = workbook.addWorksheet("Computo");

  /*Asignar estructura  encabezado computo a hoja de excel*/
  estructura.encabezadoComputo(worksheet);

/*Asignar estructura de comunidad */
  estructura.community(worksheet,2);

  /**Asignar estructura para Partner producer Aplicacion */
  estructura.partnerProducerA(worksheet);


/*Crear Archivo para enviarlo como respuesta del GET*/
 return  workbook.xlsx.write(res);
};



module.exports = manejoExcel;
