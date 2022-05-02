import style from './style/projects.module.scss';
import { Footer } from '~/components/footer/footer.component';
import { Nav } from '~/components/nav/nav.component';
import { Portfolio } from '~/components/portfolio/portfolio.component';
import type { Project, State, Tag } from '~/types';

import { Filters } from './components/filters.component';
import { Card } from './components/card.component';

// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import { projects } from './data/projects';

export const FilterContext = React.createContext<State<Tag[]>>([[], () => {}]);

const Projects = () => {
  const [selectedFilters, setSelectedFilters] = useState<Tag[]>([]);

  return (
    <Portfolio>
      <Nav />
      <div className="center">
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
      </div>
      <Footer />
    </Portfolio>
  );
};

export default Projects;

function checkIncludesTag(tags: Tag[], filters: Tag[]) {
  let val = true;
  for (const filter of filters) {
    if (!tags.includes(filter)) val = false;
  }
  return val;
}

const filter = (projects: Project[], filters: Tag[]) => projects.filter(project => checkIncludesTag(project.tags, filters));
