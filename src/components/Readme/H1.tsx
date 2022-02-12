import type { ReactChild } from 'react';

export function H1({ children }: { children?: ReactChild | ReactChild[] }) {
  return <h1 className="white">{children}</h1>;
}
