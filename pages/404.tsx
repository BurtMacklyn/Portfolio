import React from 'react';

import Error from '@pages/404/Error';
import Motion from '@components/Motion';

export default function Main(): JSX.Element {
  return (
    <Motion>
      <Error />
    </Motion>
  );
}
