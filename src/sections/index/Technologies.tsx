import { Box } from '@/components/Box';
import { Section } from '@/components/Section';
import { Inline } from '@/components/Typography/Inline';
import { SectionTitle } from '@/components/Typography/SectionTitle';

import { rem } from '@/css';
import technologies from '@static/technologies.json' assert { type: 'json' };
import { ButtonGroup } from '@/components/Button/ButtonGroup';
import { Heading } from '@/components/Typography/Heading';
import { Paragraph } from '@/components/Typography/Paragraph';

export const Technologies: React.FC = () => {
  return (
    <Section>
      <Box gap={24}>
        <SectionTitle>
          technologies<Inline color="primary">.</Inline>
        </SectionTitle>
        <ButtonGroup
          style={{
            flexWrap: 'wrap',
          }}
          buttons={technologies.map(tech => ({
            href: tech.url,
            large: true,
            fillX: true,
            fillY: true,
            animationSpeedModifier: 2,
            raw: {
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: rem(384),
            },
            children: (
              <Box
                w="fill"
                h="fill"
                paddingBlock={24}
                paddingInline={16}
                gap={16}>
                <Heading>{tech.name}</Heading>
                <Paragraph>{tech.description}</Paragraph>
              </Box>
            ),
          }))}
        />
      </Box>
    </Section>
  );
};
