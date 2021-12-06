import Link from 'next/link';
import { footer } from '../content/global';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__section footer__section--1">
        <p className="footer__name">{footer.name}</p>
        <ul className="footer__links">
          <li className="footer__link footer__link--overview">
            <Link href="/">Overview</Link>
          </li>
          <li className="footer__link footer__link--experience">
            <Link href="/experience">Experience</Link>
          </li>
          <li className="footer__link footer__link--projects">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="footer__link footer__link--about">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="footer__section footer__section--2">
        <p role="contentinfo" className="footer__legal">
          {footer.line1}
        </p>
        <p role="contentinfo" className="footer__legal">
          {footer.line2}
        </p>
        <p role="contentinfo" className="footer__legal">
          {footer.line3}
        </p>
        <p role="contentinfo" className="footer__legal--mobile">
          {footer.mobile}
        </p>
      </div>
    </footer>
  );
}
