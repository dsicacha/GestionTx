const {Schema, model} = require('mongoose');


const transmisionSchema = new Schema({
    titulo:{type:String,required:true},
    descripcion:{type:String,required:true},
    usuario:{type:String,required:true},
    origen:{type: Schema.Types.ObjectId, ref: 'origen'},
    destino:{type: Schema.Types.ObjectId, ref: 'destino'}
},{
    timestamps:true,
    versionKey:false
})

module.exports = model('transmision',transmisionSchema);