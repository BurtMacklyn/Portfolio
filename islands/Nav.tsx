/** @jsx h */
import { Fragment, h } from 'preact';

import { tw } from '@twind';

import { useEffect, useRef, useState } from 'preact/hooks';
import { email, margin, maxWidth } from '../lib/config.ts';

const navItems = [
  { name: 'overview', href: '/' },
  { name: 'contact', href: email },
  { name: 'technologies', href: '/technologies' },
];

export default function Nav() {
  const dummy = useRef<HTMLSpanElement>(null);

  const [clicked, setClicked] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const [isAtTopOfDocument, setIsAtTopOfDocument] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsAtTopOfDocument(entry.isIntersecting));
    observer.observe(dummy.current!);

    return () => observer.unobserve(dummy.current!);
  }, []);

  const linkClass = tw`text-white hover:text-secondary transition cursor-pointer`;
  const lineClass = tw`transition-all rounded-full absolute w-full h-0.5 bg-white top-[50%] left-[50%] -translate-x-1/2`;

  const activeNav = !isAtTopOfDocument || clicked;

  return (
    <Fragment>
      <span ref={dummy} />
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(8px)',
          borderBottomColor: !activeNav ? 'transparent' : '',
        }}
        class={tw`transition-all fixed top-0 left-0 w-full h-22 bg-black backdrop-blur-xl z-[12] border-b-1 border-transparent ${activeNav && 'border-g8'}`}>
        <div class={tw`flex items-center justify-between ${margin} w-full h-full mx-auto max-w-[${maxWidth}]`}>
          <a href="/" class={tw`z-[20] text-sans text-white text-2xl leading-none font-semibold tracking-tighter`}>
            Cooper Runyan
          </a>
          <code class={tw`text-mono text-g40 select-none lg:hidden`}>
            const nav: Page[] = [
            {navItems.map((item, i, { length }) => (
              <Fragment>
                <a href={item.href} class={linkClass}>
                  {item.name}
                </a>
                {i < length - 1 && ', '}
              </Fragment>
            ))}
            ];
          </code>

          <button
            onClick={() => {
              setClicked(!clicked);
              setHasClicked(true);
            }}
            class={tw`cursor-pointer mlg:hidden relative h-8 w-8 z-[12] !outline-none`}>
            <span class={lineClass + ' ' + (!clicked ? tw`-translate-y-[250%]` : tw`rotate-45`)} />
            <span class={lineClass + ' ' + (!clicked ? tw`translate-y-[250%]` : tw`-rotate-45`)} />
          </button>
        </div>
      </div>
      <div>
        {hasClicked && (
          <div
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(8px)',
            }}
            class={tw`mlg:hidden ${
              clicked ? 'animate-slide-left' : 'animate-slide-right'
            } !xs:bg-black w-full h-[calc(100%-5.5rem)] xs:h-screen xs:top-0 border-l-2 border-g8 xs:${
              clicked ? 'animation-fade-in' : 'animation-fade-out'
            } max-w-xs xs:max-w-full xs:border-0 fixed top-22 right-0 z-[10] flex items-center justify-center`}>
            <pre class={tw`text-g40 select-none`}>
              <code>{'<ul>\n'}</code>

              {navItems.map(item => (
                <Fragment>
                  <code>{'  <li>'}</code>
                  <span class={tw`text-primary`}>{'{'}</span>
                  <a href={item.href} class={tw`transition text-white hover:text-secondary`}>
                    {item.name}
                  </a>
                  <span class={tw`text-primary`}>{'}'}</span>
                  <code>{'</li>\n'}</code>
                </Fragment>
              ))}

              <code>{'</ul>'}</code>
            </pre>
          </div>
        )}
      </div>
    </Fragment>
  );
}
