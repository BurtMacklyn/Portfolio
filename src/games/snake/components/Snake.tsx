import type { Segment } from '../types';
import { SnakeSegment } from '.';

export function Snake({ children }: { children: Segment[] }) {
  return (
    <>
      {children.map((segment) => (
        <SnakeSegment key={segment.id}>{segment}</SnakeSegment>
      ))}
    </>
  );
}
