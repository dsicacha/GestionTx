const excel = require("exceljs");
const estructuraComputo = require("../helpers/estructuraExcelComputo");
const estructuraAccesos = require("../helpers/estructuraExcelAccesos");
const transmision = require('../models/transmision');
const origen = require('../models/origen');
const destino =  require('../models/destino');
const estructura = require("../helpers/estructuraExcelComputo");

let consultaTransmision;
let consultaOrigen;
let consultaDestino;



const manejoExcel = {};

manejoExcel.crearExcel = async(res,id) => {

  consultaTransmision =  await transmision.findById(id);
  consultaOrigen = await origen.findById(consultaTransmision['origen']);
  consultaDestino = await destino.findById(consultaTransmision['destino']);
    

    /*Crear libro de excel*/
    var workbook = new excel.Workbook();

    /*Asignar propiedades de creacion del libro*/
    workbook.creator = "DHL - Fedex";
    workbook.created = new Date();
  
    /*Crear Hoja de excel Computo*/
    var hojaComputo = workbook.addWorksheet("Computo");
  
    /*Crear Hoja de excel AccesosPlataformas*/
    var hojaAccesosPlataformas = workbook.addWorksheet("AccesosPlataformas"); 

  /*Asignar estructura Computo  pestaña computo*/
  estructuraComputo.encabezadoComputo(hojaComputo);
  estructuraComputo.tituloComponentes(hojaComputo);  
  estructuraComputo.community(hojaComputo);  
  estructuraComputo.partnerProducerA(hojaComputo); 
  estructuraComputo.partnerConsumerS(hojaComputo);  
  estructuraComputo.RoutingChannel(hojaComputo);  
  estructuraComputo.Accounts(hojaComputo); 

  /**Llenar valores de pestaña computo */
 estructuraComputo.valoresCommunity(hojaComputo,consultaOrigen,consultaDestino);
 estructuraComputo.valoresPartnerPA(hojaComputo,consultaOrigen);
 estructuraComputo.valoresPartnerCS(hojaComputo,consultaDestino);
 estructuraComputo.valoresRoutingChannel(hojaComputo);
 estructuraComputo.valoresAccounts(hojaComputo,consultaOrigen);

/*Asignar estructura Control de accesos  pestaña control de accesos*/
  estructuraAccesos.encabezadoAccesos(hojaAccesosPlataformas);  
  estructuraAccesos.tituloComponentes(hojaAccesosPlataformas);
  estructuraAccesos.userIdentityKeyCreate(hojaAccesosPlataformas);
  estructuraAccesos.userIdentityKeyExport(hojaAccesosPlataformas);
  estructuraAccesos.KnowHostKey(hojaAccesosPlataformas);
  estructuraAccesos.perfilSsh(hojaAccesosPlataformas);

  /**Llenar valores de pestaña accesos */
  estructuraAccesos.valoresAlertas(hojaAccesosPlataformas,consultaDestino);
  estructuraAccesos.valoresUserIdentityKeyCreate(hojaAccesosPlataformas,consultaDestino);
  estructuraAccesos.valoresUserIdentityKeyExport(hojaAccesosPlataformas,consultaDestino);
  estructuraAccesos.valoresHostkey(hojaAccesosPlataformas,consultaDestino);
  estructuraAccesos.valoresPerfilSsh(hojaAccesosPlataformas,consultaDestino);
  


  /*Crear Archivo para enviarlo como respuesta del GET*/
  return workbook.xlsx.write(res);
};



module.exports = manejoExcel;
