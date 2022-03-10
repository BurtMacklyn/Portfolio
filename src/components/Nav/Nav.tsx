import { useRef } from 'react';
import { Signature, Link } from '~/components';
import { useObserver } from '~/hooks';
import { LogoCircle } from './LogoCircle';
import style from './Nav.module.scss';

export function Nav() {
  const dummy = useRef<HTMLDivElement>(null);
  const active = useObserver(dummy);

  return (
    <>
      <div className={style.dummy} ref={dummy} style={{ width: 0, height: 0 }} />
      <div className={style.container}>
        <LogoCircle className={style.circle} />
        <div className={`${style.Nav} ${active ? style.active : ''}`}>
          <div className={style.content}>
            <Link href="/">
              <Signature color="white" className={style.Signature} />
            </Link>
            <ul>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/experience">Experience</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/site-map">Site Map</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
