import { font } from '@/config/font';
import { rem } from '@/css';
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
        lineHeight: '100%',
        letterSpacing: '-0.05em',
        ...props.style,
      }}>
      {props.children}
    </h1>
  );
};
