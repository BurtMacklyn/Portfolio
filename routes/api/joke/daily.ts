import { HandlerContext } from 'fresh/server.ts';
import { JokeType, useJoke } from '../../../hooks/useJoke.ts';
import { sendJoke } from './index.ts';

export const handler = (req: Request, ctx: HandlerContext): Response => {
  return sendJoke(useJoke(JokeType.Temporal), req);
};
