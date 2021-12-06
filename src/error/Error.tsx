import { error } from '../content/global';
import Router from 'next/router';

function Main() {
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

export default Main;
