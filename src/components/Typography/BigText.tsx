import { font } from '@/config/font';
import { color } from '@/config/style';
import { rem } from '@/css';
import { HTMLAttributes } from 'react';

export const BigText: React.FC<HTMLAttributes<HTMLHeadingElement>> = props => {
  return (
    <h2
      data-testid={(props as any)['data-testid']}
      {...props}
      style={{
        fontFamily: font.sans.family,
        fontWeight: font.sans.weight,
        fontSize: rem(64),
        color: color('50'),
        lineHeight: '125%',
        letterSpacing: '-0.03em',
        ...props.style,
      }}>
      {props.children}
    </h2>
  );
};
