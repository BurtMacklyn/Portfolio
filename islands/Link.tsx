/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';

interface Props {
  children: string;
  href: string;
  arrowRight?: boolean;
  arrowLeft?: boolean;
  underline?: boolean;
  newTab?: boolean;
  style?: string;
  white?: boolean;
}

const Link = ({ children, href, arrowLeft, arrowRight, underline, newTab, style, white }: Props) => {
  return (
    <a
      href={href}
      {...(newTab ? { target: '_blank' } : {})}
      class={tw`group text-primary ${white && 'text-white hover:text-primary'} no-underline w-fit font-mono ${
        underline && `transition-all inline-flex flex-col gap-2 ${!(arrowLeft || arrowRight) && `hover:gap-4 mb-2 hover:mb-0`}`
      } ${style}`}>
      <span class={tw`transition-all inline-flex gap-2 group-hover:gap-4`}>
        {arrowLeft && <span>{'<-'}</span>}
        <span>{children}</span>
        {arrowRight && <span>{'->'}</span>}
      </span>
      {underline && <span class={tw`w-full h-0.5 bg-primary`} />}
    </a>
  );
};

export default Link;
