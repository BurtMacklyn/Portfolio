import { Link, Signature } from '..';
import style from './Footer.module.scss';

export function Footer() {
  return (
    <div className={style.footerContainer}>
      <footer>
        <div>
          <h3>Cooper Runyan</h3>
          <ul>
            <li>
              <Link href="/overview">Overview</Link>
            </li>
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
        <div className={style.lower}>
          <div className={style.contact}>
            <p>(928) 421-2372</p>
            <p>cooperrunyan@gmail.com</p>
            <Link href="/contact">https://www.cooperrunyan.com/contact</Link>
          </div>
          <Signature
            className={style.signature}
            color="black"
            style={{
              transformOrigin: 'bottom right',
              transform: 'scale(1.6)',
            }}
          />
        </div>
      </footer>
    </div>
  );
}
