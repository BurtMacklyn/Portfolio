import React from 'react';

import Experience from '@experience/Main';
import Motion from '@components/Motion';

export const config = { unstable_runtimeJS: false };

export default function Main(): JSX.Element {
  return (
    <Motion>
      <Experience />
    </Motion>
  );
}
