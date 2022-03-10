import { Link, Signature } from '..';
import { Dots } from './Dots';
import style from './Footer.module.scss';

export function Footer() {
  return (
    <div className={style.footerContainer}>
      <footer>
        <Dots className={style.dots} />

        <div>
          <h3>Cooper Runyan</h3>
          <ul>
            <li>
              <Link href="#">Overview</Link>
            </li>
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
        <div className={style.lower}>
          <div className={style.contact}>
            <p>(928) 421-2372</p>
            <p>cooperrunyan@gmail.com</p>
            <Link href="/contact">https://www.cooperrunyan.com/contact</Link>
          </div>
          <Signature
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
