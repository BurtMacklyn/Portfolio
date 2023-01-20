import { Nav } from '@/components/Nav/Nav';

import { color, style } from '@/config/style';
import { rem } from '@/css';

export default function Snake() {
  return (
    <>
      <Nav />
      <iframe
        style={{
          display: 'flex',
          position: 'relative',
          top: rem(style.navHeight),
          width: '100%',
          maxWidth: style.maxWidth,
          height: `calc(100vh - ${rem(style.navHeight)})`,
        }}
        src={`https://aisnake.netlify.app/?primary=${encodeURIComponent(
          color('100'),
        )}&secondary=${encodeURIComponent(
          color('primary'),
        )}&bg=${encodeURIComponent(color('0'))}&fg=${encodeURIComponent(
          color('100'),
        )}&tickRate=10&unitSize=30`}
      />
    </>
  );
}
