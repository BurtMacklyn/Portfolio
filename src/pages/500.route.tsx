import React from 'react';

import { Error } from '~/components/Error/Error';

const Error404 = () => (
  <Error
    code={500}
    message={
      <>
        Internal server <br /> error
      </>
    }
  />
);

export default Error404;
