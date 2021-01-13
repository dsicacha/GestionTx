const valores = {};

valores.CeldasAPintar={
  columna1:{celda:"A1:A55"},
  columna2:{celda:"F1:F55"},
  fila1:{celda:"B4:E4"},
  fila2:{celda:"B6:E6"},
  fila3:{celda:"B17:E17"},
  fila4:{celda:"B27:E27"},
  fila5:{celda:"B39:E39"},
  fila6:{celda:"B43:E43"},
  fila7:{celda:"B55:E55"},

}

valores.titComputo = {
  computo: { celda: "B1:E3", texto: "COMPUTO" }
};

valores.tituloComponentes = {
  community: { celda: "B7:E7", texto: "COMMUNITY" },
  partnerProducerA: { celda: "B18:E18", texto: "PARTNER PRODUCER" },
  partnerConsumerS: { celda: "B28:E28", texto: "PARTNER CONSUMER" },
  routingChannel: { celda: "B40:E40", texto: "ROUTING CHANNEL" },
  accounts: { celda: "B44:E44", texto: "ACCOUNTS" },
};

valores.alerta = {
  camposNoRelacionados: {
    celda: "B5:E5",
    texto: "LOS CAMPOS NO RELACIONADOS AQUÍ SE DEJAN POR DEFECTO",
  },
  communityDouble: {
    celda: "B8:E8",
    texto:
      "**Si aparece varias veces la misma comunidad ignorarlo y crear solo una**",
  },
};

valores.titComunidad = {
  action: { celda: "B9", texto: "Action" },
  name: { celda: "C9", texto: "Name" },
  protocolo: { celda: "D9:E9", texto: "Make Protocols Available to Partners" },
  Vprotocolo: { celda: "B11:C11", texto: "Select from Available" },
  notification: {
    celda: "D11:E11",
    texto:
      "Should member partners receive notifications that they are subscribed to?",
  },
  action2: { celda: "B13", texto: "Action" },
  name2: { celda: "C13", texto: "Name" },
  protocolo2: {
    celda: "D13:E13",
    texto: "Make Protocols Available to Partners",
  },
  Vprotocolo2: { celda: "B15:C15", texto: "Select from Available" },
  notification2: {
    celda: "D15:E15",
    texto:
      "Should member partners receive notifications that they are subscribed to?",
  },
};

valores.titPartnerPA = {
  action: { celda: "B19", texto: "Action" },
  community: { celda: "C19", texto: "Community" },
  partnerName: { celda: "D19", texto: "Partner Name" },
  telephone: { celda: "E19", texto: "Telephone" },
  email: { celda: "B21", texto: "Email" },
  autType: { celda: "C21", texto: "Authentication Type" },
  userName: { celda: "D21", texto: "User Name" },
  password: { celda: "E21", texto: "Password" },
  passwordPolicy: { celda: "B23", texto: "Password Policy" },
  autHost: { celda: "C23", texto: "Authentication Host" },
  givenName: { celda: "D23", texto: "Given Name" },
  surName: { celda: "E23", texto: "Surname" },
  partnerRole: { celda: "B25", texto: "Partner Role" },
  sftpOScp: {
    celda: "C25",
    texto:
      "Will use either SSH/SFTP or SSH/SCP protocol to initiate connections?",
  },
  keyUseraut: {
    celda: "D25",
    texto: "Will use an Authorized User Key to authenticate?",
  },
  keyName: { celda: "E25", texto: "Key Name" },
};

valores.titPartnerCS = {
  action: { celda: "B29", texto: "Action" },
  community: { celda: "C29", texto: "Community" },
  partnerName: { celda: "D29", texto: "Partner Name" },
  telephone: { celda: "E29", texto: "Telephone" },
  email: { celda: "B31", texto: "Email" },
  autType: { celda: "C31", texto: "Authentication Type" },
  userName: { celda: "D31", texto: "User Name" },
  password: { celda: "E31", texto: "Password" },
  passwordPolicy: { celda: "B33", texto: "Password Policy" },
  autHost: { celda: "C33", texto: "Authentication Host" },
  givenName: { celda: "D33", texto: "Given Name" },
  surName: { celda: "E33", texto: "Surname" },
  partnerRole: { celda: "B35", texto: "Partner Role" },
  sftpOScp: {
    celda: "C35",
    texto:
      "Will use either SSH/SFTP or SSH/SCP protocol to initiate connections?",
  },
  protocol: { celda: "D35", texto: "Protocol" },
  perfilSsh: { celda: "E35", texto: "Perfil SSH" },
  TipoTransferencia: { celda: "B37", texto: "Tipo de Transferencia" },
  directorio: { celda: "C37", texto: "Directorio" },
};

