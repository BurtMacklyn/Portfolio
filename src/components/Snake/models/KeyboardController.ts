import { Direction } from '../types';
import { Controller } from './Controller';

export class KeyboardController extends Controller {
  static map: Record<string, Direction> = {
    ArrowUp: Direction.Up,
    ArrowLeft: Direction.Left,
    ArrowDown: Direction.Down,
    ArrowRight: Direction.Right,
    w: Direction.Up,
    a: Direction.Left,
    s: Direction.Down,
    d: Direction.Right,
  };

  private abort: AbortController;

  constructor() {
    super();

    this.abort = new AbortController();

    window.addEventListener(
      'keydown',
      e => {
        const d = KeyboardController.map[e.key ?? ''];
        if (d) this.input(d);
      },
      { signal: this.abort.signal },
    );
  }

  stop() {
    this.abort.abort();
  }
}
