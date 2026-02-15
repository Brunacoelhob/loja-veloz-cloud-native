const express = require('express');
const client = require('prom-client'); // Biblioteca para métricas

const app = express();

// 1. Configura a coleta de métricas (CPU, Memória, etc.)
const register = new client.Registry();
client.collectDefaultMetrics({ register });

// 2. CRIA A ROTA QUE O PROMETHEUS EXIGE (HTTP 200 em vez de 404)
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

// Suas rotas normais
app.get('/', (req, res) => {
  res.send('Serviço Loja Veloz está ONLINE e MONITORADO!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serviço rodando na porta ${PORT}`);
});