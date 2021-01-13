const excel = require("exceljs");
const estilos ={};

estilos.asignarEstilo=(
  worksheet,
  idCelda,
  value,
  font,
  fill,
  alignment,
  border,
  merge
)=>{
  if (merge) {
    worksheet.mergeCells(idCelda);
  }
  worksheet.getCell(idCelda).value = value;
  worksheet.getCell(idCelda).font = font;
  worksheet.getCell(idCelda).fill = fill;
  worksheet.getCell(idCelda).alignment = alignment;
  worksheet.getCell(idCelda).border = border;
}

estilos.asignarBorder=(worksheet,celda,border)=>{
  worksheet.getCell(celda).border = border
}

estilos.asignarFill=(worksheet,celda,fill,merge)=>{

  if (merge) {
    worksheet.mergeCells(celda);
  }

  worksheet.getCell(celda).fill = fill;
}

estilos.letraTitPrincipal = {
    name: "Arial Black",
    color: { argb: "FFFFFF" },
    family: 2,
    size: 20,
    italic: false,
  };

  estilos.letraAlertasAccesos = {
    name: "Arial",
    color: { argb: "FFFFFF" },
    family: 2,
    size: 10,
    italic: false,
  };


  estilos.letraAlerta = {
    name: "Arial Black",
    color: { argb: "000000" },
    family: 2,
    size: 11,
    italic: false,
  };
  
  estilos.letraTitulo = {
    name: "Arial Black",
    color: { argb: "FFFFFF" },
    family: 2,
    size: 12,
    italic: false,
  };
  
  estilos.letraAlertaCommunity = {
    name: "Arial",
    color: { argb: "FFFFFF" },
    family: 2,
    size: 12,
    italic: false,
  };
  
  estilos.letraTituloCeldas = {
    name: "Arial Black",
    color: { argb: "000000" },
    family: 2,
    size: 10,
    italic: false,
  };

  estilos.letraValores = {
    name: "Calibri",
    color: { argb: "000000" },
    family: 2,
    size: 11,
    italic: false,
  };
  
  estilos.fondoCeldas = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "C9C9C9" },
    bgColor: { argb: "C9C9C9" },
  };
  
  estilos.fondoAzul = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "305496" },
    bgColor: { argb: "305496" },
  };

  estilos.fondoAzulTotal = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "B4C6E7" },
    bgColor: { argb: "B4C6E7" },
  };

  estilos.fondoVerdeTotal = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "C6E0B4" },
    bgColor: { argb: "C6E0B4" },
  };


  estilos.fondoBlanco = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FFFFFF" },
    bgColor: { argb: "FFFFFF" },
  };
  estilos.fondoVerde = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "548235" },
    bgColor: { argb: "548235" },
  };
  
  estilos.fondoCeldaAlerta = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FF0000" },
    bgColor: { argb: "FF0000" },
  };
  
  estilos.fondoCeldaTitulo = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "000000" },
    bgColor: { argb: "000000" },
  };
  
  estilos.alineacionCentral = { vertical: "middle", horizontal: "center",wrapText: true };
  estilos.alineacionCentralBaja = { vertical: "bottom", horizontal: "center",wrapText: true };
  
  
  estilos.border = {
    top: { style: "thin" },
    left: { style: "thin" },
    bottom: { style: "thin" },
    right: { style: "thin" },
  };


  estilos.borderNullBtn = {
    top: { style: "thin" },
    left: { style: "thin" },
    bottom: { style: "" },
    right: { style: "thin" },
  };
  
  estilos.borderNullTop = {
    top: { style: "" },
    left: { style: "thin" },
    bottom: { style: "thin" },
    right: { style: "thin" },
  };

  estilos.borderNullBtnTop = {
    top: { style: "" },
    left: { style: "thin" },
    bottom: { style: "" },
    right: { style: "thin" },
  };

  estilos.anchoColumnas = [
    { width: 10 },
    { width: 42 },
    { width: 48 },
    { width: 50 },
    { width: 37 },
  ];


module.exports=estilos;