valores.titChannel = {
  action: { celda: "B41", texto: "Action" },
  template: { celda: "C41", texto: "Routing Channel Template" },
  producer: { celda: "D41", texto: "Producer" },
  consumer: { celda: "E41", texto: "Consumer" },
};

valores.titAccounts = {
  action: { celda: "B45", texto: "Action" },
  autType: { celda: "C45", texto: "Authentication Type" },
  userId: { celda: "D45", texto: "User Id" },
  autHost: { celda: "E45", texto: "Authentication Host" },
  groups: { celda: "B47:C47", texto: "Groups" },
  permissions: { celda: "D47:E47:", texto: "Permissions" },
  givenName: { celda: "B53", texto: "Given Name" },
  Surname: { celda: "C53", texto: "Surname" },
  email: { celda: "D53", texto: "Email" },
  identity: { celda: "E53", texto: "Identity" },
};

valores.valCommunity = {
  action: { celda: "B10", texto: "Create" },
  name: { celda: "C10", texto: "" },
  protocolo: {celda: "D10:E10",texto: "Partner Listens for Protocol Connections",},
  Vprotocolo: {celda: "B12:C12",texto: "BANCOLOMBIA SSH/SFTP ; BANCOLOMBIA:CONNECT-DIRECT ",},
  notification: { celda: "D12:E12", texto: "No" },

  action2: { celda: "B14", texto: "Create" },
  name2: { celda: "C14", texto: "" },
  protocolo2: {celda: "D14:E14",texto: "Partner Listens for Protocol Connections",},
  Vprotocolo2: {celda: "B16:C16",texto: "BANCOLOMBIA SSH/SFTP ; BANCOLOMBIA:CONNECT-DIRECT ",},
  notification2: {celda: "D16:E16",texto: "No",},
};

valores.valPartnerPA = {
  action: { celda: "B20", texto: "" },
  community: { celda: "C20", texto: "" },
  partnerName: { celda: "D20", texto: "" },
  telephone: { celda: "E20", texto: "" },
  email: { celda: "B22", texto: "" },
  autType: { celda: "C22", texto: "External" },
  userName: { celda: "D22", texto: "" },
  password: { celda: "E22", texto: "password" },
  passwordPolicy: { celda: "B24", texto: "" },
  autHost: { celda: "C24", texto: "" },
  givenName: { celda: "D24", texto: "" },
  surName: { celda: "E24", texto: "" },
  partnerRole: { celda: "B26", texto: "Producer of data. Consumer of dara - partner will iniciate the connection to consume data" },
  sftpOScp: {
    celda: "C26",
    texto:
      "",
  },
  keyUseraut: {
    celda: "D26",
    texto: "",
  },
  keyName: { celda: "E26", texto: "" },
};

valores.valPartnerCS = {
  action: { celda: "B30", texto: "" },
  community: { celda: "C30", texto: "" },
  partnerName: { celda: "D30", texto: "" },
  telephone: { celda: "E30", texto: "" },
  email: { celda: "B32", texto: "" },
  autType: { celda: "C32", texto: "External" },
  userName: { celda: "D32", texto: "" },
  password: { celda: "E32", texto: "password" },
  passwordPolicy: { celda: "B34", texto: "" },
  autHost: { celda: "C34", texto: "" },
  givenName: { celda: "D34", texto: "" },
  surName: { celda: "E34", texto: "" },
  partnerRole: { celda: "B36", texto: "Producer of data. Consumer of data - partner will listen for a connection to consume data" },
  sftpOScp: {
    celda: "C36",
    texto:
      "No",
  },
  protocol: { celda: "D36", texto: "" },
  perfilSsh: { celda: "E36", texto: "" },
  TipoTransferencia: { celda: "B38", texto: "" },
  directorio: { celda: "C38", texto: "" },
};

valores.valChannel = {
  action: { celda: "B42", texto: "" },
  template: { celda: "C42", texto: "" },
  producer: { celda: "D42", texto: "" },
  consumer: { celda: "E42", texto: "" },
};

valores.valAccounts = {
  action: { celda: "B46", texto: "" },
  autType: { celda: "C46", texto: "External" },
  userId: { celda: "D46", texto: "" },
  autHost: { celda: "E46", texto: "" },
  groups: { celda: "B48:C52", texto: "" },
  permissions01: { celda: "D48:E48:", texto: "" },
  permissions02: { celda: "D49:E49:", texto: "" },
  permissions03: { celda: "D50:E50:", texto: "" },
  permissions04: { celda: "D51:E51:", texto: "" },
  permissions05: { celda: "D52:E52:", texto: "" },
  givenName: { celda: "B54", texto: "" },
  surName: { celda: "C54", texto: "" },
  email: { celda: "D54", texto: "" },
  identity: { celda: "E54", texto: "" },
};

module.exports = valores;
