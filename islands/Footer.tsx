/** @jsx h */

import { h } from 'preact';
import { tw } from '@twind';
import { margin, maxWidth } from '../config.ts';

export default function Footer() {
  return (
    <footer class={tw`bg-g4 text-g80`}>
      <div class={tw`${margin} mx-auto py-6 max-w-[${maxWidth}]`}>
        <p class={tw`text-xs`}>Copyright © 2022 - All rights reserved by Cooper Runyan.</p>
        <p class={tw`text-xs`}>Site created and designed by Cooper Runyan using Deno and Fresh (React)</p>
      </div>
    </footer>
  );
}
