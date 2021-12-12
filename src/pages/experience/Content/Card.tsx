import React from 'react';

import ReactIcon from './Icons/React';
import Javascript from './Icons/Javascript';
import Heroku from './Icons/Heroku';
import Sass from './Icons/Sass';
import Express from './Icons/Express';
import NodeJs from './Icons/NodeJs';
import Vercel from './Icons/Vercel';
import Next from './Icons/Next';
import Link from 'next/link';

export default function Card({ title, decription, link }: { title: string; decription: string; link: string | null }): JSX.Element {
  const Links = () =>
    link ? (
      <Link href={link} passHref scroll={false}>
        <a target="_blank" className="experience__link">
          {link}
        </a>
      </Link>
    ) : (
      <></>
    );

  return (
    <div className="experience-section__card--wrapper">
      <div className="experience-section__card">
        <div className="experience-section__card__side experience-section__card__side--1">
          <h3 className="experience-section__card--title">{title}</h3>
          {title === 'React' ? (
            <ReactIcon />
          ) : title === 'Javascript' ? (
            <Javascript />
          ) : title === 'Heroku' ? (
            <Heroku />
          ) : title === 'Html' ? (
            <img src="./experience/html.png" className="experience-section__card--icon" alt="logo" />
          ) : title === 'Css' ? (
            <img src="./experience/css.png" className="experience-section__card--icon" alt="logo" />
          ) : title === 'Sass' ? (
            <Sass />
          ) : title === 'Express' ? (
            <Express />
          ) : title === 'Java' ? (
            <img src="./experience/java.png" className="experience-section__card--icon" alt="logo" />
          ) : title === 'MongoDB' ? (
            <img src="./experience/mongodb.png" className="experience-section__card--icon" alt="logo" />
          ) : title === 'Netlify' ? (
            <img src="./experience/netlify.png" className="experience-section__card--icon" alt="logo" />
          ) : title === 'NodeJs' ? (
            <NodeJs />
          ) : title === 'Typescript' ? (
            <img src="./experience/typescript.png" className="experience-section__card--icon" alt="logo" />
          ) : title === 'Vercel' ? (
            <Vercel />
          ) : title === 'Figma' ? (
            <img src="./experience/figma.png" className="experience-section__card--icon" alt="logo" />
          ) : (
            <Next />
          )}
        </div>
        <div className="experience-section__card__side experience-section__card__side--2">
          <p className="experience-card__title">{title}</p>
          <p className="experience-card__description">{decription}</p>
          <Links />
        </div>
      </div>
    </div>
  );
}
