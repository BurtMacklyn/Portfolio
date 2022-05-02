// eslint-disable-next-line no-use-before-define
import type React from 'react';
import { Back } from '~/components/back/back.component';

import style from './portal.module.scss';

export const Portal: React.FC<{ url: URL; noBack?: true }> = ({ url, noBack }) => {
  return (
    <div className={style.Portal}>
      {!noBack && (
        <span className={style.Back}>
          <Back arrow color="white" />
        </span>
      )}
      <iframe src={url.href} frameBorder="0" />
    </div>
  );
};
