import { HandlerContext } from 'fresh/server.ts';
import { JokeType, useJoke } from 'hooks/useJoke.ts';

export const handler = (req: Request, ctx: HandlerContext): Response => {
  return sendJoke(useJoke(JokeType.Random), req);
};

export const sendJoke = (joke: ReturnType<typeof useJoke>, req: Request) => {
  try {
    if (req.headers.get('accept')?.includes('brainfuck') || new URL(req.url).searchParams.get('bf') === 'true') return new Response(joke.bf);
  } catch {}

  return new Response(JSON.stringify(joke.content));
};
