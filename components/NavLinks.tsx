/** @jsx h */
import { Fragment, h } from 'preact';
import { tw } from 'style';

import { navItems } from 'lib/config.ts';

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
  <pre class={tw`select-none`}>
    <code class={tw`text-g50`} aria-hidden>
      {'<ul>\n'}
    </code>

    {navItems.map(item => (
      <Fragment>
        <code class={tw`text-g50`} aria-hidden>
          {'  <li>'}
        </code>
        <span class={tw`text-primary`}>{'{'}</span>
        <a href={item.href} class={tw`transition text-white hover:text-secondary`}>
          {item.name}
        </a>
        <span class={tw`text-primary`}>{'}'}</span>
        <code class={tw`text-g50`} aria-hidden>
          {'</li>\n'}
        </code>
      </Fragment>
    ))}

    <code class={tw`text-g50`} aria-hidden>
      {'</ul>'}
    </code>
  </pre>
);

const TypescriptLinks = () => (
  <code class={tw`text-mono select-none lg:hidden`}>
    <span class={tw`text-g50`} aria-hidden>
      const nav: Page[] = [
    </span>
    {navItems.map((item, i, { length }) => (
      <Fragment>
        <a href={item.href} class={tw`text-white hover:text-secondary transition cursor-pointer`}>
          {item.name}
        </a>
        {i < length - 1 && (
          <span class={tw`text-g50`} aria-hidden>
            {"', '"}
          </span>
        )}
      </Fragment>
    ))}
    <span class={tw`text-g50`} aria-hidden>
      ];
    </span>
  </code>
);
