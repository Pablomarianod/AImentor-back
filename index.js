require('dotenv').config();  // Cargar variables de entorno
const express = require('express');
const OpenAI = require('openai');  // Usar la nueva forma de importar OpenAI

const app = express();
const port = process.env.PORT || 8080;

// Middleware para parsear JSON
app.use(express.json());

// Configurar OpenAI (sin la clase Configuration)
const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY,  // Clave API en archivo .env
});

// Endpoint para hacer preguntas
// app.post('/api/preguntas', async (req, res) => {
//     try {
//         const { pregunta } = req.body;
//         const response = await openai.chat.completions.create({
//             model: 'gpt-3.5-turbo',
//             messages: [{ role: 'user', content: pregunta }],
//         });

//         res.status(200).json({ respuesta: response.choices[0].message.content });
//     } catch (error) {
//         console.error('Error al hacer la solicitud a OpenAI:', error);
//         res.status(500).json({ error: 'Error al comunicarse con OpenAI' });
//     }
// });


// Endpoint para hacer preguntas
app.post('/api/preguntas', async (req, res) => {
    try {
        const { pregunta } = req.body;

        // Simular una respuesta en lugar de hacer la solicitud real
        const simulatedResponse = {
            respuesta: `Probando respuesta de la pregunta: ${pregunta}`
        };

        // Enviar la respuesta simulada al cliente
        res.status(200).json(simulatedResponse);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});


// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`);
});
