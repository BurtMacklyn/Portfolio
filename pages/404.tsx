import style from '~/style/components/404.module.scss';
import Head from 'next/head';
import { ErrorGraphic } from '~/components/ErrorGraphic/ErrorGraphic';
import { Back } from '~/components/Back/Back';
import { Portfolio } from '~/components/Portfolio/Portfolio';

const Error = () => (
  <Portfolio>
    <Head>
      <title>404: Page not found</title>
    </Head>
    <div className={style.Err}>
      <ErrorGraphic className={style.Graphic} />
      <div className={style.content}>
        <h2>404</h2>
        <h3>Page not found</h3>
        <Back color="white" />
      </div>
    </div>
  </Portfolio>
);

export default Error;
