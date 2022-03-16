import { Nav, Portfolio } from '~/components';
import style from '~/style/components/Projects.module.scss';
import { projects } from './projects';
import { Filters } from './Filters';
import { Card } from './Card';
// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import type { Project, State, Tag } from '~/types';

export const FilterContext = React.createContext<State<Tag[]>>([[], () => {}]);

export default function Projects() {
  const [selectedFilters, setSelectedFilters] = useState<Tag[]>([]);

  return (
    <Portfolio>
      <Nav />
      <FilterContext.Provider value={[selectedFilters, setSelectedFilters]}>
        <div className={style.page}>
          <div className={style.head}>
            <h2>Projects</h2>
            <p>
              Here are some of the projects that I&apos;ve created, Use the filter functionality below to find projects that suit what you&apos;re looking for.
              If you aren&apos;t sure, remove all filters to filter by coolest to least-cool.
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
