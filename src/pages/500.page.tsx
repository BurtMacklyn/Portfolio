import { Error } from '~/components/error/error.component';

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
