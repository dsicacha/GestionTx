const {Schema, model} = require('mongoose');


const transmisionSchema = new schema({
    usuario:{type:String,required:true},
    origen:{type: Schema.Types.ObjectId, ref: 'origen'},
    origen:{type: Schema.Types.ObjectId, ref: 'destino'}
},{
    timestamps:true,
    versionKey:false
})