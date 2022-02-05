import { Link, Motion } from 'src/components';
import * as icons from 'react-ionicons';
import Line from './SocialLine';
import { animation } from 'src/config';

export function Socials() {
  return (
    <div className='socials'>
      <div className='icons'>
        <Motion.Link options={getOptions(1)} newTab href='https://www.github.com/cooperrunyan?tab=repositories'>
          <icons.LogoGithub />
        </Motion.Link>
        <Motion.Link options={getOptions(2)} newTab href='https://codepen.io/cooperrunyan'>
          <icons.LogoCodepen />
        </Motion.Link>
        <Motion.Link options={getOptions(3)} newTab href='https://stackoverflow.com/story/cooperrunyan'>
          <icons.LogoStackoverflow />
        </Motion.Link>
        <Motion.Link options={getOptions(4)} newTab href='mailto:cooperrunyan@gmail.com'>
          <icons.Mail />
        </Motion.Link>
        <Motion.Link options={getOptions(5)} newTab href='https://www.npmjs.com/~cooperrunyan'>
          <icons.LogoNpm />
        </Motion.Link>
        <Motion.Link options={getOptions(6)} newTab href='https://www.linkedin.com/in/cooper-runyan-52a343225/'>
          <icons.LogoLinkedin />
        </Motion.Link>
      </div>
      <Line />
    </div>
  );
}

function getOptions(i: number) {
  return {
    from: {
      transform: `translateY(${(7 - i) * 4.2}rem)`,
      opacity: 0,
    },
    to: {
      transform: 'translateY(0rem)',
      opacity: [0, 0, 1],
    },
    settings: {
      delay: animation.duration / 3 + 0.2 * i,
    },
  };
}
