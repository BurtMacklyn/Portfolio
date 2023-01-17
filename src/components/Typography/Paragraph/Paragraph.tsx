import { font } from '@/config/font';
import { percent, rem } from '@/css';
import { HTMLAttributes } from 'react';

export const Paragraph: React.FC<
  HTMLAttributes<HTMLParagraphElement>
> = props => {
  return (
    <p
      {...props}
      style={{
        lineHeight: percent(162.5),
        fontFamily: font.sans.family,
        fontWeight: font.sans.weight,
        width: percent(100),
        maxWidth: rem(640),
        letterSpacing: percent(-1),
        ...props.style,
      }}>
      {props.children}
    </p>
  );
};
