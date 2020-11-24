export const socketRoute = (socket) => {
  socket.on('join', (roomId) => {
    socket.join(roomId);
    console.log(`socket_id: ${socket.id} joined in room ${roomId}`);
  });

  socket.on('BID_PRICE', (price, roomId) => {
    io.to(roomId).emit('BID', price);
  });
};
