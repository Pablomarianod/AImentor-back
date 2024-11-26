import {
    nuevaPregunta,
    obtenerPreguntas,
    obtenerPregunta,
    modificarPregunta,
    eliminarPregunta
} from '../services/preguntas.services.js';

import { GoogleGenerativeAI } from '@google/generative-ai';

//GET
const ObtenerTodasPreguntas = (req, res) => {
    const result = obtenerPreguntas()


    if (result.statusCode === 200) {

        res.status(200).json({ msg: result.msg })
    } else {

        res.status(500).json({ msg: result.msg })
    }

};

const obtenerUnaPregunta = (req, res) => {
    const result = obtenerPregunta(req.params.idPregunta)

    if (result.statusCode === 200) {
        res.status(200).json({ msg: result.msg })
    } else {
        res.status(500).json({ msg: result.msg })
    }
}

//POST
const CrearPregunta = async (req, res) => {
    //    const result = serviciosPreguntas.nuevaPregunta(req.body) REVISAR 
    const MAX_RESPONSE_LENGTH = 200;
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    try {
        const { pregunta } = req.body;

        if (!pregunta || typeof pregunta !== 'string') {
            return res.status(400).json({ error: 'La pregunta es inválida' });
        }

        const result = await model.generateContent(pregunta);
        console.log(result);

        const respuesta = result?.response?.text().slice(0, MAX_RESPONSE_LENGTH) || 'Respuesta no disponible.';

         // Guarda la pregunta y la respuesta
         const saveResult = nuevaPregunta({ pregunta, respuesta });

         res.status(saveResult.statusCode).json({ 
             msg: saveResult.msg,
             respuesta
         });

    } catch (error) {
        console.error('Error al comunicarse con Google Generative AI:', error);
        res.status(500).json({ error: 'Hubo un problema al procesar la solicitud.' });
    }
};

//PUT
const EditarPregunta = async (req, res) => {

    const result = modificarPregunta(req.params.idPregunta)

    if (result.statusCode === 200) {
        res.status(200).json({ msg: result.msg })
    } else {
        res.status(500).json({ msg: result.msg })
    }
};

//DELETE
const EliminarPregunta = (req, res) => {
    const result = eliminarPregunta(req.params.idPregunta)

    if (result.statusCode === 200) {
        res.status(200).json({ msg: result.msg })
    } else {
        res.status(500).json({ msg: result.msg })
    }
};

export {
    ObtenerTodasPreguntas,
    obtenerUnaPregunta,
    CrearPregunta,
    EditarPregunta,
    EliminarPregunta
};