import { color, style } from '@/config/style';
import { rem } from '@/css';

import { Box } from '@/components/Box';

interface Props {
  clicked: boolean;
}

export const NavToggleButtonIcon = ({ clicked }: Props) => {
  const size = 32;
  const width = 2;
  const space = 4;

  const slantHeight = size * Math.cos(45 * (Math.PI / 180));

  return (
    <Box relative w={size} h={size}>
      <span
        style={{
          top: 0,
          left: 0,
          background: color('100'),
          height: rem(width as any),
          borderRadius: style.borderRadius,
          position: 'absolute',
          width: !clicked
            ? rem((size / 2) as any)
            : rem((size / 2 - width / 2 - space) as any),
          transform: !clicked
            ? `translate(0, ${rem(
                (size / 2 - width / 2 - space - width) as any,
              )})`
            : `translate(${rem(((size - slantHeight) / 2) as any)}, ${rem(
                ((size - slantHeight) / 2) as any,
              )}) translateY(-50%) rotate(45deg)`,
          transitionDuration: style.transition.time + 'ms',
          transitionProperty: 'all',
          transitionTimingFunction: style.transition.function,
          transformOrigin: '0% 50%',
        }}
      />
      <span
        style={{
          background: color('100'),
          height: rem(width as any),
          width: rem(size),
          borderRadius: style.borderRadius,
          position: 'absolute',
          top: rem((size / 2 - width / 2) as any),
          left: 0,
          transform: !clicked ? undefined : 'rotate(-45deg)',
          transitionDuration: style.transition.time + 'ms',
          transitionProperty: 'all',
          transitionTimingFunction: style.transition.function,
        }}
      />
      <span
        style={{
          background: color('100'),
          height: rem(width),
          borderRadius: style.borderRadius,
          position: 'absolute',
          width: !clicked
            ? rem((size / 2) as any)
            : rem((size / 2 - width / 2 - space) as any),
          bottom: 0,
          right: 0,
          transform: !clicked
            ? `translate(0, -${rem(
                (size / 2 - width / 2 - space - width) as any,
              )})`
            : `translate(-${rem(((size - slantHeight) / 2) as any)}, -${rem(
                ((size - slantHeight) / 2) as any,
              )}) translateY(50%) rotate(45deg)`,
          transitionDuration: style.transition.time + 'ms',
          transitionProperty: 'all',
          transitionTimingFunction: style.transition.function,
          transformOrigin: '100% 50%',
        }}
      />
    </Box>
  );
};
