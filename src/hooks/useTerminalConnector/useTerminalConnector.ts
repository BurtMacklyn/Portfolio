import { useEffect } from 'react';
import type { XTerm } from 'xterm-for-react';
import type { useSocket } from '../useSocket/useSocket';

export function useTerminalConnector(terminalRef: React.RefObject<XTerm>, socket: ReturnType<typeof useSocket>) {
  useEffect(() => {
    try {
      socket.on('output', (data) => {
        if (['\x07'].includes(data)) return;
        console.log({ data });
        terminalRef.current!.terminal.write(data);
      });

      terminalRef.current!.terminal.onKey(({ key: k }) => {
        const key = k === '' ? '\n' : k;
        socket.emit('message', key);
      });
    } catch (err) {}
  }, []);
}
