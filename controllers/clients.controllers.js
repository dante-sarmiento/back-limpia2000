const Client = require('../schemas/clients.schema');



async function addClient(req, res){
    try{
        if(!req.body.name || !req.body.address || !req.body.group || !req.body.price || !req.body.debe || !req.body.conFumigacion){ 
            return res.send('falta un campo obligatorio');
        }
        
        let newClient = new Client(req.body);
        await newClient.save()// Guardamos en la BD
        return res.send({clienteNuevo: newClient})
    } catch(error){
        res.status(400).send('error', error)
    }
}

async function getClients(req, res){
    const clientsDB = await Client.find()
    res.send({ clients: clientsDB })
}

async function getClient(req, res){
    //id que recibimos desde el endpoint
    const clientId = req.query.client_id;
    //buscamos ese Id en nuestra BD
    const client = await Client.findById(clientId);
    console.log(client)
    // si no encontramos el usuario
    if(!client) return res.status(404).send ('no se encontro el usuario que busca');

    return res.status(200).send({ client: client })
}

async function deleteClient(req, res){
    
    const client_deleted = req.query.id; /*query*/

    const client = await Client.findByIdAndDelete(client_deleted);
    console.log(client);
    
    res.send({ clientDeleted: client });
}

async function updateClient(req, res) {
    const id = req.params.id; /*query*/
     console.log(req.params)
    const clientChangesToApply = req.body;
    
    const updatedClient = await Client.findByIdAndUpdate(id, clientChangesToApply, { new: true });
    if(!updatedClient) return res.status(404).send('No se encontro el cliente');
    
    return res.status(200).send(updatedClient)
}


module.exports = {
    addClient,
    getClients,
    getClient,
    deleteClient,
    updateClient
}