import { useState, useEffect, SVGAttributes } from 'react';
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

function BgDot(props: SVGAttributes<SVGElement>) {
  return (
    <svg {...props} width="907" height="907" viewBox="0 0 907 907" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="453.5" cy="453.5" r="453.5" fill="#F5F5F5" />
    </svg>
  );
}

export { default } from 'X';
