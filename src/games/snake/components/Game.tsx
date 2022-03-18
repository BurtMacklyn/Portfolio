// eslint-disable-next-line no-use-before-define
import React, { useEffect, useRef } from 'react';
import type { ReactChild } from 'react';
import style from '../snake.module.scss';
import { useWindowSize } from '~/hooks';
import * as fx from '../effects';

export function Game({ children, score }: { children: ReactChild | ReactChild[]; score: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const size = useWindowSize();

  useEffect(fx.setGrid(ref), [size]);

  return (
    <div className={style.App}>
      <p className={style.score}>Score: {score}</p>
      <div className={style.grid} ref={ref}>
        {children}
      </div>
    </div>
  );
}
