import * as constants from '../constants';
import type { Setter, Apple, Segment } from '../types';

export function apple(setApple: Setter<Apple | null>, snake: Segment[]) {
  return () => {
    const makeApple: () => Apple = () => {
      const newApple = {
        x: Math.floor(Math.random() * Math.floor(window.innerWidth / constants.BOX_SIZE)) || 5,
        y: Math.floor(Math.random() * Math.floor(window.innerHeight / constants.BOX_SIZE)) - 1 || 5,
      };

      let overlap = false;

      for (const segment of snake) {
        if (segment.x === newApple.x && segment.y === newApple.y) overlap = true;
      }

      if (overlap) return makeApple();
      else return newApple;
    };

    setApple(makeApple());
  };
}
