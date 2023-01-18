import { Z } from '@/config/style';
import { Box } from '@components/Box';

interface Props {
  children?: any;
}

export const Main: React.FC<Props> = ({ children }) => {
  return (
    <Box w={'fill'} margin relative style={{ zIndex: Z.Content }}>
      {children}
    </Box>
  );
};
