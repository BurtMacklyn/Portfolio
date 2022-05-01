import type { Segment } from '../types';
import style from '../snake.module.scss';

export function SnakeSegment({ children: segment }: { children: Segment }) {
  return (
    <div
      className={style['snakeSegment']}
      id={'id-' + segment.id}
      style={{
        gridColumn: `${segment.x} / ${segment.x + 1}`,
        gridRow: `${segment.y} / ${segment.y + 1}`,
      }}></div>
  );
}
