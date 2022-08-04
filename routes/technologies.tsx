/** @jsx h */

import { tw } from '@twind';
import { h } from 'preact';
import { App } from '../components/App.tsx';
import Card from '../islands/Card.tsx';

export default function Technologies() {
  const cardClass = tw`flex-grow-1 flex-shrink-1 basis-96`;
  const click = (link: string) => () => window.open(link, '_blank');

  return (
    <App>
      <section class={tw`my-16`}>
        <h2 class={tw`lowercase font-semibold text-5xl tracking-tighter leading-none`}>Technologies.</h2>
        <div class={tw`flex flex-wrap flex-row mt-8 gap-4`}>
          {technologies.map(tech => (
            <Card onClick={click(tech.link)} className={cardClass} clickable {...tech} />
          ))}
        </div>
      </section>
    </App>
  );
}

const technologies = [
  { link: 'https://nextjs.org', title: 'Next JS', description: 'A fullstack non-opinionated framework for React' },
  { link: 'https://reactjs.org', title: 'React', description: "The world's most popular non-opinionated frontend UI framework." },
  { link: 'https://nodejs.org', title: 'NodeJS', description: "Server-side JavaScript runtime built on Google Chrome's V8 JS engine." },
  { link: 'https://www.typescriptlang.org/', title: 'TypeScript', description: 'A better JavaScript' },
  { link: 'https://deno.land', title: 'Deno', description: 'The successor to NodeJS built in Rust and focused on TypeScript' },
  { link: 'https://sass-lang.com', title: 'SCSS', description: 'The TypeScript of CSS' },
  { link: 'https://expressjs.com', title: 'Express', description: 'Node library for http server creation.' },
  { link: 'https://www.docker.com', title: 'Docker', description: 'Containerization for apps' },
  { link: 'https://fresh.deno.dev', title: 'Fresh', description: 'React framework built in Deno (used for this site)' },
  { link: 'https://www.figma.com/', title: 'Figma', description: 'Frontend UI design tool' },
  { link: 'https://www.vercel.com/', title: 'Vercel', description: 'Serverless hosting for Node apps (creators of Next JS)' },
  { link: 'https://www.mongodb.com/', title: 'MongoDB', description: 'No SQL database' },
  { link: 'https://www.heroku.com/', title: 'Heroku', description: 'Cloud hosting for applications' },
  { link: 'https://www.netlify.com/', title: 'Netlify', description: 'Hosting service' },
  { link: 'https://www.javascript.com/', title: 'JavaScript', description: 'The lesser version of TypeScript' },
  { link: 'https://developer.mozilla.org/en-US/docs/Web/CSS', title: 'CSS', description: 'Frontend styling language' },
  { link: 'https://webpack.js.org/', title: 'Webpack', description: 'Module bundler/builder' },
  {
    link: 'https://developer.salesforce.com/docs/component-library/documentation/en/lwc',
    title: 'LWC',
    description: "Salesforce's frontend framework (Lightning Web Components)",
  },
  { link: 'https://angular.io/', title: 'Angular', description: 'A popular, opinionated frontend UI framework created by Google' },
  { link: 'https://vitejs.dev/', title: 'Vite', description: 'The better version of Webpack (it uses HMR)' },
  { link: 'https://lit.dev/', title: 'Lit', description: 'Abstraction framework for WebComponents' },
  { link: 'https://ionic.io/', title: 'Ionic', description: 'Fullstack framework for building applications' },
  { link: 'https://prisma.io/', title: 'Prisma', description: 'A TypeScript-based ORM (abstraction layer) for SQL database management' },
  { link: 'https://electronjs.org/', title: 'Electron', description: 'Creates desktop apps with JavaScript' },
];
