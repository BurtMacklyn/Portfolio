import React from 'react';

import Projects from '../src/projects/Main';
import Motion from '../src/components/Motion';

export const config = { unstable_runtimeJS: false };

export default function Main(): JSX.Element {
  return (
    <Motion>
      <Projects />
    </Motion>
  );
}
