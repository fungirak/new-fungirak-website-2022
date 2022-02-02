
const  mongoose  = require('mongoose');
const comentarioSchema = mongoose.Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true}, 
    comentarioUsuario: {type: String, required: true},
},  { timestamps: true } );

module.exports = mongoose.model('Comentarios', comentarioSchema);
