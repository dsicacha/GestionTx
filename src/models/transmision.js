const {Schema, model} = require('mongoose');


const transmisionSchema = new Schema({
    usuario:{type:String,required:true},
    origen:{type: Schema.Types.ObjectId, ref: 'origen'},
    origen:{type: Schema.Types.ObjectId, ref: 'destino'}
},{
    timestamps:true,
    versionKey:false
})