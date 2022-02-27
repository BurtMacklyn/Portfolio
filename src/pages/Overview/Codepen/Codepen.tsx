import Loading from 'public/codepen/loading.jpg';
import SlideText from 'public/codepen/slide-text.jpg';
import StickyScroll from 'public/codepen/sticky-scroll.jpg';
import AnimatedSignature from 'public/codepen/animated-signature.jpg';
import Typewriter from 'public/codepen/typewriter.jpg';
import FlexCards from 'public/codepen/flex-cards.jpg';
import FlickerText from 'public/codepen/flicker-text.jpg';
import GradientHeading from 'public/codepen/gradient-heading.jpg';
import RothIRA from 'public/codepen/roth-ira.jpg';
import KanyeQuotes from 'public/codepen/kanye-quotes.jpg';
import DrinkRecipe from 'public/codepen/drink-recipe.jpg';
import AgeGuesser from 'public/codepen/age-guesser.jpg';

import { Card } from './Card';
import { Wave } from 'src/components';

export function Codepen() {
  return (
    <section className='codepen'>
      <div className='section'>
        <h2 className='bg-text'>Codepens</h2>
        <div className='contents section-content'>
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
          <Card image={GradientHeading} url='GROjJoe'>
            Gradient Text
          </Card>
          <Card image={RothIRA} url='bGYwzmE'>
            Roth IRA Income
          </Card>
          <Card image={KanyeQuotes} url='RwjGvem'>
            Kanye Quotes
          </Card>
          <Card image={DrinkRecipe} url='yLPaZQb'>
            Drink Recipe Book
          </Card>
          <Card image={AgeGuesser} url='RwjGvqm'>
            Age Guesser
          </Card>
        </div>
      </div>
      <Wave />
    </section>
  );
}
