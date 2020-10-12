const excel = require("exceljs");
const estilo = {};

estilo.encabezadoComputo=(worksheet)=>{
    worksheet.mergeCells('B1:E3');
  worksheet.getCell('B1').value = 'COMPUTO';
  
  
  worksheet.getCell('B1').font = {
    name: 'Arial Black',
    color: { argb: 'FFFFFF' },
    family: 2,
    size: 20,
    italic: false
  };

  worksheet.getCell('B1').fill = {
    type: 'pattern',
    pattern:'solid',
    fgColor:{argb:'305496'},
    bgColor:{argb:'305496'}
  };
  worksheet.getCell('B1').alignment = { vertical: 'middle', horizontal: 'center' };

  const colB = worksheet.getColumn('B');
  const colC = worksheet.getColumn('C');
  const colD = worksheet.getColumn('D');
  const colE = worksheet.getColumn('E');

  colB.width=41;
  colC.width=41;
  colD.width=41;
  colE.width=41;

  worksheet.mergeCells('B5:E5');
  worksheet.getCell('B5').value = 'LOS CAMPOS NO RELACIONADOS AQUÍ SE DEJAN POR DEFECTO';

  worksheet.getCell('B5').font = {
    name: 'Arial Black',
    color: { argb: '000000' },
    family: 2,
    size: 11,
    italic: false
  };

  worksheet.getCell('B5').fill = {
    type: 'pattern',
    pattern:'solid',
    fgColor:{argb:'FF0000'},
    bgColor:{argb:'FF0000'}
  };

  worksheet.getCell('B5').alignment = { vertical: 'middle', horizontal: 'center' };

  worksheet.getCell('B5').border = {
    top: {style:'thin'},
    left: {style:'thin'},
    bottom: {style:'thin'},
    right: {style:'thin'}
  };



  return worksheet;


}

module.exports = estilo;
