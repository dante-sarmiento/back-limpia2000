var express = require("express")
var router = express.Router();
var monthsController = require('../controllers/months.controllers');


router.post('/month', monthsController.addMonth);

router.get('/months', monthsController.getMonths); 

router.get('/month', monthsController.getMonth);

router.delete('/month', monthsController.deleteMonth);

router.put('/month/:id', monthsController.updateMonth);

module.exports = router;