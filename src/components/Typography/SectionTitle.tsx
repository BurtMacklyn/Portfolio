import { font } from '@/config/font';
import { percent, rem } from '@/css';
import { HTMLAttributes } from 'react';

export const SectionTitle: React.FC<
  HTMLAttributes<HTMLHeadingElement>
> = props => {
  return (
    <h2
      {...props}
      style={{
        fontFamily: font.sans.family,
        fontWeight: font.sans.bold,
        fontSize: rem(48),
        lineHeight: percent(100),
        letterSpacing: percent(-5, 'em'),
        ...props.style,
      }}>
      {props.children}
    </h2>
  );
};
