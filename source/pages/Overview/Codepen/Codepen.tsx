import { Link } from 'source/components';
import Wave from './wave.svg';
import LoadingPreview from 'public/loading-preview.png';

export function Codepen() {
  return (
    <section className='codepen'>
      <div className='section'>
        <h2 className='bg-text'>Codepens</h2>
        <div className='contents'>
          <Card image={LoadingPreview} href='https://codepen.io/cooperrunyan/pen/MWOggVJ'>
            Loading Animation
          </Card>
        </div>
      </div>
      <div className='waves' aria-hidden='true'>
        <Wave className='visible-wave' />
        <Wave className='invisible-wave' />
      </div>
    </section>
  );
}

function Card({ children, image, alt, href }: { image: StaticImageData; alt?: string; href: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Link href={href} newTab>
      <div className='card'>
        <p className='card__heading'>{children}</p>
        <img className='card__img' alt={alt ? alt : ''} src={image.src} />
      </div>
    </Link>
  );
}
