import { config } from '@/config/config';
import { style, Z } from '@/config/style';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import { Box } from '@/components/Box';
import { Code } from '@/components/Typography/Code';

export const Banner: React.FC = () => {
  const matches = useMediaQuery(
    `screen and (max-width: ${style.breakpoints.md})`,
  );

  return (
    <Box
      w="fill"
      margin
      bg={4}
      paddingBlock={12}
      relative
      style={{ zIndex: Z.Banner, display: matches ? 'none' : undefined }}>
      <Code>{config.email}</Code>
    </Box>
  );
};
