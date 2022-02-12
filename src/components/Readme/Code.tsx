import type { ReactChild } from 'react';

export function Code({ children }: { children?: ReactChild | ReactChild[] }) {
  return <code className="code">{children}</code>;
}
