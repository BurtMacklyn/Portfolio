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
          <h1>404</h1>
          <h2>Page not found</h2>
          <Back color="white" />
        </div>
      </div>
    </Portfolio>
  );
}
