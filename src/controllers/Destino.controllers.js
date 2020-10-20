const destinoCtrl = {};


const destino =  require('../models/destino');


destinoCtrl.getDestinos = async (req, res) =>{
    const Destinos = await destino.find();
    res.json(Destinos);
};

destinoCtrl.createDestino = async (req, res) =>{
    const newDestino = new destino(req.body);
    await ewDestino.save();
    res.send({message:'Destino Created'});
};

destinoCtrl.getDestino = async (req, res) =>{
    const result = await destino.findById(req.params.id);
    res.send(result);
    
};
destinoCtrl.editDestino= async(req, res) =>{
    
    await destino.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json({status: 'Destino Update'});

};
destinoCtrl.deleteDestino = async (req, res) =>{
    await destino.findByIdAndDelete(req.params.id);
    res.json({status: 'Destino Deleted'});
};

module.exports = destinoCtrl;