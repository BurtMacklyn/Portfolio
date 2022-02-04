import Wave from 'public/svg/wave.svg';
import { Signature, Link } from 'source/components';
import { pallette } from 'source/config';

export function Footer() {
  return (
    <div className='footer-container'>
      <div className='waves' aria-hidden='true'>
        <Wave className='visible-wave' />
        <Wave className='invisible-wave' />
      </div>
      <footer>
        <div className='half'>
          <h3>Cooper Runyan</h3>
          <ul>
            <li>
              <Link href='/'>Overview</Link>
            </li>
            <li>
              <Link href='/experience'>Experience</Link>
            </li>
            <li>
              <Link href='/resume'>Resume</Link>
            </li>
            <li>
              <Link href='/'>Get in touch</Link>
            </li>
          </ul>
          <p className='legal'>Copyright © 2022 Cooper Runyan</p>
        </div>
        <div className='half'>
          <Signature color={pallette.white} />
        </div>
      </footer>
    </div>
  );
}
