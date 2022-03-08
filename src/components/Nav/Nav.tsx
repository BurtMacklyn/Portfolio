import { useEffect, useRef, useState } from 'react';
import { Signature, Link } from '~/components';
import { LogoCircle } from './LogoCircle';
import style from './Nav.module.scss';

export function Nav() {
  const [active, setActive] = useState(false);
  const dummy = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) setActive(true);
      else setActive(false);
    }, {});

    observer.observe(dummy.current!);
  }, []);

  return (
    <>
      <div className={style.dummy} ref={dummy} style={{ width: 0, height: 0 }}></div>
      <div className={style.container}>
        <LogoCircle className={style.circle} />
        <div className={style.Nav + ' ' + (active ? style.active : '')}>
          <div className={style.content}>
            <Link href="/">
              <Signature color="white" className={style.Signature} />
            </Link>
            <ul>
              <li>
                <Link href="#">Projects</Link>
              </li>
              <li>
                <Link href="#">Experience</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Site Map</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
