// const preguntas = [
//     {
//         id: 1,
//         pregunta: 'Prueba 1',
//         tipo: 'QA'
//     },
//     {
//         id: 2,
//         pregunta: 'Prueba 2',
//         tipo: 'DEV'
//     }
// ];
const PreguntaModel = require('../models/pregunta.schema');

//OBTENER PREGUNTA
const obtenerTodasPreguntas = async () => {
    const obtenerPreguntas = await PreguntaModel.find()
    return obtenerPreguntas;
};

const obtenerUnaPregunta = async (id) => {
    const pregunta = await PreguntaModel.findById({ _id: id });
    return pregunta;
};

//CREAR PREGUNTA
const nuevaPregunta = (body) => {
    try {
        const nuevaPregunta = new PreguntaModel(body);
        console.log(nuevaPregunta);
        // const nuevaPregunta = {
        //     id: preguntas[preguntas.length - 1].id + 1,
        //     ...req.body
        // };
        // preguntas.push(nuevaPregunta);
        return nuevaPregunta;
    } catch (error) {
        console.log(error);
    }
};

//EDITAR PREGUNTA
const editarPregunta = async (idPregunta, body) => {
    try {
        const preguntaEditada = await PreguntaModel.findByIdAndUpdate({ _id: idPregunta }, body, { new: true });
        return preguntaEditada;
    } catch (error) {
        console.log(error);
    }
};

//ELIMINAR PREGUNTA
const eliminarPregunta = async (idPregunta) => {
    try {
        await PreguntaModel.findByIdAndDelete({ _id: idPregunta });
        return 200;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    obtenerTodasPreguntas,
    obtenerUnaPregunta,
    nuevaPregunta,
    editarPregunta,
    eliminarPregunta
};