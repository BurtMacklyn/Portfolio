import { ReactChild, useState } from 'react';
import DenoSVG from 'public/svg/deno.svg';
import ReactSVG from 'public/svg/react.svg';

export function Stacks() {
  const [front, setFront] = useState<boolean>(true);

  return <section className='stacks'></section>;
}

function End({ children, front, back, visible }: { children: ReactChild; front?: boolean; back?: boolean; visible: boolean }) {
  return (
    <div
      className={`end ${front ? 'front' : 'back'}end`}
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'all' : 'none',
      }}>
      <h2 className='white'>{front ? 'Frontend' : 'Backend'}</h2>
      <p>{children}</p>
    </div>
  );
}
