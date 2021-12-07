import React from 'react';

import About from '@about/Main';
import Motion from '@components/Motion';

export const config = { unstable_runtimeJS: false };

export default function Main(): JSX.Element {
  return (
    <Motion>
      <About />
    </Motion>
  );
}
