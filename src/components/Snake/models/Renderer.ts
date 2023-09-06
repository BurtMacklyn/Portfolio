import { Coordinate } from '../types';
import { Clock } from './Clock';
import { Dimensions } from './Dimensions';
import { Snake } from './Snake';

export class Renderer {
  private frameRate: number;
  private frameAmt: number;
  private duration: number;
  private relativeDuration: number;
  private tickSpeed: number;

  public static parent: string = 'body';

  private ctx: CanvasRenderingContext2D;

  constructor(
    canvas: HTMLCanvasElement,
    speed: number,
    private palette: { apple: string; snake: string },
  ) {
    this.tickSpeed = Math.max(1, Math.min(speed, 10000));
    this.relativeDuration = Math.max(0, Math.min(1, 1));

    this.duration = this.tickSpeed * this.relativeDuration;

    this.frameRate = Math.max(
      1,
      Math.min(4 * Math.log2(this.duration) - 12, 60),
    );
    this.frameAmt = Math.max(
      1,
      Math.min(Math.round(this.duration * (1 / this.frameRate)), 100),
    );

    this.ctx = canvas.getContext('2d')!;
  }

  public async render(
    d: Dimensions['state'],
    snake: Snake['state'],
    apple: Coordinate,
    lastTail: Coordinate | undefined,
  ) {
    this.ctx.canvas.height = d.heightTotal;
    this.ctx.canvas.width = d.widthTotal;

    this.ctx.canvas.style.transformOrigin = '0 0';
    this.ctx.canvas.style.transform = `scaleY(${
      window.innerHeight / d.heightTotal
    }) scaleX(${window.innerWidth / d.widthTotal})`;

    // Clear the canvas
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    const [ax, ay] = apple.split(':').map(c => +c);
    this.drawBox(ax, ay, this.palette.apple, d);

    for (const segment of snake.slice(lastTail ? 1 : 0, -1)) {
      const [x, y] = segment.split(':').map(c => +c);
      this.drawBox(x, y, this.palette.snake, d);
    }

    await Promise.all([
      this.animateHead(snake, d),
      lastTail ? this.animateTail(snake, d, lastTail) : null,
    ]);
  }

  private async animateHead(snake: Snake['state'], d: Dimensions['state']) {
    const [headX, headY] = snake
      .at(-1)!
      .split(':')
      .map(x => +x);
    const [beforeHeadX, beforeHeadY] = snake
      .at(-2)!
      .split(':')
      .map(x => +x);

    const diffX = headX - beforeHeadX;
    const diffY = headY - beforeHeadY;

    await this.loop(i => {
      const progress = i / this.frameAmt;
      this.drawBox(
        beforeHeadX + diffX * progress,
        beforeHeadY + diffY * progress,
        this.palette.snake,
        d,
      );
    });

    this.drawBox(headX, headY, this.palette.snake, d);
  }

  private async animateTail(
    snake: Snake['state'],
    d: Dimensions['state'],
    lastTail: Coordinate,
  ) {
    const [tailX, tailY] = snake
      .at(0)!
      .split(':')
      .map(x => +x);
    const [lastTailX, lastTailY] = lastTail.split(':').map(x => +x);

    const diffX = lastTailX - tailX;
    const diffY = lastTailY - tailY;

    this.drawBox(tailX, tailY, this.palette.snake, d);

    await this.loop(i => {
      const progress = i / this.frameAmt;
      const lastProgress = Math.min(i - 1, 0) / this.frameAmt;
      this.clearBox(
        lastTailX - diffX * lastProgress,
        lastTailY - diffY * lastProgress,
        d,
      );
      this.drawBox(
        lastTailX - diffX * progress,
        lastTailY - diffY * progress,
        this.palette.snake,
        d,
      );
    });
  }

  private drawBox(x: number, y: number, color: string, d: Dimensions['state']) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(
      x * d.widthUnit,
      y * d.heightUnit,
      d.widthUnit,
      d.heightUnit,
    );
  }

  private clearBox(x: number, y: number, d: Dimensions['state']) {
    this.ctx.clearRect(
      x * d.widthUnit,
      y * d.heightUnit,
      d.widthUnit,
      d.heightUnit,
    );
  }

  private async loop(f: (frame: number) => void, i: number = 1): Promise<void> {
    if (i > this.frameAmt) return;

    await Promise.all([f(i), Clock.wait(this.duration / this.frameAmt)]);
    return this.loop(f, i + 1);
  }
}
