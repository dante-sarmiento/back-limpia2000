const Months = require('../schemas/months.schema');



async function addMonth(req, res){
    try{
        if(!req.body.name ){ 
            return res.send('falta un campo obligatorio');
        }
        
        let newMonths = new Months(req.body);
        await newMonths.save()// Guardamos en la BD
        return res.send({monthsNuevo: newMonths})
    } catch(error){
        res.status(400).send('error', error)
    }
}

async function getMonths(req, res){
    const monthsDB = await Months.find()
    res.send({ months: monthsDB })
}

async function getMonth(req, res){
    //id que recibimos desde el endpoint
    const monthId = req.query.month_id;
    //buscamos ese Id en nuestra BD
    const month = await Months.findById(monthId);
    console.log(month)
    // si no encontramos el usuario
    if(!month) return res.status(404).send ('no se encontro el usuario que busca');

    return res.status(200).send({ month: month })
}

async function deleteMonth(req, res){
    
    const month_deleted = req.query.id; /*query*/

    const month = await Months.findByIdAndDelete(month_deleted);
    console.log(month);
    
    res.send({ monthDeleted: month });
}

async function updateMonth(req, res) {
    const id = req.params.id; /*query*/
     console.log(req.params)
    const monthChangesToApply = req.body;
    
    const updatedMonth = await Months.findByIdAndUpdate(id, monthChangesToApply, { new: true });
    if(!updatedMonth) return res.status(404).send('No se encontro el monthe');
    
    return res.status(200).send(updatedMonth)
}


module.exports = {
    addMonth,
    getMonths,
    getMonth,
    deleteMonth,
    updateMonth
}