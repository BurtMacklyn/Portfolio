/* eslint-disable no-undef */

import { getAllBlogPaths } from './index';

test('jest logic works', () => {
  const result = getAllBlogPaths();

  expect(Array.isArray(result)).toBeTruthy();

  expect(result[0]).toBeDefined();
  expect(typeof result[0]).toBe('string');
});
