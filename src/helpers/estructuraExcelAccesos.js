const excel = require("exceljs");
const estilos = require("./estilosExcel");
const estructura = {};

var titulosUserIdentityKey = {
  B9: "Action",
  C9: "Key Name",
  D9: "Key Type",
  E9: "Key Lenght",  
};

var titulosUserIdentityKey2 = {
  B14: "Action",
  C14: "By Key Name",
  D14: "SSH User Identity Key",
  E14: "Select the check out format",  
};

var titulosHostkey = {
  B19: "Action",
  C19: "Key Name",
  D19: "Remote Host or IP Address",
  E19: "Remote Port"  
};

var titulosPerfil = {
  B23: "Action",
  C23: "Profile name",
  D23: "Remote Host",
  E23: "Remote Port",
  B25: "Known Host Key",
  C25:"Remote User",
  D25:"Preferred Authentication Type",
  E25: "SSH Password",
  B27_C27:"User Identity Key",
  D27_E27:"Directory"

};


const celdaTitAccesos = "B1:E3";
const celdaAlertCampos = "B5:E5";
const celdaTitUserKeyCreate = "B8:E8";
const celdaTitUserKeyExport = "B13:E13";
const celdaTitHostkey = "B18:E18";
const celdaTitPerfil = "B22:E22";




var titulo = "";

estructura.encabezadoAccesos = (worksheet) => {
  /*Asignar ancho de columnas segun constante definida */
  worksheet.columns = estilos.anchoColumnas;

  /*Estilo para encabezado pestaña Accesos*/
  titulo = "ACCESO PLATAFORMAS";
  asignarEstilo(
    worksheet,
    celdaTitAccesos,
    titulo,
    estilos.letraTitPrincipal,
    estilos.fondoVerde,
    estilos.alineacionCentral,
    estilos.border,
    true
  );

  /*Estilo para alerta de que los campos no relacionados se dejan por defecto*/
  titulo = "LOS CAMPOS NO RELACIONADOS AQUÍ SE DEJAN POR DEFECTO";
  asignarEstilo(
    worksheet,
    celdaAlertCampos,
    titulo,
    estilos.letraAlerta,
    estilos.fondoCeldaAlerta,
    estilos.alineacionCentral,
    estilos.border,
    true
  );

  return worksheet;
};

estructura.userIdentityKeyCreate = (worksheet) => {


  /*Estilo para encabezado pestaña Accesos*/
  titulo = "ACCESO USER IDENTITY KEY - CREATE";
  asignarEstilo(
    worksheet,
    celdaTitUserKeyCreate,
    titulo,
    estilos.letraTitulo,
    estilos.fondoCeldaTitulo,
    estilos.alineacionCentral,
    estilos.border,
    true
  );

  for (const celda in titulosUserIdentityKey) {
    var idCelda = "";
    idCelda = celda.replace("_", ":");

    asignarEstilo(
      worksheet,
      idCelda,
      titulosUserIdentityKey[celda],
      estilos.letraTituloCeldas,
      estilos.fondoCeldas,
      estilos.alineacionCentralBaja,
      estilos.border,
      false
    );
  }

  return worksheet;
};

estructura.userIdentityKeyExport = (worksheet) => {

  /*Estilo para encabezado pestaña Accesos*/
  titulo = "ACCESO USER IDENTITY KEY - EXPORT";
  asignarEstilo(
    worksheet,
    celdaTitUserKeyExport,
    titulo,
    estilos.letraTitulo,
    estilos.fondoCeldaTitulo,
    estilos.alineacionCentral,
    estilos.border,
    true
  );

  for (const celda in titulosUserIdentityKey2) {
    var idCelda = "";
    idCelda = celda.replace("_", ":");

    asignarEstilo(
      worksheet,
      idCelda,
      titulosUserIdentityKey2[celda],
      estilos.letraTituloCeldas,
      estilos.fondoCeldas,
      estilos.alineacionCentralBaja,
      estilos.border,
      false
    );
  }

  return worksheet;
};

estructura.KnowHostKey = (worksheet) => {


  /*Estilo para encabezado pestaña Accesos*/
  titulo = "KNOW HOST KEY";
  asignarEstilo(
    worksheet,
    celdaTitHostkey,
    titulo,
    estilos.letraTitulo,
    estilos.fondoCeldaTitulo,
    estilos.alineacionCentral,
    estilos.border,
    true
  );

  for (const celda in titulosHostkey) {
    var idCelda = "";
    idCelda = celda.replace("_", ":");

    asignarEstilo(
      worksheet,
      idCelda,
      titulosHostkey[celda],
      estilos.letraTituloCeldas,
      estilos.fondoCeldas,
      estilos.alineacionCentralBaja,
      estilos.border,
      false
    );
  }

  return worksheet;
};

estructura.perfilSsh = (worksheet) => {

  /*Estilo para encabezado pestaña Accesos*/
  titulo = "SSH PROFILE";
  asignarEstilo(
    worksheet,
    celdaTitPerfil,
    titulo,
    estilos.letraTitulo,
    estilos.fondoCeldaTitulo,
    estilos.alineacionCentral,
    estilos.border,
    true
  );

  for (const celda in titulosPerfil) {
    var idCelda = "";
    idCelda = celda.replace("_", ":");

    asignarEstilo(
      worksheet,
      idCelda,
      titulosPerfil[celda],
      estilos.letraTituloCeldas,
      estilos.fondoCeldas,
      estilos.alineacionCentralBaja,
      estilos.border,
      true
    );
  }

  return worksheet;
};

function asignarEstilo(
  worksheet,
  idCelda,
  value,
  font,
  fill,
  alignment,
  border,
  merge
) {
  if (merge) {
    worksheet.mergeCells(idCelda);
  }
  worksheet.getCell(idCelda).value = value;
  worksheet.getCell(idCelda).font = font;
  worksheet.getCell(idCelda).fill = fill;
  worksheet.getCell(idCelda).alignment = alignment;
  worksheet.getCell(idCelda).border = border;
}

module.exports = estructura;
