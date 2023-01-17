import { Box } from '@components/Box';
import { Link } from '@components/Link';
import { Heading } from '@components/Typography/Heading';

import { color, style } from '@/config/style';
import { opacity, rem } from '@/css';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { Inline } from '../Typography/Inline';

const blurredBackgroundStyles = {
  backgroundColor: opacity(color(0), 50),
  backdropFilter: 'blur(8px)',
};

export const Nav: React.FC = () => {
  const matches = useMediaQuery(`(max-width: ${style.breakpoints.md})`);

  const [clicked, setClicked] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  const [dummy, isAtTopOfDocument] = useIntersectionObserver();
  const activeNav = !isAtTopOfDocument || clicked;

  return (
    <>
      <span ref={dummy} />

      <Box
        w="fill"
        margin
        paddingBlock={32}
        smooth
        spaceBetween
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          borderBottomColor: activeNav ? opacity(color(100), 8) : 'transparent',
          borderBottomStyle: 'solid',
          borderBottomWidth: rem(2),
          ...blurredBackgroundStyles,
        }}>
        <Name />
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
