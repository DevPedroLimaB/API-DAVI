const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Carregue seus controladores aqui
const usuarioController = require('./controllers/usuarioController');
const aulaController = require('./controllers/aulaController');
const treinoController = require('./controllers/treinoController');

// Utilize rotas para definir endpoints da API
app.use('/usuarios', usuarioController);
app.use('/aulas', aulaController);
app.use('/treinos', treinoController);

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`);

// app.js
app.post('/matriculas', matriculaController.cadastrarMatricula);
});
