import { Section } from '@/components/Section';
import { BigText } from '@/components/Typography/BigText';
import { rem } from '@/css';
import { useMQ } from '@/hooks/useMQ';
import { getJoke } from '@/pages/api/joke';
import { useEffect, useState } from 'react';

export const Joke: React.FC<{ joke: string }> = ({ joke }) => {
  const mq = useMQ();

  return (
    <Section data-testid="Joke">
      <BigText style={mq.sm ? { fontSize: rem(36 as any) } : {}}>
        {joke}
      </BigText>
    </Section>
  );
};
