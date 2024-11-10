// models/respuestasAlmacenadas.schema.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

const RespuestaAlmacenadaSchema = new Schema({
  id_tema: {
    type: Schema.Types.ObjectId,
    ref: 'Topico', // Referencia a la colección de Tópicos.
    required: true
  },
  texto_respuesta: {
    type: String,
    required: true,
    trim: true
  },
  fecha_creacion: {
    type: Date,
    default: Date.now // Fecha de creación automática.
  },
  autor: {
    type: String,
    required: true,
    trim: true // Nombre o ID del autor de la respuesta.
  }
}, { 
  timestamps: { createdAt: 'fecha_creacion', updatedAt: 'fecha_actualizacion' } // Añade campos de auditoría.
});

RespuestaAlmacenadaSchema.index({ id_tema: 1 }); //Para búsquedas frecuentes de respuestas vinculadas a temas específicos.


// Exportar el modelo
module.exports = mongoose.model('RespuestaAlmacenada', RespuestaAlmacenadaSchema);
