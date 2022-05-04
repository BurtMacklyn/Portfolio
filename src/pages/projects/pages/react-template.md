---
title: React Template
description: A template repository for React projects
timestamp: 3-12-22
tags:
  - scss
  - javascript
  - nodejs
  - react
  - template
  - typescript
  - vite
---

# React Template

Starter project in react. It uses TypeScript, Scss, Vite, Jest, Prettier, and
ESLint. You don't **_need_** to know all of these technologies to use it.

## Setup

```bash
$ mv .env.example .env # rename env file
$ npm install
$ npm run dev
```

## Jest

#### How-to

If you do not know how to use jest, see their
[Docs Page](https://jestjs.io/docs/getting-started), to learn more.

##### To write a test:

```ts
test('test name', () => {
  expect(<VALUE>).toEqual(<VALUE>);
});
```

###### Note: `test()`, `it()`, and `describe()` are all interchangeable, but `test()` is considered by jest to be a best practice.

##### Example test:

```ts
test("logic works correctly", () => {
  expect(0).toEqual(0);
});
```

Assuming you have a `jest.config.ts` or `jest.config.js` file, and jest
installed, run: `$ npx jest` to run all test suites.

## Vite

[Vite](https://github.com/vitejs/vite) is an extremely fast frontend
building/development tool. It is also super easy to learn how to use.

#### Upsides

Vite is

- Super fast
- Similar to webpack or liveserver
- Extremely simple

#### To remove

- Delete `vite.config.ts`
- Remove from `package.json`
  - `ts-node`
  - `@vitejs/plugin-react`
  - `vite`
  - `vite-tsconfig-paths`

## React

[React](https://github.com/facebook/react) is a frontend Javascript framework
(the best one), that simplifies development.

## TypeScript

[TypeScript](https://github.com/microsoft/TypeScript) is a superset of
JavaScript that introduces types.

When you use TypeScript with React, you can write JSX with TypeScript, called
TSX.

#### tsconfig.json

This template comes with very strict TypeScript settings. See the
[tsconfig docs](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

## SCSS

Scss is a superset of SCSS, that compiles down to CSS. With the `sass` npm
package, react can do this within runtime, so converting from CSS to SCSS is as
easy is switching the file extension.

Converting from Scss to Css is as easy as replacing file extensions and removing
the `sass` package from `package.json`.

### Support me!

[![Buy me a coffee](https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png)](https://www.buymeacoffee.com/cooperrunyE)
