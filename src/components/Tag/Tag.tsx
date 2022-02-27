export function Tag({ children, close, className }: { children: string; close?: boolean; className?: string }) {
  const endTag = close ? '/' : '';
  const cls = close ? 'close' : 'open';
  return (
    <code aria-hidden className={`tag ${cls} ${className ? className : ''}`}>
      {'<' + endTag + children + '>'}
    </code>
  );
}
