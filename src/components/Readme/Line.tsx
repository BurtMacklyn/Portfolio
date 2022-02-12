import type { ReactChild } from 'react';

export function Line({ children }: { children?: ReactChild | ReactChild[] }) {
  return <span className='line'></span>;
}
