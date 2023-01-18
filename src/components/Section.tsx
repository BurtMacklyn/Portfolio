import { style } from '@/config/style';
import { rem, Space } from '@/css';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface Props {
  children?: any;
  row?: boolean;
  gap?: Space;
}

export const Section: React.FC<Props> = props => {
  const matches = useMediaQuery(`(max-width: ${style.breakpoints.sm})`);
  return (
    <section
      style={{
        marginBlock: !matches ? rem(128) : rem(64),
        display: 'flex',
        flexDirection: !props.row ? 'column' : 'row',
        gap: props.gap ? rem(props.gap) : undefined,
      }}>
      {props.children}
    </section>
  );
};
