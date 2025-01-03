import express from 'express';
import cors from 'cors';
import preguntasRoutes from '../routes/preguntas.routes.js';
import '../db/configdb.js';
import morgan from 'morgan';

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 8080;
        this.middleware();
        this.routes();
    };

    middleware(){
        this.app.use(express.json());
        // this.app.use(cors());
        const corsOptions = {
            origin: ['https://kaizenai.netlify.app/', 'http://localhost:5173'], // Añade tu dominio de Netlify y cualquier otro que necesites para desarrollo
            methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
            credentials: true, // Si necesitas enviar cookies o encabezados de autorización
        };
        
        this.app.use(cors(corsOptions));
        this.app.use(morgan());
    };

    routes(){
        this.app.use('/api/preguntas', preguntasRoutes)
    };

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor funcionando en el puerto ${this.port}`)
        })
    };
};

export default Server;