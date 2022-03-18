import ReactMarkdown from 'react-markdown';
import type { ReactMarkdownOptions } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import style from './Markdown.module.scss';

export function Markdown({ children }: ReactMarkdownOptions) {
  return (
    <div className={style.article}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  );
}
