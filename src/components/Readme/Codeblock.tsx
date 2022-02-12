import type { ReactChild } from 'react';

export function Codeblock({ children }: { children?: ReactChild | ReactChild[] }) {
  return <div className='codeblock'>{children}</div>;
}
