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

          const game = new Game(
            canvas,
            CfgBuilder({ tickRate: 1, animate: false }),
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
                if (!next) {
                  controller.input(panic(dimensions, direction, snake, total));
                  return;
                }
                if (next === snake.at(-1)) {
                  next = path.shift();
                  if (!next) {
                    controller.input(
                      panic(dimensions, direction, snake, total),
                    );
                    return;
                  }
                }
              }

              if (
                !next ||
                evaluatePosition(next, dimensions, snake, total, false) < 0.5
              ) {
                console.log('Switching');
                path = [];
                controller.input(panic(dimensions, direction, snake, total));
                return;
              }

              let dir = Snake.reverseLocate(next, snake.at(-1)!);

              if (!dir) {
                dir = panic(dimensions, direction, snake, total);
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
) {
  const head = snake.at(-1)!;
  const [hx, hy] = head.split(':').map(x => +x);
  const _neighbors: Coordinate[] = [];
  if (hx - 1 >= 0 && direction !== Direction.Right)
    _neighbors.push(`${hx - 1}:${hy}`);
  if (hy - 1 >= 0 && direction !== Direction.Down)
    _neighbors.push(`${hx}:${hy - 1}`);
  if (hx + 1 < dimensions.width && direction !== Direction.Left)
    _neighbors.push(`${hx + 1}:${hy}`);
  if (hy + 1 < dimensions.height && direction !== Direction.Up)
    _neighbors.push(`${hx}:${hy + 1}`);

  const neighbors = _neighbors.filter(
    neighbor => !snake.includes(neighbor as any),
  );

  const pairs: [string, number][] = [];

  for (const neighbor of neighbors) {
    const coverage = evaluatePosition(neighbor, dimensions, snake, total, true);
    pairs.push([neighbor, coverage]);
    if (coverage < 0.5) continue;

    const dir = Snake.reverseLocate(neighbor as any, head);
    if (dir) {
      return dir;
    }
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

function evaluatePosition(
  position: Coordinate,
  dimensions: any,
  snake: Coordinate[],
  total: number,
  panicking: boolean,
) {
  const snakeLength = snake.length;
  const reachable = snake.slice(0);
  function findNeighbors(position: Coordinate) {
    const [x, y] = position.split(':').map(x => +x);
    const _neighbors: Coordinate[] = [];

    if (x - 1 >= 0) _neighbors.push(`${x - 1}:${y}`);
    if (y - 1 >= 0) _neighbors.push(`${x}:${y - 1}`);
    if (x + 1 < dimensions.width) _neighbors.push(`${x + 1}:${y}`);
    if (y + 1 < dimensions.height) _neighbors.push(`${x}:${y + 1}`);

    const neighbors: Coordinate[] = _neighbors.filter(
      neighbor => !reachable.includes(neighbor),
    );

    const cov = (reachable.length - snakeLength) / (total - snakeLength);

    for (const n of neighbors) {
      reachable.push(n);
      if (cov >= 0.6 && !panicking) return cov;
      if (cov >= 0.8 && panicking) return cov;
      findNeighbors(n);
    }
  }
  findNeighbors(position);
  return (reachable.length - snakeLength) / (total - snakeLength);
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
  parent: Coordinate | null | undefined;
  f?: number;
  g?: number;
};

function astar(
  apple: Coordinate,
  snake: Coordinate[],
  dimensions: AppEventPayload['dimensions'],
): Coordinate[] | null {
  const board = new Array<Node[]>(dimensions.width);

  for (let x = 0; x < dimensions.width; x++) {
    const col = new Array<Node>(dimensions.height);
    for (let y = 0; y < dimensions.height; y++) {
      col[y] = {
        blocked: false,
        checked: false,
        parent: NullParentEnum.NotChecked,
        x,
        y,
      };
    }
    board[x] = col;
  }

  const [startX, startY] = snake
    .at(-1)!
    .split(':')
    .map(n => +n);
  const [targetX, targetY] = apple.split(':').map(n => +n);

  const start: Node = {
    x: startX,
    y: startY,
    blocked: true,
    checked: true,
    f: 0,
    g: heuristic(startX, startY, targetX, targetY),
    parent: NullParentEnum.IsBaseNode,
  };

  board[startX][startY] = start;

  for (const segment of snake) {
    const [_x, _y] = segment.split(':');
    const x = +_x;
    const y = +_y;
    board[x][y].blocked = true;
  }

  /* g, f, x, y */
  const queue: [number, number, number, number][] = [
    [start.g!, start.f!, start.x, start.y],
  ];

  while (queue.length) {
    const current = queue.shift()!;
    const [_, currentF, currentX, currentY] = current;

    if (currentX === targetX && currentY === targetY) {
      return traceRoute(board, targetX, targetY);
    }

    board[currentX][currentY].checked = true;

    const neighbors: (Node | undefined)[] = [
      board[currentX + 1]?.[currentY],
      board[currentX]?.[currentY + 1],
      board[currentX - 1]?.[currentY],
      board[currentX]?.[currentY - 1],
    ];

    for (const neighbor of neighbors) {
      if (!neighbor || neighbor.blocked) continue;

      const f = currentF + 1;
      const h = heuristic(neighbor.x, neighbor.y, targetX, targetY);

      const neighborNode: Node = {
        blocked: false,
        x: neighbor.x,
        y: neighbor.y,
        checked: true,
        parent: `${currentX}:${currentY}`,
        f,
        g: f + h,
      };

      if (board[neighborNode.x][neighborNode.y].checked) {
        if (neighborNode.g! < board[neighborNode.x][neighborNode.y].g!) {
          neighborNode.checked = true;
          board[neighborNode.x][neighborNode.y] = neighborNode;
        }
      } else {
        const index = searchGVal(queue, [
          neighborNode.g!,
          neighborNode.f!,
          neighborNode.x,
          neighborNode.y,
        ]);
        if (Number.isInteger(index)) {
          queue.splice(index, 0, [
            neighborNode.g!,
            neighborNode.f!,
            neighborNode.x,
            neighborNode.y,
          ]);
        }
        board[neighborNode.x][neighborNode.y] = neighborNode;
      }
    }
  }

  return null;
}

function traceRoute(
  board: Node[][],
  targetX: number,
  targetY: number,
): Coordinate[] | null {
  const path = new Array<Coordinate>();

  let current = board[targetX][targetY];

  while (current?.parent) {
    path.unshift(`${current.x}:${current.y}`);

    if (current.parent === NullParentEnum.IsBaseNode) {
      return path;
    }

    let [_pX, _pY] = current.parent.split(':');
    let parentX = +_pX;
    let parentY = +_pY;
    current = board[parentX][parentY];

    if (current.parent === NullParentEnum.IsBaseNode) {
      path.unshift(`${current.x}:${current.y}`);
      return path;
    }
  }

  return null;
}

function heuristic(x_0: number, y_0: number, x_1: number, y_1: number): number {
  // prettier-ignore
  return Math.sqrt(  ((x_0 - x_1) ** 2) + ((y_0 - y_1) ** 2)  )
}

function searchGVal(
  arr: [number, number, number, number][],
  e: [number, number, number, number],
) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] >= e[0]) return i;
  }
  return arr.length;
}
