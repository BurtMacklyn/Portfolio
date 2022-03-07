import { io } from 'socket.io-client';

export function useSocket(port: number) {
  return io(`ws://localhost:${port}` );
}
