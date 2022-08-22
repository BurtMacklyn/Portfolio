import { jokes } from 'lib/jokes.ts';

export function useJoke(type: JokeType) {
  // prettier-ignore
  switch (type) {
    case JokeType.Temporal: return jokes[new Date().getDate() % jokes.length];
    case JokeType.Random: return jokes[Math.floor(Math.random() * jokes.length)];
  }
}

export enum JokeType {
  Random,
  Temporal,
}
