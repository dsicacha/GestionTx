const excel = require("exceljs");
const estructuraComputo = require("../helpers/estructuraExcelComputo");
const estructuraAccesos = require("../helpers/estructuraExcelAccesos");
const origen = require("./origen");
const destino = require("./destino");


  /*Crear libro de excel*/
  let workbook = new excel.Workbook();

  /*Asignar propiedades de creacion del libro*/
  workbook.creator = "DHL - Fedex";
  workbook.created = new Date();

  /*Crear Hoja de excel Computo*/
  let hojaComputo = workbook.addWorksheet("Computo");

  /*Crear Hoja de excel AccesosPlataformas*/
  let hojaAccesosPlataformas = workbook.addWorksheet("AccesosPlataformas");


const manejoExcel = {};

manejoExcel.crearExcel = (res) => {

  /*Asignar estructuraComputo  pestaña computo*/
  estructuraComputo.encabezadoComputo(hojaComputo);  
  estructuraComputo.community(hojaComputo, 2);  
  estructuraComputo.partnerProducerA(hojaComputo); 
  estructuraComputo.partnerConsumerS(hojaComputo);  
  estructuraComputo.RoutingChannel(hojaComputo);  
  estructuraComputo.Accounts(hojaComputo); 


  estructuraAccesos.encabezadoAccesos(hojaAccesosPlataformas);
  estructuraAccesos.userIdentityKeyCreate(hojaAccesosPlataformas);
  estructuraAccesos.userIdentityKeyExport(hojaAccesosPlataformas);
  estructuraAccesos.KnowHostKey(hojaAccesosPlataformas);
  estructuraAccesos.perfilSsh(hojaAccesosPlataformas);



  /*Crear Archivo para enviarlo como respuesta del GET*/
  return workbook.xlsx.write(res);
};

manejoExcel.ValoresComputo=(origen,destino)=>{
  estructuraComputo.valoresCommunity(hojaComputo,origen,destino);



  
}

module.exports = manejoExcel;
