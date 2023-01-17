import { style } from '@/config/style';

export function rem<T extends Space>(px: T) {
  return `${px / 16}rem` as `${T}px`;
}

export function em<T extends number>(px: T) {
  return `${px / 16}em` as `${T}px`;
}

export function percent<T extends number>(pct: T) {
  return `${pct}%` as `${T}%`;
}

export function variable<T extends string>(v: T) {
  return `var(--${v})` as `var(--${T})`;
}

export function opacity<T extends string>(color: T, percentage: number) {
  return (color +
    Math.round(percentage * 255)
      .toString(16)
      .padStart(2, '0')) as `${T}**`;
}

export type Space =
  | 1
  | 2
  | 4
  | 6
  | 8
  | 12
  | 16
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 72
  | 80
  | 96
  | 128
  | 144
  | 196
  | 256
  | 384
  | 512
  | 640
  | 768
  | 896
  | 1200
  | 1400
  | 1800
  | 2048;
