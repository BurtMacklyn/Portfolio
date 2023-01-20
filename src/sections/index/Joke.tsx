import { Section } from '@/components/Section';
import { BigText } from '@/components/Typography/BigText';
import { useMQ } from '@/context/MQ';
import { rem } from '@/css';
import { getJoke } from '@/pages/api/joke';
import { useEffect, useState } from 'react';

export const Joke: React.FC = () => {
  const [joke, setJoke] = useState<string>(
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, sequi.',
  );

  const mq = useMQ();

  useEffect(() => setJoke(getJoke('daily')), []);

  return (
    <Section>
      <BigText style={mq.sm ? { fontSize: rem(48) } : {}}>{joke}</BigText>
    </Section>
  );
};
