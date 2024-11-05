import express from 'express';
import cors from 'cors'

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 8080;
        this.middleware();
        this.routes();
    };

    middleware(){
        this.app.use(express.json());
        this.app.use(cors());
    };

    routes(){
        // this.app.post('/api/preguntas', async (req, res) => {
        //     try {
        //         const { pregunta } = req.body;
        
        //         if (!pregunta || typeof pregunta !== 'string') {
        //             return res.status(400).json({ error: 'La pregunta es inválida' });
        //         }
        
        //         const result = await model.generateContent(pregunta);
        //         console.log(result);
        
        //         const respuesta = result?.response?.text().slice(0, MAX_RESPONSE_LENGTH) || 'Respuesta no disponible.';
        //         res.status(200).json({ respuesta });
        
        //     } catch (error) {
        //         console.error('Error al comunicarse con Google Generative AI:', error);
        //         res.status(500).json({ error: 'Hubo un problema al procesar la solicitud.' });
        //     }
        // });
    };

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor funcionando en el puerto ${this.port}`)
        })
    };
};

export default Server;