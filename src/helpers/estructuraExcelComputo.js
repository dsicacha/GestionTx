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

module.exports = estructura;
