var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var groups = [
    1,
    2
]

var ClientsSchema = new Schema({
    name: { type: String, required: true, maxlength: 40 },
    address: { type: String, required: true },
    group: {type: Number, enum: groups, required: true},
    price: {type: Number, required: true},
    debe: {type: Boolean, required: true},
    conFumigacion: {type: Boolean, required: true}
});

module.exports = mongoose.model('Clients', ClientsSchema)