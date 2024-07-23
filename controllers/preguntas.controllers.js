const serviciosPreguntas = require('../services/preguntas.services');

//GET
const obtenerPreguntas = (req, res) => {
    try {

        const id = req.query.id;
        if (id) {
            const pregunta = serviciosPreguntas.obtenerUnaPregunta(id);
            res.status(200).json(pregunta);
        } else {
            const preguntas = serviciosPreguntas.obtenerTodasPreguntas();
            res.status(200).json(preguntas);
        }

    } catch (error) {
        res.status(500).json(error);
    }
};

//POST
const crearPregunta = async (req, res) => {
    try {
        const nuevaPregunta = await serviciosPreguntas.nuevaPregunta(req.body);
        await nuevaPregunta.save();
        res.status(201).json(nuevaPregunta);

    } catch (error) {
        res.status(500).json(error);
    }
};

//PUT
const modificarPregunta = async (req, res) => {
    try {
        const id = req.params.idPregunta;
        const preguntaActualizada = await serviciosPreguntas.editarPregunta(id, req.body);
        res.status(200).json(preguntaActualizada);
    } catch (error) {
        res.status(500).json(error);
    }
};

//DELETE
const eliminarPregunta = async(req, res) => {
    try {
        const id = req.params.idPregunta;
        await serviciosPreguntas.eliminarPregunta(id);
        preguntas = preguntasNoBorradas;
        res.status(200).json(preguntas);

    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    obtenerPreguntas,
    crearPregunta,
    modificarPregunta,
    eliminarPregunta
};