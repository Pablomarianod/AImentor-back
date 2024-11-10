// models/sesiones.schema.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Esquema de sesiones
const sesionSchema = new Schema({
  id_usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  },
  fecha_inicio: {
    type: Date,
    default: Date.now,
    required: true,
  },
  fecha_fin: {
    type: Date,
  },
  interacciones: [{
    type: Schema.Types.ObjectId,
    ref: 'Interaccion',
  }],
  estado: {
    type: String,
    enum: ['abierta', 'cerrada', 'en_proceso'], // Opciones de estado ajustables según las necesidades
    default: 'abierta',
    required: true,
  }
}, { timestamps: true });

sesionSchema.index({ id_usuario: 1 }); //Ayuda a realizar búsquedas rápidas de sesiones asociadas a usuarios específicos.
sesionSchema.index({ estado: 1, fecha_inicio: -1 }); //indice compuesto: Ordena por estado y fecha de inicio en orden descendente, útil para consultas frecuentes de sesiones abiertas recientes.


// Exporta el modelo 'Sesion' basado en el esquema 'sesionSchema'
module.exports = mongoose.model('Sesion', sesionSchema);
