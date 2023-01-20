import { Link } from '@/components/Button/Link';
import { Paragraph } from '@/components/Typography/Paragraph';
import { config } from '@/config/config';
import { color, style } from '@/config/style';
import { rem, variable } from '@/css';
import { Box } from './Box';
import { Inline } from './Typography/Inline';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        width: '100%',
        background: color(4),
        borderTop: `${rem(1)} solid ${color(12)}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Box
        margin
        w="fill"
        gap={4}
        paddingBlock={32}
        style={{
          maxWidth: style.maxWidth,
        }}>
        <Paragraph style={{ color: color(80) }}>
          Last updated: {config.lastUpdated}
        </Paragraph>
        <Paragraph style={{ color: color(80) }}>
          <Name /> Portfolio v{config.version}
        </Paragraph>
        <Paragraph style={{ color: color(80) }}>
          Copyright © 2022 - All rights reserved by <Name />.
        </Paragraph>
        <Paragraph style={{ color: color(80) }}>
          Site created and designed by <Name /> using NextJS v13.1
        </Paragraph>
        <Paragraph style={{ color: color(80) }}>
          <Link to={config.repo} new>
            <Inline bold color="primary">
              View source code
            </Inline>
          </Link>
          .
        </Paragraph>
      </Box>
    </footer>
  );
};

const Name = () => (
  <Link new to={config.social.github.link}>
    <Inline bold color="primary">
      Cooper Runyan
    </Inline>
  </Link>
);
