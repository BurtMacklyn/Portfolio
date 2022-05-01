import { pallette } from '~/config';
import style from './Quote.module.scss';

export const Quote = () => (
  <div className="center">
    <div className={style.Quote} style={{ maxWidth: 'fit-content' }}>
      <Quotation />
      <h3 className={style.text}>Any application that can be written in Javascript, will eventually be written in Javascript.</h3>
      <div className={style.cite}>
        <p className={style.name}>Jeff Atwood</p>
        <p className={style.description}>Creator of Stack Overflow</p>
        <span className={style.circle} />
      </div>
    </div>
  </div>
);

const Quotation = () => (
  <svg width="125" height="81" viewBox="0 0 125 81" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.Quotation}>
    <rect x="42.6443" width="30.6567" height="76.6417" rx="15.3283" transform="rotate(33.808 42.6443 0)" fill={pallette.black} />
    <rect x="98.6443" width="30.6567" height="76.6417" rx="15.3283" transform="rotate(33.808 98.6443 0)" fill={pallette.black} />
  </svg>
);
