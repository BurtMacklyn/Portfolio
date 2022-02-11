import type { ReactChild } from 'react';

import vercel from 'public/technologies/vercel.svg';
import css from 'public/technologies/css.svg';
import deno from 'public/technologies/deno.svg';
import express from 'public/technologies/express.svg';
import figma from 'public/technologies/figma.svg';
import heroku from 'public/technologies/heroku.svg';
import html from 'public/technologies/html.svg';
import javascript from 'public/technologies/javascript.svg';
import mongodb from 'public/technologies/mongodb.svg';
import netlify from 'public/technologies/netlify.svg';
import next from 'public/technologies/next.svg';
import node from 'public/technologies/javascript.svg';
import react from 'public/technologies/react.svg';
import sass from 'public/technologies/sass.svg';
import typescript from 'public/technologies/typescript.svg';
import webpack from 'public/technologies/webpack.svg';

export function Technologies() {
  return (
    <section className='technologies' id='technologies'>
      <div className='section-content'>
        <span className='glow'></span>
        <span className='glow blue'></span>
        <span className='glow num-3'></span>
        <h3 className='white'>Technologies</h3>
        <div className='content'>
          <Card Logo={css}>Css</Card>
          <Card Logo={deno}>Deno</Card>
          <Card Logo={express}>Express</Card>
          <Card Logo={figma}>Figma</Card>
          <Card Logo={html}>Html</Card>
          <Card Logo={heroku}>Heroku</Card>
          <Card Logo={javascript}>Javascript</Card>
          <Card Logo={mongodb}>Mongodb</Card>
          <Card Logo={netlify}>Netlify</Card>
          <Card Logo={next}>Next</Card>
          <Card Logo={node}>Node</Card>
          <Card Logo={react}>React</Card>
          <Card Logo={sass}>Sass</Card>
          <Card Logo={typescript}>Typescript</Card>
          <Card Logo={vercel}>Vercel</Card>
          <Card Logo={webpack}>Webpack</Card>
        </div>
      </div>
    </section>
  );
}

function Card({ children, Logo }: { Logo: any; children: ReactChild }) {
  return (
    <div className='technocard'>
      <h4 className='white'>{children}</h4>
      <Logo />
    </div>
  );
}
