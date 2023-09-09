import { Snake as SnakeGame } from '@/components/Snake/Snake';
import { CfgBuilder } from '@/components/Snake/models/Config';
import { Game } from '@/components/Snake/models/Game';
import { RemoteController } from '@/components/Snake/models/RemoteController';
import { Snake } from '@/components/Snake/models/Snake';
import {
  AppEventPayload,
  Coordinate,
  Direction,
} from '@/components/Snake/types';

// if (
//   !next ||
//   evaluatePosition(next, dimensions, snake) /
//     (dimensions.height * dimensions.width - snake.length) <
//     0.7
// ) {
//   return panic(apple, dimensions, direction, snake);
// }

export default function PlaySnake() {
  return (
    <>
      <SnakeGame
        game={canvas => {
          const controller = new RemoteController();
          let path: Coordinate[] = [];
          let offset = 0;

          const game = new Game(
            canvas,
            CfgBuilder({ tickRate: 10, animate: false }),
            controller,
          );

          const unlisten = game.listen(
            'tick',
            async ({ apple, dimensions, direction, snake }) => {
              let next = path.shift();
              const total = dimensions.height * dimensions.width - snake.length;

              if (!next) {
                path = astar(apple, snake, dimensions) || [];
                next = path.shift();
                offset++;
                if (!next) {
                  offset = 0;
                  controller.input(
                    panic(dimensions, direction, snake, total, offset),
                  );
                  return;
                }
                if (next === snake.at(-1)) {
                  next = path.shift();
                  offset++;
                  if (!next) {
                    offset = 0;
                    controller.input(
                      panic(dimensions, direction, snake, total, offset),
                    );
                    return;
                  }
                }
              }

              if (!next) {
                console.log('Switching');
                path = [];
                offset = 0;
                controller.input(
                  panic(dimensions, direction, snake, total, offset),
                );
                return;
              }

              let dir = Snake.reverseLocate(next, snake.at(-1)!);

              if (!dir) {
                dir = panic(dimensions, direction, snake, total, offset);
              }

              if (dir === direction) return;
              controller.input(dir);
            },
          );

          game.start();

          const rerender = () => game.rerender();
          const inc = (e: KeyboardEvent) => {
            if (e.key === 'i') game.increment();
          };

          window.addEventListener('resize', rerender);
          window.addEventListener('keydown', inc);

          return () => {
            window.removeEventListener('resize', rerender);
            window.removeEventListener('keydown', inc);
            unlisten();
            controller.stop();
            game.stop();
          };
        }}
      />
    </>
  );
}

function panic(
  dimensions: any,
  direction: Direction,
  snake: Coordinate[],
  total: number,
  offset: number,
) {
  const head = snake.at(-1)!;
  const [hx, hy] = head.split(':').map(x => +x);
  const _edges: Coordinate[] = [];
  if (hx - 1 >= 0 && direction !== Direction.Right)
    _edges.push(`${hx - 1}:${hy}`);
  if (hy - 1 >= 0 && direction !== Direction.Down)
    _edges.push(`${hx}:${hy - 1}`);
  if (hx + 1 < dimensions.width && direction !== Direction.Left)
    _edges.push(`${hx + 1}:${hy}`);
  if (hy + 1 < dimensions.height && direction !== Direction.Up)
    _edges.push(`${hx}:${hy + 1}`);

  const edges = _edges.filter(edge => !snake.includes(edge as any));

  const pairs: [string, number][] = [];
  const cutoff = (total - snake.length) * 0.9;
  const board = buildBoard(dimensions, snake);
  const [snkx, snky] = snake.at(0)!.split(':');
  board[+snkx][+snky].blocked = false;

  for (const edge of edges) {
    const [ex, ey] = edge.split(':');
    board[+ex][+ey].blocked = true;
    const avail = reachable(board, edge, snake, cutoff, offset);
    board[+ex][+ey].blocked = false;

    const cov = avail / (total - snake.length);
    pairs.push([edge, cov]);
    //     if (cov < 0.6) continue;
    //
    //     const dir = Snake.reverseLocate(edge as any, head);
    //     if (dir) {
    //       return dir;
    //     }
  }

  if (!pairs?.length) {
    return Direction.Right;
  }

  const bestVal = pairs
    ?.map(([_, a]) => a)
    .reduce((a, c) => (a > c ? a : c), 0);
  const [best, _] = pairs?.find(([n, v]) => (v === bestVal ? true : false))!;

  const dir = Snake.reverseLocate(best as any, head);
  if (dir) {
    return dir;
  }

  return Direction.Right;
}

function reachable(
  board: Node[][],
  n: Coordinate,
  snake: Coordinate[],
  cutoff?: number,
  ignore: number = -1,
) {
  const [_x, _y] = n.split(':');
  const reach = [board[+_x][+_y]];
  for (let i = 0; i < reach.length; i++) {
    const current = reach[i];
    for (const [x, y] of current.edges) {
      const edge = board[x][y];
      let isBlocked = snake.includes(`${x}:${y}`);

      if (ignore !== -1 && !Number.isNaN(edge.nth) && edge.nth! - ignore < 0)
        isBlocked = false;

      if (!isBlocked && !reach.includes(edge)) {
        reach.push(edge);
        if (cutoff && reach.length >= cutoff) return reach.length;
      }
    }
  }
  return reach.length;
}

