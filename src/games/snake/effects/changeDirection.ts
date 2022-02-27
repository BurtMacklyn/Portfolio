import type { Direction, Setter } from '../types';

export function changeDirection([direction, setDirection]: [Direction, Setter<Direction>], playing: boolean) {
  return () => {
    const up = ['ArrowUp', 'w'];
    const down = ['ArrowDown', 's'];
    const left = ['ArrowLeft', 'a'];
    const right = ['ArrowRight', 'd'];

    function handler(e: KeyboardEvent) {
      if (!playing) return;

      if (up.includes(e.key) && direction !== 'down') return setDirection('up');
      if (down.includes(e.key) && direction !== 'up') return setDirection('down');
      if (left.includes(e.key) && direction !== 'right') return setDirection('left');
      if (right.includes(e.key) && direction !== 'left') return setDirection('right');
    }

    window.addEventListener('keydown', handler);

    return () => {
      window.removeEventListener('keydown', handler);
    };
  };
}
