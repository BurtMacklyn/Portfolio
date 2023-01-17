import { font } from '@/config/font';
import { color, style } from '@/config/style';
import { percent } from '@/css';
import { HTMLAttributes } from 'react';

export const Code: React.FC<HTMLAttributes<HTMLSpanElement>> = props => {
  return (
    <code
      {...props}
      style={{
        fontFamily: font.mono.family,
        fontWeight: font.mono.weight,
        color: color(50),
        letterSpacing: percent(-1, 'em'),
        ...props.style,
      }}>
      {props.children}
    </code>
  );
};
