const valores = {};


valores.CeldasAPintar={
    columna1:{celda:"A1:A29"},
    columna2:{celda:"F1:F29"},
    fila1:{celda:"B4:E4"},
    fila2:{celda:"B6:E6"},
    fila3:{celda:"B11:E11"},
    fila4:{celda:"B16:E16"},
    fila5:{celda:"B21:E21"},
    fila6:{celda:"B29:E29"}, 
  }

valores.titAccesos={
    accesos:{ celda: "B1:E3", texto: "ACCESO PLATAFORMAS" }
}

valores.alerta = {
    camposNoRelacionados: {celda: "B5:E5",texto: "LOS CAMPOS NO RELACIONADOS AQUÍ SE DEJAN POR DEFECTO"},    
}

valores.alerta2 = {
    importLlaves:{celda:"B7:E7",texto: ""},
    exportLlaves:{celda:"B12:E12", texto:""},
    configHostkey:{celda:"B17:E17",texto:""}
}

valores.tituloComponentes={
    userKeyCreate:{celda:"B8:E8",texto:"ACCESO USER IDENTITY KEY - CREATE"},
    userKeyExport:{celda:"B13:E13",texto:"ACCESO USER IDENTITY KEY - EXPORT"},
    hostKey:{celda:"B18:E18",texto:"KNOW HOST KEY"},
    perfil:{celda:"B22:E22",texto:"SSH PROFILE"}
}

valores.titUserIdentityKeyCreate={
    action:{celda:"B9",texto:"Action"},
    keyName:{celda:"C9",texto:"Key Name"},
    keyType:{celda:"D9",texto:"Key Type"},
    keyLenght:{celda:"E9",texto:"Key Lenght"},
}

valores.valUserIdentityKeyCreate={
    action:{celda:"B10",texto:""},
    keyName:{celda:"C10",texto:""},
    keyType:{celda:"D10",texto:""},
    keyLenght:{celda:"E10",texto:""},
}


valores.titUserIdentityKeyExport={
    action:{celda:"B14",texto:"Action"},
    byKeyName:{celda:"C14",texto:"By Key Name"},
    sshUserIdentityKey:{celda:"D14",texto:"SSH User Identity Key"},
    selectFormat:{celda:"E14",texto:"Select the check out format"}
}

valores.valUserIdentityKeyExport={
    action:{celda:"B15",texto:""},
    byKeyName:{celda:"C15",texto:""},
    sshUserIdentityKey:{celda:"D15",texto:""},
    selectFormat:{celda:"E15",texto:""}
}

valores.titHostKey={
    action:{celda:"B19",texto:"Action"},
    keyName:{celda:"C19",texto:"Key Name"},
    remoteHost:{celda:"D19",texto:"Remote Host or IP Address"},
    remotePort:{celda:"E19",texto:"Remote Port"}
}

valores.valHostKey={
    action:{celda:"B20",texto:""},
    keyName:{celda:"C20",texto:""},
    remoteHost:{celda:"D20",texto:""},
    remotePort:{celda:"E20",texto:""}
}

valores.titPerfil={
    action:{celda:"B23",texto:"Action"},
    profileName:{celda:"C23",texto:"Profile name"},
    remoteHost:{celda:"D23",texto:"Remote Host"},
    remotePort:{celda:"E23",texto:"Remote Port"},
    knownHostKey:{celda:"B25",texto:"Known Host Key"},
    remoteUser:{celda:"C25",texto:"Remote User"},
    preferredAutType:{celda:"D25",texto:"Preferred Authentication Type"},
    sshPassword:{celda:"E25",texto:"SSH Password"},
    userIdentityKey:{celda:"B27:C27",texto:"User Identity Key"},
    directory:{celda:"D27:E27",texto:"Directory"}
}

valores.valPerfil={
    action:{celda:"B24",texto:""},
    profileName:{celda:"C24",texto:""},
    remoteHost:{celda:"D24",texto:""},
    remotePort:{celda:"E24",texto:""},
    knownHostKey:{celda:"B26",texto:""},
    remoteUser:{celda:"C26",texto:""},
    preferredAutType:{celda:"D26",texto:""},
    sshPassword:{celda:"E26",texto:""},
    userIdentityKey:{celda:"B28:C28",texto:""},
    directory:{celda:"D28:E28",texto:""}
}

module.exports=valores;