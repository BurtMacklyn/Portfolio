import { Coordinate, Direction } from '../types';
import { Clock } from './Clock';
import { Dimensions } from './Dimensions';
import { Snake } from './Snake';

export class Renderer {
  private frameRate: number;
  private frameAmt: number;
  private duration: number;
  private relativeDuration: number;
  private tickSpeed: number;

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

    const borderedSnake = snake.map((coord, i, a) => {
      const up = Snake.locate(Direction.Up, coord);
      const down = Snake.locate(Direction.Down, coord);
      const left = Snake.locate(Direction.Left, coord);
      const right = Snake.locate(Direction.Right, coord);
      const next = a[i + 1];
      const prev = a[i - 1];
      let borderUp = true;
      let borderDown = true;
      let borderLeft = true;
      let borderRight = true;
      if (next === up || prev === up) borderUp = false;
      if (next === down || prev === down) borderDown = false;
      if (next === left || prev === left) borderLeft = false;
      if (next === right || prev === right) borderRight = false;
      return {
        coord,
        borderUp,
        borderDown,
        borderLeft,
        borderRight,
      };
    });

    for (const segment of borderedSnake.slice(lastTail ? 1 : 0, -1)) {
      const [x, y] = segment.coord.split(':').map(c => +c);
      this.drawBox(x, y, this.palette.snake, d);
      if (segment.borderLeft)
        this.drawSingleBorder(x, y, Direction.Left, '#000', d);
      if (segment.borderRight)
        this.drawSingleBorder(x, y, Direction.Right, '#000', d);
      if (segment.borderUp)
        this.drawSingleBorder(x, y, Direction.Up, '#000', d);
      if (segment.borderDown)
        this.drawSingleBorder(x, y, Direction.Down, '#000', d);
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

    const direction = Snake.reverseLocate(snake.at(-1)!, snake.at(-2)!);

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
      if (direction)
        this.drawBorder(
          beforeHeadX + diffX * progress,
          beforeHeadY + diffY * progress,
          direction,
          '#000',
          d,
        );
    });

    this.drawBox(headX, headY, this.palette.snake, d);
    if (direction) this.drawBorder(headX, headY, direction, '#000', d);
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
    const next = snake.at(1)!;

    const direction = Snake.reverseLocate(snake.at(0)!, next)!;

    const diffX = lastTailX - tailX;
    const diffY = lastTailY - tailY;

    this.drawBox(tailX, tailY, this.palette.snake, d);
    this.drawBorder(tailX, tailY, direction, '#000', d);

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
      this.drawBorder(
        lastTailX - diffX * progress,
        lastTailY - diffY * progress,
        direction,
        '#000',
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

  private drawBorder(
    x: number,
    y: number,
    direction: Direction,
    color: string,
    d: Dimensions['state'],
  ) {
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = color;
    if (direction !== Direction.Right) {
      this.ctx.moveTo(x * d.widthUnit, y * d.heightUnit);
      this.ctx.lineTo(x * d.widthUnit, (y + 1) * d.heightUnit);
    }
    if (direction !== Direction.Left) {
      this.ctx.moveTo((x + 1) * d.widthUnit, y * d.heightUnit);
      this.ctx.lineTo((x + 1) * d.widthUnit, (y + 1) * d.heightUnit);
    }
    if (direction !== Direction.Up) {
      this.ctx.moveTo(x * d.widthUnit, (y + 1) * d.heightUnit);
      this.ctx.lineTo((x + 1) * d.widthUnit, (y + 1) * d.heightUnit);
    }
    if (direction !== Direction.Down) {
      this.ctx.moveTo(x * d.widthUnit, y * d.heightUnit);
      this.ctx.lineTo((x + 1) * d.widthUnit, y * d.heightUnit);
    }
    this.ctx.stroke();
  }

  private drawSingleBorder(
    x: number,
    y: number,
    direction: Direction,
    color: string,
    d: Dimensions['state'],
  ) {
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = color;
    if (direction === Direction.Left) {
      this.ctx.moveTo(x * d.widthUnit, y * d.heightUnit);
      this.ctx.lineTo(x * d.widthUnit, (y + 1) * d.heightUnit);
    } else if (direction === Direction.Right) {
      this.ctx.moveTo((x + 1) * d.widthUnit, y * d.heightUnit);
      this.ctx.lineTo((x + 1) * d.widthUnit, (y + 1) * d.heightUnit);
    } else if (direction === Direction.Down) {
      this.ctx.moveTo(x * d.widthUnit, (y + 1) * d.heightUnit);
      this.ctx.lineTo((x + 1) * d.widthUnit, (y + 1) * d.heightUnit);
    } else if (direction === Direction.Up) {
      this.ctx.moveTo(x * d.widthUnit, y * d.heightUnit);
      this.ctx.lineTo((x + 1) * d.widthUnit, y * d.heightUnit);
    }
    this.ctx.stroke();
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
