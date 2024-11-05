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
        this.app.use('api/preguntas', require('../routes/preguntas.routes'))
    };

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor funcionando en el puerto ${this.port}`)
        })
    };
};

export default Server;