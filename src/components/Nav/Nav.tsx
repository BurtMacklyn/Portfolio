import { Link, Tag } from 'src/components';
import type React from 'react';

export function Nav() {
  return (
    <nav>
      <Tag>nav</Tag>
      <ul>
        <li>
          <Link href='/'>Overview</Link>
        </li>
        <li className='rm'>
          <Link href='/#experience'>Experience</Link>
        </li>
        <li className='rm'>
          <Link href='/#technologies'>Technologies</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
      <Tag close>nav</Tag>
    </nav>
  );
}
