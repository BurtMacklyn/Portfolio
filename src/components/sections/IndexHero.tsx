import { config } from '@/config/config';
import { Box } from '@components/Box';
import { Button } from '@components/Button';
import { Section } from '@components/Section';
import { Hero } from '@components/Typography/Hero';
import { Inline } from '@components/Typography/Inline';

export const IndexHero: React.FC = () => {
  return (
    <Section gap={32}>
      <Hero>
        {/* <Inline color="primary">Cooper Runyan</Inline> <br />
        fullstack web <br />
        developer<Inline color="primary">.</Inline> <br /> */}
        <Inline color="primary">Lorem ipsum</Inline> <br />
        dolor sit <br />
        amet<Inline color="primary">.</Inline> <br />
      </Hero>
      <Box row gap={8}>
        <Button href={config.pages.contact}>Contact</Button>
        <Button href={config.social.github.link}>Github</Button>
      </Box>
    </Section>
  );
};
