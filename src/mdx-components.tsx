import type { MDXComponents } from 'mdx/types';
import { Code } from './components/Typography/Code';
import { Heading } from './components/Typography/Heading';
import { PageTitle } from './components/Typography/PageTitle';
import { Paragraph } from './components/Typography/Paragraph';
import { color } from './config/style';
import { rem } from './css';

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    ...components,
    h1: (props: any) => (
      <PageTitle
        {...props}
        style={{
          marginBottom: rem(32),
          paddingBottom: rem(12),
          marginTop: '.25em',
          borderBottom: `2px solid ${color('36')}`,
        }}>
        {props.children}
      </PageTitle>
    ),
    h2: (props: any) => (
      <Heading
        {...props}
        style={{
          fontSize: rem(36 as any),
          letterSpacing: '-0.03em',
          marginBottom: rem(32),
          paddingBottom: rem(16),
          marginTop: '.75em',
          borderBottom: `1px solid ${color('24')}`,
          color: color('80'),
        }}>
        {props.children}
      </Heading>
    ),
    h3: (props: any) => (
      <Heading
        {...props}
        style={{
          fontSize: rem(24),
          letterSpacing: '-0.03em',
          marginBottom: '.25em',
          marginTop: '.75em',
        }}>
        {props.children}
      </Heading>
    ),
    h4: (props: any) => (
      <Heading
        {...props}
        style={{
          fontSize: rem(18 as any),
          letterSpacing: '-0.03em',
          marginBottom: '.25em',
          marginTop: '.75em',
        }}>
        {props.children}
      </Heading>
    ),
    h5: (props: any) => (
      <Heading
        {...props}
        style={{
          fontSize: rem(16),
          letterSpacing: '-0.03em',
          marginBottom: '.125em',
          marginTop: '.75em',
        }}>
        {props.children}
      </Heading>
    ),
    h6: (props: any) => (
      <Heading
        {...props}
        style={{
          color: color('80'),
          fontSize: rem(16),
          letterSpacing: '-0.03em',
          marginBottom: '.25em',
          marginTop: '.75em',
          textTransform: 'uppercase',
        }}>
        {props.children}
      </Heading>
    ),
    p: (props: any) => (
      <Paragraph
        {...props}
        style={{
          fontWeight: 400,
          lineHeight: 1.25,
          marginBottom: '1em',
          marginTop: '.5em',
          opacity: 0.8,
        }}>
        {props.children}
      </Paragraph>
    ),
    li: (props: any) => (
      <li>
        <Paragraph
          {...props}
          style={{
            fontWeight: 400,
            opacity: 0.8,
          }}>
          {props.children}
        </Paragraph>
      </li>
    ),
    td: (props: any) => (
      <td
        {...props}
        style={{
          fontWeight: 400,
          color: color('80'),
          border: `1px solid ${color('12')}`,
          paddingInline: rem(16),
          paddingBlock: rem(8),
        }}>
        {props.children}
      </td>
    ),
    th: (props: any) => (
      <th
        {...props}
        style={{
          fontWeight: 600,
          color: color('80'),
          border: `1px solid ${color('12')}`,
          paddingInline: rem(16),
          paddingBlock: rem(16),
          textAlign: 'left',
          background: color('4'),
        }}>
        {props.children}
      </th>
    ),
    ul: (props: any) => (
      <ul {...props} style={{ marginBottom: rem(24), paddingLeft: rem(24) }}>
        {props.children}
      </ul>
    ),
    code: (props: any) => (
      <Code
        {...props}
        style={{
          paddingInline: '.25em',
          paddingBlock: '.125em',
          borderRadius: rem(4),
          background: color('8'),
        }}>
        {props.children}
      </Code>
    ),
    pre: (props: any) => (
      <pre
        {...props}
        style={{
          paddingInline: '.25em',
          paddingBlock: '.125em',
          borderRadius: rem(4),
          background: color('8'),
        }}>
        {props.children}
      </pre>
    ),

    table: (props: any) => (
      <table
        {...props}
        style={{
          borderCollapse: 'collapse',
          border: `1px solid ${color('12')}`,
          width: 'fit-content',
          marginBottom: rem(24),
        }}>
        {props.children}
      </table>
    ),
    blockquote: (props: any) => (
      <blockquote
        {...props}
        style={{
          marginTop: rem(8),
          marginBottom: rem(24),
        }}>
        {props.children}
      </blockquote>
    ),
  };
}
