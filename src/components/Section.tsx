import { style } from '@/config/style';
import { rem } from '@/css';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export const Section: React.FC<{ children?: any }> = ({ children }) => {
  const matches = useMediaQuery(`(max-width: ${style.breakpoints.sm})`);
  return (
    <section style={{ marginBlock: !matches ? rem(128) : rem(64) }}>
      {children}
    </section>
  );
};
