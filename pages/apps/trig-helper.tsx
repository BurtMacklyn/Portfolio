// eslint-disable-next-line no-use-before-define
import type React from 'react';
import { Portfolio, Portal } from '~/components';

const TrigHelper: React.FC = () => (
  <Portfolio>
    <Portal url={new URL('https://trig-helper.herokuapp.com')} />
  </Portfolio>
);

export default TrigHelper;
