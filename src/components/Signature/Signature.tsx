import type { HTMLAttributes } from 'react';
import { Motion } from 'src/components';

export function Signature({ color, style }: HTMLAttributes<HTMLDivElement> & { color?: string }) {
  return (
    <div className='signature' style={style}>
      <svg width='304' height='104' viewBox='0 0 304 104' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <Motion.Path
          options={{
            from: {
              strokeDashoffset: 750,
              strokeDasharray: 750,
            },
            to: {
              strokeDashoffset: 0,
              strokeDasharray: 750,
            },
            settings: {
              nth: 1 / 2,
            },
          }}
          style={{ stroke: color }}
          d='M110.625 7.33358C99.2634 -1.02029 81.8774 1.66243 69.8892 7.04843C55.6561 13.443 42.8295 23.0688 31.8423 34.0561C19.9556 45.9427 8.63695 59.9085 3.69407 76.2581C1.36453 83.9634 0.249176 94.2136 8.46012 98.5811C18.7943 104.078 32.878 100.889 43.0038 96.6258C57.9831 90.3187 71.6608 81.4973 84.7577 71.9401C91.6968 66.8764 97.9944 61.1543 106.062 57.9271C110.861 56.0076 106.208 62.841 105.166 64.5262C99.821 73.1757 91.8838 80.0674 86.9167 89.0083C83.5412 95.0841 85.8945 96.9768 92.6196 95.5667C107.214 92.5066 121.016 84.6006 134.822 79.2318C144.136 75.6095 154.909 69.6656 165.047 68.9664C170.147 68.6147 175.252 69.6861 180.364 69.6589C203.949 69.5335 227.794 64.2606 250.918 60.1268C267.725 57.1222 284.851 52.7944 302 52.7944'
          stroke='#E4EBF7'
          strokeWidth='4'
          strokeLinecap='round'
        />
      </svg>
    </div>
  );
}
