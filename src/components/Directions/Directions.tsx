import { Link, Motion } from 'src/components';
import type { PageHref } from 'src/types';
import Chevron from 'public/svg/chevron.svg';
import * as scroll from './scroll';

type I = 0 | 1 | 2 | 3;

const pulse = (i: I) => {
  const el = Array.from(document.querySelectorAll('.directions li')! as NodeListOf<HTMLLIElement>)[i]!.children[1]!;
  el.classList.remove('pulse');
  setTimeout(() => el.classList.add('pulse'), 0);
};

const Tooltip = ({ children }: { children: string }) => (
  <div className='tooltip__container'>
    <div className='tooltip'>
      <p>{children}</p>
    </div>
  </div>
);
export function Directions({ next, last }: { next: PageHref; last: PageHref }) {
  return (
    <List>
      <Item i={0}>
        <Tooltip>Previous Page</Tooltip>
        <Link href={last}>
          <Chevron style={{ transform: 'rotate(-90deg)' }} />
        </Link>
      </Item>

      <Item i={1}>
        <Tooltip>Scroll down</Tooltip>
        <button onClick={scroll.down}>
          <Chevron style={{ transform: 'rotate(180deg)' }} />
        </button>
      </Item>

      <Item i={2}>
        <Tooltip>Scroll up</Tooltip>
        <button onClick={scroll.up}>
          <Chevron style={{ transform: 'rotate(0deg)' }} />
        </button>
      </Item>

      <Item i={3}>
        <Tooltip>Next page</Tooltip>
        <Link href={next}>
          <Chevron style={{ transform: 'rotate(90deg)' }} />
        </Link>
      </Item>
    </List>
  );
}

const List = ({ children }) => (
  <div className='directions'>
    <ul>{children}</ul>
  </div>
);

const Item = ({ i, children }) => <Motion.Li options={options(i)}>{children}</Motion.Li>;

function options(i: I) {
  return {
    from: {
      transform: 'translateY(150%)',
      opacity: 0,
    },
    to: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
    settings: {
      delay: delay(i),
      nth: 4,
      finish() {
        setTimeout(() => pulse(i), delay(i) * 1000);
      },
    },
  };
}

const delay = (i: I) => 0.15 * (i - 1);
