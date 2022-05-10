import { Portfolio } from '../portfolio/portfolio.component';
import style from './error.module.scss';

interface Props {
  code: number;
  message: string | React.ReactNode;
}

export const Error: React.FC<Props> = ({ code, message }) => (
  <Portfolio>
    <div className={style.Error}>
      <p className={style.backgroundCode}>{code}</p>
      <div className={style.content}>
        <span className={style.code}>{code}</span>
        <span className={style.message}>{message}</span>
      </div>
    </div>
  </Portfolio>
);
