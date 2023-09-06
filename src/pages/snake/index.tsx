import { Snake as SnakeGame } from '@/components/Snake/Snake';
import { Game } from '@/components/Snake/models/Game';
import { RemoteController } from '@/components/Snake/models/RemoteController';
import { Snake } from '@/components/Snake/models/Snake';
import { AppEventPayload, Coordinate } from '@/components/Snake/types';

export default function PlaySnake() {
  return (
    <>
      <SnakeGame
        game={canvas => {
          const controller = new RemoteController();
          let path: Coordinate[] = [];

          const game = new Game(canvas, 1, controller);

          const unlisten = game.listen(
            'tick',
            async ({ apple, dimensions, direction, snake, score }) => {
              const path = astar({ apple, dimensions, direction, snake }) || [];
              const head = snake.at(-1)!;

              let next = path.shift();
              if (next === head) {
                next = path.shift();
              }

              if (!next) {
                console.log(`Empty path from ${head} to ${apple}`, snake);
                return;
              }

              const newDirection = Snake.reverseLocate(next, head);

              if (newDirection) {
                if (newDirection !== direction) controller.input(newDirection);
              } else {
                console.log(
                  `no direction from ${head} to ${next}`,
                  [next, ...path],
                  snake,
                );
              }
            },
          );

          game.start();

          return () => {
            unlisten();
            controller.stop();
            game.stop();
          };
        }}
      />
    </>
  );
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

function astar({
  apple,
  snake,
  dimensions,
}: AppEventPayload): Coordinate[] | null {
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
