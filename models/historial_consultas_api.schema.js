// models/historialConsultasAPI.schema.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

const HistorialConsultasAPISchema = new Schema({
  id_interaccion: {
    type: Schema.Types.ObjectId,
    ref: 'Interacciones', // Referencia a la colección de Interacciones.
    required: true
  },
  fecha_consulta: {
    type: Date,
    default: Date.now, // Registra la fecha en que se realizó la consulta.
    required: true
  },
  pregunta_usuario: {
    type: String,
    required: true,
    trim: true // Elimina espacios innecesarios.
  },
  respuesta_ia: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true // Incluye createdAt y updatedAt para el registro de auditoría.
});

HistorialConsultasAPISchema.index({ id_interaccion: 1 }); //Agiliza las consultas de registros de historial vinculados a una interacción específica.
HistorialConsultasAPISchema.index({ fecha_consulta: -1 }); // Facilita la organización cronológica de las consultas para analizar el historial.


// Exportar el modelo
module.exports = mongoose.model('HistorialConsultasAPI', HistorialConsultasAPISchema);
