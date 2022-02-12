import type { ReactChild } from 'react';

import * as logos from './logos';

export function Technologies() {
  return (
    <section className='technologies' id='technologies'>
      <div className='section-content'>
        <span className='glow'></span>
        <span className='glow blue'></span>
        <span className='glow num-3'></span>
        <h3 className='white'>Technologies</h3>
        <div className='content'>
          <Card Logo={logos.css}>Css</Card>
          <Card Logo={logos.deno}>Deno</Card>
          <Card Logo={logos.express}>Express</Card>
          <Card Logo={logos.figma}>Figma</Card>
          <Card Logo={logos.html}>Html</Card>
          <Card Logo={logos.heroku}>Heroku</Card>
          <Card Logo={logos.javascript}>Javascript</Card>
          <Card Logo={logos.mongodb}>Mongodb</Card>
          <Card Logo={logos.netlify}>Netlify</Card>
          <Card Logo={logos.next}>Next</Card>
          <Card Logo={logos.node}>Node</Card>
          <Card Logo={logos.react}>React</Card>
          <Card Logo={logos.sass}>Sass</Card>
          <Card Logo={logos.typescript}>Typescript</Card>
          <Card Logo={logos.vercel}>Vercel</Card>
          <Card Logo={logos.webpack}>Webpack</Card>
          <Card Logo={logos.angular}>Angular</Card>
          <Card Logo={logos.lwc}>LWC</Card>
          <Card Logo={logos.oak}>Oak</Card>
          <Card Logo={logos.stackoverflow}>Stackoverflow</Card>
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
