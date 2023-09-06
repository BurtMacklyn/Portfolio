import { Coordinate } from '../types';
import { Dimensions } from './Dimensions';

export class Apple {
  static random(d: Dimensions['state'], snake: Coordinate[]) {
    const available: Coordinate[] = [];

    // O( (grid_width)(grid_height) )
    for (let x = 0; x < d.width; x++) {
      for (let y = 0; y < d.height; y++) {
        if (!snake.includes(`${x}:${y}`)) available.push(`${x}:${y}`);
      }
    }

    return available.at(Math.floor(Math.random() * available.length))!;
  }
}
