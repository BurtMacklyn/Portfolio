import { Error } from '~/components/error/error.component';

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
