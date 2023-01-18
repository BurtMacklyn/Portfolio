import { font } from '@/config/font';
import { style } from '@/config/style';
import { percent, rem } from '@/css';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { HTMLAttributes } from 'react';

export const Hero: React.FC<HTMLAttributes<HTMLHeadingElement>> = props => {
  const matches = useMediaQuery(`(max-width: ${style.breakpoints.sm})`);
  return (
    <h1
      {...props}
      style={{
        fontFamily: font.sans.family,
        fontWeight: 700,
        fontSize: !matches ? rem(96) : rem(72),
        lineHeight: percent(100),
        width: percent(100),
        letterSpacing: percent(-5, 'em'),
        ...props.style,
      }}>
      {props.children}
    </h1>
  );
};
