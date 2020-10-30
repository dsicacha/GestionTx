const config = require("../config/configAccesosAS");
const estilos = require("./estilosExcel");
const estructura = {};

/**Funcion encargada de llenar encabezados de la pestaña Accesos asignando el titulo y 
 * la alerta de que los campos no relacionado se dejan por defecto
 */
estructura.encabezadoAccesos = (worksheet) => {
  /*Asignar ancho de columnas segun constante definida */
  worksheet.columns = estilos.anchoColumnas;

  /*Estilo para encabezado pestaña Accesos*/

  estilos.asignarEstilo(
    worksheet,
    config.titAccesos.accesos.celda,
    config.titAccesos.accesos.texto,
    estilos.letraTitPrincipal,
    estilos.fondoVerde,
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

estructura.tituloComponentes = (worksheet) =>{

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
}

estructura.userIdentityKeyCreate = (worksheet) => {

  for (const titulo in config.titUserIdentityKeyCreate) {
    estilos.asignarEstilo(
      worksheet,
      config.titUserIdentityKeyCreate[titulo].celda,
      config.titUserIdentityKeyCreate[titulo].texto,
      estilos.letraTituloCeldas,
      estilos.fondoCeldas,
      estilos.alineacionCentralBaja,
      estilos.border,
      true
    );
  }

  return worksheet;
};

estructura.userIdentityKeyExport = (worksheet) => {
 
  for (const titulo in config.titUserIdentityKeyExport) {
    estilos.asignarEstilo(
      worksheet,
      config.titUserIdentityKeyExport[titulo].celda,
      config.titUserIdentityKeyExport[titulo].texto,
      estilos.letraTituloCeldas,
      estilos.fondoCeldas,
      estilos.alineacionCentralBaja,
      estilos.border,
      true
    );
  }
  
  return worksheet;
};

estructura.KnowHostKey = (worksheet) => {
  
  for (const titulo in config.titHostKey) {
    estilos.asignarEstilo(
      worksheet,
      config.titHostKey[titulo].celda,
      config.titHostKey[titulo].texto,
      estilos.letraTituloCeldas,
      estilos.fondoCeldas,
      estilos.alineacionCentralBaja,
      estilos.border,
      true
    );
  }
  
  return worksheet;
};

estructura.perfilSsh = (worksheet) => {

  for (const titulo in config.titPerfil) {
    estilos.asignarEstilo(
      worksheet,
      config.titPerfil[titulo].celda,
      config.titPerfil[titulo].texto,
      estilos.letraTituloCeldas,
      estilos.fondoCeldas,
      estilos.alineacionCentralBaja,
      estilos.border,
      true
    );
  }
  
  

  return worksheet;
};

module.exports = estructura;
