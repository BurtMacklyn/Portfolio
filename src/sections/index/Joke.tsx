import { Section } from '@/components/Section';
import { BigText } from '@/components/Typography/BigText';
import { rem } from '@/css';
import { useMQ } from '@/hooks/useMQ';
import { getJoke } from '@/pages/api/joke';
import { useEffect, useState } from 'react';

export const Joke: React.FC = () => {
  const [joke, setJoke] = useState<string>(
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, sequi.',
  );

  const mq = useMQ();

  useEffect(() => setJoke(getJoke('daily')), []);

  return (
    <Section data-testid="Joke">
      <BigText style={mq.sm ? { fontSize: rem(36 as any) } : {}}>
        {joke}
      </BigText>
    </Section>
  );
};
