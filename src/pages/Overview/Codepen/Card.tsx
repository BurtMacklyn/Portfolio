import { Link } from 'src/components';

export function Card({ children, image, alt, url }: { image: StaticImageData; alt?: string; url: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Link href={`https://codepen.io/cooperrunyan/full/${url}`} newTab>
      <div className='card'>
        <p className='card__heading'>{children}</p>
        <img className='card__img' alt={alt ? alt : ''} src={image.src} />
      </div>
    </Link>
  );
}
