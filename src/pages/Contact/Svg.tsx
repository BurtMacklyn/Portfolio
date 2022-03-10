import { pallette } from '~/config';

export function Svg(props: any) {
  return (
    <svg width="841" height="841" viewBox="0 0 841 841" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="420.5" cy="420.5" r="420.5" fill={pallette.grey} />
    </svg>
  );
}
