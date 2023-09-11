import { Footer } from '@/components/Footer';
import { Main } from '@/components/Main';
import { Nav } from '@/components/Nav/Nav';

import { Box } from '@/components/Box';
import { Link } from '@/components/Button/Link';
import { SnakeWrapper } from '@/components/Snake/SnakeWrapper';
import { loadAIGame } from '@/components/Snake/ai';
import { Inline } from '@/components/Typography/Inline';
import { SectionTitle } from '@/components/Typography/SectionTitle';
import { color } from '@/config/style';
import { About } from '@/sections/index/About';
import { Hero } from '@/sections/index/Hero';
import { Joke } from '@/sections/index/Joke';
import { Quotes } from '@/sections/index/Quotes';
import { Technologies } from '@/sections/index/Technologies';
import { useRef } from 'react';
import { getJoke } from './api/joke';

export default function Index(
  props: Awaited<ReturnType<typeof getStaticProps>>['props'],
) {
  const snake = useRef<HTMLDivElement>(null);

  return (
    <>
      <Nav />
      <Main>
        <Hero />
        <Joke joke={props.joke} />
        <About experience={props.experience} />
        <Quotes />
        <Box gap={24}>
          <SectionTitle>
            <Link to="/snake">
              <Inline hover="primary">snake</Inline>
            </Link>
            <Inline color="primary">.</Inline>
          </SectionTitle>
          <Box
            ref={snake}
            round
            style={{
              border: `1px solid ${color('4')}`,
              overflow: 'none',
            }}>
            <SnakeWrapper
              game={canvas =>
                loadAIGame(canvas, {
                  parent: snake.current!,
                  scaleToWindow: false,
                  grid: false,
                  size: 30,
                  snakeColor: color('100'),
                  appleColor: color('primary'),
                })
              }
              resizeTo={snake}
            />
          </Box>
        </Box>
        <Technologies />
      </Main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      joke: getJoke('daily'),
      experience: new Date().getFullYear() - 2021,
    },
    revalidate: 6 * 60 * 60,
  };
}
