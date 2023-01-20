import type { NextApiRequest, NextApiResponse } from 'next';
import { getJoke } from './index';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  res.status(200).send(getJoke('daily'));
}
