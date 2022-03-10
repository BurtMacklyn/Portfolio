import { Portfolio, Markdown, Back, Nav } from '~/components';
import style from './Page.module.scss';

export function Page({ content }: { content: string }) {
  return (
    <Portfolio>
      <Nav />
      <div className={style.blog}>
        <div className={style.back}>
          <Back color="black" />
        </div>
        <Markdown>{content}</Markdown>
      </div>
    </Portfolio>
  );
}
