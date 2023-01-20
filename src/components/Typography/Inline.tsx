import { font } from '@/config/font';
import { color, Color, style } from '@/config/style';
import { useState } from 'react';

interface Props {
  bold?: boolean;
  color?: Color;
  hover?: Color;
  hidden?: boolean;
  children: any;
}

export const Inline: React.FC<Props> = props => {
  const [hover, setHover] = useState(false);

  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        color:
          props.hover && hover
            ? color(props.hover)
            : props.color
            ? color(props.color)
            : undefined,
        fontWeight: props.bold ? font.sans.bold : undefined,
        cursor: props.hidden ? 'none' : undefined,
        transitionProperty: style.transition.property,
        transitionDuration: `${style.transition.time}ms`,
        transitionTimingFunction: style.transition.function,
      }}>
      {props.children}
    </span>
  );
};
