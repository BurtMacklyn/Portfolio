import { motion, Variant } from 'framer-motion';
import { animation } from 'src/config';

import type { MotionSettings } from 'src/types';
import { defaultOptions } from './options';
import type { HTMLAttributes } from 'react';

export function Button({
  className,
  children,
  options = defaultOptions,
  onClick,
}: HTMLAttributes<HTMLButtonElement> & {
  options?: { from: Variant; to: Variant; settings?: MotionSettings };
}): JSX.Element {
  return (
    <motion.button
      onClick={onClick}
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
    </motion.button>
  );
}
