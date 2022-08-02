import { emailAddress } from '../../lib/config.ts';

export const handler = (req: Request): Response => {
  if (req.method === 'GET') return new Response(emailAddress);
  return new Response(null, { status: 406 });
};
