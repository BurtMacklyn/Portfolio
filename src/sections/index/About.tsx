import { Box } from '@/components/Box';
import { Section } from '@/components/Section';
import { Inline } from '@/components/Typography/Inline';
import { Paragraph } from '@/components/Typography/Paragraph';
import { SectionTitle } from '@/components/Typography/SectionTitle';

export const About: React.FC<{ experience: number }> = ({ experience }) => {
  return (
    <Section data-testid="About">
      <Box gap={24}>
        <SectionTitle>
          about<Inline color="primary">.</Inline>
        </SectionTitle>
        <Paragraph>
          I'm a <Inline bold>{experience} year fullstack software developer</Inline>. I work in frontend/backend design and development with technologies like
          Rust, NodeJS, Deno, Docker, Go, NextJS, SCSS, and Typescript.
        </Paragraph>
      </Box>
    </Section>
  );
};
