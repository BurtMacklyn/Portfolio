import { Center, Footer, Nav, Portfolio } from '~/components';
import style from '~/style/components/Projects.module.scss';
import { projects } from './data/projects';
import { Filters } from './components/Filters';
import { Card } from './components/Card';
// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import type { Project, State, Tag } from '~/types';

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

            <Filters filters={selectedFilters} />

            <div className={style.grid}>
              {filter(projects, selectedFilters).map((project) => (
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
  return projects.filter((project) => checkIncludesTag(project.tags, filters));
}
