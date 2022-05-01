import { useEffect, useRef } from 'react';
import style from './Markdown.module.scss';

export function Markdown({ children }) {
  const article = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (article.current) {
      article.current.innerHTML = article.current.innerHTML
        .replaceAll(/<table/gi, '<div class="table-wrapper"><table')
        .replaceAll(/<\/table>/gi, '</table></div>')
        .replaceAll(/&gt;/gi, '>')
        .replaceAll(/&lt;/gi, '<');

      // eslint-disable-next-line no-undef
      for (const tableWrapper of Array.from(document.querySelectorAll('.table-wrapper') as NodeListOf<HTMLDivElement>)) {
        tableWrapper.style.width = '100%';
        tableWrapper.style.overflow = 'scroll';
        (tableWrapper.children[0]! as HTMLTableElement).style!.width = 'max-content';
        (tableWrapper.children[0]! as HTMLTableElement).style!.minWidth = '100%';
      }
    }
  }, [article.current]);

  return (
    <article ref={article} className={style.article}>
      {children}
    </article>
  );
}
