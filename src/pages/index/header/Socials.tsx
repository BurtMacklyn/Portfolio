import React from 'react';

import * as icons from 'react-ionicons';
import Link from 'next/link';

import { header } from '@content/index';

export default function Socials(): JSX.Element {
  return (
    <div role="complementary" className="header__socials">
      <div className="header__socials--outline"></div>
      <div className="socials">
        <div className="socials__icons">
          <Link href={header.links.github}>
            <a target="_blank" rel="noreferrer" title="Github" className="socials__icon socials__icon--1" href={header.links.github}>
              <icons.LogoGithub color={'inherit'} height={'3.2rem'} width={'3.2rem'} />
            </a>
          </Link>
          <Link href={header.links.codepen}>
            <a target="_blank" rel="noreferrer" title="Codepen" className="socials__icon socials__icon--2" href={header.links.codepen}>
              <icons.LogoCodepen color={'inherit'} height={'3.2rem'} width={'3.2rem'} />
            </a>
          </Link>
          <Link href={header.links.stackoverflow}>
            <a target="_blank" rel="noreferrer" title="Stack Overflow" className="socials__icon socials__icon--3" href={header.links.stackoverflow}>
              <icons.LogoStackoverflow color={'inherit'} height={'3.2rem'} width={'3.2rem'} />
            </a>
          </Link>
          <Link href={header.links.email}>
            <a target="_blank" rel="noreferrer" title="Email" className="socials__icon socials__icon--4" href={header.links.email}>
              <icons.Mail color={'inherit'} height={'3.2rem'} width={'3.2rem'} />
            </a>
          </Link>
          <Link href={header.links.npm}>
            <a target="_blank" rel="noreferrer" title="Npm" className="socials__icon socials__icon--5" href={header.links.npm}>
              <icons.LogoNpm color={'inherit'} height={'3.2rem'} width={'3.2rem'} />
            </a>
          </Link>
          <Link href={header.links.linkedin}>
            <a target="_blank" rel="noreferrer" title="LinkedIn" className="socials__icon socials__icon--6" href={header.links.linkedin}>
              <icons.LogoLinkedin color={'inherit'} height={'3.2rem'} width={'3.2rem'} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
