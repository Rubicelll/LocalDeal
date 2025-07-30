const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/ping') {
    console.log('✅ /ping recibido');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('pong');
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(50000, '0.0.0.0', () => {
  console.log('Servidor HTTP simple corriendo en 0.0.0.0:50000');
});
