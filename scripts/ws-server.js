/*
 Simple WebSocket server for DevTools log streaming.
 - Listens on ws://localhost:3300
 - Broadcasts any message received to all connected clients.
 - Intended for development only.
*/
const { WebSocketServer } = require('ws');

const PORT = process.env.WS_PORT ? Number(process.env.WS_PORT) : 3300;
const wss = new WebSocketServer({ port: PORT });

wss.on('connection', (ws, req) => {
  const id = Math.random().toString(36).slice(2);
  console.info(`[WS] client connected: ${id} from ${req?.socket?.remoteAddress}`);

  ws.on('message', (data) => {
    // Broadcast incoming messages to all clients (including devtools subscribers)
    for (const client of wss.clients) {
      if (client.readyState === 1 /* WebSocket.OPEN */) {
        client.send(data);
      }
    }
  });

  ws.on('close', () => {
    console.info(`[WS] client disconnected: ${id}`);
  });

  ws.on('error', (err) => {
    console.error(`[WS] client error: ${id}`, err?.message || err);
  });
});

wss.on('listening', () => {
  console.info(`[WS] DevTools WebSocket server listening on ws://localhost:${PORT}`);
});

wss.on('error', (err) => {
  console.error('[WS] server error:', err?.message || err);
});
