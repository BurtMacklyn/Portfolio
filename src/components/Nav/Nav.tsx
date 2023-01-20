import { Box } from '@/components/Box';
import { Link } from '@/components/Button/Link';
import { Heading } from '@/components/Typography/Heading';

import { PlainButton } from '@/components/Button/PlainButton';
import { Code } from '@/components/Typography/Code';
import { Inline } from '@/components/Typography/Inline';
import { config } from '@/config/config';
import { color, style, Z } from '@/config/style';
import { useMQ } from '@/context/MQ';
import { opacity, rem, variable } from '@/css';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Fragment, useState } from 'react';

const blurredBackgroundStyles = {
  backgroundColor: opacity(color('0'), 50),
  backdropFilter: 'blur(8px)',
};

export const Nav: React.FC = () => {
  const mq = useMQ();

  const [clicked, setClicked] = useState(false);

  const [dummy, isAtTopOfDocument] = useIntersectionObserver();
  const activeNav = !isAtTopOfDocument || clicked;

  return (
    <>
      <span ref={dummy} />

      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: rem(style.navHeight),
          width: '100vw',
          zIndex: Z.Nav,
          borderBottomColor: activeNav
            ? opacity(color('100'), 8)
            : 'transparent',
          borderBottomStyle: 'solid',
          borderBottomWidth: rem(2),
          transitionDuration: style.transition.time + 'ms',
          transitionProperty: style.transition.property,
          transitionTimingFunction: style.transition.function,
        }}>
        <Box
          w="fill"
          h="fill"
          smooth
          spaceBetween
          row
          style={{
            alignItems: 'center',
            maxWidth: style.maxWidth,
            marginInline: 'auto',
            justifyContent: 'flex-end',
            paddingInline: mq.xxl
              ? variable('margin')
              : `min(${variable('margin')},${rem(
                  (style.navHeight / 2) as any,
                )})`,
            ...blurredBackgroundStyles,
          }}>
          {mq.xxl ? (
            <Code hidden>
              const nav: Page[] = [
              {Object.entries(config.pages).map(([k, v], i, a) => (
                <Fragment key={v}>
                  <Link to={v}>
                    <Inline color={'100'} hover="primary">
                      {k}
                    </Inline>
                  </Link>
                  {i !== a.length - 1 && ', '}
                </Fragment>
              ))}
              ];
            </Code>
          ) : (
            <PlainButton onClick={() => setClicked(!clicked)}>
              <NavIcon clicked={clicked} />
            </PlainButton>
          )}
        </Box>

        <Box
          smooth
          margin
          style={{
            position: 'fixed',
            top: rem((style.navHeight - 2) as any),
            right: 0,
            bottom: 0,
            width: `min(100vw, ${style.breakpoints.xs})`,
            borderTop: `${rem(2)} solid ${color('8')}`,
            borderLeft: mq.xs ? undefined : `${rem(2)} solid ${color('8')}`,
            zIndex: Z.NavDrawer,
            transform:
              clicked && !mq.xxl ? `translateX(0)` : `translateX(100%)`,
            pointerEvents: 'all',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ...blurredBackgroundStyles,
          }}>
          <pre>
            <Code hidden>{'<ul>\n'}</Code>
            {Object.entries(config.pages).map(([k, v]) => (
              <Fragment key={v}>
                <Code hidden>{'  <li>{'}</Code>
                <Link to={v}>
                  <Code style={{ color: color('100') }}>
                    <Inline hover="primary">{k}</Inline>
                  </Code>
                </Link>
                <Code hidden>{'}</li>\n'}</Code>
              </Fragment>
            ))}
            <Code hidden>{'</ul>'}</Code>
          </pre>
        </Box>
      </nav>
    </>
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
          background: color('100'),
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
          transitionDuration: style.transition.time + 'ms',
          transitionProperty: 'all',
          transitionTimingFunction: style.transition.function,
          transformOrigin: '0% 50%',
        }}
      />
      <span
        style={{
          background: color('100'),
          height: rem(width as any),
          width: rem(size),
          borderRadius: style.borderRadius,
          position: 'absolute',
          top: rem((size / 2 - width / 2) as any),
          left: 0,
          transform: !clicked ? undefined : 'rotate(-45deg)',
          transitionDuration: style.transition.time + 'ms',
          transitionProperty: 'all',
          transitionTimingFunction: style.transition.function,
        }}
      />
      <span
        style={{
          background: color('100'),
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
          transitionDuration: style.transition.time + 'ms',
          transitionProperty: 'all',
          transitionTimingFunction: style.transition.function,
          transformOrigin: '100% 50%',
        }}
      />
    </Box>
  );
};
