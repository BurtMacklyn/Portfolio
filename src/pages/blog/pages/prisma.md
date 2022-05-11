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

### Recommendation

If using VSCode, you should install the prisma extension for language support.

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

### Get Started

In each project, that you incorporate prisma into, once you installed the CLI,
run:

```bash
yarn add @prisma/client
```

Or with npm,

```bash
npm i @prisma/client
```

Afterwards, run

```bash
prisma init
```

This will setup the necessary files to start with prisma. After this step, setup
your database provider in the `schema.prisma` file. For something like Postgres,
you'll have to start a Postgres server and pass the connection URL, which should
look something like this:
`postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public`.

Alternatively, on a smaller scale, you can use sqlite. This can be done by
creating a `my-database.sqlite`, (preferably in the `./prisma` directory). Once
created, in the `.env` file, the `DATABASE_URL` property should default to a
postgres connection URL, change this to `file://path/to/my-database.sqlite`.
Afterwards, open the `schema.prisma` file and change `provider` to `sqlite`.

### Models

Once everything is set up, you can start writing prisma code! Models in prisma
are very similar to interfaces in Typescript, and similar langauges. To write a
simple structure where the only data type you store are users, you can write

```prisma
model User {
  id Int @id
}
```

Every model needs a property with the `@id` parameter, the most simple type
being a number. This model is inefficient, because you'll have to manually
increment each ID when you create a user. Lucky enough, there is a fix for that:

```prisma
model User {
  id Int @id @default(autoincrement())
}
```

Adding the `@default(autoincrement())` portion allows the database to control
the ID values. Aditionally, it is important to mark any unique value with the
`@unique` parameter. Not only does this tell the database that there shouldn't
be two `id` fields that are equal to each other, but it also shows developers
ways to retrieve data with the `findUnique()` function.

```prisma
model User {
  id Int @id @default(autoincrement()) @unique
}
```

Instead of integer ID values, you can also use strings, more specifically, UUIDs
like so.

```prisma
model User {
  id String @id @unique @default(uuid())
}
```

### Relation

Relating models in prisma is pretty easy, first you need your two models:

```prisma
model User {
  id String @id @unique @default(uuid())
}

model Profile {
  id String @id @unique @default(uuid())
}
```

Then, in the `Profile` model, add a field called `userId` of type `String` (the
same type as the User's `id` field) with the `@unique` parameter to ensure that
no profile is assigned to two users.

```prisma
model User {
  id String @id @unique @default(uuid())
}

model Profile {
  id String @id @unique @default(uuid())
  userId String @unique
}
```

Then, add the `profile` field to the User model.

```prisma
model User {
  id String @id @unique @default(uuid())
  profile Profile?
}

model Profile {
  id String @id @unique @default(uuid())
  userId String @unique
}
```

To connect the two, in the Profile model, add a `user` field of the type `User`.
The `@relation` parameter will connect the Profile's `userId` to a User with an
`id` that matches.

```prisma
model User {
  id String @id @unique @default(uuid())
  profile Profile?
}

model Profile {
  id String @id @unique @default(uuid())
  userId String @unique
  user   User   @relation(fields: [userId], references: [id])
}
```

### Generation

Once you've finished writing the `schema.prisma` file, run:

```bash
prisma generate
```

This will generate the types that match your models, in this example, the `User`
and `Profile` types.

As well, the following command will push your schema to your database, and
update it accordingly.

```bash
prisma db push
```

### Using it in code

Finally, in your typescript or javascript file, add the following snippet to the
top:

```ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
```

Now, the journey is yours, prisma provides IntelliSense, so it's very intuitve
to see what each function does.

Happy Hacking.
