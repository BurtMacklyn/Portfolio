import React from 'react';

import style from './Error.module.scss';

interface Props {
  code: number;
  message: string | React.ReactNode;
}

export const Error: React.FC<Props> = ({ code, message }) => (
  <div className={style.Error}>
    <p className={style.backgroundCode}>{code}</p>
    <div className={style.content}>
      <span className={style.code}>{code}</span>
      <span className={style.message}>{message}</span>
    </div>
  </div>
);
