const express = require('express');
const router = express.Router();
const comentarioSchema = require('../models/comentario');

router.post('/comentarios', (req, res) => {
    const comentario = comentarioSchema(req.body);
    comentario
     .save()
     .then((data) => res.json(data))
     .catch((error) => res.json({ message: error }));
});

// Obtener todos los registros. 
router.get('/comentarios', (req, res) => {
    comentarioSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))
});


/* ALGUNAS FUNCIONALIDADES PARA AGREGAR PROXIMAMENTE 

// get one comentario.
router.get('/comentarios/:id', (req, res) => {
    const { id } = req.params;
    comentarioSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))
});

// update a comentario.
router.put('/comentarios/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, comentarioUsuario, created_at } = req.body;
    comentarioSchema
        .updateOne({ _id: id }, { $set: { nombre, apellido, comentarioUsuario, created_at } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))
});

// Borrar Todos
router.delete('/comentarios', (req, res) => {
    
    comentarioSchema
        .remove()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))
});

*/

module.exports = router;