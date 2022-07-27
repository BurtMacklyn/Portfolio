/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import Typography from './Typography.tsx';
import Link from './Link.tsx';

export default function Header() {
  return (
    <div class={tw`min-h-screen flex items-center`}>
      <div>
        <Typography variant="p" style={tw`mb-6`}>
          Hello world, I am
        </Typography>
        <div>
          <Typography variant="h1" style={tw`xl:text-7xl sm:text-6xl`}>
            Cooper <br class={tw`hidden sm:block`} /> Runyan
          </Typography>
          <Typography variant="h1" style={tw`text-grey1 -mt-2 xl:text-7xl xl:mt-2 sm:text-6xl sm:mt-4`}>
            Fullstack <span class={tw`md:hidden`}>Web</span> Developer
          </Typography>
        </div>
        <Typography variant="p" style={tw`my-8`}>
          I'm a 2 year fullstack software developer specializing in frontend web design/development and backend architecture with technologies like HTML,
          NodeJS, Deno, Docker, Go, NextJS, React, SCSS, and Typescript.
        </Typography>
        <Link arrowRight href="/contact" underline>
          Contact
        </Link>
      </div>
    </div>
  );
}
