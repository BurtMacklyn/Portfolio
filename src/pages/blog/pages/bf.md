---
title: Brainf**k... what?
timestamp: 5-3-22
warn: This page contains explicit profanity, (Brainf**k).
---

# Brainfuck

An esoteric programming language was built in September 1993 by Urban Müller.

## Installation

To install the interpreter, run

```
brew install brainfuck
```

## Usage

1. Create a file, called `myName.bf` and write brainfuck code.
2. Run `brainfuck ./myName.bf`

Alternatively, you can do one-line execution by running:

```
brainfuck -e 'YOUR_BRAINFUCK_CODE'
```

## The Basics

In Brainfuck, you are given an array of 30,000 indices. As well, you are given a
movable pointer that can be moved left and right along the array. The best way
to visualize this system is:

```
[0][0][0][0][0]
 ^
```

With this example, it's easier to visualize what is going on within the program.
To manage the data, you can move the pointer left or right, and increase or
decrease the current slot (that the pointer is pointing at). As well, you can
write the current value to stdout, as well as get a byte of data from stdin.

## Operations

Brainfuck is very simple, it has 8 characters that the interpreter can
understand, while all other characters, **including spaces** are ignored

| Character | C Equivalent                                 | Description                                                                   |
| --------- | -------------------------------------------- | ----------------------------------------------------------------------------- |
| Start     | `char array[30000] = {0}; char *ptr = array` | Moves the pointer one index to the left                                       |
| `<`       | `--ptr;`                                     | Moves the pointer one index to the left                                       |
| `>`       | `++ptr;`                                     | Moves the pointer one index to the right                                      |
| `.`       | `putchar(*ptr);`                             | Writes the contents of the current value (that is being pointed at) to stdout |
| `,`       | `*ptr = getchar();`                          | Accepts a byte of user input and writes it into the current position          |
| `+`       | `++*ptr;`                                    | Increases the value of the current position by 1                              |
| `-`       | `--*ptr;`                                    | Decreases the value of the current position by 1                              |
| `[`       | `while (*ptr) {`                             | Opens a while loop. More on loops below                                       |
| `]`       | `}`                                          | Closes a while loop                                                           |

## Basic Examples

Note, ASCII codes between 0-31 are special characters and aren't text, so the
output gets a little funky.

## Addition/Subtraction

Add 4, subtract 3, add 1, subtract 2 - This ends up as 0

```
++++---+--
```

## Moving the pointer

This increases 0 to have the value of three, then moves focus to index 1, adds
2, subtracts 1, moves to index 2, adds 2, then moves back to 1.

```
+++>++->++<
```

The end product would look like this:

```
[3][1][2][0][0]
    ^
```

Remember, these are the first 5 indices of 30,000

## Loops

Brainfuck loops act as while loops, create them with `[]`. In essence, while the
pointer's value is not equal to 0, it will continue

```
++[>+++<-]>.
```

This one is a pretty common loop, it adds 2 to the 0th index, then opens a loop
block. The initial `++` acts as the iteration amount because, in the loop, we
store the iteration variable in slot 1, and the data variable in slot 2. Every
iteration, it will move 1 to the right, add 3 to that value, move back to the
0th index (where the iteration is stored), and subtracts 1. This means that 2
times, it will add `3` to index 1, effectively doing the operation 2 * 3, which
is equal to 6.

After the brackets lie the portion `>.` which is in place because each loop
iteration returns to the previous index so the current index after the loop
finishes is `0`. Because of this, to read the value that we created in the loop,
we need to move 1 to the right, then read the value, which is equal to 6.

## Example

For example, a program to write `hi` would look something like this:

First, we need to know the ASCII codes of each character that we want to write.
The codes in this case are:

| Character | Code |
| --------- | ---- |
| "h"       | 104  |
| "i"       | 105  |

At this point, I like to write out an array of the codes that need to be
written:

```
h   i
104 105
```

You'll notice, that we need to set the first value to 104, which can be daunting
if only writing `+` 104 times. Instead of doing this, you can use loops. In this
loop, we set index 0 (our iteration count) to 10, then specify that on every
iteration, add 10 to the index 1, then go back to index 0, and subtract 1. After
this loop, index 1 is left with the value `100`, so we add 4 to it, then print
the value.

```
++++++++++[>++++++++++<-]>++++.
```

## Methods of writing characters

After the first line comes a question you need to ask yourself:
`Do I want this to be readable or practical?` This is because there are two
paths to go down:

### Relative

After printing `h`, you can conveniently append `+.` to add 1 and write the
value, which will be `i`.

```
++++++++++[>++++++++++<-]>++++. +.
```

