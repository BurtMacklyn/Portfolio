import { HTMLAttributes, useEffect, useState } from 'react';
import { Center } from '~/components';
import { pallette } from '~/config';
import style from './TypeScript.module.scss';

export function TypeScript() {
  return (
    <Center>
      <div className={style.TypeScript}>
        <h2>
          TypeScript is{' '}
          <span style={{ color: pallette.primary }}>
            <Scroll />
          </span>
        </h2>
        <p>
          While JavaScript is (arguably) <Bold>one of the best languages out there</Bold>, TypeScript is much <Bold>better</Bold> that JavaScript. Writing all
          given to you <Bold>within</Bold> your IDE. It <Bold>simplifies and speeds</Bold> the programming process, and I thank each and every person at
          Microsoft who contributed to its creation.
        </p>
      </div>
    </Center>
  );
}

const amts = [1, 2, 3, 4, 5, 6, 7, 8];
const interval = 2400;

function Scroll() {
  const [alive, setAlive] = useState(true);
  const [focused, setFocused] = useState<typeof amts[number]>(1);

  useEffect(() => {
    setTimeout(() => {
      if (!alive) return;
      setFocused(amts[focused] || amts[0]);
    }, interval);

    return () => setAlive(false);
  });

  return (
    <ul className={`${style.Scroll} ${style[`focus${focused}`]}`}>
      <li className={style.c1}>better</li>
      <li className={style.c2}>stronger</li>
      <li className={style.c3}>quicker</li>
      <li className={style.c4}>superior</li>
      <li className={style.c5}>amazing</li>
      <li className={style.c6}>fancier</li>
      <li className={style.c7}>cooler</li>
      <li className={style.c8}>greater</li>
    </ul>
  );
}

function Bold(props: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span {...props} style={{ fontWeight: 700 }}>
      {props.children}
    </span>
  );
}

export { default } from 'X';
