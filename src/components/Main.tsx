import { Box } from '@/components/Box';
import { style, Z } from '@/config/style';
import { rem } from '@/css';

interface Props {
  children?: any;
  className?: string;
}

export const Main: React.FC<Props> = props => {
  return (
    <Box
      data-testid={(props as any)['data-testid']}
      w={'fill'}
      margin
      relative
      role="main"
      style={{
        paddingTop: rem(style.navHeight),
        zIndex: Z.Content,
        maxWidth: style.maxWidth,
        marginInline: 'auto',
        minHeight: '100vh',
      }}
      raw={{
        className: props.className,
      }}>
      {props.children}
    </Box>
  );
};
