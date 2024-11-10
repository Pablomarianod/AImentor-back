// import serviciosPreguntas from '../services/preguntas.services'
import { GoogleGenerativeAI } from '@google/generative-ai';

//GET
const ObtenerTodasPreguntas = async(req, res) => {
    try {
        const id = (req.query.id)
        if (id) {
            const pregunta = await preguntas.find((preg) => preg.id === id)
            res.status(200).json(pregunta)
        } else {
            const preguntas = await preguntas.ObtenerPreguntas()
            res.status(200).json(preguntas)
        }
    } catch (error) {
        res.status(500).json(error)
    }
};

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
        res.status(200).json({ respuesta });

    } catch (error) {
        console.error('Error al comunicarse con Google Generative AI:', error);
        res.status(500).json({ error: 'Hubo un problema al procesar la solicitud.' });
    }
};

//PUT
const EditarPregunta = async (req, res) => {
    try {
        const id = req.params.idPregunta
        const posPregEnArray = preguntas.findIndex((pregunta) => pregunta.id === id)

        const preguntaEditada = {
            id,
            ...req.body
        }

        preguntas[posPregEnArray] = preguntaEditada

        res.status(200).json(preguntas[posPregEnArray])

    } catch (error) {
        res.status(500).json(error)
    }
};

//DELETE
const EliminarPregunta = async(req, res) => {
    try {
        const id = req.params.idPregunta
        const preguntasNoBorradas = preguntas.filter((pregunta) => pregunta.id !== id)

        preguntas = preguntasNoBorradas

        res.status(200).json(preguntas)

    } catch (error) {
        res.status(500).json(error)
    }
};

export {
    ObtenerTodasPreguntas,
    CrearPregunta,
    EditarPregunta,
    EliminarPregunta
};