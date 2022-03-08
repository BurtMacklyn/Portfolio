import type { SVGAttributes } from 'react';
import { pallette } from '~/config';

export function Quotation(props: SVGAttributes<SVGElement>) {
  return (
    <svg width="125" height="81" viewBox="0 0 125 81" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="42.6443" width="30.6567" height="76.6417" rx="15.3283" transform="rotate(33.808 42.6443 0)" fill={pallette.primary} />
      <rect x="98.6443" width="30.6567" height="76.6417" rx="15.3283" transform="rotate(33.808 98.6443 0)" fill={pallette.primary} />
    </svg>
  );
}
