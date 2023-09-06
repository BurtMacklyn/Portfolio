import { useEffect, useRef } from 'react';

export interface Props {
  game: (canvas: HTMLCanvasElement) => () => void;
}

export const Snake: React.FC<Props> = props => {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvas.current) return;

    let stop = props.game(canvas.current);
    const overflow = window.document.documentElement.style.overflow;
    const height = window.document.documentElement.style.height;
    const width = window.document.documentElement.style.width;

    window.document.documentElement.style.overflow = 'hidden';
    window.document.documentElement.style.width = '100vw';
    window.document.documentElement.style.height = '100vh';

    return () => {
      stop();
      window.document.documentElement.style.overflow = overflow;
      window.document.documentElement.style.width = width;
      window.document.documentElement.style.height = height;
    };
  }, []);

  return <canvas ref={canvas}></canvas>;
};
