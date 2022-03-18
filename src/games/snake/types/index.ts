import type React from 'react';

export type Segment = {
  x: number;
  y: number;
  id: number;
};

export type Direction = 'up' | 'down' | 'left' | 'right';

export type Setter<T> = React.Dispatch<React.SetStateAction<T>>;
export type Apple = {
  x: number;
  y: number;
};
