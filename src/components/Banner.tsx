import { config } from '@/config/config';
import { style, Z } from '@/config/style';

import { Box } from '@/components/Box';
import { Code } from '@/components/Typography/Code';
import { useMQ } from '@/context/MQ';

export const Banner: React.FC = () => {
  const mq = useMQ();

  return (
    <Box
      w="fill"
      bg={4}
      style={{
        zIndex: Z.Banner,
        display: mq.touchscreen || mq.md ? 'none' : undefined,
      }}>
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
