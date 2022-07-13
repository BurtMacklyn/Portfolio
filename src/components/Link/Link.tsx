import style from './Link.module.sass';

import NextLink from 'next/link';
import { Code } from '../Code/Code';

interface Props {
  href: string;
  children: string;
  underline?: true | 'always' | 'hover';
  arrowRight?: boolean;
  arrowLeft?: boolean;
}

export const Link: React.FC<Props> = ({ href, children: text, underline, arrowLeft, arrowRight }) => {
  return (
    <NextLink passHref href={href}>
      <a className={style.Link + ' ' + (['always', true].includes(underline as any) ? style.underline : underline === 'hover' ? style.hoverUnderline : '')}>
        {arrowLeft && <Code>{'<-'}</Code>}
        <Code>{text}</Code>
        {arrowRight && <Code>{'->'}</Code>}
      </a>
    </NextLink>
  );
};
