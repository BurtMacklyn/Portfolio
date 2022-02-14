import * as logos from './logos';

export function Technologies() {
  return (
    <section className='technologies' id='technologies'>
      <div className='section-content'>
        <Glows />
        <h3 className='white'>Technologies</h3>
        <div className='content'>
          <Card>Css</Card>
          <Card>Deno</Card>
          <Card>Express</Card>
          <Card>Figma</Card>
          <Card>Html</Card>
          <Card>Heroku</Card>
          <Card>Javascript</Card>
          <Card>Mongodb</Card>
          <Card>Netlify</Card>
          <Card>Next</Card>
          <Card>Node</Card>
          <Card>React</Card>
          <Card>Sass</Card>
          <Card>Typescript</Card>
          <Card>Vercel</Card>
          <Card>Webpack</Card>
          <Card>Angular</Card>
          <Card>LWC</Card>
          <Card>Oak</Card>
          <Card>Stackoverflow</Card>
          <Card>Docker</Card>
        </div>
      </div>
    </section>
  );
}

function Card({ children }: { children: string }) {
  const Logo = () => logos[children.toLowerCase()]();
  return (
    <div className='technocard'>
      <h4 className='white'>{children}</h4>
      <Logo />
    </div>
  );
}

function Glows() {
  return (
    <>
      <span className='glow'></span>
      <span className='glow blue'></span>
      <span className='glow num-3'></span>
    </>
  );
}
