const config = require("../config/configComputoAS");
const estilos = require("./estilosExcel");
const estructura = {};
let autHost = '';

/**Funcion para asignar el encabezado de la pestaña computo */
estructura.encabezadoComputo = (worksheet) => {
  /*Asignar ancho de columnas segun constante definida */
  worksheet.columns = estilos.anchoColumnas;


  for (const campos in config.CeldasAPintar) {
    console.log(config.CeldasAPintar[campos].celda);
    estilos.asignarFill(worksheet,config.CeldasAPintar[campos].celda,estilos.fondoAzulTotal,true);
    
  }

  

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
    autHost = 'Directorio Activo';
  } else {
    autHost = 'LDAP Ambientes BC';
  }
  config.valPartnerPA.autHost.texto = autHost;

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
    config.valPartnerCS.TipoTransferencia.texto = 'Interna';
  } else {
    config.valPartnerCS.partnerName.texto = 'E_' + destino['codigoMac'] + '_' + destino['proceso'] + '_' + destino['usuarioCnx'];
    perfil = 'E_';
    config.valPartnerCS.TipoTransferencia.texto = 'Externa';

  }

  config.valPartnerCS.telephone.texto = destino['telefono'];
  config.valPartnerCS.email.texto = destino['email'];
  config.valPartnerCS.userName.texto = destino['usuarioCnx'];
  config.valPartnerCS.autHost.texto = autHost;


  config.valPartnerCS.givenName.texto = destino['proceso'] + '_' + destino['codigoMac'];
  config.valPartnerCS.surName.texto = destino["usuarioCnx"];
  config.valPartnerCS.sftpOScp.texto = 'No';

  if (destino['protocolo'] = 'SFTP') {
    config.valPartnerCS.protocol.texto = 'Listen For BANCOLOMBIA SSH/SFTP Connections';
  } else if (destino['protocolo'] = 'CD') {
    config.valPartnerCS.protocol.texto = 'Listen For BANCOLOMBIA SSH/SFTP Connections'
  }

  servidor = destino['Servidor'];

  if (destino['tipoSvr'] == 'DNS') {
    servidor = servidor.toUpperCase().substring(0, servidor.indexOf('.'))
  }
  perfil += servidor + '_' + destino['usuarioCnx'] + '_' + destino['usuarioConexionDestino'];

  config.valPartnerCS.perfilSsh.texto = perfil;



  for (const campos in config.valPartnerCS) {

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

estructura.valoresRoutingChannel = (worksheet) => {

  config.valChannel.action.texto = 'Create';
  config.valChannel.template.texto = 'Template_EST_UnkToUnk_NCons';
  config.valChannel.producer.texto = config.valPartnerPA.partnerName.texto;
  config.valChannel.consumer.texto = config.valPartnerCS.partnerName.texto;

  for (const campos in config.valChannel) {

    estilos.asignarEstilo(
      worksheet,
      config.valChannel[campos].celda,
      config.valChannel[campos].texto,
      estilos.letraValores,
      estilos.fondoBlanco,
      estilos.alineacionCentralBaja,
      estilos.border,
      true
    );
  }

  return worksheet;
};

estructura.valoresAccounts = (worksheet, origen) => {

  config.valAccounts.action.texto = 'Create';
  config.valAccounts.userId.texto = origen['usuarioRed'];
  config.valAccounts.autHost.texto = autHost;
  config.valAccounts.groups.texto = 'File Gateway Partner Users ; Mailbox Browser Interface Users';
  config.valAccounts.permissions01.texto = '/' + config.valPartnerPA.partnerName.texto + ' Mailbox';
  config.valAccounts.permissions02.texto = '/' + config.valPartnerPA.partnerName.texto + '/Inbox' + ' Mailbox';
  config.valAccounts.permissions03.texto = '/' + config.valPartnerPA.partnerName.texto + '/' + config.valPartnerCS.partnerName.texto + ' Mailbox';
  config.valAccounts.permissions04.texto = 'Admin Web App Permission';
  config.valAccounts.permissions05.texto = 'MyAccount';
  config.valAccounts.givenName.texto = origen['nombre'];
  config.valAccounts.surName.texto = origen['nombre'];
  config.valAccounts.email.texto = origen['email'];
  config.valAccounts.identity.texto = config.valPartnerPA.partnerName.texto;

  for (const campos in config.valAccounts) {


    estilos.asignarEstilo(
      worksheet,
      config.valAccounts[campos].celda,
      config.valAccounts[campos].texto,
      estilos.letraValores,
      estilos.fondoBlanco,
      estilos.alineacionCentralBaja,
      estilos.border,
      true
    );
  }

  estilos.asignarBorder(worksheet, config.valAccounts.permissions01.celda, estilos.borderNullBtn);
  estilos.asignarBorder(worksheet, config.valAccounts.permissions02.celda, estilos.borderNullBtnTop);
  estilos.asignarBorder(worksheet, config.valAccounts.permissions03.celda, estilos.borderNullBtnTop);
  estilos.asignarBorder(worksheet, config.valAccounts.permissions04.celda, estilos.borderNullBtnTop);
  estilos.asignarBorder(worksheet, config.valAccounts.permissions05.celda, estilos.borderNullTop);

  return worksheet;
};

module.exports = estructura;
