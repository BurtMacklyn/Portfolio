import { useEffect, useState } from 'react';
import { Signature, Link, Wave } from 'src/components';
import { pallette } from 'src/config';

export function Footer() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const footer = document.querySelector('footer')! as HTMLDivElement;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting && !isVisible) setTimeout(() => setIsVisible(true), 200);
    });
    observer.observe(footer);
    return () => observer.unobserve(footer);
  }, []);

  return (
    <div className='footer-container'>
      <Wave up />
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
        <div className='half'>{isVisible && <Signature className='signature' color={pallette.white} />}</div>
      </footer>
    </div>
  );
}
