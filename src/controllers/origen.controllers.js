const origenCtrl = {};

const origen = require('../models/origen');

origenCtrl.getOrigenes = async (req, res) =>{
    const origenes = await origen.find();
    res.json(Origenes);
};
origenCtrl.createOrigen = async (req, res) =>{
    const newOrigen = new origen(req.body);
    await newOrigen.save();
    res.send({message:'Origen Created'});
    
};

origenCtrl.getOrigen = async (req, res) =>{
    const result = await origen.findById(req.params.id);
    res.send(result);
    
};
origenCtrl.editOrigen= async(req, res) =>{
    
    await origen.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json({status: 'Origen Update'});

};
origenCtrl.deleteOrigen = async (req, res) =>{
    await origen.findByIdAndDelete(req.params.id);
    res.json({status: 'Origen Deleted'});
};



module.exports = origenCtrl;