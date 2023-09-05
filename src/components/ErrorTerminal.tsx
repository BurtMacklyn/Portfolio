import { color } from '@/config/style';
import { rem } from '@/css';
import { useMQ } from '@/hooks/useMQ';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Box } from './Box';
import { NavHtml } from './Nav/Nav';
import { Code } from './Typography/Code';

export const ErrorTerminal: React.FC = props => {
  const mq = useMQ();
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <Box
      data-testid={(props as any)['data-testid']}
      relative
      style={{
        marginInline: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
      }}>
      <Box gap={32}>
        <Code
          style={{
            color: color('100'),
            width: '100%',
            textAlign: 'center',
          }}>
          ERROR 404
        </Code>
        <Box gap={4} style={{ alignItems: 'center' }}>
          <Code
            style={{
              color: color('100'),
            }}>
            It seems the requested page cannot be found.
          </Code>
          <Code
            style={{
              color: color('100'),
            }}>
            {url}
          </Code>
        </Box>
        <Box gap={4} style={{ marginTop: rem(32) }}>
          <Code
            style={{
              color: color('100'),
            }}>
            Try one of these:
          </Code>
          <NavHtml />
        </Box>
        <Box gap={4} style={{ marginTop: rem(32) }}>
          <Code
            style={{
              color: color('100'),
            }}>
            Path:
          </Code>
          <TermInput />
        </Box>
      </Box>
    </Box>
  );
};

const TermInput = () => {
  const [caretPos, setCaretPos] = useState(0);
  const [path, setPath] = useState('');
  const [focused, setFocused] = useState(false);
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPath(location.pathname.replace('/', ''));
    setCaretPos(location.pathname.replace('/', '').length);
    ref.current?.focus();
  }, []);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        router.push(`/${path}`);
      }}>
      <input
        style={{ opacity: 0, pointerEvents: 'none', position: 'absolute' }}
        ref={ref}
        value={path}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={e => setPath(e.target.value)}
        onKeyDown={e => {
          if (e.key === '\n') return;
          if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
            setCaretPos(old => Math.max(old - 1, 0));
          } else if (e.key === 'ArrowRight') {
            setCaretPos(old => Math.min(old + 1, ref.current!.value.length));
          } else {
            setCaretPos(old =>
              Math.min(old + 1, ref.current!.value.length + 1),
            );
          }
        }}
      />
      <Box relative>
        <Code
          style={{
            letterSpacing: '0',
            color: color('0'),
            background: color('80'),
            padding: '2px 4px',
            cursor: 'text',
          }}
          tabIndex={-1}
          onFocus={() => ref!.current!.focus()}>
          /{path}
        </Code>
        <span
          style={{
            width: '1ch',
            height: rem(21 as any),
            backgroundColor: focused ? color('0') : 'transparent',
            border: focused ? undefined : `2px solid ${color('0')}`,
            animation: focused ? 'flash 1s infinite' : undefined,
            position: 'absolute',
            top: 2,
            left: rem((((caretPos + 1) * 9.61) as any) + 4),
          }}
        />
      </Box>
    </form>
  );
};
