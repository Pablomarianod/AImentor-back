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
        this.app.use(cors());
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