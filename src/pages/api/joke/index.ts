import jokes from '@/pages/api/joke/jokes.json' assert { type: 'json' };
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  res.status(200).send(getJoke('random').content);
}

export function getJoke(type: 'daily' | 'random') {
  // prettier-ignore
  switch (type) {
    case 'daily': return jokes[new Date().getDate() % jokes.length];
    case 'random': return jokes[Math.floor(Math.random() * jokes.length)];
  }
}
