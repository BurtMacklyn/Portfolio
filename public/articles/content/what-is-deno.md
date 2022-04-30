# Deno. What is it?

Recently, Deno has been gaining a lot of popularity, leaving some people
confused as to what it is.

##### 

## What

If you’ve heard of Node JS, Deno won’t be too difficult to pick up. In short,
it’s a modern Javascript runtime that is secure by default. It’s like Node, but
with some pretty awesome features. For example, it:

- Contains a built-in Typescript compiler; compilers Typescript code within
  runtime to simplify development.
- Secure by default, not allowing access to the file system, network,
  environment variables, etc. unless specified.
- Simplified module imports

Furthermore, Node was created in 2009 by Ryan Dahl. This was before all of the
modern ES6 features were released, so Node was not designed for promises,
async/await, typed arrays, etc.. Node, and its ecosystem had to adapt around the
ECMAScript standard along the years. This is where Deno differs; It was created
by the same person, Ryan Dahl, but in 2019. Because it is new, it was designed
for more modern ECMAScript features, and is far more forward-thinking.

In Ryan Dahl’s, _10 Things I Regret About Node.js_, he explains that he was
hurried to make Node, and his main focus was to have Javascript IO outside of
the browser. In Deno, however, this is not the case, because while Node was
designed to be a simple cli, although grew to be the backend solution to massive
companies, Deno was designed to _**be**_ a better Node.

##### 

## Installation

### Mac/Linux

```bash
curl -fsSL https://deno.land/install.sh | sh
```

### Windows

```bash
iwr https://deno.land/install.ps1 -useb | iex
```

### Homebrew

```bash
brew install deno
```

### Chocolatey

```bash
choco install deno
```

##### 

## Read Eval Print Loop

You can access the Deno REPL (Read Eval Print Loop) by running `deno` or
`deno repl`. You can use the Deno REPL as a handy coding playground to test code
snippets.

Here’s an example:

```bash
$ deno
Deno 1.17.2
exit using ctrl+d or close()
> 2 + 2
4
>
```

##### 

## Node Projects

With Node, to start a Typescript project you would:

1. Run `npm init -y`
2. Add `“type”: “module”,` to ./package.json
3. Create a `./src` directory for Typescript files
4. Create a `./bin` directory for output Javascript files
5. Create a `./tsconfig.json` file
6. Add `“rootDir”: “./src”` to ./tsconfig.json
7. Add `“outDir”: “./bin”` to ./tsconfig.json
8. Create a `./src/index.ts` file
9. Run `tsc -w` to start a Typescript compilation process
10. Write `console.log(”hello world”);` in ./src/index.ts
11. Run `node ./bin/index.js`

With every step followed correctly, you should get the output: `hello world` in
your console.

##### 

## Deno Projects

With Deno, it’s a lot simpler. To start:

1. Create file `./index.ts`
2. Write `console.log(”hello world”);` in ./index.ts
3. Run `deno run ./index.ts`

This will provide the same output as the Node version.

##### 

## Recap

By the two projects in both Node and Deno, it’s pretty easy to see how much
simpler Deno is in comparison to Node.
