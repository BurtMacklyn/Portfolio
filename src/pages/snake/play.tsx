import { SnakeWrapper } from '@/components/Snake/SnakeWrapper';
import { CfgBuilder } from '@/components/Snake/models/Config';
import { Game } from '@/components/Snake/models/Game';
import { KeyboardController } from '@/components/Snake/models/KeyboardController';

export default function PlaySnake() {
  return (
    <>
      <SnakeWrapper
        game={canvas => {
          const controller = new KeyboardController();
          const game = new Game(
            canvas,
            CfgBuilder({
              tickRate: 50,
              size: 25,
              grid: true,
              gridColor: '#222222',
              // animationDurationOfFrame: 0.25,
            }),
            controller,
          );
          game.start();

          const rerender = () => game.rerender();

          window.addEventListener('resize', rerender);

          return () => {
            window.removeEventListener('resize', rerender);
            controller.stop();
            game.stop();
          };
        }}
        resizeTo={'window'}
      />
    </>
  );
}
