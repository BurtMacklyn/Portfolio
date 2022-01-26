import { motion, Variant } from 'framer-motion';
import { animation } from 'source/config';

import type { MotionSettings } from './types';
import { defaultOptions } from './options';

export function Div({
  className,
  children,
  options = defaultOptions,
}: {
  className?: string;
  children?: React.ReactNode;
  options?: { from: Variant; to: Variant; settings?: MotionSettings };
}): JSX.Element {
  return (
    <motion.div
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
    </motion.div>
  );
}
