import type { ReactChild } from 'react';

export function H6({ children }: { children?: ReactChild | ReactChild[] }) {
  return <h6 className='white'>{children}</h6>;
}
