import * as blogImgs from '~/images/blog';

export const convertData = (pages: { id: string; title: string; timestamp: string }[]) =>
  pages.map(page => ({
    path: page.id,
    title: page.title,
    timestamp: new Date(page.timestamp),
    Preview:
      blogImgs[
        page.id
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join('')
      ],
  }));
