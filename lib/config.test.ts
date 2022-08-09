import * as t from 'testing';
import { email as validateEmail } from 'validate-email';

import { email, emailAddress, lastUpdated, margin, maxWidth, version } from './config.ts';

Deno.test('margin', () => {
  t.assertExists(margin, 'margin exists');
  t.assert(typeof margin === 'string', 'margin is a string');
});

Deno.test('version', () => {
  t.assertExists(version, 'version exists');
  t.assert(typeof version === 'string', 'version is a string');
});

Deno.test('lastUpdated', () => {
  t.assertExists(lastUpdated, 'lastUpdated exists');
  t.assert(typeof lastUpdated === 'string', 'lastUpdated is a string');
});

Deno.test('emailAddress', () => {
  t.assertExists(emailAddress, 'emailAddress exists');
  t.assert(typeof emailAddress === 'string', 'emailAddress is a string');
  t.assert(validateEmail(emailAddress), 'emailAddress is a valid email');
});

Deno.test('email', () => {
  t.assertExists(email, 'email exists');
  t.assert(typeof email === 'string', 'email is a string');
  t.assert(validateEmail(email.split(':')[1]), 'email is a valid email');
  t.assert(email.startsWith('mailto:'), 'email starts with "mailto:"');
});

Deno.test('maxWidth', () => {
  t.assertExists(maxWidth, 'maxWidth exists');
  t.assert(typeof maxWidth === 'string', 'maxWidth is a string');
  t.assertNotEquals(maxWidth.replaceAll(/[r]em|px/gi, ''), maxWidth, 'maxWidth is rem/em/px');
  t.assert(+maxWidth.replaceAll(/[r]em|px/gi, '') > 0, 'maxWidth is a number');
});
