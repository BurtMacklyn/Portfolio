import { Coordinate, Direction } from '../types';
import { Dimensions } from './Dimensions';

export class Snake {
  private snake: Coordinate[] = [...DEFAULT_SNAKE];

  public get state() {
    return this.snake;
  }

  constructor(private dimensions: Dimensions) {}

  public get score() {
    return this.snake.length;
  }

  public move(d: Direction) {
    const next = Snake.locate(d, this.snake.at(-1)!);
    const available = this.checkBoundaryIntersection(next);

    if (!available) return null;

    this.snake.push(next);

    return next;
  }

  public shift() {
    return this.snake.shift();
  }

  private checkBoundaryIntersection(node: Coordinate) {
    if (this.snake.includes(node)) return false;

    const [x, y] = node.split(':').map(n => +n);

    if (x < 0) return false;
    if (y < 0) return false;
    if (x >= this.dimensions.state.width) return false;
    if (y >= this.dimensions.state.height) return false;

    return true;
  }

  static locate(d: Direction, head: Coordinate): Coordinate {
    const [x, y] = head.split(':').map(n => +n);

    if (d === Direction.Up) return `${x}:${y - 1}`;
    if (d === Direction.Down) return `${x}:${y + 1}`;
    if (d === Direction.Left) return `${x - 1}:${y}`;
    if (d === Direction.Right) return `${x + 1}:${y}`;

    return `${x}:${y}`;
  }

  static reverseLocate(next: Coordinate, head: Coordinate): Direction | null {
    const [x, y] = head.split(':').map(n => +n);
    const [nextX, nextY] = next.split(':').map(n => +n);

    if (nextX + 1 === x && nextY === y) return Direction.Left;
    if (nextX - 1 === x && nextY === y) return Direction.Right;
    if (nextX === x && nextY + 1 === y) return Direction.Up;
    if (nextX === x && nextY - 1 === y) return Direction.Down;

    return null;
  }
}

const DEFAULT_SNAKE: Coordinate[] = [
  '4:4',
  '5:4',
  '6:4',
  '7:4',
  '8:4',
  '8:5',
  '7:5',
  '6:5',
  '5:5',
  '4:5',
  '4:6',
  '5:6',
  '6:6',
  '7:6',
  '8:6',
];
