import { font } from '@/config/font';
import { rem } from '@/css';
import { HTMLAttributes } from 'react';

export const Heading: React.FC<HTMLAttributes<HTMLHeadingElement>> = props => {
  return (
    <h3
      {...props}
      style={{
        fontFamily: font.sans.family,
        fontWeight: font.sans.bold,
        fontSize: rem(24),
        lineHeight: '100%',
        letterSpacing: '-0.05em',
        color: 'inherit',

        ...props.style,
      }}>
      {props.children}
    </h3>
  );
};
