import React from 'react';

import Projects from '@projects/Main';
import Motion from '@components/Motion';

export const config = { unstable_runtimeJS: false };

export default function Main(): JSX.Element {
  return (
    <Motion>
      <Projects />
    </Motion>
  );
}
