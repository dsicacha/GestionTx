const usuarioCtrl = {};

const usuario = require('../models/usuario');

usuarioCtrl.getUsuarios = async (req, res) =>{
    const usuarios= await usuario.find();
    res.json(usuarios);
};


usuarioCtrl.getUsuario = async (req,res)=>{
    const result = await usuario.findById(req.params.id);
    res.send(result);
}

usuarioCtrl.createUsuario = async (req,res)=>{
    
    const newUsuario = new usuario(req.body);    
    const result = await newUsuario.save();
    res.send(result);
}



module.exports = usuarioCtrl;