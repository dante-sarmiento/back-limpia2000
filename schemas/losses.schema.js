var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
]

var LossesSchema = new Schema({
    name: { type: String, required: true, maxlength: 40 },
    price: {type: Number, required: true},
    months: {type: String, required: true, enum: months}
});

module.exports = mongoose.model('Losses', LossesSchema)