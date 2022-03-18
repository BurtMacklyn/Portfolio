import style from './Center.module.scss';

export function Center({ children }) {
  return <div className={style.center}>{children}</div>;
}
