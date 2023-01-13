/** @jsx h */
import { Fragment, h } from 'preact';
import { tw } from 'style';
import { blurred } from 'lib/styled.ts';

import { config } from 'config';
import { useState } from 'preact/hooks';

import NavLinks, { NavType } from 'c/NavLinks.tsx';
import { useIntersector } from 'hooks/useIntersector.ts';
import { Link, Typography } from 'c/Typography.tsx';

export default function Nav() {
  const [clicked, setClicked] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  const [dummy, isAtTopOfDocument] = useIntersector();
  const activeNav = !isAtTopOfDocument || clicked;

  const drawerAnimation = clicked
    ? tw`animate-sll xs:animate-fin`
    : tw`animate-slr xs:animate-fout`;

  const lineClass = tw`transition-all rounded-full absolute h-0.5 bg-white`;

  return (
    <Fragment>
      <span ref={dummy} />
      <div
        style={{
          ...blurred,
          borderBottomColor: !activeNav ? 'transparent' : '',
        }}
        class={tw`transition-all sticky top-0 left-0 w-full h-x90 bg-black backdrop-blur-xl z-[12] border-b-1 border-transparent ${
          activeNav && `border-grey8`
        }`}>
        <div
          class={tw`flex items-center justify-between ${config.margin} w-full h-full mx-auto max-w-[${config.maxWidth}]`}>
          <Link href="/" class={tw`z-[20] text-white!`}>
            <Typography variant="h3">Cooper Runyan</Typography>
          </Link>

          <NavLinks type={NavType.Typescript} />

          <button
            onClick={() => {
              setClicked(!clicked);
              setHasClicked(true);
            }}
            class={tw`transition-all cursor-pointer mlg:hidden relative h-8 w-8 z-[12] !outline-none`}>
            <span
              class={tw(
                `${lineClass} top-[25%] left-0 origin-left w-[50%] ${
                  clicked ? tw`rotate-45 left-[${rem(0.8)}] !top-0` : tw``
                }`,
              )}
            />
            <span
              class={tw`${lineClass} top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full ${
                clicked ? tw`-rotate-45 w-[${rem(43)}]` : tw``
              }`}
            />
            <span
              class={tw`${lineClass} bottom-[25%] origin-right right-0 w-[50%] ${
                clicked ? tw`rotate-45 right-[${rem(0.8)}] !bottom-0` : tw``
              }`}
            />
          </button>
        </div>
      </div>

      <div>
        {hasClicked && (
          <div
            style={blurred}
            class={tw`mlg:hidden ${drawerAnimation} !xs:bg-black w-full h-[calc(100%-5.5rem)] xs:h-screen xs:top-0 border-l-2 border-grey8 max-w-xs xs:max-w-full xs:border-0 fixed top-x90 right-0 z-[10] flex items-center justify-center`}>
            <NavLinks type={NavType.Html} />
          </div>
        )}
      </div>
    </Fragment>
  );
}

const rem = (x: number) => x / 16 + 'rem';
