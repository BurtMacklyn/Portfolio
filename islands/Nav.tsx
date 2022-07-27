/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';

import { maxWidth } from '../config.ts';
import Link from './Link.tsx';

export default function Nav() {
  return (
    <div class={tw`fixed top-0 left-0 w-full h-24`}>
      <div class={tw`w-full max-w-[${maxWidth}] mx-auto h-full px-32 flex justify-end items-center`}>
        <ul class={tw`flex items-center justify-end gap-10 list-none`}>
          <li>
            <Link white href="">
              Overview
            </Link>
          </li>
          <li>
            <Link white href="">
              Contact
            </Link>
          </li>
          <li>
            <Link white href="">
              Blog
            </Link>
          </li>
          <li>
            <Link white href="">
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
