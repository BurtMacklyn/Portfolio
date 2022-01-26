import { Link, Tag } from 'source/components';
import Wave from './wave.svg';
import { Loading } from './cards';

export function Codepen() {
  return (
    <section className='codepen'>
      <div className='section'>
        <h2 className='bg-text'>Codepens</h2>
        <TempCard />
        <Link newTab href='https://codepen.io/cooperrunyan/pen/MWOggVJ'>
          <Loading />
        </Link>
        <TempCard />
      </div>
      <div className='waves' aria-hidden='true'>
        <Wave className='visible-wave' />
        <Wave className='invisible-wave' />
      </div>
    </section>
  );
}

const TempCard = () => (
  <div className='card'>
    <Tag>div</Tag>
    <div className='card__content'>
      <p className='card__heading'>Title</p>
      <p className='card__text'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi minus quisquam a dolores quas cupiditate temporibus sapiente perspiciatis beatae, alias
        ipsa consequuntur repudiandae non similique architecto enim velit necessitatibus iure blanditiis accusantium eveniet molestias. Eos voluptatum deleniti
        temporibus sequi amet!
      </p>
    </div>
    <Tag close>div</Tag>
  </div>
);

const Card = ({ children }) => (
  <div className='card'>
    <div className='tooltip'>Open in Codepen</div>
    <Tag>div</Tag>
    <div className='card__content'>{children}</div>
    <Tag close>div</Tag>
  </div>
);
