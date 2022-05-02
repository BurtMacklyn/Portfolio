import type { Tag } from './Tag';

export type Project = {
  name: string;
  id: string;
  tags: Tag[];
  description: string;
};
