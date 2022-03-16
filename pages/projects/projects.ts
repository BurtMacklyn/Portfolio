import type { Project } from '~/types';

export const projects: Project[] = [
  {
    name: 'Stocked',
    link: '/projects/stocked',
    preview: '/imgs/projects/stocked.webp',
    tags: ['react', 'nextjs', 'scss', 'typescript', 'docker', 'oak', 'mongodb', 'deno', 'heroku', 'nodejs'],
    description: 'Stock tracking frontend/backend application',
  },
  {
    name: 'Lcnsr',
    link: '/projects/lcnsr',
    preview: '/imgs/projects/cli.webp',
    tags: ['nodejs', 'cli', 'javascript', 'typescript', 'npm'],
    description: 'Open source license helper',
  },
  {
    name: 'Tscf',
    link: '/projects/tscf',
    preview: '/imgs/projects/cli.webp',
    tags: ['nodejs', 'cli', 'javascript', 'typescript', 'npm'],
    description: 'Typescript configurator CLI',
  },

  {
    name: 'Asciifi',
    link: '/projects/asciifi',
    preview: '/imgs/projects/asciifi.svg',
    tags: ['nodejs', 'cli', 'javascript', 'typescript', 'npm'],
    description: 'Image > ascii converter',
  },
  {
    name: 'Snake',
    link: '/projects/snake',
    preview: '/imgs/projects/snake.webp',
    tags: ['react', 'nextjs', 'scss', 'typescript'],
    description: 'A cool web-based snake app!',
  },
  {
    name: 'Snake CLI',
    link: '/projects/snake-cli',
    preview: '/imgs/projects/snake-cli.png',
    tags: ['typescript', 'cli', 'javascript', 'nodejs', 'npm'],
    description: 'Play snake in your terminal',
  },
  {
    name: 'React Template',
    link: '/projects/react-template',
    preview: '/imgs/projects/template.webp',
    tags: ['scss', 'javascript', 'nodejs', 'react', 'template', 'typescript', 'vite'],
    description: 'A template repository for React projects',
  },
  {
    name: 'Nextjs Template',
    link: '/projects/next-template',
    preview: '/imgs/projects/template.webp',
    tags: ['scss', 'javascript', 'nodejs', 'nextjs', 'template', 'typescript'],
    description: 'A template repository for Nextjs projects',
  },
  {
    name: 'Trig Helper',
    link: '/projects/trig-helper',
    preview: '/imgs/projects/trig-helper.webp',
    tags: ['angular', 'scss', 'heroku', 'typescript'],
    description: 'Trigonometry helper',
  },

  {
    name: 'Deno Template',
    link: '/projects/deno-template',
    preview: '/imgs/projects/curl.webp',
    tags: ['scss', 'javascript', 'deno', 'template', 'typescript', 'deno', 'oak', 'docker'],
    description: 'A template repository for Deno APIs',
  },
  {
    name: 'Roth IRA Calculator',
    link: '/projects/roth-ira',
    preview: '/imgs/projects/roth-ira.webp',
    tags: ['scss', 'react', 'typescript', 'nodejs'],
    description: 'Calculator for Roth IRAs',
  },
];

export { default } from 'X';
