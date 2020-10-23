const transmisionCtrl = {};

const transmision = require('../models/transmision');

transmisionCtrl.getTransmisiones = async (req, res) =>{
    const transmisiones= await transmision.find();
    res.json(transmisiones);
};

transmisionCtrl.createTransmision = async (req, res) =>{
    const newTransmision = new transmision(req.body);
    await newTransmision.save();
    res.send({message:'Transmision Created'});
}


module.exports = transmisionCtrl;