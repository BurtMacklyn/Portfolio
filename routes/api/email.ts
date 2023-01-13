import { config } from 'config';

export const handler = (req: Request): Response => {
  if (req.method === 'GET') return new Response(config.email);
  return new Response(null, { status: 406 });
};
