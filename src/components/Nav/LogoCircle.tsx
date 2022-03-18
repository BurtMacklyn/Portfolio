import type { SVGAttributes } from 'react';
import { pallette } from '~/config';

export function LogoCircle(props: SVGAttributes<SVGElement>) {
  return (
    <svg width="386" height="203" viewBox="0 0 386 203" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="193" cy="10" r="193" fill={pallette.black} />
    </svg>
  );
}
