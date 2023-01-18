import { CSSProperties } from 'react';
import { Box, BoxProps } from './Box';

interface ButtonProps {
  children?: any;
  box?: BoxProps;
  onClick?: () => any;
  stopPropagation?: boolean;
  style?: CSSProperties;
}

export const Button: React.FC<ButtonProps> = props => {
  return (
    <button
      onClick={e => {
        e.preventDefault();
        if (props.stopPropagation) e.stopPropagation();
        if (props.onClick) props.onClick();
      }}
      style={{
        border: 0,
        outline: 0,
        padding: 0,
        margin: 0,
        cursor: 'pointer',
        background: 'transparent',
        ...props.style,
      }}>
      {props.children}
    </button>
  );
};
