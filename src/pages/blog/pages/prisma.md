---
title: Prisma, the ORM Made for Typescript
timestamp: 5-9-22
hidden: true
---

# Prisma

Prisma reminds me of the switch from Javascript to Typescript, you may have to
spend a couple minutes writing types and interfaces, but once you do, everything
works without error.

Prisma has been my database controller of choice for the past few months, and
every time I try to use something else, I get reminded of the pain of Javascript
development: "Does this work... no it didn't. Maybe if I remove this letter...
nope."

With the type safety that Prisma provides, you're able to tell the future, or
more specificaly, the Prisma Client tells the future to you. You can say goodbye
to running code every few seconds to test whether it works or not.

## Usage

Prisma has a few packages, namely the `prisma` package (the CLI), and the
`@prisma/client` package (what your code interacts with).

### Installation

To install the CLI, run:

Yarn

```bash
yarn global add prisma
```

Npm

```bash
npm i -g prisma
```

Alternatively, you can install it on a per-project basis by ommitting `global`
with yarn, and `-g` with npm.
