// eslint-disable-next-line no-use-before-define
import type React from 'react';

import style from './Portal.module.scss';
import { BackArrow } from '../BackArrow/BackArrow';

export const Portal: React.FC<{ url: URL; noBack?: true }> = ({ url, noBack }) => {
  return (
    <div className={style.Portal}>
      {!noBack && (
        <span className={style.Back}>
          <BackArrow color="white" />
        </span>
      )}
      <iframe src={url.href} frameBorder="0" />
    </div>
  );
};
