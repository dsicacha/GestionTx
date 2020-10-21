const {Schema, model} = require('mongoose');

const destinoSchema = new Schema({
    nombre:{type:String,required:true},
    telefono:{type:String,required:true},
    email:{type:String,required:true},
    usuarioRed:{type:String,required:true},

    filial:{type:String,required:true},
    dominio:{type:String,required:true},
    subdominio:{type:String,required:true},
    proceso:{type:String,required:true},
    codigoMac:{type:String,required:true},

    ambiente:{type:String,required:true},
    usuarioCnx:{type:String,required:true},


    protocoloTransmision:{type:String,required:true},
    puerto:{type:String,required:true},
    tipoSvr:{type:String,required:true},
    Servidor:{type:String,required:true},
    usuarioConexionDestino:{type:String,required:true},
    metodoAutenticacion:{type:String,required:true},
    ubicacionServidor:{type:String,required:true},
    rutaEntrega:{type:String,required:true}
    
},{
    timestamps:true,
    versionKey:false
})


module.exports = model('destino',destinoSchema);