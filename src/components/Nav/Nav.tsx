import { Link, Motion } from 'src/components';
import type React from 'react';

import { navTagCloseSettings, navTagOpenSettings } from './tagSettings';

export function Nav() {
  return (
    <nav>
      <Motion.Tag options={navTagOpenSettings}>nav</Motion.Tag>
      <ul>
        <li>
          <Link href='/'>Overview</Link>
        </li>
        <li>
          <Link href='/experience'>Experience</Link>
        </li>
        <li>
          <Link href='/resume'>Resume</Link>
        </li>
      </ul>
      <Motion.Tag close options={navTagCloseSettings}>
        nav
      </Motion.Tag>
    </nav>
  );
}
