import Link from 'next/link';

export default function Main(): JSX.Element {
  return (
    <div className="links">
      <div className="links__content">
        <Link href="/experience">
          <a href="/experience" className="links__link">
            Experience
          </a>
        </Link>
        <Link href="/projects">
          <a href="/projects" className="links__link">
            Projects
          </a>
        </Link>
        <Link href="/about">
          <a href="/about" className="links__link">
            About
          </a>
        </Link>
      </div>
    </div>
  );
}
