import { Direction } from '../types';
import { Controller } from './Controller';

export class CurrentDirection {
  private current: Direction = Direction.Right;
  private next: Direction | null = null;
  private queue: Direction | null = null;

  public get state() {
    return { current: this.current, next: this.next, queue: this.queue };
  }

  constructor(private controller: Controller) {
    this.controller.onInput(d => {
      if (!this.next) {
        if (!this.validate(d, this.current)) return;
        this.next = d;
        return;
      }

      if (!this.queue) {
        if (!this.validate(d, this.next)) return;
        this.queue = d;
        return;
      }
    });
  }

  public tick() {
    this.current = this.next ?? this.current;
    this.next = this.queue;
    this.queue = null;
  }

  private validate(next: Direction, from: Direction) {
    if ([Direction.Down, Direction.Up].includes(next) && [Direction.Left, Direction.Right].includes(from)) return true;
    if ([Direction.Left, Direction.Right].includes(next) && [Direction.Up, Direction.Down].includes(from)) return true;
    return false;
  }
}
