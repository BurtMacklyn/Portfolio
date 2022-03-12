import style from './NotFound.module.scss';
import { Graphic } from './Graphic';
import Head from 'next/head';
import { Portfolio, Back } from '~/components';

export function NotFound() {
  return (
    <Portfolio>
      <Head>
        <title>404: Page not found</title>
      </Head>
      <div className={style.NotFound}>
        <Graphic className={style.Graphic} />
        <div className={style.content}>
          <h2>404</h2>
          <h3>Page not found</h3>
          <Back color="white" />
        </div>
      </div>
    </Portfolio>
  );
}
