import type { ReactChild } from 'react';

export function Codeline({ children }: { children?: ReactChild | ReactChild[] }) {
  return <code>{children}</code>;
}
