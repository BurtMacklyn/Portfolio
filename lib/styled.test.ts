import * as t from 'testing';

import { styled } from './styled.ts';

Deno.test('returns input', async ({ step }) => {
  t.assertEquals(`a`, styled`a`);
  t.assertEquals(`a${'b'}`, styled`a${'b'}`);
});
