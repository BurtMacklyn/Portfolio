import React, { ReactNode, ReactPortal } from 'react';

export default function Tag({
  closeTag = false,
  className = '',
  children
}: {
  closeTag?: boolean;
  className?: string;
  children: ReactNode | ReactPortal;
}): JSX.Element {
  return (
    <code aria-hidden="true" className={`tag ${className}`}>
      &lt;{closeTag ? '/' : ''}
      {children}&gt;
    </code>
  );
}
