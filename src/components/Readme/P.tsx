import type { ReactChild } from 'react';

export function P({ children }: { children?: ReactChild | ReactChild[] }) {
  return <p>{children}</p>;
}
