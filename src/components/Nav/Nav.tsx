/* eslint-disable no-void */
import { useEffect, useRef, useState } from 'react';
import { useObserver } from '~/hooks';
import { useMediaQuery } from 'usehooks-ts';
import { pallette } from '~/config';
import { Signature } from '../Signature/Signature';
import { Link } from '../Link/Link';

import style from './Nav.module.scss';

export function Nav() {
  const dummy = useRef<HTMLDivElement>(null);
  const observed = useObserver(dummy);
  const check = useRef<HTMLInputElement>(null);
  const matches = useMediaQuery('(max-width: calc(900em / 16))');
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
    setActive(true);
  };

  const onUnHover = () => {
    setHover(false);
    setActive(observed);
  };

  useEffect(() => void setActive(observed || hover), [observed]);
  useEffect(() => {
    if (check.current && check.current.checked && !matches) check.current.checked = false;
  }, [matches]);

  return (
    <>
      <div className={style.dummy} ref={dummy} style={{ width: 0, height: 0 }} />
      <div className={style.container}>
        <svg className={style.circle} width="386" height="203" viewBox="0 0 386 203" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="193" cy="10" r="193" fill={pallette.black} />
        </svg>
        <div className={`${style.Nav} ${active ? style.active : ''}`} onMouseOver={onHover} onMouseOut={onUnHover}>
          <div className={style.content}>
            <Link href="/">
              <Signature color={active ? 'black' : 'white'} className={`${style.Signature} ${style.sig}`} />
            </Link>
            <label htmlFor="mobile" className={style.mobileButton}>
              <svg width="50" viewBox="0 0 100 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="2" y1="3" x2="98" y2="3" stroke={pallette.black} strokeWidth="4" strokeLinecap="round" />
                <line x1="2" y1="27" x2="98" y2="27" stroke={pallette.black} strokeWidth="4" strokeLinecap="round" />
                <line x1="2" y1="51" x2="98" y2="51" stroke={pallette.black} strokeWidth="4" strokeLinecap="round" />
              </svg>
            </label>
            <ul className={style.desktopLinks}>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/apps">Apps</Link>
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
            <svg height="30" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="2.82843" y1="3" x2="69" y2="69.1716" stroke="black" strokeWidth="4px" strokeLinecap="round" />
              <line x1="69" y1="2.82843" x2="2.82843" y2="69" stroke="black" strokeWidth="4px" strokeLinecap="round" />
            </svg>
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
            <Link href="/apps">Apps</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
