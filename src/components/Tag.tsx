import React from 'react';

export default function Tag({ name = '', closeTag = false, className = '' }: { name: string; closeTag?: boolean; className: string }): JSX.Element {
  return (
    <code aria-hidden="true" className={`tag ${className}`}>
      &lt;{closeTag ? '/' : ''}
      {name}&gt;
    </code>
  );
}
