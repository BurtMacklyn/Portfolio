import { useState, useEffect } from 'react';
import { BgDot } from './BgDot';
import style from './Header.module.scss';

export function Header() {
  const [age, setAge] = useState(0);

  useEffect(() => {
    setAge(new Date().getFullYear() - 2006 - (new Date().getMonth() > 9 && new Date().getDate() >= 27 ? 0 : 1));
  });

  return (
    <div className={style.Header}>
      <BgDot className={style.bgDot} />
      <h1>Cooper Runyan</h1>
      <p>
        Hello world, my name is Cooper Runyan, I&apos;m a web developer based in Phoenix, Arizona. I was born in San Diego, California, {age} years ago. I
        started coding when I was 13, in a language called JavaScript. You probably have, at the very least, heard of this language, as it is debatably the most
        popular programming language today.
      </p>
    </div>
  );
}
