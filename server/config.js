const express = require('express');
const path = require('path');
const cors = require('cors');
require('../db/configdb');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8080;
        this.middleware();
        this.routes();
    };

    middleware() {
        this.app.use(express.json());
        this.app.use(express.static(path.join(__dirname, 'public')));
        this.app.use(cors());
    }

    routes() {
        this.app.use('/api/preguntas', require('../routes/preguntas.routes'));
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor funcionando', this.port);
        });
    };
};

module.exports = Server;