import { useRouter } from 'next/router';
import style from './BackArrow.module.scss';
import { pallette } from '~/config';

export function BackArrow({ color, ...props }: { color: keyof typeof pallette } & any) {
  const router = useRouter();

  return (
    <button className={`${style.Back} ${props.className}`} onClick={() => router.back()} style={{ color: pallette[color] }}>
      <Icon />
    </button>
  );
}

const Icon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.4375 18.75L4.6875 12L11.4375 5.25M5.625 12H19.3125" stroke={pallette.white} strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
