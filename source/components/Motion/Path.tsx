import { motion, Variant } from 'framer-motion';
import { animation } from 'source/config';

import type { MotionSettings } from './types';
import { defaultOptions } from './options';

export function Path({ d, options = defaultOptions }: { d: string; options?: { from: Variant; to: Variant; settings?: MotionSettings } }): JSX.Element {
  return (
    <motion.path
      d={d}
      variants={{ from: options.from, to: options.to }}
      initial='from'
      exit='from'
      animate='to'
      onAnimationComplete={options?.settings?.finish}
      transition={{
        type: options?.settings?.ease || animation.function,
        duration: animation.duration / (options?.settings?.nth || 1),
        delay: animation.globalDelay + (options?.settings?.delay || 0),
      }}
    />
  );
}
