import { Center, Footer, Nav, Portfolio } from '~/components';
import style from '~/style/components/Projects.module.scss';
import { Filters } from '~/components/Project/Filters';
import { Card } from '~/components/Project/Card';
import type { Project, State, Tag } from '~/types';

// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';

export const FilterContext = React.createContext<State<Tag[]>>([[], () => {}]);

export default function Projects() {
  const [selectedFilters, setSelectedFilters] = useState<Tag[]>([]);

  return (
    <Portfolio>
      <Nav />
      <Center>
        <FilterContext.Provider value={[selectedFilters, setSelectedFilters]}>
          <div className={style.page}>
            <div className={style.head}>
              <h2>Projects</h2>
              <p>
                I enjoy not only the satisfaction of the byproduct of creating, but also the creation process itself. I think it&apos;s fun to tinker around
                with new technologies and determine the absolute best ones. In retrospect, A lot of the things I have built are dev tools which speed up coding
                processes, which is quite paradoxical.
              </p>
            </div>

            <Filters />

            <div className={style.grid}>
              {filter(projects, selectedFilters).map(project => (
                <Card key={Math.random() * Math.random()}>{project}</Card>
              ))}
            </div>
          </div>
        </FilterContext.Provider>
      </Center>
      <Footer />
    </Portfolio>
  );
}

function checkIncludesTag(tags: Tag[], filters: Tag[]) {
  let val = true;
  for (const filter of filters) {
    if (!tags.includes(filter)) val = false;
  }
  return val;
}

function filter(projects: Project[], filters: Tag[]) {
  return projects.filter(project => checkIncludesTag(project.tags, filters));
}

export const projects: Project[] = [
  {
    name: 'Lcnsr',
    id: 'lcnsr',
    tags: ['nodejs', 'cli', 'javascript', 'typescript', 'npm'],
    description: 'Open source license helper',
  },
  {
    name: 'Tscf',
    id: 'tscf',
    tags: ['nodejs', 'cli', 'javascript', 'typescript', 'npm'],
    description: 'Typescript configurator CLI',
  },
  {
    name: 'Asciifi',
    id: 'asciifi',
    tags: ['nodejs', 'cli', 'javascript', 'typescript', 'npm'],
    description: 'Image > ascii converter',
  },
  {
    name: 'Snake',
    id: 'snake',
    tags: ['react', 'nextjs', 'scss', 'typescript'],
    description: 'A cool web-based snake app!',
  },
  {
    name: 'Snake CLI',
    id: 'snake-cli',
    tags: ['typescript', 'cli', 'javascript', 'nodejs', 'npm'],
    description: 'Play snake in your terminal',
  },
  {
    name: 'React Template',
    id: 'react-template',
    tags: ['scss', 'javascript', 'nodejs', 'react', 'template', 'typescript', 'vite'],
    description: 'A template repository for React projects',
  },
  {
    name: 'Nextjs Template',
    id: 'next-template',
    tags: ['scss', 'javascript', 'nodejs', 'nextjs', 'template', 'typescript'],
    description: 'A template repository for Nextjs projects',
  },
  {
    name: 'Trig Helper',
    id: 'trig-helper',
    tags: ['angular', 'scss', 'heroku', 'typescript'],
    description: 'Trigonometry helper',
  },
  {
    name: 'Deno Template',
    id: 'deno-template',
    tags: ['scss', 'javascript', 'deno', 'template', 'typescript', 'deno', 'oak', 'docker'],
    description: 'A template repository for Deno APIs',
  },
  {
    name: 'Roth IRA Calculator',
    id: 'roth-ira',
    tags: ['scss', 'react', 'typescript', 'nodejs'],
    description: 'Calculator for Roth IRAs',
  },
];
