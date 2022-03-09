import style from './NotFound.module.scss';
import { Graphic } from './Graphic';
import { useRouter } from 'next/router';
import { Back } from './Back';

export function NotFound() {
  const router = useRouter();

  return (
    <div className={style.NotFound}>
      <Graphic className={style.Graphic} />
      <div className={style.content}>
        <h1>404</h1>
        <h2>Page not found</h2>
        <button onClick={() => router.back()}>
          <Back /> Back
        </button>
      </div>
    </div>
  );
}
