import { Center, Link } from '~/components';
import { Codepen, Contact, Email, Github, Linkedin, Npm, Stackoverflow, Twitter } from './icons';
import style from './Socials.module.scss';

export function Socials() {
  return (
    <Center>
      <div className={style.Socials}>
        <div className={style.content}>
          <Card newTab href="https://www.linkedin.com/in/cooper-runyan-52a343225/">
            {{ name: 'LinkedIn', Logo: Linkedin }}
          </Card>
          <Card newTab href="https://twitter.com/CooperRunyan1">
            {{ name: 'Twitter', Logo: Twitter }}
          </Card>
          <Card newTab href="https://www.github.com/cooperrunyan?tab=repositories">
            {{ name: 'Github', Logo: Github }}
          </Card>
          <Card newTab href="mailto:cooperrunyan@gmail.com">
            {{ name: 'Email', Logo: Email }}
          </Card>
          <Card newTab href="https://www.npmjs.com/~cooperrunyan">
            {{ name: 'Npm', Logo: Npm }}
          </Card>
          <Card newTab href="https://codepen.io/cooperrunyan">
            {{ name: 'Codepen', Logo: Codepen }}
          </Card>
          <Card newTab href="https://stackoverflow.com/story/cooperrunyan">
            {{ name: 'Stackoverflow', Logo: Stackoverflow }}
          </Card>
          <Card newTab={false} href="/contact">
            {{ name: 'Contact', Logo: Contact }}
          </Card>
        </div>
      </div>
    </Center>
  );
}

const Card = ({ children, href, newTab }) => (
  <Link href={href} className={style.Link} newTab={!!newTab}>
    <p>{children?.name}</p>
    <children.Logo />
  </Link>
);

export { default } from 'X';
