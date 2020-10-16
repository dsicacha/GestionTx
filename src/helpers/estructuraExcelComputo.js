const excel = require("exceljs");
const estilos = require("./estilosExcel");
const estructura = {};

var titulosComunidad = {
  B9: "Action",
  C9: "Name",
  D9_E9: "Make Protocols Available to Partners",
  B11_C11: "Select from Available:",
  D11_E11:
    "Should member partners receive notifications that they are subscribed to?",
};

var titulosPartnerPA = {
  B19: "Action",
  C19: "Community",
  D19: "Partner Name",
  E19: "Telephone",
  B21: "Email",
  C21: "Authentication Type",
  D21: "User Name",
  E21: "Password",
  B23: "Password Policy",
  C23: "Authentication Host",
  D23: "Given Name",
  E23: "Surname",
  B25: "Partner Role",
  C25: "Will use either SSH/SFTP or SSH/SCP protocol to initiate connections?",
  D25: "Will use an Authorized User Key to authenticate?",
  E25: "Key Name",
};

var titulosPartnerCS = {
  B29: "Action",
  C29: "Community",
  D29: "Partner Name",
  E29: "Telephone",
  B31: "Email",
  C31: "Authentication Type",
  D31: "User Name",
  E31: "Password",
  B33: "Password Policy",
  C33: "Authentication Host",
  D33: "Given Name",
  E33: "Surname",
  B35: "Partner Role",
  C35: "Will use either SSH/SFTP or SSH/SCP protocol to initiate connections?",
  D35: "Protocol",
  E35: "Perfil SSH",
  B37: "Tipo de Transferencia",
  C37: "Directorio",
};

var titulosChannel = {
  B41: "Action",
  C41: "Routing Channel Template",
  D41: "Producer",
  E41: "Consumer",
};

var titulosAccounts = {
  B45: "Action",
  C45: "Authentication Type",
  D45: "User Id",
  E45: "Authentication Host",
  B47_C47: "Groups",
  D47_E47: "Permissions",
  B49: "Given Name",
  C49: "Surname",
  D49:"Email",
  E49:"Identity"
}

const celdaTitComputo = "B1:E3";
const celdaAlertCampos = "B5:E5";
const celdaTituloComunnity = "B7:E7";
const celdaAlertComDoble = "B8:E8";
const celdaTituloPartnerProducerA = "B18:E18";
const celdaTituloPartnerConsumerS = "B28:E28";
const celdaTituloChannel = "B40:E40";
const celdaTituloAccounts = "B44:E44";

var titulo = "";

