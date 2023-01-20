import { Box } from '@/components/Box';
import { style, Z } from '@/config/style';

interface Props {
  children?: any;
}

export const Main: React.FC<Props> = ({ children }) => {
  return (
    <Box
      w={'fill'}
      margin
      relative
      style={{
        zIndex: Z.Content,
        maxWidth: style.maxWidth,
        marginInline: 'auto',
      }}>
      {children}
    </Box>
  );
};
