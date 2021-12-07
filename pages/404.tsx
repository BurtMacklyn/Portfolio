import React from 'react';

import Error from '../src/error/Error';
import Motion from '../src/components/Motion';

export const config = { unstable_runtimeJS: false };

export default function Main(): JSX.Element {
  return (
    <Motion>
      <Error />
    </Motion>
  );
}
