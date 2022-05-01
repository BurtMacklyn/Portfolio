import { useRouter } from 'next/router';
import style from './Back.module.scss';
import { pallette } from '~/config';

// eslint-disable-next-line no-undef
export const Back: React.FC<{ color: keyof typeof pallette } & { [key: string]: any }> = ({ color, ...props }) => {
  const router = useRouter();

  return (
    <button className={`${style.Back} ${props.className}`} onClick={() => router.back()} style={{ color: pallette[color] }}>
      <Icon color={color} /> Back
    </button>
  );
};

const Icon = ({ color }) => (
  <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 17L2.41421 10.4142C1.63316 9.63316 1.63317 8.36683 2.41421 7.58579L9 1" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);
