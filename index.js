import 'dotenv/config';
import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';

const app = express();
const port = process.env.PORT || 8080;
const MAX_RESPONSE_LENGTH = 200;

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);

const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

app.use(express.json());

app.post('/api/preguntas', async (req, res) => {
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
});

app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`);
});