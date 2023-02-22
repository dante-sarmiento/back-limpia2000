var express = require("express")
var router = express.Router();
var lossesController = require('../controllers/losses.controllers');


router.post('/loss', lossesController.addLoss);

router.get('/losses', lossesController.getLosses); 

router.get('/loss', lossesController.getLoss);

router.delete('/loss', lossesController.deleteLoss);

router.put('/loss/:id', lossesController.updateLoss);

module.exports = router;