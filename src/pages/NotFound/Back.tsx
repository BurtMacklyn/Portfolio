import type { SVGAttributes } from 'react';
import { pallette } from '~/config';

export function Back(props: SVGAttributes<SVGElement>) {
  return (
    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9 17L2.41421 10.4142C1.63316 9.63316 1.63317 8.36683 2.41421 7.58579L9 1" stroke={pallette.white} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
