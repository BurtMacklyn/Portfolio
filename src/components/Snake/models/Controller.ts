import { Direction } from '../types';

export abstract class Controller {
  private f: (d: Direction) => void = () => {};

  constructor() {}

  public input(d: Direction) {
    this.f(d);
  }

  public onInput(f: typeof this.f) {
    this.f = f;
  }

  public stop(): void {}
}
