import * as constants from '../constants';
import type { Setter, Apple } from '../types';

export function apple(setApple: Setter<Apple | null>) {
  return () => {
    setApple({
      x: Math.floor(Math.random() * Math.floor(window.innerWidth / constants.BOX_SIZE)) || 5,
      y: Math.floor(Math.random() * Math.floor(window.innerHeight / constants.BOX_SIZE)) - 1 || 5,
    });
  };
}
