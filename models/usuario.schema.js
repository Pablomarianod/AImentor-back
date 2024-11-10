// Esquema principal para la colección usuarios
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new mongoose.Schema({
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, 'Email inválido'],
      lowercase: true,
    },
    fecha_registro: {
      type: Date,
      default: Date.now,
    },
    rol: {
      type: String,
      enum: ['admin', 'usuario', 'profesor'],
      required: true,
    }
  });
  
  usuarioSchema.index({ email: 1 }, { unique: true });// Útil para garantizar la unicidad y velocidad en las consultas basadas en el email.


  // Exporta el modelo 'Usuario' basado en el esquema 'usuarioSchema'
  module.exports = mongoose.model('Usuario', usuarioSchema);