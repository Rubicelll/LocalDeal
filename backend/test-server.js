const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
  console.log('✅ /ping recibido');
  res.send('pong');
});

app.listen(50000, '0.0.0.0', () => {
  console.log('🚀 Servidor corriendo en 0.0.0.0:50000');
});
