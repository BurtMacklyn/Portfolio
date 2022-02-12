import type { ReactChild } from 'react';

export function Li({ children }: { children?: ReactChild | ReactChild[] }) {
  return <li>{children}</li>;
}
