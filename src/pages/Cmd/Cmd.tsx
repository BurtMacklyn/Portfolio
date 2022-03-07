import style from 'style/components/terminal.module.scss';
import { Terminal } from './Terminal';

export function Cmd(): JSX.Element {
  return (
    <div className={style.App}>
      <Terminal />
    </div>
  );
}
