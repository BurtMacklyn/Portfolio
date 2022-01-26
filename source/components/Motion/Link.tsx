import { motion, Variant } from 'framer-motion';
import { animation } from 'source/config';

import { Link as StaticLink } from 'source/components';

import type { MotionSettings } from './types';
import { defaultOptions } from './options';

export function Link({
  className,
  children,
  options = defaultOptions,
  newTab,
  href,
  style,
  astyle,
}: {
  className?: string;
  children: React.ReactNode;
  options?: { from: Variant; to: Variant; settings?: MotionSettings };
  newTab?: boolean;
  href: string;
  style?: any;
  astyle?: any;
}): JSX.Element {
  return (
    <motion.span
      className={className}
      variants={{ from: options.from, to: options.to }}
      initial='from'
      exit='from'
      animate='to'
      onAnimationComplete={options?.settings?.finish}
      style={style}
      transition={{
        type: options?.settings?.ease || animation.function,
        duration: animation.duration / (options?.settings?.nth || 1),
        delay: animation.globalDelay + (options?.settings?.delay || 0),
      }}>
      <StaticLink style={astyle} newTab={!!newTab} href={href}>
        {children}
      </StaticLink>
    </motion.span>
  );
}
