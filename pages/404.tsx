import Error from '../src/error/Error';
import Motion from '../src/components/Motion';

export const config = { unstable_runtimeJS: false };

export default function Main() {
  return (
    <Motion>
      <Error />
    </Motion>
  );
}
