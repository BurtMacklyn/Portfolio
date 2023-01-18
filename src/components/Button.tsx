import { font } from '@/config/font';
import { style, Z } from '@/config/style';
import { opacity, percent, rem } from '@/css';
import { Box } from '@components/Box';
import { PlainButton } from '@components/PlainButton';
import NextLink from 'next/link';
import { useRef, useState } from 'react';

interface ButtonProps {
  children?: any;
  onClick?: () => any;
  href?: string;
  new?: boolean;
}

export const Button: React.FC<ButtonProps> = props => {
  const ref = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [hover, setHover] = useState(false);

  return (
    <DetermineButtonElement {...props}>
      <Box
        ref={ref}
        relative
        row
        round
        paddingBlock={12}
        paddingInline={16 as any}
        style={{
          width: 'fit-content',
          // border: `${rem(2)} solid ${style.color[8]}`,
        }}
        raw={{
          onMouseMove: e => {
            const rect = ref.current!.getBoundingClientRect();
            setX(e.clientX - rect.left);
            setY(e.clientY - rect.top);
          },
          onMouseOver: () => setHover(true),
          onMouseOut: () => setHover(false),
        }}>
        {/* Border */}
        <Box
          w="fill"
          h="fill"
          smooth="slow"
          style={{
            background: hover ? style.color[24] : style.color[12],
            paddingBlock: 'inherit',
            paddingInline: 'inherit',
            position: 'absolute',
            zIndex: Z.Elevated,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            opacity: 1,
            borderRadius: 'inherit',
          }}
        />

        {/* Border Circle */}
        <Box
          smooth="slow"
          w="fill"
          h="fill"
          style={{
            background: `radial-gradient(75px circle at ${x}px ${y}px, ${opacity(
              style.color.primary,
              60,
            )}, transparent)`,
            paddingBlock: 'inherit',
            paddingInline: 'inherit',
            position: 'absolute',
            zIndex: Z.Elevated,
            top: 0,
            left: 0,
            opacity: hover ? 1 : 0,
            borderRadius: 'inherit',
          }}
        />

        <Box
          style={{
            zIndex: Z.Elevated2,
            position: 'absolute',
            top: rem(1),
            left: rem(1),
            bottom: rem(1),
            right: rem(1),
            background: style.color[0],
            borderRadius: 'inherit',
            padding: 'inherit',
          }}>
          <Box
            smooth="slow"
            style={{
              background: `radial-gradient(200px circle at ${x}px ${y}px, ${opacity(
                style.color.primary,
                25,
              )}, transparent 40%)`,

              opacity: hover ? 1 : 0,
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              zIndex: Z.Elevated3,
              borderRadius: 'inherit',
              padding: 'inherit',
            }}
          />
        </Box>

        <div
          style={{
            position: 'relative',
            zIndex: Z.Elevated4,

            fontFamily: font.sans.family,
            fontWeight: font.sans.bold,
            fontSize: rem(16),
            width: percent(100),
            maxWidth: rem(640),
            letterSpacing: percent(-2, 'em'),
          }}>
          {props.children}
        </div>
      </Box>
    </DetermineButtonElement>
  );
};

const DetermineButtonElement: React.FC<ButtonProps> = props => {
  const s = {
    display: 'flex',
    textDecoration: 'none',
    borderRadius: style.borderRadius,
    cursor: 'pointer',
    userSelect: 'none',
    width: 'fit-content',
  } as const;

  if (props.href)
    return (
      <NextLink
        style={s}
        href={props.href}
        target={props.new ? '_blank' : undefined}>
        {props.children}
      </NextLink>
    );
  return (
    <PlainButton style={s} onClick={props.onClick} stopPropagation>
      {props.children}
    </PlainButton>
  );
};
