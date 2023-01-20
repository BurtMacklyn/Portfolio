import { Box } from '@/components/Box';
import { ButtonGroup } from '@/components/Button/ButtonGroup';
import { Section } from '@/components/Section';
import { config } from '@/config/config';
import { font } from '@/config/font';
import { color, Color, style, Z } from '@/config/style';
import { useMQ } from '@/context/MQ';
import { percent, rem } from '@/css';
import { useRef, useState } from 'react';

const animationSpeed = `${style.transition.time * 4}ms`;

export const Hero: React.FC = () => {
  const mq = useMQ();

  const ref = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [hover1, setHover1] = useState(false); // blue
  const [hover2, setHover2] = useState(false); // white
  const [hover3, setHover3] = useState(false); // white
  const [hover4, setHover4] = useState(false); // blue

  const hover = !mq.sm && (hover1 || hover2 || hover3 || hover4);
  const currentColor = hover1 || hover4 ? color('primary') : color(64);

  return (
    <Section gap={32}>
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
          letterSpacing: percent(-5, 'em'),
        }}
        raw={{
          onMouseMove: e => {
            const rect = ref.current!.getBoundingClientRect();
            setX(e.clientX - rect.left);
            setY(e.clientY - rect.top);
          },
        }}>
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
        <HeroLine>
          <HeroText value={hover} set={setHover1} color="primary">
            Cooper Runyan
          </HeroText>
        </HeroLine>
        <HeroLine>
          <HeroText value={hover} set={setHover2} color={hover ? 64 : 100}>
            fullstack web
          </HeroText>
        </HeroLine>
        <HeroLine>
          <HeroText value={hover} set={setHover3} color={hover ? 64 : 100}>
            developer
          </HeroText>
          <HeroText value={hover} set={setHover4} color="primary">
            .
          </HeroText>
        </HeroLine>
      </Box>
      <ButtonGroup
        style={{}}
        buttons={[
          { href: config.pages.contact, children: 'Contact' },
          { href: config.social.github.link, children: 'Github' },
        ]}
      />
    </Section>
  );
};

const HeroLine: React.FC<{ children: any | any[] }> = ({ children }) => {
  return (
    <Box row raw={{ className: 'heroline' }}>
      {children}
    </Box>
  );
};

const HeroText: React.FC<{
  value: boolean;
  set: (x: boolean) => void;
  children: any;
  color: Color;
}> = props => {
  return (
    <h1
      onMouseEnter={e => props.set(true)}
      onMouseLeave={e => props.set(false)}
      style={{
        fontSize: '1em',
        zIndex: Z.Content,
        color: props.value ? color(0) : color(props.color),
        display: 'inline',
        transitionProperty: 'all',
        width: 'fit-content',
        transitionDuration: animationSpeed,
        transitionTimingFunction: style.transition.function,
        cursor: 'default',
        textShadow: props.value
          ? `-1px -1px 0 ${color(props.color)}, 1px -1px 0 ${color(
              props.color,
            )}, 1px 1px 0 ${color(props.color)}, -1px 1px 0 ${color(
              props.color,
            )}`
          : `-1px -1px 0 ${color(4)}, 1px -1px 0 ${color(4)}, 1px 1px 0 ${color(
              4,
            )}, -1px 1px 0 ${color(4)}`,
      }}>
      {props.children}
    </h1>
  );
};
