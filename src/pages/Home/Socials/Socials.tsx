import { Link } from '~/components';
import { Codepen, Contact, Email, Github, Linkedin, Npm, Stackoverflow, Twitter } from './icons';
import style from './Socials.module.scss';

export function Socials(): JSX.Element {
  return (
    <div className={style.Socials}>
      <div className={style.content}>
        <Card href="#">{{ name: 'LinkedIn', Logo: Linkedin }}</Card>
        <Card href="#">{{ name: 'Twitter', Logo: Twitter }}</Card>
        <Card href="#">{{ name: 'Github', Logo: Github }}</Card>
        <Card href="#">{{ name: 'Email', Logo: Email }}</Card>
        <Card href="#">{{ name: 'Npm', Logo: Npm }}</Card>
        <Card href="#">{{ name: 'Codepen', Logo: Codepen }}</Card>
        <Card href="#">{{ name: 'Stackoverflow', Logo: Stackoverflow }}</Card>
        <Card href="#">{{ name: 'Contact', Logo: Contact }}</Card>
      </div>
    </div>
  );
}

const Card = ({ children, href }) => (
  <Link href={href} className={style.Link}>
    <p>{children.name}</p>
    <children.Logo></children.Logo>
  </Link>
);
