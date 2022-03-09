# h1 Heading :smile:

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Horizontal Rules

---

## Typographic replacements

- Lists
- [ ] todo
- [x] done

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,, -- ---

"Smartypants, double quotes" and 'single quotes'

## Emphasis

**This is bold text**

**This is bold text**

_This is italic text_

_This is italic text_

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

## Lists

Unordered

- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

4. You can use sequential numbers...
5. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"

```
Sample text here...
```

Syntax highlighting

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

```js
import style from './Page.module.scss';
import { Portfolio } from '~/components';
import ReactMarkdown, { uriTransformer } from 'react-markdown';
import type { ReactMarkdownOptions } from 'react-markdown/lib/react-markdown';
import emoji from 'emoji-dictionary';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { SpecialComponents } from 'react-markdown/lib/ast-to-react';
import type { NormalComponents } from 'react-markdown/lib/complex-types';
import { pallette } from '~/config';

export function Page({ content }: { content: string }) {
  return (
    <Portfolio>
      <Markdown>{content}</Markdown>
    </Portfolio>
  );
}

function Markdown(props: ReactMarkdownOptions) {
  console.log(dark);
  return (
    <div className={style.article}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} skipHtml={false} components={components}>
        {parseContent(props.children)}
      </ReactMarkdown>
    </div>
  );
}

function parseContent(content: string) {
  return content?.replace(/:\w+:/gi, (name) => emoji.getUnicode(name) || '');
}

const components: Partial<Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents> = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter style={d} children={String(children).replace(/\n$/, '')} language={match[1]} PreTag="div" {...props} />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

const d = {
  'code[class*="language-"]': {
    color: pallette.white,
    background: 'none',
    textShadow: '0 -.1em .2em black',
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: '1em',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    MozTabSize: '2',
    OTabSize: '2',
    tabSize: '2',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
  },
  'pre[class*="language-"]': {
    color: pallette.white,
    background: pallette.grey,
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: '1em',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    MozTabSize: '2',
    OTabSize: '2',
    tabSize: '2',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
  },
  ':not(pre) > code[class*="language-"]': {
    padding: '.15em .2em .05em',
    borderRadius: '.3em',
    // border: '.13em solid hsl(30, 20%, 40%)',
    boxShadow: '1px 1px .3em -.1em black inset',
    whiteSpace: 'normal',
  },
  comment: {
    color: 'hsl(30, 20%, 50%)',
  },
  prolog: {
    color: 'hsl(30, 20%, 50%)',
  },
  doctype: {
    color: 'hsl(30, 20%, 50%)',
  },
  cdata: {
    color: 'hsl(30, 20%, 50%)',
  },
  punctuation: {
    Opacity: '.7',
  },
  namespace: {
    color: '#D55FDE',
  },
  property: {
    color: 'hsl(350, 40%, 70%)',
  },
  tag: {
    color: 'hsl(350, 40%, 70%)',
  },
  boolean: {
    color: 'hsl(350, 40%, 70%)',
  },
  number: {
    color: 'hsl(350, 40%, 70%)',
  },
  constant: {
    color: 'hsl(350, 40%, 70%)',
  },
  symbol: {
    color: 'hsl(350, 40%, 70%)',
  },
  selector: {
    color: 'hsl(75, 70%, 60%)',
  },
  'attr-name': {
    color: 'hsl(75, 70%, 60%)',
  },
  string: {
    color: 'hsl(75, 70%, 60%)',
  },
  char: {
    color: 'hsl(75, 70%, 60%)',
  },
  builtin: {
    color: 'hsl(75, 70%, 60%)',
  },
  inserted: {
    color: 'hsl(75, 70%, 60%)',
  },
  operator: {
    color: 'hsl(40, 90%, 60%)',
  },
  entity: {
    color: 'hsl(40, 90%, 60%)',
    cursor: 'help',
  },
  url: {
    color: 'hsl(40, 90%, 60%)',
  },
  '.language-css .token.string': {
    color: 'hsl(40, 90%, 60%)',
  },
  '.style .token.string': {
    color: 'hsl(40, 90%, 60%)',
  },
  variable: {
    color: 'hsl(40, 90%, 60%)',
  },
  atrule: {
    color: 'hsl(350, 40%, 70%)',
  },
  'attr-value': {
    color: 'hsl(350, 40%, 70%)',
  },
  keyword: {
    color: 'hsl(350, 40%, 70%)',
  },
  regex: {
    color: '#e90',
  },
  important: {
    color: '#e90',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  deleted: {
    color: 'red',
  },
};

```

## Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

Right aligned columns

| Option |                                                               Description |
| -----: | ------------------------------------------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine |    engine to be used for processing templates. Handlebars is the default. |
|    ext |                                      extension to be used for dest files. |

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ 'title text!')

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)

## Plugins

The killer feature of `markdown-it` is very effective support of [syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).

### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.

### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O

### [\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++

### [\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==

::: warning _here be dragons_ :::
