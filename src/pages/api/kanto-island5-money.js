import { Server } from 'ws';
import http from 'http';
import robot from 'robotjs';

const server = http.createServer();

const wss = new Server({ noServer: true });

// Array para armazenar clientes conectados
const clients = [];

// Função para enviar mensagem para todos os clientes
function broadcast(message) {
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}

// Manipula a conexão de um novo cliente
wss.on('connection', (ws) => {
  // Adiciona o cliente à lista
  clients.push(ws);

  // Envia uma mensagem para o novo cliente
  ws.send('Conexão estabelecida com sucesso!');

  // Manipula mensagens recebidas do cliente
  ws.on('message', (message) => {
    console.log('Mensagem recebida do cliente:', message);

    // Execute ação com base na mensagem recebida
    switch (message) {
      case 'scrolldown':
        robot.scrollMouse(0, -3000);
        break;
      case 'scrollup':
        robot.scrollMouse(0, 3000);
        break;
      // Adicione outros casos conforme necessário
    }
  });

  // Manipula o fechamento da conexão
  ws.on('close', () => {
    // Remove o cliente da lista quando a conexão é fechada
    const index = clients.indexOf(ws);
    if (index !== -1) {
      clients.splice(index, 1);
    }
  });
});

export default function handler(req, res) {
  // Faz algo com o mouse usando robot.js

  // Exemplo: mover o mouse
  robot.moveMouse(500, 500);

  // Envia mensagem para todos os clientes
  broadcast('Ação realizada com sucesso!');

  // Retorna uma resposta JSON
  res.status(200).json({ message: 'Ação realizada com sucesso!' });
}

// Conecta o WebSocket Server ao servidor HTTP
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

server.listen(3003, () => {
  console.log('listening on http://localhost:3003');
});
