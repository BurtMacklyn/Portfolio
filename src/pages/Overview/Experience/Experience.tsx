import { Autobiography } from './Autobiography';
import { Languages } from './Languages';
import { Frameworks } from './Frameworks';

export function Experience() {
  return (
    <section className='experience' id='experience'>
      <div className='section-content'>
        <h3 className='white'>Experience</h3>
        <div className='content'>
          {/* <span className='glow'></span> */}
          <Autobiography />
          <Languages />
          <Frameworks />
        </div>
      </div>
    </section>
  );
}
