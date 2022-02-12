import type { ReactChild } from 'react';

export function H2({ children }: { children?: ReactChild | ReactChild[] }) {
  return <h2 className='white'>{children}</h2>;
}
