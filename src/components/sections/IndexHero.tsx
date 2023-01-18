import { style } from '@/config/style';
import { rem } from '@/css';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Hero } from '@components/Typography/Hero';
import { Inline } from '@components/Typography/Inline';
import { HTMLAttributes } from 'react';

export const IndexHero: React.FC<
  HTMLAttributes<HTMLHeadingElement>
> = props => {
  const matches = useMediaQuery(
    `(max-height: ${700 / 16}em) or (max-width: ${style.breakpoints.sm})`,
  );

  return (
    <Hero
      style={{
        marginTop: !matches ? rem(128) : rem(48),
      }}>
      <Inline color="primary">Cooper Runyan</Inline> <br />
      fullstack web <br />
      developer<Inline color="primary">.</Inline> <br />
    </Hero>
  );
};
