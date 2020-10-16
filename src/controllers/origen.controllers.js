const origenCtrl = {};

const Origen = require('../models/origen');

origenCtrl.getOrigenes = async (req, res) =>{
    const Origenes = await Origen.find();
    res.json(Origenes);
};
origenCtrl.createOrigen = async (req, res) =>{
    const newOrigen = new Origen(req.body);
    await newOrigen.save();
    res.send({message:'Origen Created'});
};
origenCtrl.getOrigen = async (req, res) =>{
    const result = await Origen.findById(req.params.id);
    res.send(result);
    
};
origenCtrl.editOrigen= async(req, res) =>{
    
    await Origen.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json({status: 'Origen Update'});

};
origenCtrl.deleteOrigen = async (req, res) =>{
    await Origen.findByIdAndDelete(req.params.id);
    res.json({status: 'Origen Deleted'});
};

module.exports = origenCtrl;