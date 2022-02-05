import type { HTMLAttributes } from 'react';
import { Motion } from 'src/components';

export function App({ className, children }: HTMLAttributes<HTMLDivElement>) {
  return <Motion.Div className={`App ${className}`}>{children}</Motion.Div>;
}
