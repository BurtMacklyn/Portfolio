import React from 'react';
import style from '../snake.module.scss';
import type { Apple } from '../types';

export const MakeApple = React.forwardRef(({ children: apple }: { children: Apple }, ref: React.ForwardedRef<HTMLDivElement>) => {
  return (
    <div
      ref={ref}
      className={style['apple']}
      style={{
        gridColumn: `${apple.x} / ${apple.x + 1}`,
        gridRow: `${apple.y} / ${apple.y + 1}`,
      }}></div>
  );
});
