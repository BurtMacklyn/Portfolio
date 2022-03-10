import { Quotation } from './Quotation';
import style from './Quote.module.scss';

export function Quote() {
  return (
    <div className={style.Quote}>
      <Quotation className={style.Quotation} />
      <h3 className={style.text}>Any application that can be written in JavaScript, will eventually be written in JavaScript.</h3>
      <div className={style.cite}>
        <p className={style.name}>Jeff Atwood</p>
        <p className={style.description}>Creator of Stack Overflow</p>
        <span className={style.circle} />
      </div>
    </div>
  );
}
