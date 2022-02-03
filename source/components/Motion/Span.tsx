import { motion, Variant } from 'framer-motion';
import { animation } from 'source/config';

import type { MotionSettings } from './types';
import { defaultOptions } from './options';
import type { HTMLAttributes } from 'react';

export function Span({
  className,
  children,
  options = defaultOptions,
}: HTMLAttributes<HTMLSpanElement> & {
  options?: { from: Variant; to: Variant; settings?: MotionSettings };
}): JSX.Element {
  return (
    <motion.span
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
    </motion.span>
  );
}
