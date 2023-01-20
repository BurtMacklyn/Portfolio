import { Section } from '@/components/Section';
import { BigText } from '@/components/Typography/BigText';
import { style } from '@/config/style';
import { rem } from '@/css';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { getJoke } from '@/pages/api/joke';
import { useEffect, useState } from 'react';

export const Joke: React.FC = () => {
  const [joke, setJoke] = useState<string>(
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, sequi.',
  );

  const matches = useMediaQuery(`(max-width: ${style.breakpoints.sm})`);

  useEffect(() => {
    setJoke(getJoke('daily'));
  }, []);

  return (
    <Section>
      <BigText style={matches ? { fontSize: rem(48) } : {}}>{joke}</BigText>
    </Section>
  );
};
