import { style } from '@/config/style';
import { rem } from '@/css';
import NextLink from 'next/link';
import { Box } from './Box';
import { PlainButton } from './PlainButton';

interface ButtonProps {
  children?: any;
  onClick?: () => any;
  href?: string;
  new?: boolean;
}

export const Button: React.FC<ButtonProps> = props => {
  return (
    <DetermineButtonElement {...props}>
      <Box
        row
        round
        paddingBlock={12}
        paddingInline={16}
        style={{
          width: 'fit-content',
          border: `${rem(2)} solid ${style.color[8]}`,
        }}>
        {props.children}
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
  };

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
