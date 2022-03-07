// @ts-nocheck
const os = require('os');
const pty = require('node-pty');
const http = require('http').createServer();

const io = require('socket.io')(http, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  const cp = pty.spawn(os.platform() === 'win32' ? 'powershell.exe' : os.platform() === 'darwin' ? 'zsh' : 'bash', [], {
    name: 'xterm-color',
    cwd: process.env.HOME, // Which path should terminal start
    env: process.env, // Pass environment variables
  });

  cp.onData((data) => socket.emit('output', data));
  socket.on('message', (msg) => cp.write(msg));
});

http.listen(8080, () => console.log('server running'));
