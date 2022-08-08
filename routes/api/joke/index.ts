import { HandlerContext } from 'fresh/server.ts';
import { jokes } from '../../../lib/jokes.ts';

export const handler = (req: Request, ctx: HandlerContext): Response => {
  return sendJoke(jokes[Math.floor(Math.random() * jokes.length)], req);
};

export const sendJoke = (joke: typeof jokes[number], req: Request) => {
  try {
    if (req.headers.get('accept')?.includes('brainfuck') || new URL(req.url).searchParams.get('bf') === 'true') return new Response(joke.bf);
  } catch {}

  return new Response(JSON.stringify(joke.content));
};
