import type { HTMLAttributes } from 'react';
import { Center } from '~/components';
import style from './Typescript.module.scss';

export function Typescript() {
  return (
    <Center>
      <div className={style.Typescript}>
        <h2>Typescript</h2>
        <p>
          While Javascript is (arguably) <Bold>one of the best languages out there</Bold>, Typescript is much <Bold>better</Bold> than Javascript. Types,
          variables, properties, and methods, all given to you <Bold>within</Bold> your IDE. It <Bold>simplifies and speeds</Bold> the programming process, and
          I thank each and every person at Microsoft who contributed to its creation.
        </p>
      </div>
    </Center>
  );
}

function Bold(props: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span {...props} style={{ fontWeight: 700 }}>
      {props.children}
    </span>
  );
}
