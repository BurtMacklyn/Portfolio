import { Box } from '@components/Box';
import { CSSProperties, useRef, useState } from 'react';
import { Button, ButtonProps } from './Button';

interface Props {
  buttons: ButtonProps[];
  style?: CSSProperties;
}

export const ButtonGroup: React.FC<Props> = props => {
  const ref = useRef<HTMLDivElement>(null);

  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  return (
    <Box
      ref={ref}
      row
      gap={8}
      style={{
        width: 'fit-content',
        ...props.style,
      }}
      raw={{
        onMouseMove: e => {
          setTarget({ x: e.clientX, y: e.clientY });
          setHover(true);
        },
        onMouseOut: () => setHover(false),
      }}>
      {props.buttons.map(button => (
        <Button {...button} key={button.href} target={target} hover={hover} />
      ))}
    </Box>
  );
};