const NullParentEnum = {
  IsBaseNode: null,
  NotChecked: undefined,
};

type Node = {
  x: number;
  y: number;
  blocked: boolean;
  checked: boolean;
  nth?: number;
  edges: [number, number][];
  parent?: Node;
  f?: number;
  g?: number;
};

function buildBoard(
  dimensions: AppEventPayload['dimensions'],
  snake: Coordinate[],
) {
  const board = new Array<Node[]>(dimensions.width);

  for (let x = 0; x < dimensions.width; x++) {
    board[x] = new Array<Node>(dimensions.height);
  }

  for (let x = 0; x < dimensions.width; x++) {
    for (let y = 0; y < dimensions.height; y++) {
      board[x][y] = {
        blocked: false,
        checked: false,
        parent: NullParentEnum.NotChecked,
        edges: [
          x + 1 < dimensions.width ? [x + 1, y] : (null as never),
          x - 1 >= 0 ? [x - 1, y] : (null as never),
          y + 1 < dimensions.height ? [x, y + 1] : (null as never),
          y - 1 >= 0 ? [x, y - 1] : (null as never),
        ].filter(n => !!n) as [number, number][],
        x,
        y,
      };
    }
  }

  let nth = 2;
  for (const segment of snake) {
    const [_x, _y] = segment.split(':');
    const x = +_x;
    const y = +_y;
    board[x][y].blocked = true;
    board[x][y].nth = nth;
    nth++;
  }

  return board;
}

function astar(
  apple: Coordinate,
  snake: Coordinate[],
  dimensions: AppEventPayload['dimensions'],
): Coordinate[] | null {
  const board = buildBoard(dimensions, snake);
  const [startX, startY] = snake
    .at(-1)!
    .split(':')
    .map(n => +n);
  const [targetX, targetY] = apple.split(':').map(n => +n);

  const start = board[startX][startY];
  start.checked = true;
  start.blocked = true;
  start.g = distance(startX, startY, targetX, targetY);

  const total = dimensions.width * dimensions.height;
  const queue: [number, number][] = [[start.x, start.y]];
  let last: Node | null = null;

  while (queue.length) {
    const [cx, cy] = queue.shift()!;
    const current = board[cx][cy];
    last = current;

    if (current.x === targetX && current.y === targetY) {
      return traceRoute(board[targetX][targetY]);
    }

    current.checked = true;

    const route = traceRoute(board[cx][cy]);

    if (!route) {
      console.log('no route');
      continue;
    }

    const cutoff = (total - snake.length) * 0.7;
    const snakeAtThisPoint = [...snake.slice(route.length), ...route];
    const avail = reachable(
      board,
      snakeAtThisPoint.at(-1)!,
      snakeAtThisPoint,
      cutoff,
      current.f,
    );

    // const cov = avail / (total - snake.length);

    if (avail < cutoff - 4) {
      board[cx][cy].checked = true;
      continue;
    }

    for (const [ex, ey] of current.edges) {
      const f = (current.f || 0) + 1;
      if (
        !board[ex][ey] ||
        (board[ex][ey].blocked && board[ex][ey].nth! - f! > 0)
      )
        continue;

      const h = distance(ex, ey, targetX, targetY);
      const g = f + h;

      if (board[ex][ey].checked) {
        if (g < board[ex][ey].g!) {
          board[ex][ey].f = f;
          board[ex][ey].g = g;
          board[ex][ey].parent = current;
        }
      } else {
        board[ex][ey].checked = true;
        board[ex][ey].f = f;
        board[ex][ey].g = g;
        board[ex][ey].parent = current;
        const index = searchGVal(board, queue, [ex, ey]);
        if (Number.isInteger(index)) {
          queue.splice(index, 0, [ex, ey]);
        } else queue.push([ex, ey]);
      }
    }
  }

  return traceRoute(last!);
}

function traceRoute(target: Node): Coordinate[] | null {
  const path = new Array<Coordinate>();

  let current = target;

  while (current?.parent) {
    path.unshift(`${current.x}:${current.y}`);

    if (current.parent === NullParentEnum.IsBaseNode) {
      return path;
    }

    current = current.parent;
  }

  return path;
}

function distance(x_0: number, y_0: number, x_1: number, y_1: number): number {
  // prettier-ignore
  return Math.sqrt(  ((x_0 - x_1) ** 2) + ((y_0 - y_1) ** 2)  )
}

function searchGVal(
  board: Node[][],
  arr: [number, number][],
  e: [number, number],
) {
  for (let i = 0; i < arr.length; i++) {
    const [ax, ay] = arr[i];
    const a = board[ax][ay];
    const en = board[e[0]][e[1]];
    if ((a.g || 0) >= (en.g || 0)) return i;
  }
  return arr.length;
}

function revSearchGVal(
  board: Node[][],
  arr: [number, number][],
  e: [number, number],
) {
  for (let i = 0; i < arr.length; i++) {
    const [ax, ay] = arr[i];
    const a = board[ax][ay];
    const en = board[e[0]][e[1]];
    if ((a.g || 0) < (en.g || 0)) return i;
  }
  return arr.length;
}
