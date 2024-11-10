// models/topicos.schema.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

const TopicoSchema = new Schema({
  nombre_tema: {
    type: String,
    required: true,
    unique: true, // Para evitar duplicados de nombres de tema.
    trim: true
  },
  descripcion: {
    type: String,
    trim: true
  },
  recursos_externos: [{
    type: Schema.Types.ObjectId,
    ref: 'RecursosExternos' // Referencia a la colección Recursos Externos.
  }],
  respuestas_almacenadas: [{
    type: Schema.Types.ObjectId,
    ref: 'RespuestasAlmacenadas' // Referencia a la colección Respuestas Almacenadas.
  }]
}, { 
  timestamps: true // Añade campos de createdAt y updatedAt automáticamente.
});

TopicoSchema.index({ nombre_tema: 1 }, { unique: true }); //Optimiza las búsquedas de temas por nombre, dado que esta propiedad debe ser única.

// Exportar el modelo
module.exports = mongoose.model('Topico', TopicoSchema);
