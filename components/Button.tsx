/** @jsx h */
import { h } from 'preact';
import { tw } from 'style';

interface Props {
  children: any;
  class?: string;
  href?: string;
  new?: boolean;
  onClick?: () => any;
}

export function Button(props: Props) {
  const reset = tw`!outline-[0] !border-[0] no-underline`;
  const font = tw`select-none font-semibold tracking-tight leading-none`;
  const spacing = tw`rounded py-3 px-4.5`;
  const color = tw`text-white bg-primary`;

  const style = tw`transition-all overflow-hidden relative group ${reset} ${font} ${spacing} ${color}`;

  const psuedoBase = tw`transition-all absolute top-[50%] left-[50%] aspect-square translate-y-[-50%] translate-x-[-50%] w-12 h-12 rounded-[50%] opacity-0`;

  const psuedo = tw`${psuedoBase} group-hover:opacity-[.3] group-hover:scale-[2.1] group-focus-visible:opacity-[.3] group-focus-visible:scale-[2.1] bg-white z-[2]`;
  const psuedo2 = tw`${psuedoBase} group-active:opacity-[.3] group-active:scale-[2.1] bg-black z-[3]`;

  const children = tw`relative z-[3]`;

  if (props.href)
    return (
      <a href={props.href} onClick={props.onClick} target={props.new ? '_blank' : undefined} class={tw`${props.class} ${style}`}>
        <span class={psuedo} />
        <span class={psuedo2} />
        <span class={children}>{props.children}</span>
      </a>
    );
  else
    return (
      <button onClick={props.onClick} class={tw`${props.class} ${style}`}>
        <span class={psuedo} />
        <span class={psuedo2} />
        <span class={children}>{props.children}</span>
      </button>
    );
}
