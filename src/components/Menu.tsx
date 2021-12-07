import * as icons from 'react-ionicons';
import Link from 'next/link';

const scrollTop = function (): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export default function Menu({ active = '' }: { active: string }): JSX.Element {
  return (
    <div role="navigation" className="menu">
      <ul className="menu__btns">
        <li className="not-top menu__btn--1">
          <Link href="/">
            <a href="/" title="Overview" className={`menu__btn menu__btn--overview ${active === 'index' ? 'menu__btn--active' : ''}`}>
              <icons.HomeOutline color={'inherit'} title={'Overview'} />
            </a>
          </Link>
        </li>
        <li className="not-top menu__btn--2">
          <Link href="/experience">
            <a href="/experience" title="Experience" className={`menu__btn menu__btn--overview ${active === 'experience' ? 'menu__btn--active' : ''}`}>
              <icons.TerminalOutline color={'inherit'} title={'Experience'} />
            </a>
          </Link>
        </li>
        <li className="not-top menu__btn--3">
          <Link href="/projects">
            <a href="/projects" title="Projects" className={`menu__btn menu__btn--projects ${active === 'projects' ? 'menu__btn--active' : ''}`}>
              <icons.RocketOutline color={'inherit'} title={'Projects'} />
            </a>
          </Link>
        </li>
        <li className="not-top menu__btn--4">
          <Link href="/about">
            <a href="/about" title="About" className={`menu__btn menu__btn--about ${active === 'about' ? 'menu__btn--active' : ''}`}>
              <icons.PersonOutline color={'inherit'} title={'About'} />
            </a>
          </Link>
        </li>
        <li className="top menu__btn--5">
          <button title="Back to top" className="menu__btn menu__btn--top" onClick={scrollTop}>
            <icons.ChevronUpOutline color={'inherit'} title={'Back to top'} />
          </button>
        </li>
      </ul>
    </div>
  );
}
