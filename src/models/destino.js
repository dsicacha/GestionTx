const {Schema, model} = require('mongoose');

const destinoSchema = new Schema({
    nombre:{type:String,required:true},
    telefono:{type:String,required:true},
    email:{type:String,required:true},

    filial:{type:Number,required:true},
    dominio:{type:Number,required:true},
    subdominio:{type:Number,required:true},
    proceso:{type:Number,required:true},
    codigoMac:{type:Number,required:true},

    ambiente:{type:Number,required:true},
    protocoloTransmision:{type:Number,required:true},
    puerto:{type:Number,required:true},
    Servidor:{type:Number,required:true},
    usuarioConexionDestino:{type:Number,required:true},
    metodoAutenticacion:{type:Number,required:true},
    ubicacionServidor:{type:Number,required:true},
    rutaEntrega:{type:Number,required:true}
    
},{
    timestamps:true,
    versionKey:false
})


module.exports = model('employee',employeeSchema);