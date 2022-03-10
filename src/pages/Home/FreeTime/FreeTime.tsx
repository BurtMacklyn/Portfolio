import { Link } from '~/components';
import style from './FreeTime.module.scss';

export function FreeTime() {
  return (
    <div className={style.FreeTime}>
      <div className={style.circle} />
      <div className={style.content}>
        <h2>Free Time</h2>
        <p>
          I believe that a good developer cannot be made by only practicing what you learn every once-in-a-while. Because of this, I spend most of my time
          learning and improving. In that time I have built dev tools CLIs (Command Line Interfaces), that create project scaffolding, as well as a stock
          tracking app, and tons of small applications on Codepen.
        </p>
        <Link href="https://codepen.io/cooperrunyan" className={style.Link}>
          View my Codepen
        </Link>
      </div>
    </div>
  );
}
