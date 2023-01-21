import { Box } from '@/components/Box';
import { Section } from '@/components/Section';
import { Inline } from '@/components/Typography/Inline';
import { SectionTitle } from '@/components/Typography/SectionTitle';

import { ButtonGroup } from '@/components/Button/ButtonGroup';
import { Heading } from '@/components/Typography/Heading';
import { Paragraph } from '@/components/Typography/Paragraph';
import { rem } from '@/css';
import { useMQ } from '@/hooks/useMQ';
import technologies from '@static/technologies.json' assert { type: 'json' };

export const Technologies: React.FC = () => {
  const mq = useMQ();

  return (
    <Section data-testid="Technologies">
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
            new: true,
            large: true,
            fillX: true,
            fillY: true,
            animationSpeedModifier: 2,
            style: {
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: rem(384),
              height: undefined,
            },
            label: tech.name,
            children: (
              <Box
                w="fill"
                h="fill"
                paddingBlock={mq.sm ? 24 : 24}
                paddingInline={mq.sm ? 8 : 16}
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
