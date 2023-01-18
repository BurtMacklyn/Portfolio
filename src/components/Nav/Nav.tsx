import { Box } from '@components/Box';
import { Link } from '@components/Link';
import { Heading } from '@components/Typography/Heading';

import { config } from '@/config/config';
import { color, style } from '@/config/style';
import { opacity, rem } from '@/css';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Button } from '@components/Button';
import { Code } from '@components/Typography/Code';
import { Inline } from '@components/Typography/Inline';
import { Fragment, useState } from 'react';

const blurredBackgroundStyles = {
  backgroundColor: opacity(color(0), 50),
  backdropFilter: 'blur(8px)',
};

export const Nav: React.FC = () => {
  const matches = useMediaQuery(`(max-width: ${style.breakpoints.md})`);

  const [clicked, setClicked] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  const [dummy, isAtTopOfDocument] = useIntersectionObserver();
  const activeNav = !isAtTopOfDocument || (clicked && matches);

  return (
    <>
      <span ref={dummy} />

      <Box
        w="fill"
        h={96}
        margin
        smooth
        spaceBetween
        row
        style={{
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          left: 0,
          borderBottomColor: activeNav ? opacity(color(100), 8) : 'transparent',
          borderBottomStyle: 'solid',
          borderBottomWidth: rem(2),
          ...blurredBackgroundStyles,
        }}>
        <Name />

        {!matches ? (
          <Code hidden>
            const nav: Page[] = [
            {Object.entries(config.pages).map(([k, v], i, a) => (
              <Fragment key={v}>
                <Link to={v}>
                  <Inline color={100} hover="primary">
                    {k}
                  </Inline>
                </Link>
                {i !== a.length - 1 && ', '}
              </Fragment>
            ))}
            ];
          </Code>
        ) : (
          <Button onClick={() => setClicked(!clicked)}>
            <NavIcon clicked={clicked && matches} />
          </Button>
        )}
      </Box>
    </>
  );
};

const Name = () => {
  return (
    <Link to="/">
      <Heading>
        <Inline hover="primary">Lorem Ipsum</Inline>
      </Heading>
    </Link>
  );
};

const NavIcon = ({ clicked }: any) => {
  const size = 32;
  const width = 2;
  const space = 4;

  const slantHeight = size * Math.cos(45 * (Math.PI / 180));

  return (
    <Box relative w={size} h={size}>
      <span
        style={{
          top: 0,
          left: 0,
          background: color(100),
          height: rem(width as any),
          borderRadius: style.borderRadius,
          position: 'absolute',
          width: !clicked
            ? rem((size / 2) as any)
            : rem((size / 2 - width / 2 - space) as any),
          transform: !clicked
            ? `translate(0, ${rem(
                (size / 2 - width / 2 - space - width) as any,
              )})`
            : `translate(${rem(((size - slantHeight) / 2) as any)}, ${rem(
                ((size - slantHeight) / 2) as any,
              )}) translateY(-50%) rotate(45deg)`,
          transitionDuration: style.transition.time,
          transitionProperty: 'all',
          transitionTimingFunction: style.transition.function,
          transformOrigin: '0% 50%',
        }}
      />
      <span
        style={{
          background: color(100),
          height: rem(width as any),
          width: rem(size),
          borderRadius: style.borderRadius,
          position: 'absolute',
          top: rem((size / 2 - width / 2) as any),
          left: 0,
          transform: !clicked ? undefined : 'rotate(-45deg)',
          transitionDuration: style.transition.time,
          transitionProperty: 'all',
          transitionTimingFunction: style.transition.function,
        }}
      />
      <span
        style={{
          background: color(100),
          height: rem(width),
          borderRadius: style.borderRadius,
          position: 'absolute',
          width: !clicked
            ? rem((size / 2) as any)
            : rem((size / 2 - width / 2 - space) as any),
          bottom: 0,
          right: 0,
          transform: !clicked
            ? `translate(0, -${rem(
                (size / 2 - width / 2 - space - width) as any,
              )})`
            : `translate(-${rem(((size - slantHeight) / 2) as any)}, -${rem(
                ((size - slantHeight) / 2) as any,
              )}) translateY(50%) rotate(45deg)`,
          transitionDuration: style.transition.time,
          transitionProperty: 'all',
          transitionTimingFunction: style.transition.function,
          transformOrigin: '100% 50%',
        }}
      />
    </Box>
  );
};
