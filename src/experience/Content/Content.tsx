import Wave from './Wave';
import Card from './Card';

import { experience as content } from '../../content/experience';

export default function experience() {
  return (
    <>
      <div aria-hidden="true" className="experience-section__wave--wrapper">
        <Wave className="experience-section__wave experience-section__wave--hidden" />
        <Wave className="experience-section__wave experience-section__wave--visible" />
      </div>
      <div className="experience-section">
        <Card title={'React'} decription={content.react.description} link={content.react.link} />
        <Card title={'Next'} decription={content.next.description} link={content.next.link} />
        <Card title={'Javascript'} decription={content.javascript.description} link={content.javascript.link} />
        <Card title={'NodeJs'} decription={content.node.description} link={content.node.link} />
        <Card title={'Heroku'} decription={content.heroku.description} link={content.heroku.link} />
        <Card title={'Sass'} decription={content.sass.description} link={content.sass.link} />
        <Card title={'Figma'} decription={content.figma.description} link={content.figma.link} />
        <Card title={'Css'} decription={content.css.description} link={content.css.link} />
        <Card title={'Html'} decription={content.html.description} link={content.html.link} />
        <Card title={'Express'} decription={content.express.description} link={content.express.link} />
        <Card title={'MongoDB'} decription={content.mongo.description} link={content.mongo.link} />
        <Card title={'Typescript'} decription={content.typescript.description} link={content.typescript.link} />
        <Card title={'Java'} decription={content.java.description} link={content.java.link} />
        <Card title={'Netlify'} decription={content.netlify.description} link={content.netlify.link} />
        <Card title={'Vercel'} decription={content.vercel.description} link={content.vercel.link} />
      </div>
    </>
  );
}
