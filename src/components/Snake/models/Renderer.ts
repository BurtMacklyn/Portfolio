import { Coordinate, Direction } from '../types';
import { Clock } from './Clock';
import { GameConfig } from './Config';
import { Dimensions } from './Dimensions';
import { Snake } from './Snake';

export class Renderer {
  private ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d')!;
  }

  static calculateTiming(cfg: GameConfig) {
    const tickSpeed = Math.max(1, Math.min(cfg.tickRate, 10000));
    const relativeDuration = Math.max(
      0,
      Math.min(cfg.animationDurationOfFrame, 1),
    );

    const duration = tickSpeed * relativeDuration;

    const frameRate = Math.max(1, Math.min(4 * Math.log2(duration) - 12, 24));
    const frameAmt = Math.max(
      1,
      Math.min(Math.round(duration * (1 / frameRate)), 100),
    );

    return { duration, frameAmt };
  }

  public async render(
    cfg: GameConfig,
    d: Dimensions['state'],
    snake: Snake['state'],
    apple: Coordinate,
    scored: boolean,
  ) {
    this.ctx.canvas.height = d.heightTotal;
    this.ctx.canvas.width = d.widthTotal;

    if (cfg.scaleToWindow) {
      this.ctx.canvas.style.transformOrigin = '0 0';
      this.ctx.canvas.style.transform = `scaleY(${
        (cfg.parent ? cfg.parent.clientHeight : window.innerHeight) /
        d.heightTotal
      }) scaleX(${
        (cfg.parent ? cfg.parent.clientWidth : window.innerWidth) / d.widthTotal
      })`;
    }

    await this.loop(progress => {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

      if (cfg.grid) {
        this.ctx.strokeStyle = cfg.gridColor;
        this.ctx.lineWidth = 1;

        for (let x = d.widthUnit; x < d.widthTotal; x += d.widthUnit) {
          this.ctx.moveTo(x, 0);
          this.ctx.lineTo(x, d.heightTotal);
        }

        for (let y = d.heightUnit; y < d.heightTotal; y += d.heightUnit) {
          this.ctx.moveTo(0, y);
          this.ctx.lineTo(d.widthTotal, y);
        }
        this.ctx.stroke();
      }

      const [ax, ay] = apple.split(':').map(c => +c);

      this.ctx.fillStyle = cfg.appleColor;
      this.ctx.fillRect(
        ax * d.widthUnit + 1,
        ay * d.heightUnit + 1,
        d.widthUnit - 2,
        d.heightUnit - 2,
      );

      this.ctx.fillStyle = cfg.snakeColor;

      snake.forEach((coord, i, a) => {
        const [_x, _y] = coord.split(':');
        let x = +_x * d.widthUnit + 1;
        let y = +_y * d.heightUnit + 1;
        let w = d.widthUnit - 2;
        let h = d.heightUnit - 2;

        const next = a[i + 1];

        if (next) {
          const direction = Snake.reverseLocate(next, coord);
          if (direction) {
            if (direction === Direction.Right) w += 2;
            if (direction === Direction.Down) h += 2;
            if (direction === Direction.Left) {
              w += 2;
              x -= 2;
            }
            if (direction === Direction.Up) {
              h += 2;
              y -= 2;
            }
          }
        } else {
          //  Is head
          const previous = a[i - 1]!;
          const direction = Snake.reverseLocate(coord, previous);
          if (direction === Direction.Right) w *= progress;
          if (direction === Direction.Down) h *= progress;
          if (direction === Direction.Left) {
            let wd = w * progress;
            w = wd;
            x += d.widthUnit - wd;
          }
          if (direction === Direction.Up) {
            let hd = h * progress;
            h = hd;
            y += d.heightUnit - hd;
          }
        }

        if (i === 0) {
          // Is tail
          if (scored) return;
          const direction = Snake.reverseLocate(next!, coord);
          if (direction === Direction.Left) w *= 1 - progress;
          if (direction === Direction.Up) h *= 1 - progress;
          if (direction === Direction.Right) {
            let wd = w * (1 - progress);
            w = wd;
            x += d.widthUnit - wd;
          }
          if (direction === Direction.Down) {
            let hd = h * (1 - progress);
            h = hd;
            y += d.heightUnit - hd;
          }
        }

        this.ctx.fillRect(x, y, w, h);
      });
    }, cfg);
  }

  private async loop(
    f: (frame: number) => void,
    cfg: GameConfig,
    i: number = 0,
  ): Promise<void> {
    if (!cfg.animate) {
      f(1);
      return;
    }

    const { duration, frameAmt } = Renderer.calculateTiming(cfg);

    if (i > frameAmt + 1) return;

    await Promise.all([f(i / frameAmt), Clock.wait(duration / frameAmt)]);
    return this.loop(f, cfg, i + 1);
  }
}
