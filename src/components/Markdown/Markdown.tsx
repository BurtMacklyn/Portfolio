import ReactMarkdown from 'react-markdown';
import type { ReactMarkdownOptions } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import style from './Markdown.module.scss';
import emoji from 'emoji-dictionary';
import hint from 'remark-hint';

export function Markdown({ children }: ReactMarkdownOptions) {
  return (
    <div className={style.article}>
      <ReactMarkdown remarkPlugins={[remarkGfm, hint]}>{children?.replace(/:\w+:/gi, (name) => emoji.getUnicode(name) || '')}</ReactMarkdown>
    </div>
  );
}
