export const socketRoute = (socket) => {
  socket.on('SEND_MESSAGE', (data) => {
    io.emit('MESSAGE', data);
  });
};
