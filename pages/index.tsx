import React from 'react';

import Index from '../src/index/Main';
import Motion from '../src/components/Motion';

export const config = { unstable_runtimeJS: false };

export default function Main(): JSX.Element {
  return (
    <Motion>
      <Index />
    </Motion>
  );
}
