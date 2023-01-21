import { color, Z } from '@/config/style';
import { rem } from '@/css';
import { useMQ } from '@/hooks/useMQ';
import { Box } from './Box';

interface Props {
  code: string;
  message: string;
}

export const Error: React.FC<Props> = props => {
  const mq = useMQ();

  return (
    <Box
      data-testid={(props as any)['data-testid']}
      relative
      margin
      style={{
        marginInline: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
      }}>
      <p
        style={{
          fontWeight: 700,
          fontSize: rem(mq.sm ? 144 : mq.md ? 220 : mq.lg ? 320 : (480 as any)),
          lineHeight: '100%',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          letterSpacing: '-0.065em',
          color: color('8'),
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: Z.BehindContent,
        }}>
        Error
      </p>
      <Box row gap={mq.md ? 16 : 32} style={{ alignItems: 'center' }}>
        <p
          style={{
            fontWeight: 200,
            fontSize: rem(mq.sm ? 32 : mq.md ? 64 : mq.lg ? 96 : 144),
            letterSpacing: '-0.095em',
            color: color('100'),
            zIndex: Z.Content,
          }}>
          {props.code}
        </p>
        <p
          style={{
            fontWeight: 600,
            color: color('100'),
            fontSize: rem(mq.sm ? 24 : mq.md ? 32 : mq.lg ? 48 : 64),
            letterSpacing: '-0.025em',
            zIndex: Z.Content,
          }}>
          {props.message}
        </p>
      </Box>
    </Box>
  );
};