### Absolute

Alternatively, after printing the `h`, you add `[-]`, which sets the current
value to 0. This makes it so that every character you write (as long as it has
the reset afterward) has the same starting value, therefore writing the letter
`a` is always going to be the same. because of this, you can copy/paste sections
to write the character, without needing to figure out the way to turn `a` into
`b`

```
++++++++++[>++++++++++<-]>++++. [-]
++++++++++[>++++++++++<-]>+++++. [-]
```

### Recap

The relative principle focuses on how you can turn the last value, `a`, into a
new value `b` (by how many do you need to add/subtract from `a` to get to `b`).

The absolute principle focuses on how you get from 0 to `a` then 0 to `b`.

Generally, the absolute principle is better, because it's easier to work with,
however, it makes files larger. For example:

Absolute

```
+++[>++++[>++++++<-]<-]>>.[-]<<
+++++[>++++[>+++++<-]<-]++[>>+++++<<-]>>+.[-]<<
++++++[>+++++[>++++<-]<-]>>-.[-]<<

++++[>>++++++++<<-]>>.[-]<<

++++++[>+++++[>++++<-]<-]>>----.[-]<<
+++++[>++++[>+++++<-]<-]++[>>+++++<<-]>>+.[-]<<

++++[>>++++++++<<-]>>.[-]<<

++++++[>+++++[>++++<-]<-]>>-.[-]<<
++++++[>+++++[>++++<-]<-]>>------.[-]<<
+++++[>+++++[>++++<-]<-]>>+++++.[-]<<
++++++[>+++++[>++++<-]<-]>>----.[-]<<
+++++[>+++++[>++++<-]<-]>>+.[-]<<

++++[>>++++++++<<-]>>.[-]<<

+++++[>>++++++++<<-]>>-.[-]<<
+++++[>+++++[>++++<-]<-]>>++++.[-]<<
+++++[>+++++[>++++<-]<-]>>+.[-]<<
+++++[>+++++[>++++<-]<-]>>++++++++.[-]<<
+++++[>+++++[>++++<-]<-]>>++++++++.[-]<<
+++++[>++++[>+++++<-]<-]++[>>+++++<<-]>>+.[-]<<

++++[>>++++++++<<-]>>.[-]<<

++++++[>+++++[>++++<-]<-]>>-.[-]<<
+++++[>++++[>+++++<-]<-]++[>>+++++<<-]>>+.[-]<<
++++++[>+++++[>++++<-]<-]>>------.[-]<<
+++++[>+++++[>++++<-]<-]>>++++++++.[-]<<
+++++[>+++++[>++++<-]<-]>>.[-]<<
+++++[>>++++++++<<-]>>-.[-]<<

++++[>>++++++++<<-]>>.[-]<<

+++++[>+++++[>++++<-]<-]>>+++++.[-]<<
+++++[>++++[>+++++<-]<-]++[>>+++++<<-]>>.[-]<<

++++[>>++++++++<<-]>>.[-]<<

+++++[>+++++[>++++<-]<-]>>--.[-]<<
++++++[>+++++[>++++<-]<-]>>------.[-]<<
+++++[>+++++[>++++<-]<-]>>---.[-]<<
+++++[>+++++[>++++<-]<-]>>+++++.[-]<<
+++++[>++++[>+++++<-]<-]++[>>+++++<<-]>>.[-]<<
+++++[>+++++[>++++<-]<-]>>++.[-]<<
++++++[>+++++[>++++<-]<-]>>---.[-]<<
+++++[>+++++[>++++<-]<-]>>-.[-]<<
+++++[>++++[>+++++<-]<-]++[>>+++++<<-]>>---.[-]<<
```

Relative

```
+++[>++++[>++++++<-]<-]>>
.<+++[>+++++++++++++<-]>.
++++++++.
<<++++[>>>++++++++<<<-]>>>.
<---.
-----.
>.
<++++++++.
-----.
<<++[>>-----<<-]>>+.
<<++[>>+++++<<-]>>+.
<+++[>-----<-]>.
>.
+++++++.
<+++.
---.
+++++++.
.
+++.
>-------.
<++++++++.
--------.
+++.
------.
--------.
>+++++++.
-------.
<+++++.
+++++.
>.
<<<+++[>>----<<-]>>.
<<++++[>>++++<<-]>>.
<<++++[>>----<<-]>>-.
++++++++.
+++++.
--------.
<<+++[>>+++++<<-]>>.
<<+++[>>------<<-]>>.
<<++[>>++++<<-]>>.
```

In short, relative is far shorter, absolute is readable and scalable
