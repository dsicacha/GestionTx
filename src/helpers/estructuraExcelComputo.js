const config = require("../config/configComputoAS");
const estilos = require("./estilosExcel");
const estructura = {};

/**Funcion para asignar el encabezado de la pestaña computo */
estructura.encabezadoComputo = (worksheet) => {
  /*Asignar ancho de columnas segun constante definida */
  worksheet.columns = estilos.anchoColumnas;

  /*Estilo para encabezado pestaña Computo*/
  estilos.asignarEstilo(
    worksheet,
    config.titComputo.computo.celda,
    config.titComputo.computo.texto,
    estilos.letraTitPrincipal,
    estilos.fondoAzul,
    estilos.alineacionCentral,
    estilos.border,
    true
  );

  /*Estilo para alerta de que los campos no relacionados se dejan por defecto*/

  estilos.asignarEstilo(
    worksheet,
    config.alerta.camposNoRelacionados.celda,
    config.alerta.camposNoRelacionados.texto,
    estilos.letraAlerta,
    estilos.fondoCeldaAlerta,
    estilos.alineacionCentral,
    estilos.border,
    true
  );

  return worksheet;
};

/**Funcion para asignar los titulos de componentes a la pestaña computo*/
estructura.tituloComponentes = (worksheet) => {
  for (const titulo in config.tituloComponentes) {
    estilos.asignarEstilo(
      worksheet,
      config.tituloComponentes[titulo].celda,
      config.tituloComponentes[titulo].texto,
      estilos.letraTitulo,
      estilos.fondoCeldaTitulo,
      estilos.alineacionCentral,
      estilos.border,
      true
    );
  }
  return worksheet;
};

/**Funcion para asignar en la pestaña de computo los campos requeridos en comunnity */
estructura.community = (worksheet) => {
  /*Asignar formato para alerta comunidad */
  estilos.asignarEstilo(
    worksheet,
    config.alerta.communityDouble.celda,
    config.alerta.communityDouble.texto,
    estilos.letraAlertaCommunity,
    estilos.fondoAzul,
    estilos.alineacionCentralBaja,
    estilos.border,
    true
  );

  /**Recorer titulos de community */
  for (const campos in config.titComunidad) {
    estilos.asignarEstilo(
      worksheet,
      config.titComunidad[campos].celda,
      config.titComunidad[campos].texto,
      estilos.letraTituloCeldas,
      estilos.fondoCeldas,
      estilos.alineacionCentralBaja,
      estilos.border,
      true
    );
  }

  return worksheet;
};

/**funcion para asignar en la pestaña de computo los campos requeridos para el partner producer Aplicacion */
estructura.partnerProducerA = (worksheet) => {
  /**Recorer titulos de partnerProducerA */
  for (const campos in config.titPartnerPA) {
    estilos.asignarEstilo(
      worksheet,
      config.titPartnerPA[campos].celda,
      config.titPartnerPA[campos].texto,
      estilos.letraTituloCeldas,
      estilos.fondoCeldas,
      estilos.alineacionCentralBaja,
      estilos.border,
      true
    );
  }

  return worksheet;
};

/**funcion para asignar en la pestaña de computo los campos requeridos para el partner Consumer Servidor*/
estructura.partnerConsumerS = (worksheet) => {
  for (const campos in config.titPartnerCS) {
    estilos.asignarEstilo(
      worksheet,
      config.titPartnerCS[campos].celda,
      config.titPartnerCS[campos].texto,
      estilos.letraTituloCeldas,
      estilos.fondoCeldas,
      estilos.alineacionCentralBaja,
      estilos.border,
      true
    );
  }
  return worksheet;
};

/**funcion para asignar en la pestaña de computo los campos requeridos en routing channel */
estructura.RoutingChannel = (worksheet) => {
  for (const campos in config.titChannel) {
    estilos.asignarEstilo(
      worksheet,
      config.titChannel[campos].celda,
      config.titChannel[campos].texto,
      estilos.letraTituloCeldas,
      estilos.fondoCeldas,
      estilos.alineacionCentralBaja,
      estilos.border,
      true
    );
  }

  return worksheet;
};

/**funcion para asignar en la pestaña de computo los campos requeridos en Accounts */
estructura.Accounts = (worksheet) => {
  for (const campos in config.titAccounts) {
    estilos.asignarEstilo(
      worksheet,
      config.titAccounts[campos].celda,
      config.titAccounts[campos].texto,
      estilos.letraTituloCeldas,
      estilos.fondoCeldas,
      estilos.alineacionCentralBaja,
      estilos.border,
      true
    );
  }

  return worksheet;
};

/**funcion para asignar en la pestaña de computo los valores requeridos en Community */
estructura.valoresCommunity = (worksheet, origen, destino) => {
  config.valCommunity.name.texto =
    origen["filial"] + "_" + origen["dominio"] + "_" + origen["subdominio"];
  config.valCommunity.name2.texto =
    destino["filial"] + "_" + destino["dominio"] + "_" + destino["subdominio"];

  for (const campos in config.valCommunity) {
    estilos.asignarEstilo(
      worksheet,
      config.valCommunity[campos].celda,
      config.valCommunity[campos].texto,
      estilos.letraValores,
      estilos.fondoBlanco,
      estilos.alineacionCentralBaja,
      estilos.border,
      true
    );
  }

  return worksheet;
};

