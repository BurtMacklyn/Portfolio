import { HandlerContext } from '$fresh/server.ts';
import { jokes } from '../../../lib/jokes.ts';
import { sendJoke } from './index.ts';

export const handler = (req: Request, ctx: HandlerContext): Response => {
  return sendJoke(jokes[new Date().getDate() % jokes.length], req);
};
