import { motion, MotionStyle, Variant } from 'framer-motion';
import { animation } from 'src/config';

import { Link as StaticLink } from 'src/components';

import type { MotionSettings } from 'src/types';
import { defaultOptions } from './options';
import type { HTMLAttributes } from 'react';

export function Link({
  className,
  children,
  options = defaultOptions,
  newTab,
  href,
  style,
}: HTMLAttributes<HTMLAnchorElement> & {
  options?: { from: Variant; to: Variant; settings?: MotionSettings };
  newTab?: boolean;
  href: string;
  style?: MotionStyle;
}): JSX.Element {
  return (
    <motion.span
      className={className}
      variants={{ from: options.from, to: options.to }}
      initial='from'
      exit='from'
      animate='to'
      onAnimationComplete={options?.settings?.finish}
      style={style as any}
      transition={{
        type: options?.settings?.ease || animation.function,
        duration: animation.duration / (options?.settings?.nth || 1),
        delay: animation.globalDelay + (options?.settings?.delay || 0),
      }}>
      <StaticLink style={style} newTab={!!newTab} href={href}>
        {children}
      </StaticLink>
    </motion.span>
  );
}