estructura.valoresPartnerPA = (worksheet, origen) => {

  config.valPartnerPA.action.texto = 'Create';
  config.valPartnerPA.community.texto = config.valCommunity.name.texto;
  if (origen["UbicacionServidor"] == 'Interna') {
    config.valPartnerPA.partnerName.texto = 'L_' + origen['codigoMac'] + '_' + origen['proceso'] + '_' + origen['usuarioCnx'];
  } else {
    config.valPartnerPA.partnerName.texto = 'E_' + origen['codigoMac'] + '_' + origen['proceso'] + '_' + origen['usuarioCnx'];
  }

  config.valPartnerPA.telephone.texto = origen['telefono'];
  config.valPartnerPA.email.texto = origen['email'];
  config.valPartnerPA.userName.texto = origen['usuarioCnx'];

  if (origen["ambiente"] == "Produccion") {
    config.valPartnerPA.autHost.texto = 'Directorio Activo';
  } else {
    config.valPartnerPA.autHost.texto = 'LDAP Ambientes BC';
  }

  config.valPartnerPA.givenName.texto = origen['proceso'] + '_' + origen['codigoMac'];
  config.valPartnerPA.surName.texto = origen["usuarioCnx"];

  if (origen['metodoAutenticacion'] == 'Llaves') {
    config.valPartnerPA.sftpOScp.texto = 'Yes';
    config.valPartnerPA.keyUseraut.texto = 'Yes';
    config.valPartnerPA.keyName.texto = 'AUK_' + origen['codigoMac'] + '_' + origen['usuarioCnx'];
  } else {
    config.valPartnerPA.sftpOScp.texto = 'No';
    config.valPartnerPA.keyUseraut.texto = 'No';
    config.valPartnerPA.keyName.texto = 'N/A'
  }


  for (const campos in config.valPartnerPA) {
    estilos.asignarEstilo(
      worksheet,
      config.valPartnerPA[campos].celda,
      config.valPartnerPA[campos].texto,
      estilos.letraValores,
      estilos.fondoBlanco,
      estilos.alineacionCentralBaja,
      estilos.border,
      true
    );
  }

  return worksheet;
};

estructura.valoresPartnerCS = (worksheet, destino) => {
  let perfil = '';
  let servidor = "";

  config.valPartnerCS.action.texto = 'Create';
  config.valPartnerCS.community.texto = config.valCommunity.name2.texto;
  if (destino["UbicacionServidor"] == 'Interna') {
    config.valPartnerCS.partnerName.texto = 'L_' + destino['codigoMac'] + '_' + destino['proceso'] + '_' + destino['usuarioCnx'];
    perfil = 'L_';
  } else {
    config.valPartnerCS.partnerName.texto = 'E_' + destino['codigoMac'] + '_' + destino['proceso'] + '_' + destino['usuarioCnx'];
    perfil = 'E_';
  }

  config.valPartnerCS.telephone.texto = destino['telefono'];
  config.valPartnerCS.email.texto = destino['email'];
  config.valPartnerCS.userName.texto = destino['usuarioCnx'];


  if (destino["ambiente"] == "Produccion") {
    config.valPartnerCS.autHost.texto = 'Directorio Activo';
  } else {
    config.valPartnerCS.autHost.texto = 'LDAP Ambientes BC';
  }

  config.valPartnerCS.givenName.texto = destino['proceso'] + '_' + destino['codigoMac'];
  config.valPartnerCS.surName.texto = destino["usuarioCnx"];
  config.valPartnerCS.sftpOScp.texto = 'No';
  
  if (destino['protocolo']='SFTP') {
    config.valPartnerCS.protocol.texto = 'Listen For BANCOLOMBIA SSH/SFTP Connections';  
  }else if (destino['protocolo']='CD') {
    config.valPartnerCS.protocol.texto = 'Listen For BANCOLOMBIA SSH/SFTP Connections'    
  }
  
  servidor = destino['Servidor'];

  if (destino['tipoSvr'] == 'DNS') {

    servidor = servidor.toUpperCase().substring(0, servidor.indexOf('.'))
    perfil += servidor + '_' + destino['usuarioCnx'] + '_' + destino['usuarioConexionDestino'];
  } else {
    perfil += servidor + '_' + destino['usuarioCnx'] + '_' + destino['usuarioConexionDestino'];
  }

  config.valPartnerCS.perfilSsh.texto = perfil;


  for (const campos in config.valPartnerCS) {
    console.log(config.valPartnerCS[campos].celda + ': ' + config.valPartnerCS[campos].texto);
    estilos.asignarEstilo(
      worksheet,
      config.valPartnerCS[campos].celda,
      config.valPartnerCS[campos].texto,
      estilos.letraValores,
      estilos.fondoBlanco,
      estilos.alineacionCentralBaja,
      estilos.border,
      true
    );
  }

  return worksheet;
};

module.exports = estructura;
