import { font } from '@/config/font';
import { style } from '@/config/style';
import { variable } from '@/css';

interface Props {
  bold?: boolean;
  color?: Exclude<keyof typeof style.colors, 'layer'>;
  children: any;
}

export const Emphasis: React.FC<Props> = props => {
  return (
    <span
      style={{
        color: props.color ? variable(props.color) : undefined,
        fontWeight: props.bold ? font.sans.bold : undefined,
      }}>
      {props.children}
    </span>
  );
};