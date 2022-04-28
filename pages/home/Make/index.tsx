import { Center, Link } from '~/components';
import style from './Make.module.scss';

export function Make() {
  return (
    <Center>
      <div className={style.Make}>
        <h2>Stuff I make</h2>
        <p>
          I love making games, specifically, minigames; they allow you to build applications at any scale you want, with the promise of not being overly
          ambitious. I have created the popular minigame, Snake, countless times; I created it in pure HTML/Javascript, React/Nextjs, and also a CLI version
          (Available on npm). If you have Node installed on your computer, run <code>npx snke</code> to try it out!
        </p>
        <Link newTab href="https://www.npmjs.com/~cooperrunyan">
          View my NPM profile
        </Link>
        <div className={style.circle} />
      </div>
    </Center>
  );
}

export { default } from 'X';
