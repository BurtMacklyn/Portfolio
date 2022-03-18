import type React from 'react';

import { BOX_SIZE } from '../constants';

export function setGrid(grid: React.RefObject<HTMLDivElement>) {
  return () => {
    let width = '';
    let height = '';
    let totalwidth = 0;
    let totalheight = 0;

    for (let i = 0; i < Math.floor(window.innerWidth / BOX_SIZE); i++) {
      width += `${BOX_SIZE}px `;
    }

    for (let i = 0; i < Math.floor(window.innerHeight / BOX_SIZE) - 1; i++) {
      height += `${BOX_SIZE}px `;
    }

    for (let i = 0; i < Math.floor(window.innerWidth / BOX_SIZE); i++) {
      totalwidth += BOX_SIZE;
    }

    for (let i = 0; i < Math.floor(window.innerHeight / BOX_SIZE) - 1; i++) {
      totalheight += BOX_SIZE;
    }

    grid.current!.style.gridTemplateColumns = width;
    grid.current!.style.gridTemplateRows = height;
    grid.current!.style.height = `${totalheight}px`;
    grid.current!.style.width = `${totalwidth}px`;
  };
}
