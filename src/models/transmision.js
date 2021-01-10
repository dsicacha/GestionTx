const {Schema, model} = require('mongoose');


const transmisionSchema = new Schema({
    titulo:{type:String,required:true},
    descripcion:{type:String,required:true},
    usuario:{type:String,required:true},
    origen:{type: Schema.Types.ObjectId,required:true, ref: 'origen'},
    destino:{type: Schema.Types.ObjectId,required:true, ref: 'destino'},
    ambiente:{type:String,require:false}
},{
    timestamps:true,
    versionKey:false
})

module.exports = model('transmision',transmisionSchema);