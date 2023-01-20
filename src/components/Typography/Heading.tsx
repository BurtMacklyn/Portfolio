import { font } from '@/config/font';
import { style } from '@/config/style';
import { percent, rem } from '@/css';
import { HTMLAttributes } from 'react';

export const Heading: React.FC<HTMLAttributes<HTMLHeadingElement>> = props => {
  return (
    <h3
      {...props}
      style={{
        fontFamily: font.sans.family,
        fontWeight: font.sans.bold,
        fontSize: rem(24),
        lineHeight: percent(100),
        letterSpacing: percent(-5, 'em'),
        color: 'inherit',

        ...props.style,
      }}>
      {props.children}
    </h3>
  );
};
