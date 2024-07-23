const mongoose = require('mongoose');

const PreguntaSchema = new mongoose.Schema({
    contenido: String,
    tipo: String,
});

const PreguntaModel = mongoose.model('pregunta', PreguntaSchema);
module.exports = PreguntaModel;