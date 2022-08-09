import * as t from 'testing';

import { jokes } from './jokes.ts';

Deno.test('is an array of jokes', async ({ step }) => {
  t.assertInstanceOf(jokes, Array, 'Jokes is an array');
  t.assertExists(jokes[0], 'Jokes contains at least one joke');
});
