import { useRef, useContext, useEffect } from 'react';
import { FilterContext } from '~/pages/projects/index.page';
import style from '~/style/components/Projects.module.scss';
import type { Tag } from '~/types';
import { tags } from '../data/tags';

export const Filters = () => (
  <form className={style.filters}>
    {tags.map(filter => (
      <Filter key={filter}>{filter}</Filter>
    ))}
  </form>
);

const Filter: React.FC<{ children: Tag }> = ({ children: filter }) => {
  const ref = useRef<HTMLInputElement>(null);
  const [selectedFilters, setSelectedFilters] = useContext(FilterContext);

  useEffect(() => {
    ref.current!.checked = selectedFilters.includes(filter);
  });

  return (
    <div className={style.filter}>
      <input type="checkbox" name={filter} id={filter} className={style.filterCheckbox} ref={ref} />
      <label
        htmlFor={filter}
        onClick={() => {
          const _filters = new Set(selectedFilters);
          const isFilteredAlready = _filters.has(filter);

          if (isFilteredAlready) _filters.delete(filter);
          if (!isFilteredAlready) _filters.add(filter);

          setSelectedFilters([..._filters]);
        }}>
        {filter}
      </label>
    </div>
  );
};
