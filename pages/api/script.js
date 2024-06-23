const app = document.getElementById('app');
const tempoAtual = document.getElementById('tempo-atual');
const previsao = document.getElementById('previsao');
const historico = document.getElementById('historico');

async function buscarDados(cidade) {
  // Utilize a API de sua escolha (OpenWeatherMap, AccuWeather, etc.)
  // Substitua 'SEU_CHAVE_API' pela sua chave da API
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=app.js&units=metric`);
  const dados = await response.json();
  return dados;
}


async function exibirTempoAtual(cidade) {
  const dados = await buscarDados(cidade);
  const temperatura = dados.main.temp;
  const descricao = dados.weather[0].description;
  const icone = dados.weather[0].icon;

  tempoAtual.innerHTML = `
    <h2>${cidade}</h2>
    <p>Temperatura: ${temperatura}°C</p>
    <p>${descricao}</p>
    <img src="https://openweathermap.org/img/wn/${icone}@2x.png">
  `;
}


exibirTempoAtual('Recife');