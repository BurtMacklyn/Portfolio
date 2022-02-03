import { motion, Variant } from 'framer-motion';
import { animation } from 'source/config';

import type { MotionSettings } from './types';
import { defaultOptions } from './options';
import type { HTMLAttributes } from 'react';

export function Tag({
  className,
  children,
  options = defaultOptions,
  close,
}: HTMLAttributes<HTMLSpanElement> & {
  options?: { from: Variant; to: Variant; settings?: MotionSettings };
  close?: boolean;
}): JSX.Element {
  const endTag = close ? '/' : '';
  const cls = close ? 'close' : 'open';

  return (
    <motion.code
      className={`tag ${cls} ${className ? className : ''}`}
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
      {'<' + endTag + children + '>'}
    </motion.code>
  );
}
