import { HTMLAttributes, useEffect, useState } from 'react';
import { pallette } from '~/config';
import style from './TypeScript.module.scss';

export function TypeScript() {
  return (
    <div className={style.TypeScript}>
      <h2>
        TypeScript is{' '}
        <span style={{ color: pallette.primary }}>
          <Scroll />
        </span>
      </h2>
      <p>
        While JavaScript is (arguably) <Bold>one of the best languages out there</Bold>, TypeScript is much <Bold>better</Bold> that JavaScript. Writing all
        given to you <Bold>within</Bold> your IDE. It <Bold>simplifies and speeds</Bold> the programming process, and I thank each and every person at Microsoft
        who contributed to its creation.
      </p>
    </div>
  );
}

const amts = [1, 2, 3, 4, 5, 6, 7, 8];
const interval = 2400;

function Scroll() {
  const [focused, setFocused] = useState<typeof amts[number]>(1);

  useEffect(() => {
    setTimeout(() => {
      setFocused(amts[focused] || amts[0]);
    }, interval);
  });

  return (
    <ul className={style.Scroll + ' ' + style['focus' + focused]}>
      <li className={style.c1}>better</li>
      <li className={style.c2}>stronger</li>
      <li className={style.c3}>faster</li>
      <li className={style.c4}>superior</li>
      <li className={style.c5}>bigger</li>
      <li className={style.c6}>fancier</li>
      <li className={style.c7}>cooler</li>
      <li className={style.c8}>greater</li>
    </ul>
  );
}

function Bold(props: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span {...props} style={{ color: pallette.primary, fontWeight: 700 }}>
      {props.children}
    </span>
  );
}
