import React from 'react';
import SocialLink from './SocialLink';
import SocialOutline from './SocialOutline';

export default function Socials(): JSX.Element {
  return (
    <div role="complementary" className="header__socials">
      <SocialOutline />
      <div className="socials">
        <div className="socials__icons">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <SocialLink key={i} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
