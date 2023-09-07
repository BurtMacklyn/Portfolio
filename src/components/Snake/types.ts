import { GameConfig } from './models/Config';

export type Coordinate = `${number}:${number}`;

export enum Direction {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right',
}

export type AppEvent = 'tick' | 'score' | 'reset';
export type AppEventPayload = {
  snake: Coordinate[];
  apple: Coordinate;
  dimensions: { height: number; width: number };
  direction: Direction;
  config: GameConfig;
};
export type AppEventHandler = (data: AppEventPayload) => Promise<void>;
