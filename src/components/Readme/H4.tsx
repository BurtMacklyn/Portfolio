import type { ReactChild } from 'react';

export function H4({ children }: { children?: ReactChild | ReactChild[] }) {
  return <h4 className='white'>{children}</h4>;
}
