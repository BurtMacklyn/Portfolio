import { color } from '@/config/style';
import { AppEvent, AppEventHandler, Coordinate } from '../types';
import { Apple } from './Apple';
import { Clock } from './Clock';
import { Controller } from './Controller';
import { CurrentDirection } from './CurrentDirection';
import { Dimensions } from './Dimensions';
import { Renderer } from './Renderer';
import { Snake } from './Snake';

export class Game {
  private renderer: Renderer;
  private dimensions: Dimensions;
  private snake: Snake;
  private apple: Coordinate;
  private direction: CurrentDirection;
  private clock: Clock;
  private listeners: Record<AppEvent, AppEventHandler[]>;

  private aborter: AbortController;

  constructor(
    element: HTMLCanvasElement,
    speed: number,
    private controller: Controller,
  ) {
    this.dimensions = new Dimensions();
    this.aborter = new AbortController();
    this.renderer = new Renderer(element, speed, {
      snake: color('100'),
      apple: color('primary'),
    });
    this.listeners = { reset: [], score: [], tick: [] };

    this.snake = new Snake(this.dimensions);
    this.apple = Apple.random(this.dimensions.state, this.snake.state);
    this.direction = new CurrentDirection(this.controller);

    this.clock = new Clock(() => this.tick(), speed);

    window?.addEventListener(
      'keydown',
      e => {
        if (e.key === ' ') {
          if (this.clock.active) this.clock.stop();
          else {
            this.clock.active = true;
            this.clock.start();
          }
        }
      },
      { signal: this.aborter.signal },
    );
  }

  public start() {
    this.clock.start();
  }

  public async tick(safety = false): Promise<void> {
    this.direction.tick();
    const newPosition = this.snake.move(this.direction.state.current);

    let increment = false;
    let lastTail = undefined;
    let lastApple = undefined;

    if (newPosition === null) {
      if (!safety) {
        await Clock.wait(50);
        return await this.tick(true);
      } else {
        this.snake = new Snake(this.dimensions);
        this.apple = Apple.random(this.dimensions.state, this.snake.state);
        this.direction = new CurrentDirection(this.controller);

        this.send('reset', false);
      }
    } else {
      if (newPosition === this.apple) {
        increment = true;
        lastApple = (this.apple + '') as Coordinate;
        this.apple = Apple.random(this.dimensions.state, this.snake.state);
      }

      if (!increment) lastTail = this.snake.shift();
      else lastTail = undefined;
    }

    this.send('tick', increment);
    await this.renderer.render(
      this.dimensions.state,
      this.snake.state,
      lastApple ?? this.apple,
      lastTail,
    );
  }

  private send(e: AppEvent, score: boolean) {
    this.listeners[e].forEach(f =>
      f({
        apple: this.apple,
        dimensions: {
          height: this.dimensions.state.height,
          width: this.dimensions.state.width,
        },
        direction: this.direction.state.current,
        snake: this.snake.state,
        score,
      }),
    );
  }

  public listen(e: AppEvent, f: AppEventHandler) {
    this.listeners[e].push(f);
    return () => {
      this.listeners[e].includes(f) &&
        this.listeners[e].splice(this.listeners[e].indexOf(f), 1);
    };
  }

  public stop() {
    this.clock.stop();
    this.aborter.abort();
    this.listeners = { reset: [], tick: [], score: [] };
  }
}
