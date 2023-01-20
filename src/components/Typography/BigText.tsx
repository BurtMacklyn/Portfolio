import { font } from '@/config/font';
import { color } from '@/config/style';
import { percent, rem } from '@/css';
import { HTMLAttributes } from 'react';

export const BigText: React.FC<HTMLAttributes<HTMLHeadingElement>> = props => {
  return (
    <h2
      {...props}
      style={{
        fontFamily: font.sans.family,
        fontWeight: font.sans.weight,
        fontSize: rem(64),
        color: color(50),
        lineHeight: percent(125),
        letterSpacing: percent(-3, 'em'),
        ...props.style,
      }}>
      {props.children}
    </h2>
  );
};
