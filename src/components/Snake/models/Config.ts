import { color } from '@/config/style';

export interface GameConfig {
  animate: boolean;
  scaleToWindow: boolean;
  animationDurationOfFrame: number;
  grid: boolean;
  gridColor: string;
  snakeColor: string;
  appleColor: string;
  tickRate: number;
}

export function CfgBuilder(cfg?: Partial<GameConfig>): GameConfig {
  const def: GameConfig = {
    animate: true,
    scaleToWindow: true,
    animationDurationOfFrame: 1,
    grid: true,
    gridColor: '#040404',
    snakeColor: color('100'),
    appleColor: color('primary'),
    tickRate: 100,
  };

  return { ...def, ...cfg };
}
