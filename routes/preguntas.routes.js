const express = require('express');
const {obtenerPreguntas, crearPregunta, modificarPregunta, eliminarPregunta } = require('../controllers/preguntas.controllers');
const router = express.Router();

// GET
router.get('/', obtenerPreguntas);

// POST
router.post('/', crearPregunta);

// PUT
router.put('/:idPregunta', modificarPregunta);

// DELETE
router.delete('/:idPregunta', eliminarPregunta);

module.exports = router;