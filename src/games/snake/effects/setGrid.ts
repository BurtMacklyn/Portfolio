import { BOX_SIZE } from '../constants';

export function setGrid(grid: React.RefObject<HTMLDivElement>) {
  return () => {
    let width = '';
    let height = '';

    for (let i = 0; i < Math.floor(window.innerWidth / BOX_SIZE); i++) {
      width += BOX_SIZE + 'px ';
    }

    for (let i = 0; i < Math.floor(window.innerHeight / BOX_SIZE) - 1; i++) {
      height += BOX_SIZE + 'px ';
    }

    grid.current!.style.gridTemplateColumns = width;
    grid.current!.style.gridTemplateRows = height;
  };
}
