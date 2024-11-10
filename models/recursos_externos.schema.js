// models/recursosExternos.schema.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecursoExternoSchema = new Schema({
  id_topic: {
    type: Schema.Types.ObjectId,
    ref: 'Topico', // Referencia a la colección de Tópicos.
    required: true
  },
  titulo: {
    type: String,
    required: true,
    trim: true // Elimina espacios innecesarios.
  },
  descripcion: {
    type: String,
    required: true,
    trim: true
  },
  url: {
    type: String,
    required: true,
    trim: true,
    match: /^https?:\/\/[^\s]+$/ // Valida el formato de URL.
  }
}, { 
  timestamps: { createdAt: 'fecha_creacion', updatedAt: 'fecha_actualizacion' } // Añade campos de auditoría.
});

RecursoExternoSchema.index({ id_topic: 1 }); //Facilita la búsqueda rápida de recursos relacionados con un tema específico.


// Exportar el modelo
module.exports = mongoose.model('RecursoExterno', RecursoExternoSchema);
