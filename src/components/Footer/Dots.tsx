import { pallette } from '~/config';

export function Dots() {
  return (
    <svg width="732" height="575" viewBox="0 0 732 575" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g
        style={{
          mixBlendMode: 'multiply',
        }}>
        <circle cx="157.207" cy="264.666" r="157.207" fill={pallette.primary} />
      </g>
      <g
        style={{
          mixBlendMode: 'multiply',
        }}>
        <circle cx="444.351" cy="287.351" r="287.351" fill={pallette.primary} />
      </g>
    </svg>
  );
}
