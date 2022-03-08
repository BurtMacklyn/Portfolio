import { BgDot } from './BgDot';
import style from './Header.module.scss';

export function Header() {
  return (
    <div className={style.Header}>
      <BgDot className={style.bgDot} />
      <h1>Cooper Runyan</h1>
      <p>
        Hello world, my name is Cooper Runyan, I'm a web developer based in Phoenix, Arizona. I was born in San Diego, California, 15 years ago. I started
        coding when I was 13, in a language called JavaScript. You probably have, at the very least, heard of this language, as it is debatably the most popular
        coding language today.
      </p>
    </div>
  );
}
