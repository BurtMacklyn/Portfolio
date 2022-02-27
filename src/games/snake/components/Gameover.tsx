import style from '../snake.module.scss';
import type { Segment } from '../types';

export function Gameover({ snake, isAlive }: { snake: Segment[]; isAlive: boolean }): JSX.Element {
  return (
    <>
      {!isAlive && (
        <div className={style['gameover']}>
          <p className='text'>Game Over</p>
          <p>Your score: {snake.length}</p>
          <p>Press R to play again</p>
        </div>
      )}
    </>
  );
}
