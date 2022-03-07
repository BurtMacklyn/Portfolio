import { XTerm } from 'xterm-for-react';
import { useRef } from 'react';
import style from 'style/components/terminal.module.scss';
import { useSocket, useTerminalConnector } from 'src/hooks';
import { options } from './options';

export function Terminal(): JSX.Element {
  const terminal = useRef<XTerm>(null);
  const socket = useSocket(8080);

  useTerminalConnector(terminal, socket);

  return <>{socket && <XTerm ref={terminal} className={style.terminal} options={options} />}</>;
}
