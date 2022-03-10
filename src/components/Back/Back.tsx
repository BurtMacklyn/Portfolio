import { useRouter } from 'next/router';
import { Icon } from './Icon';
import style from './Back.module.scss';
import { pallette } from '~/config';

export function Back({ color, ...props }: { color: keyof typeof pallette } & any) {
  const router = useRouter();

  return (
    <button className={`${style.Back} ${props.className}`} onClick={() => router.back()} style={{ color: pallette[color] }}>
      <Icon style={{ color: pallette[color] }} /> Back
    </button>
  );
}
