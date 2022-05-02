import { useRouter } from 'next/router';
import style from './back.module.scss';
import { pallette } from '~/config/pallette';

// eslint-disable-next-line no-undef
export const Back: React.FC<{ color: keyof typeof pallette; arrow?: true } & { [key: string]: any }> = ({ color, arrow, ...props }) => {
  const router = useRouter();

  return (
    <button className={`${style.Back} ${props.className}`} onClick={() => router.back()} style={{ color: pallette[color] }}>
      {!arrow && (
        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 17L2.41421 10.4142C1.63316 9.63316 1.63317 8.36683 2.41421 7.58579L9 1" stroke={pallette[color]} strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
      {arrow && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.4375 18.75L4.6875 12L11.4375 5.25M5.625 12H19.3125"
            stroke={pallette[color]}
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}{' '}
      Back
    </button>
  );
};
