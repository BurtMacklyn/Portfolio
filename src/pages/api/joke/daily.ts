import { getJoke } from '@/utils/getJoke';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  res.status(200).send(getJoke('daily').content);
}
