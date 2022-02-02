
const  mongoose  = require('mongoose');
const emailsSchema = mongoose.Schema({
    asunto: {type: String, required: true},
    nombre: {type: String, required: true}, 
    apellido: {type: String, required: true},
    company: {type: String, required: false},
    website: {type: String, required: false},
    emisor: {type: String, required: true},
    telefono: {type: Number, required: false},
    mensaje: {type: String, required: true}
});

module.exports = mongoose.model('Emails', emailsSchema);
