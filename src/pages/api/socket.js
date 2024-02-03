import WebSocket from 'ws';

export const config = {
  api: {
    bodyParser: false,
  },
};

const wss = new WebSocket.Server({ noServer: true });

// Evento de conexão
wss.on('connection', (ws) => {
  // Evento para mensagens recebidas do cliente
  ws.on('message', (message) => {
    console.log(`Mensagem recebida: ${message}`);
  });

  // Envie uma mensagem para o cliente quando a conexão for estabelecida
  ws.send('Conexão estabelecida com sucesso!');
});

export default function handler(req, res) {
  if (!res.socket.server.wss) {
    console.log('Configurando WebSocket...');
    res.socket.server.wss = wss;
  }

  wss.handleUpgrade(req, req.socket, Buffer.alloc(0), (ws) => {
    wss.emit('connection', ws, req);
  });

  res.end();
}
