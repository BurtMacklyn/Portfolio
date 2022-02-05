import { motion, Variant } from 'framer-motion';
import { animation } from 'src/config';

import type { MotionSettings } from 'src/types';
import { defaultOptions } from './options';
import type { HTMLAttributes } from 'react';

export function Li({
  className,
  children,
  options = defaultOptions,
}: HTMLAttributes<HTMLLIElement> & {
  options?: { from: Variant; to: Variant; settings?: MotionSettings };
}): JSX.Element {
  return (
    <motion.li
      className={className}
      variants={{ from: options.from, to: options.to }}
      initial='from'
      exit='from'
      animate='to'
      onAnimationComplete={options?.settings?.finish}
      transition={{
        type: options?.settings?.ease || animation.function,
        duration: animation.duration / (options?.settings?.nth || 1),
        delay: animation.globalDelay + (options?.settings?.delay || 0),
      }}>
      {children}
    </motion.li>
  );
}
