import { Box } from '@/components/Box';
import { ButtonGroup } from '@/components/Button/ButtonGroup';
import { Section } from '@/components/Section';
import { config } from '@/config/config';
import { font } from '@/config/font';
import { color, Color, style, Z } from '@/config/style';
import { rem } from '@/css';
import { useMQ } from '@/hooks/useMQ';
import { useRef, useState } from 'react';

const animationSpeed = `${style.transition.time * 4}ms`;

export const Hero: React.FC = () => {
  const mq = useMQ();

  const ref = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [hover1, setHover1] = useState(false); // blue
  const [hover2, setHover2] = useState(false); // white
  const [hover3, setHover3] = useState(false); // blue

  const hover = !mq.touchscreen && (hover1 || hover2 || hover3);
  const currentColor = hover1 || hover3 ? color('primary') : color('64');

  return (
    <Section data-testid="Hero" gap={32}>
      <Box
        ref={ref}
        relative
        style={{
          isolation: 'isolate',
          width: 'fit-content',
          paddingTop: rem(64),

          fontFamily: font.sans.family,
          fontWeight: 700,
          fontSize: !mq.sm ? rem(96) : rem(72),
          lineHeight: 1,
          letterSpacing: '-0.05em',
          marginTop: !mq.md ? rem(style.navHeight) : rem(48),
        }}
        raw={{
          onMouseMove: mq.touchscreen
            ? undefined
            : e => {
                const rect = ref.current!.getBoundingClientRect();
                setX(e.clientX - rect.left);
                setY(e.clientY - rect.top);
              },
        }}>
        {mq.touchscreen ? undefined : (
          <Box
            style={{
              position: 'absolute',
              opacity: hover ? 1 : 0,
              zIndex: Z.BehindContent,
              width: rem(144),
              height: rem(144),
              filter: `blur(${rem(144)})`,
              borderRadius: '100%',
              pointerEvents: 'none',
              background: currentColor,
              transform: `translate(-50%,-50%) translate(${x}px, ${y}px)`,
              transitionProperty: 'opacity, background',
              transitionDuration: animationSpeed,
              transitionTimingFunction: style.transition.function,
            }}
          />
        )}
        <Box row>
          <HeroText value={hover} set={setHover1} color="primary">
            Cooper Runyan
          </HeroText>
        </Box>
        <Box style={{ display: 'block' }}>
          <HeroText value={hover} set={setHover2} color={hover ? '64' : '100'}>
            fullstack developer
          </HeroText>
          <HeroText value={hover} set={setHover3} color="primary">
            .
          </HeroText>
        </Box>
      </Box>
      <ButtonGroup
        style={{}}
        buttons={[
          {
            href: config.pages.contact,
            children: 'Contact',
            label: 'Contact',
            new: true,
          },
          {
            href: config.social.github.link,
            children: 'Github',
            label: 'Github',
            new: true,
          },
        ]}
      />
    </Section>
  );
};

const HeroText: React.FC<{
  value: boolean;
  set: (x: boolean) => void;
  children: any;
  color: Color;
}> = props => {
  const mq = useMQ();

  return (
    <h1
      onMouseEnter={mq.touchscreen ? undefined : e => props.set(true)}
      onMouseLeave={mq.touchscreen ? undefined : e => props.set(false)}
      style={{
        fontSize: '1em',
        zIndex: Z.Content,
        color: props.value ? color('0') : color(props.color),
        display: 'inline',
        width: 'fit-content',
        transition: `all ${animationSpeed} ${style.transition.function}, font-size 0s, letter-spacing 0s`,
        cursor: 'default',
        textShadow: props.value
          ? `-1px -1px 0 ${color(props.color)}, 1px -1px 0 ${color(props.color)}, 1px 1px 0 ${color(props.color)}, -1px 1px 0 ${color(props.color)}`
          : `-1px -1px 0 ${color('4')}, 1px -1px 0 ${color('4')}, 1px 1px 0 ${color('4')}, -1px 1px 0 ${color('4')}`,
      }}>
      {props.children}
    </h1>
  );
};
