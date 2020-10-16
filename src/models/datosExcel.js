const excel = require("exceljs");
const estructuraComputo = require("../helpers/estructuraExcelComputo");
const estructuraAccesos = require("../helpers/estructuraExcelAccesos");

const manejoExcel = {};

manejoExcel.crearExcel = (res) => {
  /*Crear libro de excel*/
  let workbook = new excel.Workbook();

  /*Asignar propiedades de creacion del libro*/
  workbook.creator = "DHL - Fedex";
  workbook.created = new Date();

  /*Crear Hoja de excel Computo*/
  let hojaComputo = workbook.addWorksheet("Computo");

  /*Asignar estructuraComputo  pestaña computo*/
  estructuraComputo.encabezadoComputo(hojaComputo);  
  estructuraComputo.community(hojaComputo, 2);  
  estructuraComputo.partnerProducerA(hojaComputo); 
  estructuraComputo.partnerConsumerS(hojaComputo);  
  estructuraComputo.RoutingChannel(hojaComputo);  
  estructuraComputo.Accounts(hojaComputo);

/*Crear Hoja de excel AccesosPlataformas*/
  let hojaAccesosPlataformas = workbook.addWorksheet("AccesosPlataformas");

  estructuraAccesos.encabezadoAccesos(hojaAccesosPlataformas);
  estructuraAccesos.userIdentityKeyCreate(hojaAccesosPlataformas);
  estructuraAccesos.userIdentityKeyExport(hojaAccesosPlataformas);
  estructuraAccesos.KnowHostKey(hojaAccesosPlataformas);
  estructuraAccesos.perfilSsh(hojaAccesosPlataformas);



  /*Crear Archivo para enviarlo como respuesta del GET*/
  return workbook.xlsx.write(res);
};

module.exports = manejoExcel;
