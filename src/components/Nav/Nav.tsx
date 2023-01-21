import { Box } from '@/components/Box';
import { Link } from '@/components/Button/Link';

import { NavToggle } from '@/components/Nav/NavToggle';
import { Code } from '@/components/Typography/Code';
import { Inline } from '@/components/Typography/Inline';
import { config } from '@/config/config';
import { color, style, Z } from '@/config/style';
import { opacity, rem, variable } from '@/css';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useMQ } from '@/hooks/useMQ';
import React, { Fragment, useState } from 'react';

const blurredBackgroundStyles = {
  backgroundColor: opacity(color('0'), 50),
  backdropFilter: 'blur(8px)',
};

export const Nav: React.FC = (props: any) => {
  const mq = useMQ();

  const [clicked, setClicked] = useState(false);

  const [dummy, isAtTopOfDocument] = useIntersectionObserver();
  const activeNav = !isAtTopOfDocument || clicked;

  return (
    <>
      <span ref={dummy} />

      <nav
        data-testid={(props as any)['data-testid']}
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
            <NavToggle setClicked={setClicked} clicked={clicked} />
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
