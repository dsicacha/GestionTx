const valores = {};

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
  givenName: { celda: "B49", texto: "Given Name" },
  Surname: { celda: "C49", texto: "Surname" },
  email: { celda: "D49", texto: "Email" },
  identity: { celda: "E49", texto: "Identity" },
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

module.exports = valores;