import { font } from '@/config/font';
import { percent, rem } from '@/css';
import { HTMLAttributes } from 'react';

export const Hero: React.FC<HTMLAttributes<HTMLHeadingElement>> = props => {
  return (
    <h1
      {...props}
      style={{
        fontFamily: font.sans.family,
        fontWeight: font.sans.bold,
        fontSize: rem(96),
        lineHeight: percent(100),
        width: percent(100),
        maxWidth: rem(640),
        letterSpacing: percent(-5),
        ...props.style,
      }}>
      {props.children}
    </h1>
  );
};
