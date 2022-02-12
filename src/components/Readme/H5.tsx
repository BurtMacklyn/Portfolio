import type { ReactChild } from 'react';

export function H5({ children }: { children?: ReactChild | ReactChild[] }) {
  return <h5 className='white'>{children}</h5>;
}
