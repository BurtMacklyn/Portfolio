import style from '~/style/components/Projects.module.scss';
import type { Tag } from '~/types';
import { Filter } from './Filter';
import { tags } from '../data/tags';

export function Filters({ filters }: { filters: Tag[] }) {
  return (
    <form className={style.filters}>
      {tags.map((filter) => (
        <Filter key={filter}>{filter}</Filter>
      ))}
    </form>
  );
}

export { default } from 'X';
