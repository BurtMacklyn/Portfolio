import { Center, Link } from '~/components';
import style from './Make.module.scss';

export function Make() {
  return (
    <Center>
      <div className={style.Make}>
        <h2>Stuff I make</h2>
        <p>
          I make a lot of devtools, usually when theres a particular need that I either can&apos;t find elsewhere, or want to recreate. For example, a while
          back I came into a problem, there were so many open source licenses, and I didn&apos;t know what to pick for certain projects. This gave me
          inspiration to start a project that I call LCNSR (Licenser). It&apos;s a nifty CLI that can teach you about licenses, and write them as well. If you
          have Node.JS installed on your computer, you can run: <code>npx lcnsr -d</code>, to describe all available licenses. Learn more{' '}
          <Link href="/projects/lcnsr">here</Link>.
        </p>
        <Link className={style.Link} newTab href="https://www.npmjs.com/~cooperrunyan">
          View my NPM profile
        </Link>
        <div className={style.circle} />
      </div>
    </Center>
  );
}
