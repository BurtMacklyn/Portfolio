import React from 'react';
import * as icons from 'react-ionicons';
import MenuLink from './MenuLink';
import Motion from './Motion';

const scrollTop = function (): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export default function Menu({ active }: { active: string }): JSX.Element {
  const names = ['Overview', 'Experience', 'Projects', 'About'];
  return (
    <div role="navigation" className="menu">
      <ul className="menu__btns">
        {names.map(name => (
          <Motion i={names.indexOf(name)} key={names.indexOf(name)}>
            <MenuLink active={active} name={name} />
          </Motion>
        ))}
        <Motion i={5} key={5}>
          <button title="Back to top" className="menu__btn menu__btn--top" onClick={scrollTop}>
            <icons.ChevronUpOutline color={'inherit'} title={'Back to top'} />
          </button>
        </Motion>
      </ul>
    </div>
  );
}
