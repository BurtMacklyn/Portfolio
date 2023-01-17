import { font } from '@/config/font';
import { style } from '@/config/style';
import { variable } from '@/css';

interface Props {
  bold?: boolean;
  color?: Exclude<keyof typeof style.colors, 'layer'>;
  layer?: keyof typeof style.colors.layer;
  hidden?: boolean;
  children: any;
}

export const Inline: React.FC<Props> = props => {
  return (
    <span
      style={{
        color: props.layer
          ? variable(`layer-${props.layer}`)
          : props.color
          ? variable(props.color)
          : undefined,
        fontWeight: props.bold ? font.sans.bold : undefined,
        cursor: props.hidden ? 'none' : undefined,
      }}>
      {props.children}
    </span>
  );
};
