// models/interacciones.schema.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Subdocumento para la respuesta del sistema
const respuestaSistemaSchema = new Schema({
  texto_respuesta: {
    type: String,
    required: true,
  },
  tipo_respuesta: {
    type: String,
    enum: ['generada', 'almacenada', 'otros'], // Ajusta los tipos según las opciones posibles
    required: true,
  },
  id_respuesta_almacenada: {
    type: Schema.Types.ObjectId,
    ref: 'RespuestasAlmacenadas',
  },
});

// Esquema principal de interacciones
const interaccionSchema = new Schema({
  id_sesion: {
    type: Schema.Types.ObjectId,
    ref: 'Sesion',
    required: true,
  },
  id_usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  },
  fecha_interaccion: {
    type: Date,
    default: Date.now,
  },
  mensaje_usuario: {
    type: String,
    required: true,
  },
  respuesta_sistema: {
    type: respuestaSistemaSchema,
    required: true,
  },
  historial_consultas_api: [{
    type: Schema.Types.ObjectId,
    ref: 'HistorialConsultasAPI',
  }],
  id_topic: {
    type: Schema.Types.ObjectId,
    ref: 'Topico',
  }
});

interaccionSchema.index({ id_sesion: 1 }); //Facilita la búsqueda de interacciones específicas por sesión.
interaccionSchema.index({ id_usuario: 1, fecha_interaccion: -1 }); //Ordenar interacciones por usuario y fecha, agilizando las búsquedas cronológicas.
interaccionSchema.index({ id_topic: 1, 'respuesta_sistema.tipo_respuesta': 1 }); //Permite optimizar la consulta de interacciones específicas para un tema dado y según el tipo de respuesta.


// Exporta el modelo 'Interaccion' basado en el esquema 'interaccionSchema'
module.exports = mongoose.model('Interaccion', interaccionSchema);
