import { font } from '@/config/font';
import { percent, rem } from '@/css';
import { HTMLAttributes } from 'react';

export const PageTitle: React.FC<
  HTMLAttributes<HTMLHeadingElement>
> = props => {
  return (
    <h1
      {...props}
      style={{
        fontFamily: font.sans.family,
        fontWeight: font.sans.bold,
        fontSize: rem(64),
        lineHeight: percent(100),
        letterSpacing: percent(-5),
        ...props.style,
      }}>
      {props.children}
    </h1>
  );
};
