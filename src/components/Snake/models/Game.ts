import { AppEvent, AppEventHandler, Coordinate } from '../types';
import { Apple } from './Apple';
import { Clock } from './Clock';
import { GameConfig } from './Config';
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
    private cfg: GameConfig,
    private controller: Controller,
  ) {
    this.dimensions = new Dimensions(cfg.parent);
    this.aborter = new AbortController();
    this.renderer = new Renderer(element);
    this.listeners = { reset: [], score: [], tick: [] };

    this.snake = new Snake(this.dimensions);
    this.apple = Apple.random(this.dimensions.state, this.snake.state);
    this.direction = new CurrentDirection(this.controller);

    this.clock = new Clock(() => this.tick(), cfg.tickRate);

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

    if (newPosition === null) {
      if (!safety) {
        await Clock.wait(50);
        return await this.tick(true);
      } else {
        this.snake = new Snake(this.dimensions);
        this.apple = Apple.random(this.dimensions.state, this.snake.state);
        this.direction = new CurrentDirection(this.controller);

        this.send('reset');
      }
    } else {
      if (newPosition === this.apple) {
        increment = true;
      }
    }

    if (!increment) this.snake.shift();

    this.send('tick');

    const r = this.renderer.render(
      this.conf,
      this.dimensions.state,
      this.snake.state,
      this.apple,
      increment,
    );

    if (increment) {
      this.apple = Apple.random(this.dimensions.state, this.snake.state);
    }

    await r;
  }

  public async rerender() {
    return this.renderer.render(
      { ...this.cfg, animate: false },
      this.dimensions.state,
      this.snake.state,
      this.apple,
      false,
    );
  }

  public increment() {
    const tail = this.snake.state[0];
    this.snake.state.unshift(tail);
  }

  private get conf() {
    return this.cfg;
  }

  private send(e: AppEvent) {
    this.listeners[e].forEach(f =>
      f({
        apple: this.apple,
        dimensions: {
          height: this.dimensions.state.height,
          width: this.dimensions.state.width,
        },
        direction: this.direction.state.current,
        snake: this.snake.state,
        config: this.cfg,
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

  public config(cfg: Partial<GameConfig>) {
    this.cfg = { ...this.cfg, ...cfg };
  }

  public getConfigKey<K extends keyof GameConfig>(key: K): GameConfig[K] {
    return this.cfg[key];
  }

  public getConfig(): GameConfig {
    return this.cfg;
  }
}
