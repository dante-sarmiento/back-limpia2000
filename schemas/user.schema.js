var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    user: { type: String, required: true, maxlength: 40 },
    password: { type: String, required: true },
    email: {type: String, required: false}
});

module.exports = mongoose.model('User', UserSchema)