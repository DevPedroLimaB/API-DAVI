const express = require('express');
const app = express();
const port = 3000;

// Temperaturas FICTICIAS
const temperaturaPorCidade = {
  "New York": 25,
  "Recife": "Temperatura proxima ao inferno", 
  "Tokyo": 30,
  "London": 20,
  "Paris": 22,
  "Rio de Janeiro": 28
};

// ROTAS
app.get('/temperatura/:cidade', (req, res) => {
  const cidade = req.params.cidade;
  const temperatura = temperaturaPorCidade[cidade];
  
  if (temperatura !== undefined) {
    res.json({ cidade, temperatura });
  } else {
    res.status(404).json({ mensagem: "Cidade não encontrada" });
  }
});

// Rotapra ver se ta disponivel
app.get('/cidades', (req, res) => {
  const cidades = Object.keys(temperaturaPorCidade);
  res.json({ cidades });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:3000`);
});