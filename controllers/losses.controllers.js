const Losses = require('../schemas/losses.schema');



async function addLoss(req, res){
    try{
        if(!req.body.name || !req.body.price || !req.body.months ){ 
            return res.send('falta un campo obligatorio');
        }     
        let newLoss = new Losses(req.body);
        await newLoss.save()// Guardamos en la BD
        return res.send({LossNueva: newLoss})
    } catch(error){
        res.status(400).send('error', error)
    }
}

async function getLosses(req, res){
    const lossDB = await Losses.find()
    res.send({ loss: lossDB })
}

async function getLoss(req, res){
    //id que recibimos desde el endpoint
    const lossId = req.query.loss_id;
    //buscamos ese Id en nuestra BD
    const loss = await Losses.findById(lossId);
    // si no encontramos el usuario
    if(!loss) return res.status(404).send ('no se encontro el usuario que busca');

    return res.status(200).send({ loss: loss })
}

async function deleteLoss(req, res){
    const loss_deleted = req.query.loss_id; /*query*/

    const loss = await Losses.findByIdAndDelete(loss_deleted);
    
    res.send({ lossDeleted: loss });
}

async function updateLoss(req, res) {
    const id = req.params.id; /*query*/
     console.log(req.params)
    const LossChangesToApply = req.body;
    
    const updatedLoss = await Losses.findByIdAndUpdate(id, LossChangesToApply, { new: true });
    if(!updatedLoss) return res.status(404).send('No se encontro la perdida');
    
    return res.status(200).send(updatedLoss)
}


module.exports = {
    addLoss,
    getLosses,
    getLoss,
    deleteLoss,
    updateLoss
}