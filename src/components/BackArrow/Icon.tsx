import type { SVGAttributes } from 'react';
import { pallette } from '~/config';

export function Icon(props: SVGAttributes<SVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11.4375 18.75L4.6875 12L11.4375 5.25M5.625 12H19.3125"
        stroke={props?.style?.color || pallette.white}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
