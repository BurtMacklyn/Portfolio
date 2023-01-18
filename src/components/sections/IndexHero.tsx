import { Section } from '@components/Section';
import { Hero } from '@components/Typography/Hero';
import { Inline } from '@components/Typography/Inline';
import { config } from '@/config/config';
import { Button } from '../Button';

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
      <Button href={config.pages.contact}>Contact</Button>
    </Section>
  );
};
