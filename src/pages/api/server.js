// const fs = require('fs');
// const https = require('https');
// const WebSocket = require('ws');
// const robot  = require('robotjs');
 
// const server = new https.createServer({
//   cert: fs.readFileSync('cert/cert.pem'),
//   key: fs.readFileSync('cert/key.pem')
// });
// const wss = new WebSocket.Server({ server });
 
// wss.on('connection', function connection(ws) {
//   console.log('connected');
//   ws.on('message', function incoming(message) {
//     console.log('message', message);
//     switch(message) {
//       case 'scrolldown':
//         robot.scrollMouse(0, -3000);
//         break;
//       case 'scrollup':
//         robot.scrollMouse(0, 3000);
//         break;
//     }
//   });
// });
 
// server.listen(443);
// console.log('listening');