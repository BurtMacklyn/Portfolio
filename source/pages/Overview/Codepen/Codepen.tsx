import Wave from './wave.svg';
import LoadingPreview from 'public/loading-preview.png';
import SlideTextPreview from 'public/slide-text-preview.png';
import StickyScrollPreview from 'public/sticky-scroll-preview.png';
import AnimatedSignaturePreview from 'public/animated-signature-preview.png';
import TypewriterPreview from 'public/typewriter-preview.png';
import { Card } from './Card';

export function Codepen() {
  return (
    <section className='codepen'>
      <div className='section'>
        <h2 className='bg-text'>Codepens</h2>
        <div className='contents'>
          <Card image={LoadingPreview} url='MWOggVJ'>
            Loading Animation
          </Card>
          <Card image={SlideTextPreview} url='abVbRQw'>
            Sliding Text
          </Card>
          <Card image={StickyScrollPreview} url='RwjRVzW'>
            Sticky Scrolling
          </Card>
          <Card image={TypewriterPreview} url='qBVNjaB'>
            Typewriter Animated Text
          </Card>
          <Card image={AnimatedSignaturePreview} url='wvPWqdN'>
            Animated Signature
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
