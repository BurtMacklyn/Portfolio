import { RefObject, useEffect, useRef } from 'react';

export interface Props {
  game: (canvas: HTMLCanvasElement, resizeTo?: HTMLElement) => () => void;
  resizeTo: RefObject<HTMLElement> | 'window';
}

export const SnakeWrapper: React.FC<Props> = ({ resizeTo, game }) => {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvas.current) return;

    if (resizeTo === 'window') {
      const overflow = window.document.documentElement.style.overflow;
      const height = window.document.documentElement.style.height;
      const width = window.document.documentElement.style.width;

      window.document.documentElement.style.overflow = 'hidden';
      window.document.documentElement.style.width = '100vw';
      window.document.documentElement.style.height = '100vh';

      const stop = game(canvas.current);

      return () => {
        stop();
        window.document.documentElement.style.overflow = overflow;
        window.document.documentElement.style.width = width;
        window.document.documentElement.style.height = height;
      };
    }

    if (resizeTo.current) {
      return game(canvas.current, resizeTo.current);
    }

    return game(canvas.current);
  }, []);

  return <canvas ref={canvas}></canvas>;
};
