import React, { useEffect } from 'react';

import Overview from '../source/pages/Overview/Index';

export default function Index(): JSX.Element {
  useEffect(() => {
    document.body.style.overflow = 'unset';
  }, []);

  return <Overview />;
}
