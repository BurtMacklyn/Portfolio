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
      bg={4}
      style={{ zIndex: Z.Banner, display: matches ? 'none' : undefined }}>
      <Box
        w="fill"
        margin
        paddingBlock={12}
        style={{
          maxWidth: style.maxWidth,
          marginInline: 'auto',
        }}>
        <Code>{config.email}</Code>
      </Box>
    </Box>
  );
};
