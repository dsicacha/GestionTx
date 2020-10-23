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


transmisionCtrl.getTransmision = async (req,res)=>{
    const result = await transmision.findById(req.params.id);
    res.send(result);
}

transmisionCtrl.editTransmision= async(req, res) =>{
    
    await transmision.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json({status: 'Transmision Update'});

};

transmisionCtrl.deleteTransmision = async (req, res) =>{
    await transmision.findByIdAndDelete(req.params.id);
    res.json({status: 'Transmision Deleted'});
};


module.exports = transmisionCtrl;