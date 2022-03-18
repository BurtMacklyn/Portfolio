import type { Setter, Direction, Segment } from '../types';
import * as constants from "../constants";

export function restart(alive: boolean, setters: {
  setDirection: Setter<Direction>,
  setAlive: Setter<boolean>,
  setScore: Setter<number>,
  setSnake: Setter<Segment[]>
}) {
  return () => {
    if (alive) return;

    function handler(e?: KeyboardEvent) {
      if (e?.key && e.key !== 'r') return;

      setters.setDirection('right');
      setters.setScore(constants.INITIAL_SNAKE.length);
      setters.setSnake(constants.INITIAL_SNAKE);
      setters.setAlive(true);
    }

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  };
}