import { pallette } from '~/config';

export default function SVG() {
  return (
    <svg width="50" viewBox="0 0 100 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="2" y1="3" x2="98" y2="3" stroke={pallette.black} strokeWidth="4" strokeLinecap="round" />
      <line x1="2" y1="27" x2="98" y2="27" stroke={pallette.black} strokeWidth="4" strokeLinecap="round" />
      <line x1="2" y1="51" x2="98" y2="51" stroke={pallette.black} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
