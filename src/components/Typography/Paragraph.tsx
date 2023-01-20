import { font } from '@/config/font';
import { rem } from '@/css';
import { HTMLAttributes } from 'react';

export const Paragraph: React.FC<
  HTMLAttributes<HTMLParagraphElement>
> = props => {
  return (
    <p
      {...props}
      style={{
        fontFamily: font.sans.family,
        fontWeight: font.sans.weight,
        fontSize: rem(16),
        lineHeight: '162.5%',
        width: '100%',
        maxWidth: rem(640),
        ...props.style,
      }}>
      {props.children}
    </p>
  );
};
