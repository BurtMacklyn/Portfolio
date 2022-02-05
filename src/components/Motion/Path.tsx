import { CustomValueType, motion, MotionValue, Variant } from 'framer-motion';
import { animation, pallette } from 'src/config';

import type { MotionSettings } from 'src/types';
import { defaultOptions } from './options';
import type { HTMLAttributes } from 'react';

export function Path({
  d,
  stroke = pallette.white,
  options = defaultOptions,
  strokeWidth,
  style,
  strokeLinecap,
}: HTMLAttributes<HTMLElement> & {
  d: string;
  stroke?: string;
  strokeLinecap?: 'inherit' | 'round' | 'butt' | 'square' | CustomValueType | MotionValue<number> | MotionValue<string> | MotionValue<any> | undefined;
  strokeWidth?: string | number | CustomValueType | MotionValue<number> | MotionValue<string> | MotionValue<any> | undefined;
  options?: { from: Variant; to: Variant; settings?: MotionSettings };
}): JSX.Element {
  return (
    <motion.path
      d={d}
      style={style as any}
      stroke={stroke}
      variants={{ from: options.from, to: options.to }}
      initial='from'
      exit='from'
      animate='to'
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      onAnimationComplete={options?.settings?.finish}
      transition={{
        type: options?.settings?.ease || animation.function,
        duration: animation.duration / (options?.settings?.nth || 1),
        delay: animation.globalDelay + (options?.settings?.delay || 0),
      }}
    />
  );
}
