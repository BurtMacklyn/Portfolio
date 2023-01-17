import NextLink from 'next/link';

interface Props {
  to: string;
  children: any;
  new?: boolean;
}

export const Link: React.FC<Props> = props => {
  return (
    <NextLink href={props.to} passHref>
      <a
        style={{
          fontFamily: 'inherit',
          fontWeight: 'inherit',
          color: 'inherit',
          letterSpacing: 'inherit',
          textDecoration: 'none',
        }}
        target={props.new ? '_blank' : undefined}>
        {props.children}
      </a>
    </NextLink>
  );
};
