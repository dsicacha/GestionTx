const valores = {};

valores.titAccesos={
    accesos:{ celda: "B1:E3", texto: "ACCESO PLATAFORMAS" }
}

valores.alerta = {
    camposNoRelacionados: {celda: "B5:E5",texto: "LOS CAMPOS NO RELACIONADOS AQUÍ SE DEJAN POR DEFECTO"}
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

valores.titUserIdentityKeyExport={
    action:{celda:"B14",texto:"Action"},
    byKeyName:{celda:"C14",texto:"By Key Name"},
    sshUserIdentityKey:{celda:"D14",texto:"SSH User Identity Key"},
    selectFormat:{celda:"E14",texto:"Select the check out format"}
}

valores.titHostKey={
    action:{celda:"B19",texto:"Action"},
    keyName:{celda:"C19",texto:"Key Name"},
    remoteHost:{celda:"D19",texto:"Remote Host or IP Address"},
    remotePort:{celda:"E19",texto:"Remote Port"}
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

module.exports=valores;