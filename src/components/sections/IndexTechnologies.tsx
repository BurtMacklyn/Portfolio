import { Box } from '../Box';
import { Section } from '../Section';
import { Inline } from '../Typography/Inline';
import { SectionTitle } from '../Typography/SectionTitle';

import { rem } from '@/css';
import technologies from '@static/technologies.json' assert { type: 'json' };
import { ButtonGroup } from '../ButtonGroup';
import { Heading } from '../Typography/Heading';
import { Paragraph } from '../Typography/Paragraph';

export const IndexTechnologies: React.FC = () => {
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
