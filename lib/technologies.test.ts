import * as t from 'testing';

import { technologies } from './technologies.ts';

Deno.test('is an array of technologies', async ({ step }) => {
  t.assertInstanceOf(technologies, Array, 'Technologies is an array');
  t.assertExists(technologies[0], 'Technologies contains at least one technologies');
});
