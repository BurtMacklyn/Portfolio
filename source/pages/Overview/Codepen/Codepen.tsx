import Wave from './wave.svg';
import Loading from 'public/codepen/loading.png';
import SlideText from 'public/codepen/slide-text.png';
import StickyScroll from 'public/codepen/sticky-scroll.png';
import AnimatedSignature from 'public/codepen/animated-signature.png';
import Typewriter from 'public/codepen/typewriter.png';
import FlexCards from 'public/codepen/flex-cards.png';
import FlickerText from 'public/codepen/flicker-text.png';
import { Card } from './Card';

export function Codepen() {
  return (
    <section className='codepen'>
      <div className='section'>
        <h2 className='bg-text'>Codepens</h2>
        <div className='contents'>
          <Card image={Loading} url='MWOggVJ'>
            Loading Animation
          </Card>
          <Card image={SlideText} url='abVbRQw'>
            Sliding Text
          </Card>
          <Card image={StickyScroll} url='RwjRVzW'>
            Sticky Scrolling
          </Card>
          <Card image={Typewriter} url='qBVNjaB'>
            Typewriter Animated Text
          </Card>
          <Card image={AnimatedSignature} url='wvPWqdN'>
            Animated Signature
          </Card>
          <Card image={FlexCards} url='NWwrOmp'>
            Interactive Flex Cards
          </Card>
          <Card image={FlickerText} url='jOardBM'>
            Flickering Text
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
