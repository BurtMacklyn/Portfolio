import { Snake } from '@/components/Snake/Snake';
import { Game } from '@/components/Snake/models/Game';
import { KeyboardController } from '@/components/Snake/models/KeyboardController';

export default function PlaySnake() {
  return (
    <>
      <Snake
        game={canvas => {
          const controller = new KeyboardController();
          const game = new Game(canvas, 100, controller);
          game.start();

          return () => {
            controller.stop();
            game.stop();
          };
        }}
      />
    </>
  );
}
