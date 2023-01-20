import { Box } from '@/components/Box';
import { PlainButton } from '@/components/Button/PlainButton';
import { font } from '@/config/font';
import { style, Z } from '@/config/style';
import { opacity, rem } from '@/css';
import NextLink from 'next/link';
import { CSSProperties, useEffect, useRef, useState } from 'react';

export interface ButtonProps {
  children?: any;
  onClick?: () => any;
  href?: string;
  new?: boolean;
  target?: {
    x: number;
    y: number;
  };
  hover?: boolean;
  raw?: CSSProperties;
  large?: boolean;
  fillX?: boolean;
  fillY?: boolean;
  animationSpeedModifier?: number;
  static?: boolean;
}

export const Button: React.FC<ButtonProps> = props => {
  const ref = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (!props.target || props.static) return;

    const rect = ref.current?.getBoundingClientRect()!;
    setX(props.target.x - rect.left);
    setY(props.target.y - rect.top);
  }, [props.target]);

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
          width: props.fillX ? '100%' : 'fit-content',
          height: props.fillY ? '100%' : undefined,
          // border: `${rem(2)} solid ${style.color[8]}`,
        }}
        raw={{
          onMouseMove:
            props.target || props.static
              ? undefined
              : e => {
                  const rect = ref.current!.getBoundingClientRect();
                  setX(e.clientX - rect.left);
                  setY(e.clientY - rect.top);
                },
          onMouseOver: props.static ? undefined : () => setHover(true),
          onMouseOut: props.static ? undefined : () => setHover(false),
        }}>
        {/* Border */}
        <Box
          w="fill"
          h="fill"
          style={{
            background: style.color[12],
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
        {!props.static && (
          <Box
            smooth
            animationSpeedModifier={props.animationSpeedModifier || 2}
            w="fill"
            h="fill"
            style={{
              background: `radial-gradient(${
                props.large ? 300 : 75
              }px circle at ${x}px ${y}px, ${opacity(
                style.color.primary,
                60,
              )}, transparent)`,
              paddingBlock: 'inherit',
              paddingInline: 'inherit',
              position: 'absolute',
              zIndex: Z.Elevated,
              top: 0,
              left: 0,
              opacity: (props.hover !== undefined ? props.hover : hover)
                ? 1
                : 0,
              borderRadius: 'inherit',
              transitionProperty: 'all',
            }}
          />
        )}

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
          {!props.static && (
            <Box
              smooth
              animationSpeedModifier={props.animationSpeedModifier || 2}
              style={{
                background: `radial-gradient(${
                  props.large ? 600 : 200
                }px circle at ${x}px ${y}px, ${opacity(
                  style.color.primary,
                  props.large ? 20 : 25,
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
                transitionProperty: 'all',
              }}
            />
          )}
        </Box>

        <div
          style={{
            position: 'relative',
            zIndex: Z.Elevated4,

            fontFamily: font.sans.family,
            fontWeight: font.sans.bold,
            fontSize: rem(16),
            width: '100%',
            maxWidth: rem(640),
            letterSpacing: '-0.02em',
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
    ...props.raw,
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
