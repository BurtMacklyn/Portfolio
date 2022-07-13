import { Code } from '~/components/Code/Code';
import { Link } from '~/components/Link/Link';
import style from './Header.module.sass';

export const Header: React.FC = () => {
  return (
    <header className={style.Header}>
      <Code>Hello world, I am</Code>
      <div className={style.headings}>
        <h1>Cooper Runyan</h1>
        <h1 className={style.dark}>Fullstack Web Developer</h1>
      </div>
      <p>
        I'm a 2 year software developer specializing in frontend web design/development and backend architecture with technologies like HTML, NodeJS, Deno,
        Docker, Go, NextJS, React, SCSS, and Typescript.
      </p>
      <Link href="#" underline arrowRight>
        Contact
      </Link>
    </header>
  );
};
