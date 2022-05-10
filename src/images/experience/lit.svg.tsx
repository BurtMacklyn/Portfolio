import { pallette } from '~/config/pallette';

export const Lit = () => (
  <svg width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 60.0002L28.1018 46.0229L40.0496 40.0498L60.0416 60.0418L63.4269 79.3399L60 100L40 80.0002L28.1018 71.9955L20 60.0002Z" fill={pallette.white} />
    <path d="M40 80V40L60 20V60L40 80ZM0 80L20 100L22.8755 81.062L20 60L8.26806 67.4091L0 80Z" fill={pallette.black} />
    <path d="M20 60V20L40 0V40L20 60ZM60 100V60L80 40V80L60 100ZM0 80V40L20 60L0 80Z" fill={pallette.black} />
    <path d="M20 100V60L40 80L20 100Z" fill={pallette.black} />
  </svg>
);
