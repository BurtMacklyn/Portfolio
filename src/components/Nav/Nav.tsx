import { useEffect, useRef } from 'react';
import { Signature, Link } from '~/components';
import { useObserver } from '~/hooks';
import { LogoCircle } from './LogoCircle';
import style from './Nav.module.scss';
import MobileSVG from './Mobile';
import X from './X';
import { useMediaQuery } from 'usehooks-ts';

export function Nav() {
  const dummy = useRef<HTMLDivElement>(null);
  const active = useObserver(dummy);
  const check = useRef<HTMLInputElement>(null);
  const matches = useMediaQuery('(max-width: calc(900em / 16))');

  useEffect(() => {
    if (check.current && check.current.checked && !matches) check.current.checked = false;
  }, [matches]);

  return (
    <>
      <div className={style.dummy} ref={dummy} style={{ width: 0, height: 0 }} />
      <div className={style.container}>
        <LogoCircle className={style.circle} />
        <div className={`${style.Nav} ${active ? style.active : ''}`}>
          <div className={style.content}>
            <Link href="/">
              <Signature color={active ? 'black' : 'white'} className={`${style.Signature} ${style.sig}`} />
            </Link>
            <label htmlFor="mobile" className={style.mobileButton}>
              <MobileSVG />
            </label>
            <ul className={style.desktopLinks}>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/play">Games</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <input ref={check} type="checkbox" className={style.check} name="mobile" id="mobile" style={{ display: 'none' }} />
      <div className={style.mobile}>
        <div className={style.top}>
          <Link href="/">
            <Signature color="black" className={style.sig} />
          </Link>
          <label htmlFor="mobile" className={style.X}>
            <X />
          </label>
        </div>
        <ul className={style.mobileLinks}>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/play">Games</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
