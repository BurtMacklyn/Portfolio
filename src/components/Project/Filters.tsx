import style from '~/style/components/Projects.module.scss';
import { Filter } from './Filter';
import { tags } from './tags';

export const Filters = () => (
  <form className={style.filters}>
    {tags.map(filter => (
      <Filter key={filter}>{filter}</Filter>
    ))}
  </form>
);
