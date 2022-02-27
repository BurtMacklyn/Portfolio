import style from '../snake.module.scss';
import type { Apple } from '../types';

export function Apple({ children: apple }: { children: Apple }) {
  return (
    <div
      className={style['apple']}
      style={{
        gridColumn: `${apple.x} / ${apple.x + 1}`,
        gridRow: `${apple.y} / ${apple.y + 1}`,
      }}></div>
  );
}
