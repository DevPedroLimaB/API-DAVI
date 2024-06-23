// models/matricula.js
const mongoose = require('mongoose');

const matriculaSchema = new mongoose.Schema({
  aluno: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  aula: { type: mongoose.Schema.Types.ObjectId, ref: 'Aula' },
  horario: { type: String, enum: ['promocional', 'livre'] },
  dataInicio: Date,
  dataTermino: Date,
  ativo: Boolean,
});

module.exports = mongoose.model('Matricula', matriculaSchema);
