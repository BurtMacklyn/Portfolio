import type { ReactChild } from 'react';

export function H3({ children }: { children?: ReactChild | ReactChild[] }) {
  return <h3 className='white'>{children}</h3>;
}
