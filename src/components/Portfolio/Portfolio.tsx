import type { ReactChild } from 'react';
import style from './Portfolio.module.scss';

export function Portfolio({ children }: { children?: ReactChild | ReactChild[] }) {
  return <div className={style.Portfolio}>{children}</div>;
}
