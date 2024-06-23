// models/horario.js
const mongoose = require('mongoose');

const horarioSchema = new mongoose.Schema({
  tipo: { type: String, enum: ['promocional', 'livre'] },
  preco: Number,
});

module.exports = mongoose.model('Horario', horarioSchema);