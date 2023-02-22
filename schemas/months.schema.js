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

var MonthsSchema = new Schema({
    name: { type: String, required: true, enum: months},
    resume: {type: Array, required: false}
});

module.exports = mongoose.model('Months', MonthsSchema)