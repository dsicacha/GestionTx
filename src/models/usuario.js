const {Schema, model} = require('mongoose');


const usuarioSchema = new Schema({
    usuario:{type:String,required:true},
},{
    timestamps:true,
    versionKey:false
})

module.exports = model('usuario',usuarioSchema);