/** @jsx h */
import { Fragment, h } from 'preact';
import { tw } from 'style';

import { config } from 'config';
import { Link, Typography } from './Typography.tsx';

export enum NavType {
  Html,
  Typescript,
}

export default ({ type }: { type: NavType }) => {
  // prettier-ignore
  switch (type) {
    case NavType.Html: return <HTMLLinks/>
    case NavType.Typescript: return <TypescriptLinks />;
  }
};

const HTMLLinks = () => (
  <Typography variant="codeBlock">
    <span class={tw`select-none`} aria-hidden>
      {'<ul>\n'}
    </span>

    {Object.entries(config.pages).map(([name, href]) => (
      <Fragment>
        <span class={tw`select-none`} aria-hidden>
          {'  <li>'}
        </span>
        <span class={tw`select-none`}>{'{'}</span>
        <Link href={href}>{name}</Link>
        <span class={tw`select-none`}>{'}'}</span>
        <span class={tw`select-none`} aria-hidden>
          {'</li>\n'}
        </span>
      </Fragment>
    ))}

    <span class={tw`select-none`} aria-hidden>
      {'</ul>'}
    </span>
  </Typography>
);

const TypescriptLinks = () => (
  <Typography variant="code" class={tw`select-none lg:hidden`}>
    <span aria-hidden>const nav: Page[] = [</span>
    {Object.entries(config.pages).map(([name, href], i, { length }) => (
      <Fragment>
        <Link href={href}>{name}</Link>
        {i < length - 1 && <span aria-hidden>{', '}</span>}
      </Fragment>
    ))}
    <span aria-hidden>];</span>
  </Typography>
);
