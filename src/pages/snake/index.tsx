import { SnakeWrapper } from '@/components/Snake/SnakeWrapper';
import { loadAIGame } from '@/components/Snake/ai';

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
      <SnakeWrapper resizeTo="window" game={canvas => loadAIGame(canvas)} />
    </>
  );
}
