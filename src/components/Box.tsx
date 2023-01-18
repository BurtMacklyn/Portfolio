import { color, style } from '@/config/style';
import { percent, rem, Space, variable } from '@/css';
import { CSSProperties, forwardRef, HTMLAttributes } from 'react';

export interface BoxProps {
  children?: any;
  row?: boolean;
  gap?: Space;
  spaceBetween?: boolean;
  relative?: boolean;
  h?: 'fill' | Space;
  w?: 'fill' | Space;
  round?: boolean;
  smooth?: boolean | 'slow';
  margin?: boolean | 'auto';
  paddingBlock?: Space;
  paddingInline?: Space;
  bg?: keyof typeof style.color;
  style?: CSSProperties;
  raw?: HTMLAttributes<HTMLDivElement>;
}

export const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: props.row ? 'row' : 'column',
        justifyContent: props.spaceBetween ? 'space-between' : undefined,
        position: props.relative ? 'relative' : undefined,
        paddingInline:
          props.margin === true
            ? variable('margin')
            : props.paddingInline
            ? rem(props.paddingInline)
            : undefined,
        paddingBlock: props.paddingBlock ? rem(props.paddingBlock) : undefined,
        margin: props.margin === 'auto' ? '0 auto' : undefined,
        height:
          props.h === 'fill'
            ? percent(100)
            : props.h !== undefined
            ? rem(props.h)
            : undefined,
        width:
          props.w === 'fill'
            ? percent(100)
            : props.w !== undefined
            ? rem(props.w)
            : undefined,
        borderRadius: props.round ? style.borderRadius : undefined,
        background: props.bg !== undefined ? color(props.bg) : undefined,
        transitionProperty: props.smooth
          ? style.transition.property
          : undefined,
        transitionDuration: props.smooth
          ? `${style.transition.time * (props.smooth === 'slow' ? 2 : 1)}ms`
          : undefined,
        transitionTimingFunction: style.transition.function,

        gap: props.gap !== undefined ? props.gap : undefined,

        ...props.style,
      }}
      {...props.raw}>
      {props.children}
    </div>
  );
});
