import React from 'react';

import { Error } from '~/components/Error/Error';

const Error404 = () => (
  <Error
    code={404}
    message={
      <>
        Page not <br /> found
      </>
    }
  />
);

export default Error404;
