import * as icons from 'react-ionicons';
import Link from 'next/link';

import animation from 'animation';

import { header } from '@content/index';
import { motion } from 'framer-motion';

export default function SocialLink({ i }: { i: number }): JSX.Element {
  const href =
    i === 1
      ? header.links.github
      : i === 2
      ? header.links.codepen
      : i === 3
      ? header.links.stackoverflow
      : i === 4
      ? header.links.email
      : i === 5
      ? header.links.npm
      : header.links.linkedin;
  const title = i === 1 ? 'Github' : i === 2 ? 'Codepen' : i === 3 ? 'Stackoverflow' : i === 4 ? 'Email' : i === 5 ? 'Npm' : 'LinkedIn';
  return (
    <motion.div
      variants={{
        from: {
          transform: `translateY(${39.6 - i * 5.6}rem)`,
          opacity: [0, 0, 1]
        }
      }}
      initial="from"
      exit="from"
      animate={{
        transform: `translateY(0rem)`,
        opacity: [0, 0, 1],
        animationDelay: `${(animation.duration / 2 / 3) * i + 0.3 / i + animation.socialOutlineDuration}s`
      }}
      transition={{
        type: animation.function,
        duration: animation.duration / 3
      }}
    >
      <Link href={href} passHref scroll={false}>
        <a target="_blank" rel="noreferrer" title={title} className={`socials__icon socials__icon--${i}`}>
          {i === 1 && <icons.LogoGithub color={'inherit'} height={'3.2rem'} width={'3.2rem'} />}
          {i === 2 && <icons.LogoCodepen color={'inherit'} height={'3.2rem'} width={'3.2rem'} />}
          {i === 3 && <icons.LogoStackoverflow color={'inherit'} height={'3.2rem'} width={'3.2rem'} />}
          {i === 4 && <icons.Mail color={'inherit'} height={'3.2rem'} width={'3.2rem'} />}
          {i === 5 && <icons.LogoNpm color={'inherit'} height={'3.2rem'} width={'3.2rem'} />}
          {i === 6 && <icons.LogoLinkedin color={'inherit'} height={'3.2rem'} width={'3.2rem'} />}
        </a>
      </Link>
    </motion.div>
  );
}
