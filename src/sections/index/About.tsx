import { Box } from '@/components/Box';
import { Section } from '@/components/Section';
import { Inline } from '@/components/Typography/Inline';
import { Paragraph } from '@/components/Typography/Paragraph';
import { SectionTitle } from '@/components/Typography/SectionTitle';
import { useEffect, useState } from 'react';

const startYear = 2021;

export const About: React.FC = () => {
  const [diff, setDiff] = useState(0);

  useEffect(() => setDiff(new Date().getFullYear() - startYear), []);

  return (
    <Section data-testid="About">
      <Box gap={24}>
        <SectionTitle>
          about<Inline color="primary">.</Inline>
        </SectionTitle>
        <Paragraph>
          I'm a <Inline bold>{diff} year fullstack software developer</Inline>.
          I work in frontend/backend design and development with technologies
          like NodeJS, Deno, Docker, Go, NextJS, SCSS, and Typescript.
        </Paragraph>
      </Box>
    </Section>
  );
};
