import NextLink from 'next/link';

interface Props {
  to: string;
  children: any;
  new?: boolean;
}

export const Link: React.FC<Props> = props => {
  return (
    <NextLink
      data-testid={(props as any)['data-testid']}
      href={props.to}
      style={{
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        color: 'inherit',
        letterSpacing: 'inherit',
        textDecoration: 'none',
      }}
      target={props.new ? '_blank' : undefined}>
      {props.children}
    </NextLink>
  );
};
