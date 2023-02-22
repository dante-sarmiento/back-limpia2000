var express = require("express")
var router = express.Router();
var clientsController = require('../controllers/clients.controllers');


router.post('/client', clientsController.addClient);

router.get('/clients', clientsController.getClients); 

router.get('/client', clientsController.getClient);

router.delete('/client', clientsController.deleteClient);

router.put('/client/:id', clientsController.updateClient);

module.exports = router;