import { rem } from '@/utils/spacing';

interface Props {
  children: any;
}

export const Paragraph: React.FC<Props> = ({ children }) => {
  return (
    <p
      style={{
        lineHeight: 1.625,
        width: '100%',
        maxWidth: -rem(640),
        letterSpacing: '-0.025em',
      }}>
      {children}
    </p>
  );
};