estructura.encabezadoComputo = (worksheet) => {
  /*Asignar ancho de columnas segun constante definida */
  worksheet.columns = estilos.anchoColumnas;

  /*Estilo para encabezado pestaña Computo*/
  titulo = "COMPUTO";
  asignarEstilo(
    worksheet,
    celdaTitComputo,
    titulo,
    estilos.letraTitPrincipal,
    estilos.fondoAzul,
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

estructura.community = (worksheet, cantidadCommunity) => {
  /*Asignar formato para titulo de Comunidad */
  titulo = "COMMUNITY";
  asignarEstilo(
    worksheet,
    celdaTituloComunnity,
    titulo,
    estilos.letraTitulo,
    estilos.fondoCeldaTitulo,
    estilos.alineacionCentralBaja,
    estilos.border,
    true
  );

  /*Asignar formato para alerta comunidad */
  titulo =
    "**Si aparece varias veces la misma comunidad ignorarlo y crear solo una**";
  asignarEstilo(
    worksheet,
    celdaAlertComDoble,
    titulo,
    estilos.letraAlertaCommunity,
    estilos.fondoAzul,
    estilos.alineacionCentralBaja,
    estilos.border,
    true
  );

  var regex = /(\d+)/g;

  for (const celda in titulosComunidad) {
    var ind = celda.indexOf("_");
    var idCelda = "";
    var idCelda2 = "";
    var refCelda = "";

    if (ind > 0) {
      idCelda = celda.replace("_", ":");
      worksheet.mergeCells(idCelda);
      /*idCelda = idCelda.substring(0, ind);*/
    } else {
      idCelda = celda;
    }

    asignarEstilo(
      worksheet,
      idCelda,
      titulosComunidad[celda],
      estilos.letraTituloCeldas,
      estilos.fondoCeldas,
      estilos.alineacionCentralBaja,
      estilos.border,
      false
    );

    if (cantidadCommunity > 1) {
      if (ind > 0) {
        idCelda = celda.split("_");
        for (let i = 0; i < idCelda.length; i++) {
          refCelda = idCelda[i].match(regex);
          refCelda = refCelda.map(function (item) {
            return parseInt(item, 10);
          });
          if (i > 0) {
            idCelda2 += ":" + idCelda[i].substring(0, 1) + (refCelda[0] + 4);
          } else {
            idCelda2 += idCelda[i].substring(0, 1) + (refCelda[0] + 4);
          }
        }

        ind = idCelda2.indexOf(":");

        worksheet.mergeCells(idCelda2);

        /*idCelda2 = idCelda2.substring(0, ind);*/
      } else {
        refCelda = celda.match(regex);
        refCelda = refCelda.map(function (item) {
          return parseInt(item, 10);
        });

        idCelda2 = celda.substring(0, 1) + (refCelda[0] + 4);
      }

      asignarEstilo(
        worksheet,
        idCelda2,
        titulosComunidad[celda],
        estilos.letraTituloCeldas,
        estilos.fondoCeldas,
        estilos.alineacionCentralBaja,
        estilos.border,
        false
      );
    }
  }

  return worksheet;
};

estructura.partnerProducerA = (worksheet) => {
  /*Asignar formato para titulo de Partner Producer */
  titulo = "PARTNER PRODUCER";
  asignarEstilo(
    worksheet,
    celdaTituloPartnerProducerA,
    titulo,
    estilos.letraTitulo,
    estilos.fondoCeldaTitulo,
    estilos.alineacionCentral,
    estilos.border,
    true
  );

  for (const celda in titulosPartnerPA) {
    var idCelda = "";
    idCelda = celda.replace("_", ":");

    asignarEstilo(
      worksheet,
      idCelda,
      titulosPartnerPA[celda],
      estilos.letraTituloCeldas,
      estilos.fondoCeldas,
      estilos.alineacionCentralBaja,
      estilos.border,
      false
    );
  }

  return worksheet;
};

estructura.partnerConsumerS = (worksheet) => {
  /*Asignar formato para titulo de Partner Producer */
  titulo = "PARTNER CONSUMER";
  asignarEstilo(
    worksheet,
    celdaTituloPartnerConsumerS,
    titulo,
    estilos.letraTitulo,
    estilos.fondoCeldaTitulo,
    estilos.alineacionCentral,
    estilos.border,
    true
  );

  for (const celda in titulosPartnerCS) {
    var idCelda = "";
    idCelda = celda.replace("_", ":");

    asignarEstilo(
      worksheet,
      idCelda,
      titulosPartnerCS[celda],
      estilos.letraTituloCeldas,
      estilos.fondoCeldas,
      estilos.alineacionCentralBaja,
      estilos.border,
      false
    );
  }

  return worksheet;
};

estructura.RoutingChannel = (worksheet) => {
  /*Asignar formato para titulo de Partner Producer */
  titulo = "ROUTING CHANNEL";
  asignarEstilo(
    worksheet,
    celdaTituloChannel,
    titulo,
    estilos.letraTitulo,
    estilos.fondoCeldaTitulo,
    estilos.alineacionCentral,
    estilos.border,
    true
  );

  for (const celda in titulosChannel) {
    var idCelda = "";
    idCelda = celda.replace("_", ":");

    asignarEstilo(
      worksheet,
      idCelda,
      titulosChannel[celda],
      estilos.letraTituloCeldas,
      estilos.fondoCeldas,
      estilos.alineacionCentralBaja,
      estilos.border,
      false
    );
  }

  return worksheet;
};

estructura.Accounts = (worksheet) => {
  /*Asignar formato para titulo de Partner Producer */
  titulo = "ACCOUNTS";
  asignarEstilo(
    worksheet,
    celdaTituloAccounts,
    titulo,
    estilos.letraTitulo,
    estilos.fondoCeldaTitulo,
    estilos.alineacionCentral,
    estilos.border,
    true
  );

  for (const celda in titulosAccounts) {
    var idCelda = "";
    idCelda = celda.replace("_", ":");

    asignarEstilo(
      worksheet,
      idCelda,
      titulosAccounts[celda],
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
