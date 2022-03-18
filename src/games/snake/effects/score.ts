import type { Segment, Setter } from "../types";

export function score(snake: Segment[], setScore: Setter<number>) {
  return () => setScore(snake.length);
}