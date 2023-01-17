import { config } from '@/config/config';
import { Box } from './Box';
import { Code } from './Typography/Code';

export const Banner: React.FC = () => {
  return (
    <Box w="fill" margin bg={4} paddingBlock={12}>
      <Code>{config.email}</Code>
    </Box>
  );
};
