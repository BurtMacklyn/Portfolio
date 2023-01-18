import { Section } from '@components/Section';
import { Hero } from '@components/Typography/Hero';
import { Inline } from '@components/Typography/Inline';

export const IndexHero: React.FC = () => {
  return (
    <Section>
      <Hero>
        {/* <Inline color="primary">Cooper Runyan</Inline> <br />
        fullstack web <br />
        developer<Inline color="primary">.</Inline> <br /> */}
        <Inline color="primary">Lorem ipsum</Inline> <br />
        dolor sit <br />
        amet<Inline color="primary">.</Inline> <br />
      </Hero>
    </Section>
  );
};
