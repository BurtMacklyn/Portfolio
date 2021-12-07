import React from 'react';

import { error } from '../content/global';
import Router from 'next/router';

export default function Main(): JSX.Element {
  return (
    <main className="error">
      <span onClick={() => Router.back()} className="back">
        {error.backBtn}
      </span>
      <header className="header">
        <div className="code__wrapper">
          <span className="code">{error.code}</span>
        </div>
        <span className="split"></span>
        <div className="message__wrapper">
          <span className="message">{error.message}</span>
        </div>
      </header>
    </main>
  );
}
