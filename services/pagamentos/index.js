const express = require('express');
const client = require('prom-client');

const app = express();
const register = new client.Registry();

client.collectDefaultMetrics({ register });

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.get('/', (req, res) => {
  res.send('Serviço de Pagamentos: ONLINE e MONITORADO!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serviço de Pagamentos rodando na porta ${PORT}`);
});