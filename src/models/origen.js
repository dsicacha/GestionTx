const {Schema, model} = require('mongoose');

const origenSchema = new Schema({
    nombre:{type:String,required:true},
    telefono:{type:Number,required:true},
    email:{type:String,required:true},
    filial:{type:String,required:true},
    dominio:{type:String,required:true},
    proceso:{type:String,required:true},
    codigoMac:{type:String,required:true},
    ambiente:{type:String,required:true},
    metodoAutenticacion:{type:String,required:true},
    usuarioBanco:{type:String,required:true},
    UbicacionServidor:{type:String,required:true},
},{
    timestamps:true,
    versionKey:false
})


module.exports = model('origen',origenSchema);