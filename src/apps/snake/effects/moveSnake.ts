import type { RefObject } from 'react';
import { BOX_SIZE, REFRESH_TIME } from '../constants';
import type { Segment, Direction, Setter, Apple } from '../types';
import { apple as appleSetter } from '.';

export function moveSnake(
  [snake, setSnake]: [Segment[], Setter<Segment[]>],
  [alive, kill]: [boolean, Setter<boolean>],
  direction: Direction,
  playing: boolean,
  apple: Apple | null,
  setApple: Setter<Apple | null>,
  appleRef: RefObject<HTMLDivElement>,
) {
  return () => {
    setTimeout(() => {
      if (!alive || !playing) return;
      const newSegment = {
        x: snake.at(-1)!.x + (direction === 'right' ? 1 : direction === 'left' ? -1 : 0),
        y: snake.at(-1)!.y + (direction === 'down' ? 1 : direction === 'up' ? -1 : 0),
        id: snake.at(-1)!.id + 1,
      };

      let increment = !!(newSegment.x === apple?.x && newSegment.y === apple?.y);

      for (const segment of snake) {
        if (segment.x === apple?.x && segment.y === apple?.y) increment = true;
        if ((document.querySelector(`#id-${segment.id}`) as HTMLDivElement).style.gridArea === appleRef.current!.style.gridArea) increment = true;

        if (segment.x === newSegment.x && segment.y === newSegment.y && segment.id !== newSegment.id) return kill(false);
      }

      if (
        newSegment.x < 0 ||
        newSegment.y < 0 ||
        newSegment.x > Math.floor(window.innerWidth / BOX_SIZE) ||
        newSegment.y > Math.floor(window.innerHeight / BOX_SIZE) - 1
      )
        return kill(false);

      if (snake.length >= 5 && !increment) snake.shift();

      if (increment) {
        appleSetter(setApple, snake)();
      }
      setSnake([...snake, newSegment]);
    }, REFRESH_TIME);
  };
}
