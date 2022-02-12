import type { ReactChild } from 'react';

export function Ul({ children }: { children?: ReactChild | ReactChild[] }) {
  return <ul>{children}</ul>;
}
