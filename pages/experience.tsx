import Experience from '../src/experience/Main';
import Motion from '../src/components/Motion';

export const config = { unstable_runtimeJS: false };

export default function Main(): JSX.Element {
  return (
    <Motion>
      <Experience />
    </Motion>
  );
}
