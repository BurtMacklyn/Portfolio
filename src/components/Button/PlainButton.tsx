import { BoxProps } from '@/components/Box';
import { CSSProperties, forwardRef } from 'react';

interface PlainButtonProps {
  children?: any;
  box?: BoxProps;
  onClick?: () => any;
  stopPropagation?: boolean;
  style?: CSSProperties;
  onMouseMove?: any;
  onMouseEnter?: any;
  onMouseLeave?: any;
}

export const PlainButton = forwardRef<HTMLButtonElement, PlainButtonProps>(
  (props, ref) => {
    return (
      <button
        ref={ref}
        data-testid={(props as any)['data-testid']}
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
        }}
        onMouseMove={props.onMouseMove}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}>
        {props.children}
      </button>
    );
  },
);
