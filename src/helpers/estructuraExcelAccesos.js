const config = require("../config/configAccesosAS");
const estilos = require("./estilosExcel");
const estructura = {};

/**Funcion encargada de llenar encabezados de la pestaña Accesos asignando el titulo y 
 * la alerta de que los campos no relacionado se dejan por defecto
 */
estructura.encabezadoAccesos = (worksheet) => {
  /*Asignar ancho de columnas segun constante definida */
  worksheet.columns = estilos.anchoColumnas;


  for (const campos in config.CeldasAPintar) {
    console.log(config.CeldasAPintar[campos].celda);
    estilos.asignarFill(worksheet,config.CeldasAPintar[campos].celda,estilos.fondoVerdeTotal,true);
    
  }

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

estructura.valoresAlertas = (worksheet, destino) => {

  if (destino['metodoAutenticacion'] == 'Llaves') {
    config.alerta2.importLlaves.texto = 'ES NECESARIO GENERAR LLAVE EN STERLING (USER IDENTITY KEY):';
    config.alerta2.exportLlaves.texto = 'PARA EXPORTAR LA LLAVE PUBLICA LA CUAL SE LE DEBE ENTREGAR AL USUARIO:';
  } else {
    config.alerta2.importLlaves.texto = 'NO SE REQUIERE GENERAR LLAVE';
    config.alerta2.exportLlaves.texto = 'NO SE REQUIERE EXPORTAR LLAVE';
  }

  if (destino['UbicacionServidor'] == 'Externa') {
    config.alerta2.configHostkey.texto = 'HOST KEY DE EXTERNO, POR FAVOR CAMBIAR EN EL SSHKeyGrabberAdapter al -node1 & PS1- Y UNA VEZ FINALIZADO RESTABLECER AL -node1 & local-';
  } else {
    config.alerta2.configHostkey.texto = 'HOST KEY INTERNO';
  }

  
  for (const campos in config.alerta2) {

    estilos.asignarEstilo(
      worksheet,
      config.alerta2[campos].celda,
      config.alerta2[campos].texto,
      estilos.letraAlertasAccesos,
      estilos.fondoVerde,
      estilos.alineacionCentralBaja,
      estilos.border,
      true
    );
  }

  return worksheet;
};

estructura.valoresUserIdentityKeyCreate = (worksheet, destino) => {

  if (destino['metodoAutenticacion'] == 'Llaves') {
    config.valUserIdentityKeyCreate.action.texto = 'Create';
    config.valUserIdentityKeyCreate.keyName.texto = 'UIK_' + destino['codigoMac'] + '_' + destino['usuarioCnx'];
    config.valUserIdentityKeyCreate.keyType.texto = 'ssh-rsa';
    config.valUserIdentityKeyCreate.keyLenght.texto = '2048';
  } else {
    config.valUserIdentityKeyCreate.action.texto = 'N/A';
    config.valUserIdentityKeyCreate.keyName.texto = 'N/A';
    config.valUserIdentityKeyCreate.keyType.texto = 'N/A';
    config.valUserIdentityKeyCreate.keyLenght.texto = 'N/A';
  }



  for (const campos in config.valUserIdentityKeyCreate) {
    estilos.asignarEstilo(
      worksheet,
      config.valUserIdentityKeyCreate[campos].celda,
      config.valUserIdentityKeyCreate[campos].texto,
      estilos.letraValores,
      estilos.fondoBlanco,
      estilos.alineacionCentralBaja,
      estilos.border,
      true
    );
  }

  return worksheet;
};

estructura.valoresUserIdentityKeyExport = (worksheet, destino) => {

  if (destino['metodoAutenticacion'] == 'Llaves') {
    config.valUserIdentityKeyExport.action.texto = 'Search';
    config.valUserIdentityKeyExport.byKeyName.texto = 'UIK_' + destino['codigoMac'] + '_' + destino['usuarioCnx'];
    config.valUserIdentityKeyExport.sshUserIdentityKey.texto = 'check out';
    config.valUserIdentityKeyExport.selectFormat.texto = 'Open SSH';
  } else {
    config.valUserIdentityKeyExport.action.texto = 'N/A';
    config.valUserIdentityKeyExport.byKeyName.texto = 'N/A';
    config.valUserIdentityKeyExport.sshUserIdentityKey.texto = 'N/A';
    config.valUserIdentityKeyExport.selectFormat.texto = 'N/A';
  }


  
  for (const campos in config.valUserIdentityKeyExport) {
    
    estilos.asignarEstilo(
      worksheet,
      config.valUserIdentityKeyExport[campos].celda,
      config.valUserIdentityKeyExport[campos].texto,
      estilos.letraValores,
      estilos.fondoBlanco,
      estilos.alineacionCentralBaja,
      estilos.border,
      true
    );
  }

  return worksheet;
};

estructura.valoresHostkey = (worksheet, destino) => {

  let servidor='';
  let hostKey = '';

  config.valHostKey.action.texto = 'Create';

  servidor = destino['Servidor'];

  if (destino['tipoSvr'] == 'DNS') {
    servidor = servidor.toUpperCase().substring(0, servidor.indexOf('.'))
  }
  hostKey = servidor + '_' + destino['puerto'];

  config.valHostKey.keyName.texto = hostKey;
  config.valHostKey.remoteHost.texto = destino['Servidor'];
  config.valHostKey.remotePort.texto = destino['puerto'];

  for (const campos in config.valHostKey) {
    
    estilos.asignarEstilo(
      worksheet,
      config.valHostKey[campos].celda,
      config.valHostKey[campos].texto,
      estilos.letraValores,
      estilos.fondoBlanco,
      estilos.alineacionCentralBaja,
      estilos.border,
      true
    );
  }

  return worksheet;
};

estructura.valoresPerfilSsh= (worksheet, destino) => {

  let servidor='';
  let perfil='';
  config.valPerfil.action.texto = 'Create';  

  servidor = destino['Servidor'];

  if (destino["UbicacionServidor"] == 'Interna') {    
    perfil = 'L_';
  } else {  
    perfil = 'E_';
  }

  if (destino['tipoSvr'] == 'DNS') {
    servidor = servidor.toUpperCase().substring(0, servidor.indexOf('.'))
  }
  perfil += servidor + '_' + destino['usuarioCnx'] + '_' + destino['usuarioConexionDestino'];

  config.valPerfil.profileName.texto = perfil;
  config.valPerfil.remoteHost.texto = destino['Servidor'];
  config.valPerfil.remotePort.texto = destino['puerto'];
  config.valPerfil.knownHostKey.texto = config.valHostKey.keyName.texto;
  config.valPerfil.remoteUser.texto = destino['usuarioConexionDestino'];

  if (destino['metodoAutenticacion'] == 'Llaves') {
    config.valPerfil.preferredAutType.texto = 'Public Key';  
    config.valPerfil.sshPassword.texto='N/A';
    config.valPerfil.userIdentityKey.texto=config.valUserIdentityKeyExport.byKeyName.texto;
  } else {
    config.valPerfil.preferredAutType.texto = 'Password';
    config.valPerfil.sshPassword.texto='-contraseña de la boveda-';
    config.valPerfil.userIdentityKey.texto = 'N/A';
  }
  
  config.valPerfil.directory.texto = destino['rutaEntrega'];  

  for (const campos in config.valPerfil) {
    
    estilos.asignarEstilo(
      worksheet,
      config.valPerfil[campos].celda,
      config.valPerfil[campos].texto,
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
