import {
    nuevaPregunta,
    obtenerPreguntas,
    obtenerPregunta,
    modificarPregunta,
    eliminarPregunta
} from '../services/preguntas.services.js';

import { GoogleGenerativeAI } from '@google/generative-ai';

//GET
const ObtenerTodasPreguntas = async (req, res) => {
    const result = await obtenerPreguntas()


    if (result.statusCode === 200) {

        res.status(200).json({
            msg: result.msg,
            preguntas: result.preguntas,
        })
    } else {
        res.status(500).json({ msg: result.msg })
    }

};

const obtenerUnaPregunta = async (req, res) => {
    const result = await obtenerPregunta(req.params.idPregunta)

    if (result.statusCode === 200) {
        res.status(200).json({
            msg: result.msg,
            pregunta: result.pregunta,
        })
    } else {
        res.status(500).json({ msg: result.msg })
    }
}

//POST
const CrearPregunta = async (req, res) => {

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

        const saveResult = await nuevaPregunta({
            preguntaUsuario: pregunta,
            respuestaIA: respuesta
        });

        if (saveResult.statusCode === 201) {
            res.status(201).json({
                msg: saveResult.msg,
                preguntaUsuario: pregunta,
                respuestaIA: respuesta
            });
        } else {
            res.status(saveResult.statusCode).json({ msg: saveResult.msg });
        }

    } catch (error) {
        console.error('Error al comunicarse con Google Generative AI:', error);
        res.status(500).json({ error: 'Hubo un problema al procesar la solicitud.' });
    }
};

//PUT
const EditarPregunta = async (req, res) => {

    const result =await modificarPregunta(req.params.idPregunta)

    if (result.statusCode === 200) {
        res.status(200).json({ msg: result.msg })
    } else {
        res.status(500).json({ msg: result.msg })
    }
};

//DELETE
const EliminarPregunta = async(req, res) => {
    const result =await eliminarPregunta(req.params.idPregunta)

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