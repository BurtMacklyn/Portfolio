import style from './Portal.module.scss';
// eslint-disable-next-line no-use-before-define
import type React from 'react';

export const Portal: React.FC<{ url: URL }> = ({ url }) => {
  return (
    <div className={style.Portal}>
      <iframe src={url.href} frameBorder="0" />
    </div>
  );
};
