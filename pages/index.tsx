import React from 'react';

import Index from '@index/Main';
import Motion from '@components/Motion';

export const config = { unstable_runtimeJS: false };

export default function Main(): JSX.Element {
  return (
    <Motion>
      <Index />
    </Motion>
  );
}
