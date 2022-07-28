/** @jsx h */

import { Fragment, h } from 'preact';
import { tw } from '@twind';

import { useEffect, useRef, useState } from 'preact/hooks';

import { email, maxWidth } from '../config.ts';

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
  const nameClass = tw`text-sans text-white text-2xl leading-none font-semibold tracking-tighter`;

  return (
    <Fragment>
      <span ref={dummy} />
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(8px)',
          borderBottomColor: isAtTopOfDocument ? 'transparent' : '',
        }}
        class={tw`transition-all fixed top-0 left-0 w-full h-22 bg-black backdrop-blur-xl z-10 border-b-1 border-transparent ${
          !isAtTopOfDocument && 'border-g8'
        }`}>
        <div class={tw`flex items-center justify-between px-8 w-full h-full mx-auto max-w-[${maxWidth}]`}>
          <a href="/" class={tw`xs:hidden ${nameClass}`}>
            Cooper Runyan
          </a>
          <code class={tw`text-mono text-g40 select-none lg:hidden`}>
            const nav: Page[] = [
            <a href="/" class={linkClass}>
              overiew
            </a>
            ,{' '}
            {/* <a href="/blog" class={linkClass}>
              blog
            </a>
            ,{' '} */}
            <a href={email} class={linkClass}>
              contact
            </a>
            ,{' '}
            <a href="/technologies" class={linkClass}>
              technologies
            </a>
            {/* ,{' '}
            <a href="/work" class={linkClass}>
              work
            </a> */}
            ]
          </code>
          {hasClicked && (
            <div
              class={tw`mlg:hidden ${clicked ? 'animate-slide-left' : 'animate-slide-right'} bg-black w-full h-screen border-l-2 border-g8 xs:${
                clicked ? 'animation-fade-in' : 'animation-fade-out'
              } max-w-xs xs:max-w-full xs:border-0 fixed top-0 right-0 z-11 flex items-center justify-center`}>
              <pre class={tw`text-g40 select-none`}>
                <code>{'<ul>\n'}</code>

                <code>{'  <li>'}</code>
                <span class={tw`text-primary`}>{'{'}</span>
                <a href="/" class={tw`transition text-white hover:text-secondary`}>
                  overview
                </a>
                <span class={tw`text-primary`}>{'}'}</span>
                <code>{'</li>\n'}</code>
                {/*
                <code>{'  <li>'}</code>
                <span class={tw`text-primary`}>{'{'}</span>
                <a href="/blog" class={tw`transition text-white hover:text-secondary`}>
                  blog
                </a>
                <span class={tw`text-primary`}>{'}'}</span>
                <code>{'</li>\n'}</code> */}

                <code>{'  <li>'}</code>
                <span class={tw`text-primary`}>{'{'}</span>
                <a href={email} class={tw`transition text-white hover:text-secondary`}>
                  contact
                </a>
                <span class={tw`text-primary`}>{'}'}</span>
                <code>{'</li>\n'}</code>

                <code>{'  <li>'}</code>
                <span class={tw`text-primary`}>{'{'}</span>
                <a href="/technologies" class={tw`transition text-white hover:text-secondary`}>
                  technologies
                </a>
                <span class={tw`text-primary`}>{'}'}</span>
                <code>{'</li>\n'}</code>

                {/* <code>{'  <li>'}</code>
                <span class={tw`text-primary`}>{'{'}</span>
                <a href="/work" class={tw`transition text-white hover:text-secondary`}>
                  work
                </a>
                <span class={tw`text-primary`}>{'}'}</span>
                <code>{'</li>\n'}</code> */}

                <code>{'</ul>'}</code>
              </pre>
            </div>
          )}
          <a href="/" class={tw`mxs:hidden ${nameClass} relative z-14`}>
            Cooper Runyan
          </a>
          <div
            onClick={() => {
              setClicked(!clicked);
              setHasClicked(true);
            }}
            class={tw`cursor-pointer mlg:hidden relative h-8 w-8 z-12`}>
            <span class={lineClass + ' ' + (!clicked ? tw`-translate-y-[250%]` : tw`rotate-45`)} />
            <span class={lineClass + ' ' + (!clicked ? tw`translate-y-[250%]` : tw`-rotate-45`)} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
