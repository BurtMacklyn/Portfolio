import { Motion } from 'source/components';

export default function Line(): JSX.Element {
  return (
    <svg className="line" width='75' height='150' viewBox='0 0 75 150' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <Motion.Path
        d='M37 2V148H0'
        options={{
          from: {
            strokeDashoffset: -185,
          },
          to: {
            strokeDashoffset: 0,
          },
          settings: {
            nth: 1,
          },
        }}
      />
    </svg>
  );
}
