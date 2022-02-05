import { motion, Variant } from 'framer-motion';
import { animation } from 'src/config';

import type { MotionSettings } from 'src/types';
import { defaultOptions } from './options';
import type { HTMLAttributes } from 'react';

export function Div({
  className,
  children,
  onClick,
  options = defaultOptions,
}: HTMLAttributes<HTMLDivElement> & {
  options?: { from: Variant; to: Variant; settings?: MotionSettings };
}): JSX.Element {
  return (
    <motion.div
      className={className}
      variants={{ from: options.from, to: options.to }}
      initial='from'
      exit='from'
      animate='to'
      onClick={onClick}
      onAnimationComplete={options?.settings?.finish}
      transition={{
        type: options?.settings?.ease || animation.function,
        duration: animation.duration / (options?.settings?.nth || 1),
        delay: animation.globalDelay + (options?.settings?.delay || 0),
      }}>
      {children}
    </motion.div>
  );
}
