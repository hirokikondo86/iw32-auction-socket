import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { middleware } from './middleware';
import { db } from './model/db';
import { route } from './route';
import { socketRoute } from './route/socketRoute';

try {
  await db.sequelize.authenticate();
  console.log('Database connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST'],
  },
});

middleware(app);
route(app);

const port = process.env.PORT || 1991;
server.listen(port);
console.log('Server is listening on :1991');

io.on('connection', (socket) => {
  socket.on('join', (roomId) => {
    socket.join(roomId);
    console.log(`socket_id: ${socket.id} joined in room ${roomId}`);
  });

  socket.on('BID_PRICE', (roomId, username, price) => {
    io.to(roomId).emit('BID', { username, price });
  });
});
