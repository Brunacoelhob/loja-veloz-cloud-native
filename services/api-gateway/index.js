const express = require('express');
const client = require('prom-client');

const app = express();
const register = new client.Registry();

// Coleta métricas padrão do Node.js (CPU, Memória, etc)
client.collectDefaultMetrics({ register });

// Rota para o Prometheus coletar os dados (MUITO IMPORTANTE)
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.get('/', (req, res) => {
  res.send('API Gateway da Loja Veloz: ONLINE e MONITORADO!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API Gateway rodando na porta ${PORT}`);
});