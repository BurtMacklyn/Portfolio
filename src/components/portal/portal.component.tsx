import Head from 'next/head';
import type React from 'react';
import { Back } from '~/components/back/back.component';
import { Portfolio } from '../portfolio/portfolio.component';

import style from './portal.module.scss';

export const Portal: React.FC<{ url: URL; noBack?: true }> = ({ url, noBack }) => (
  <Portfolio>
    <Head>
      <style dangerouslySetInnerHTML={{ __html: `body { overscroll-behavior-y: none }` }} />
    </Head>
    <div className={style.Portal}>
      {!noBack && (
        <span className={style.Back}>
          <Back arrow color="white" />
        </span>
      )}
      <iframe src={url.href} frameBorder="0" />
    </div>
  </Portfolio>
);
