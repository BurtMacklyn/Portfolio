import DenoSVG from 'public/svg/deno.svg';
import ReactSVG from 'public/svg/react.svg';
import { useEffect, useState } from 'react';

export function Stacks() {
  const [visible, setVisible] = useState<'front' | 'back'>('front');

  useEffect(() => {
    const el = document.querySelector('.target')! as HTMLDivElement;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry?.isIntersecting || entry.boundingClientRect.y * -1 > entry.boundingClientRect.height) setVisible('back');
        else setVisible('front');
      },
      {
        root: null,
      },
    );
    observer.observe(el);

    return () => observer.unobserve(el);
  }, []);

  return (
    <section className='stacks'>
      <div className='target'></div>
      <div className='section-content'>
        <div className='img-wrapper'>
          <div className='img'>
            <ReactSVG />
          </div>
          <div className='img'>
            <DenoSVG className='deno' />
          </div>
        </div>
        <div className='content-wrapper'>
          <div className='content'>
            <div className='h2'>
              <h2
                className='white'
                style={{
                  pointerEvents: visible === 'front' ? 'all' : 'none',
                  opacity: visible === 'front' ? 1 : 0,
                }}>
                Frontend
              </h2>
              <h2
                className='white'
                style={{
                  pointerEvents: visible === 'back' ? 'all' : 'none',
                  opacity: visible === 'back' ? 1 : 0,
                }}>
                Backend
              </h2>
            </div>
            <div className='paragraph'>
              <p
                style={{
                  pointerEvents: visible === 'front' ? 'all' : 'none',
                  opacity: visible === 'front' ? 1 : 0,
                }}>
                Frontend web design and development are two very interesting fields that are very important. As you can see by the design of this portfolio
                website, I take the front end very seriously. Many people debate on what is better, React, Angular, Vue, and all of the other thousand frontend
                Javascript frameworks, and even though it doesn't matter what I prefer to work with, in my opinion, a developer's tech stack of choice can tell
                a lot about them. My ideal app's frontend tech stack would be Typescript, React, and SCSS.
              </p>
              <p
                style={{
                  pointerEvents: visible === 'back' ? 'all' : 'none',
                  opacity: visible === 'back' ? 1 : 0,
                }}>
                Backend development is very interesting and could be studied for years on end. It is a very importand tool in the software industry, as without
                it, there would be no websites, apps, APIs or devices. My idea app's backend would consist of Typescript, on a Deno runtime, using Oak for an
                http server. I love Deno, because of its simplicity in comparison to Node; you don't need to manage dependencies, and most importantly, no
                Typescript compiler is needed.
              </p>
            </div>
            {/* <span className={`glow ${visible === 'back' ? 'backend-glow' : ''}`}></span> */}
          </div>
        </div>
      </div>
    </section>
  );
}
