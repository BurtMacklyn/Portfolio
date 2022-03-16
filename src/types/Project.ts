import type { Tag } from './Tag';

export type Project = {
  name: string;
  link: string;
  preview: string;
  tags: Tag[];
  description: string;
};
