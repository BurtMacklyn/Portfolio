import { Box } from '@/components/Box';
import { style, Z } from '@/config/style';
import { rem } from '@/css';

interface Props {
  children?: any;
}

export const Main: React.FC<Props> = ({ children }) => {
  return (
    <Box
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
      }}>
      {children}
    </Box>
  );
};
