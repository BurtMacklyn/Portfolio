import { Box } from '@/components/Box';
import { Button, ButtonProps } from '@/components/Button/Button';
import { useMQ } from '@/hooks/useMQ';
import { CSSProperties, useRef, useState } from 'react';

interface Props {
  buttons: ButtonProps[];
  style?: CSSProperties;
}

export const ButtonGroup: React.FC<Props> = props => {
  const mq = useMQ();

  const ref = useRef<HTMLDivElement>(null);

  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  return (
    <Box
      data-testid={(props as any)['data-testid']}
      ref={ref}
      row
      gap={8}
      style={{
        width: 'fit-content',
        ...props.style,
      }}
      raw={{
        onMouseMove: mq.touchscreen
          ? undefined
          : e => {
              setTarget({ x: e.clientX, y: e.clientY });
              setHover(true);
            },
        onMouseOut: mq.touchscreen ? undefined : () => setHover(false),
      }}>
      {props.buttons.map(button => (
        <Button
          {...button}
          key={String(button.label)}
          target={target}
          hover={hover}
          static={mq.touchscreen}
        />
      ))}
    </Box>
  );
};
