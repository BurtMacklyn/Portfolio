import React from 'react';
import type { ReactChild } from 'react';
import style from '../snake.module.scss';

export const Game = React.forwardRef(({ children, score }: { children: ReactChild | ReactChild[]; score: number }, ref: React.ForwardedRef<HTMLDivElement>) => (
  <div className={style['App']}>
    <p className={style['score']}>Score: {score}</p>
    <div className={style['grid']} ref={ref}>
      {children}
    </div>
  </div>
));
