import { style } from '@/config/style';
import { percent, rem, Space, variable } from '@/css';
import { CSSProperties } from 'react';

interface Props {
  children?: any;
  row?: boolean;
  spaceBetween?: boolean;
  relative?: boolean;
  h?: 'fill' | Space;
  w?: 'fill' | Space;
  round?: boolean;
  margin?: boolean | 'auto';
  paddingBlock?: Space;
  paddingInline?: Space;
  bg?: keyof typeof style.colors.layer;
  style?: CSSProperties;
}

export const Box: React.FC<Props> = props => {
  return (
    <div
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
        background:
          props.bg !== undefined ? style.colors.layer[props.bg] : undefined,
        ...props.style,
      }}>
      {props.children}
    </div>
  );
};
