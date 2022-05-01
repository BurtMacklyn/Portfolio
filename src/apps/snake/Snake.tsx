import { useEffect, useRef, useState } from 'react';
import type { Direction, Segment, Apple } from './types';
import { Game, Gameover, Snake, MakeApple } from './components';

import * as constants from './constants';
import * as fx from './effects';

import Head from 'next/head';

const SnakeGame = () => {
  const appleRef = useRef<HTMLDivElement>(null);

  const [direction, setDirection] = useState<Direction>('right');
  const [snake, setSnake] = useState<Segment[]>(constants.INITIAL_SNAKE);
  const [alive, setAlive] = useState<boolean>(true);
  const [score, setScore] = useState<number>(constants.INITIAL_SNAKE.length);
  const [playing, setPlaying] = useState<boolean>(true);
  const [apple, setApple] = useState<Apple | null>(null);

  useEffect(fx.moveSnake([snake, setSnake], [alive, setAlive], direction, playing, apple, setApple, appleRef), [snake, alive, playing]);
  useEffect(fx.changeDirection([direction, setDirection], playing), [snake, alive]);
  useEffect(fx.restart(alive, { setAlive, setDirection, setScore, setSnake }), [alive]);
  useEffect(fx.pause(playing, setPlaying), [playing]);
  useEffect(fx.apple(setApple, snake), []);
  useEffect(fx.score(snake, setScore), [snake.length]);

  return (
    <>
      <Head>
        <title>Snake</title>
      </Head>
      {/* <Portfolio> */}
      <Game score={score}>
        <Snake>{snake}</Snake>
        <Gameover isAlive={alive} snake={snake} />
        <>{apple && snake.length >= constants.INITIAL_SNAKE.length && <MakeApple ref={appleRef}>{apple}</MakeApple>}</>
      </Game>
      {/* </Portfolio> */}
    </>
  );
};

export default SnakeGame;
