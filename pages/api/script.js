// controllers/matriculaController.js
const Matricula = require('../models/matricula');
const Aula = require('../models/aula');
const Horario = require('../models/horario');
const script = require('../script');

// Função para cadastrar matrícula
async function cadastrarMatricula(req, res) {
  const { idAluno, idAula, horario } = req.body;

  // Verifique se o aluno e a aula existem
  const aluno = await script.buscarUsuario(idAluno);
  const aula = await Aula.findById(idAula);

  if (!aluno || !aula) {
    return res.status(400).send('Aluno ou aula não encontrados');
  }

  // Verifique se o horário existe e é válido
  const horarioModel = await Horario.findOne({ tipo: horario });

  if (!horarioModel) {
    return res.status(400).send('Horário inválido');
  }

  // Crie a matrícula
  const matricula = new Matricula({
    aluno: aluno._id,
    aula: aula._id,
    horario: horario,
    dataInicio: req.body.dataInicio,
    dataTermino: req.body.dataTermino,
    ativo: true,
  });

  // Salve a matrícula
  await matricula.save();

  // Retorne a matrícula cadastrada
  res.status(201).json(matricula);
}

module.exports = {
  cadastrarMatricula,
  // ... outras funções
};
