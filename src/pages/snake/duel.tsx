import { color } from '@/config/style';
import {
  CSSProperties,
  PropsWithChildren,
  RefObject,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

const defaultConfig = {
  unitSize: 25,
  p1Color: color('primary'),
  p2Color: color('secondary'),
  failColor: color('error'),
  appleColor: color('error'),
  border: '1px solid black',
  animation: '.1s ease-in-out',
  interval: 100,
};

const ConfigCTX = createContext([
  defaultConfig,
  (_: typeof defaultConfig) => {},
] as const);

const ConfigContext: React.FC<PropsWithChildren> = ({ children }) => {
  const [config, setConfig] = useState(defaultConfig);

  return (
    <ConfigCTX.Provider value={[config, setConfig] as const}>
      {children}
    </ConfigCTX.Provider>
  );
};

const useConfig = () => useContext(ConfigCTX);

function useEventListener<T extends keyof WindowEventMap>(
  event: T,
  cb: (e: WindowEventMap[T]) => any,
  deps: any[] = [],
) {
  useEffect(() => {
    window.addEventListener(event, cb);
    return () => window.removeEventListener(event, cb);
  }, deps);
}

const useWindowSize = () => {
  const [size, setSize] = useState({ width: 100, height: 100 });

  useEffect(() => {
    if (window?.innerHeight) {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  useEventListener('resize', e => {
    setSize({ width: window.innerWidth, height: window.innerHeight });
  });

  return size;
};

function directionFrom(a: Coordinate, b: Coordinate) {
  const [ax, ay] = a.split(' ').map(n => +n);
  const [bx, by] = b.split(' ').map(n => +n);

  if (by > ay) return Direction.Down;
  if (by < ay) return Direction.Up;
  if (bx < ax) return Direction.Left;
  return Direction.Right;
}

function useInterval(cb: () => any, timeout: number, deps?: any[]) {
  useEffect(() => {
    const int = setInterval(cb, timeout);
    return () => clearInterval(int);
  }, deps);
}

const useDimensions = (unit: number) => {
  const win = useWindowSize();

  return useMemo(() => {
    const widthUnits = Math.round(win.width / unit);
    const heightUnits = Math.round(win.height / unit);
    const width = widthUnits * unit;
    const height = heightUnits * unit;
    const scaleX = win.width / width;
    const scaleY = win.height / height;

    return { widthUnits, heightUnits, width, height, scaleX, scaleY };
  }, [win, unit]);
};

function randomApple(
  p1: Coordinate[],
  p2: Coordinate[],
  width: number,
  height: number,
) {
  const available: Coordinate[] = [];

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      if (!p1.includes(`${x} ${y}`) && !p2.includes(`${x} ${y}`))
        available.push(`${x} ${y}`);
    }
  }

  return available.at(Math.floor(Math.random() * available.length))!;
}

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

type Coordinate = `${number} ${number}`;

export default function Duel() {
  return (
    <ConfigContext>
      <SnakeDuel />
    </ConfigContext>
  );
}

const SnakeDuel: React.FC<{}> = ({}) => {
  const [config, setConfig] = useConfig();
  const dimensions = useDimensions(config.unitSize);

  const dimensionRef = useRef(dimensions);

  useEffect(() => {
    dimensionRef.current = dimensions;
  }, [dimensions]);

  useEffect(() => {
    if (!window?.document?.documentElement?.style) return;

    window.document.documentElement.style.overflow = 'hidden';
    window.document.documentElement.style.width = '100vw';
    window.document.documentElement.style.height = '100vh';
  }, []);

  const [apple, setApple] = useState('-1 -1');

  const [p1, setP1] = useState<Coordinate[]>([
    '0 0',
    '1 0',
    '2 0',
    '3 0',
    '4 0',
    '5 0',
  ]);
  const p1Dir = useRef(Direction.Right);
  const p1DirQueue = useRef<Direction | null>(null);
  const p1LastTail = useRef<Coordinate>('0 0');
  const [p1Fail, setP1Fail] = useState(false);

  const [p2, setP2] = useState<Coordinate[]>([
    '0 3',
    '1 3',
    '2 3',
    '3 3',
    '4 3',
    '5 3',
  ]);
  const p2Dir = useRef(Direction.Right);
  const p2DirQueue = useRef<Direction | null>(null);
  const p2LastTail = useRef<Coordinate>('0 3');
  const [p2Fail, setP2Fail] = useState(false);

  useEffect(() => {
    const endX = dimensions.widthUnits - 1;
    const endY = dimensions.heightUnits - 1;

    p2Dir.current = Direction.Left;
    p2LastTail.current = `${endX} ${endY}`;

    const p2 = [
      `${endX} ${endY}`,
      `${endX - 1} ${endY}`,
      `${endX - 2} ${endY}`,
      `${endX - 3} ${endY}`,
      `${endX - 4} ${endY}`,
      `${endX - 5} ${endY}`,
    ] as any;

    setP2(p2);
    setP2Fail(false);

    p1Dir.current = Direction.Right;
    p1LastTail.current = '0 0';

    const p1 = ['0 0', '1 0', '2 0', '3 0', '4 0', '5 0'] as any;
    setP1(p1);
    setP1Fail(false);

    setApple(
      randomApple(p1, p2, dimensions.widthUnits, dimensions.heightUnits),
    );
  }, [dimensions]);

  useInterval(() => {
    const dimensions = dimensionRef.current;
    if (p1Fail || p2Fail) return;

    if (p1DirQueue.current) {
      p1Dir.current = p1DirQueue.current;
      p1DirQueue.current = null;
    }

    if (p2DirQueue.current) {
      p2Dir.current = p2DirQueue.current;
      p2DirQueue.current = null;
    }

    const [p1X, p1Y] = p1
      .at(-1)!
      .split(' ')
      .map(n => +n);

    let p1NextX = p1X;
    let p1NextY = p1Y;

    if (p1Dir.current === Direction.Right) p1NextX = p1X + 1;
    else if (p1Dir.current === Direction.Left) p1NextX = p1X - 1;
    else if (p1Dir.current === Direction.Up) p1NextY = p1Y - 1;
    else if (p1Dir.current === Direction.Down) p1NextY = p1Y + 1;

    const p1Next: Coordinate = `${p1NextX} ${p1NextY}`;

    const p1Scored = p1Next === apple;

    if (
      p1NextX < 0 ||
      p1NextY < 0 ||
      p1NextX >= dimensions.widthUnits ||
      p1NextY >= dimensions.heightUnits ||
      p1.includes(p1Next) ||
      p2.includes(p1Next)
    ) {
      setP1Fail(true);
    }

    p1LastTail.current = p1[0];
    const newP1 = [...p1.slice(p1Scored ? 0 : 1), p1Next] as Coordinate[];
    setP1(newP1);

    const [p2X, p2Y] = p2
      .at(-1)!
      .split(' ')
      .map(n => +n);

    let p2NextX = p2X;
    let p2NextY = p2Y;

    if (p2Dir.current === Direction.Right) p2NextX = p2X + 1;
    else if (p2Dir.current === Direction.Left) p2NextX = p2X - 1;
    else if (p2Dir.current === Direction.Up) p2NextY = p2Y - 1;
    else if (p2Dir.current === Direction.Down) p2NextY = p2Y + 1;

    const p2Next: Coordinate = `${p2NextX} ${p2NextY}`;

    const p2Scored = p2Next === apple;

    if (
      p2NextX < 0 ||
      p2NextY < 0 ||
      p2NextX >= dimensions.widthUnits ||
      p2NextY >= dimensions.heightUnits ||
      p2.includes(p2Next) ||
      p1.includes(p2Next)
    ) {
      setP2Fail(true);
    }

    p2LastTail.current = p2[0];
    const newP2 = [...p2.slice(p2Scored ? 0 : 1), p2Next] as Coordinate[];
    setP2(newP2);

    if (p2Next === p1Next) {
      setP2Fail(true);
      setP1Fail(true);
    }

    if (p1Scored || p2Scored) {
      setApple(
        randomApple(
          newP1,
          newP2,
          dimensions.widthUnits,
          dimensions.heightUnits,
        ),
      );
    }
  }, config.interval);

  useEventListener(
    'keydown',
    e => {
      if (e.key === 'ArrowUp' && p2Dir.current !== Direction.Down)
        p2DirQueue.current = Direction.Up;
      if (e.key === 'ArrowLeft' && p2Dir.current !== Direction.Right)
        p2DirQueue.current = Direction.Left;
      if (e.key === 'ArrowDown' && p2Dir.current !== Direction.Up)
        p2DirQueue.current = Direction.Down;
      if (e.key === 'ArrowRight' && p2Dir.current !== Direction.Left)
        p2DirQueue.current = Direction.Right;

      if (e.key === 'w' && p1Dir.current !== Direction.Down)
        p1DirQueue.current = Direction.Up;
      if (e.key === 'a' && p1Dir.current !== Direction.Right)
        p1DirQueue.current = Direction.Left;
      if (e.key === 's' && p1Dir.current !== Direction.Up)
        p1DirQueue.current = Direction.Down;
      if (e.key === 'd' && p1Dir.current !== Direction.Left)
        p1DirQueue.current = Direction.Right;
    },
    [p1, p2],
  );

  const [appleX, appleY] = apple.split(' ').map(n => +n);

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        display: 'grid',
        gridTemplateColumns: `repeat(${dimensions.widthUnits}, 1fr)`,
        gridTemplateRows: `repeat(${dimensions.heightUnits}, 1fr)`,
      }}>
      <style>{`
        @keyframes growWidth {
          from { width: 0% }
          to { width: 100% }
        }
        @keyframes growHeight {
          from { height: 0% }
          to { height: 100% }
        }
        @keyframes shrinkWidth {
          from { width: 100% }
          to { width: 0% }
        }
        @keyframes shrinkHeight {
          from { height: 100% }
          to { height: 0% }
        }
      `}</style>
      <span
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background: config.appleColor,
          border: config.border,
          gridColumn: `${1 + appleX} / ${2 + appleX}`,
          gridRow: `${1 + appleY} / ${2 + appleY}`,
        }}
      />
      <Snake
        body={p1}
        direction={p1Dir}
        color={p1Fail ? config.failColor : config.p1Color}
        lastTail={p1LastTail}
      />
      <Snake
        body={p2}
        direction={p2Dir}
        color={p2Fail ? config.failColor : config.p2Color}
        lastTail={p2LastTail}
      />
    </div>
  );
};

const Segment: React.FC<{
  coordinate: Coordinate;
  next?: Coordinate;
  prev?: Coordinate;
  style?: CSSProperties;
}> = ({ coordinate, next, prev, style }) => {
  const [config] = useConfig();

  const [x, y] = coordinate.split(' ').map(n => +n);

  if (x < 0 || y < 0) return <></>;

  const [nextX, nextY] = next?.split(' ').map(n => +n) || [-2, -2];
  const [prevX, prevY] = prev?.split(' ').map(n => +n) || [-2, -2];

  let top = true;
  let left = true;
  let bottom = true;
  let right = true;

  if ([nextX, prevX].includes(x - 1)) left = false;
  if ([nextX, prevX].includes(x + 1)) right = false;
  if ([nextY, prevY].includes(y - 1)) top = false;
  if ([nextY, prevY].includes(y + 1)) bottom = false;

  return (
    <span
      key={coordinate}
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        gridColumn: `${x + 1} / ${x + 2}`,
        gridRow: `${y + 1} / ${y + 2}`,
        borderTop: top ? config.border : undefined,
        borderLeft: left ? config.border : undefined,
        borderRight: right ? config.border : undefined,
        borderBottom: bottom ? config.border : undefined,
        ...style,
      }}
    />
  );
};

const HeadSegment: React.FC<{
  coordinate: Coordinate;
  prev?: Coordinate;
  direction: RefObject<Direction>;
  color: string;
}> = ({ coordinate, direction, color, prev }) => {
  const [config] = useConfig();
  return (
    <Segment
      coordinate={coordinate}
      prev={prev}
      style={{
        backgroundColor: color,
        animation: `${
          [Direction.Right, Direction.Left].includes(direction.current!)
            ? 'growWidth'
            : 'growHeight'
        } ${config.animation}`,
        marginLeft: direction.current === Direction.Left ? 'auto' : undefined,
        marginTop: direction.current === Direction.Up ? 'auto' : undefined,
      }}
    />
  );
};

const TailSegment: React.FC<{
  tail: Coordinate;
  lastTail: RefObject<Coordinate>;
  color: string;
}> = ({ tail, lastTail, color }) => {
  const [config] = useConfig();

  if (!lastTail.current) return <></>;

  const dir = directionFrom(lastTail.current, tail)!;

  return (
    <Segment
      coordinate={lastTail.current}
      next={tail}
      style={{
        backgroundColor: color,
        animation: `${
          [Direction.Right, Direction.Left].includes(dir)
            ? 'shrinkWidth'
            : 'shrinkHeight'
        } ${config.animation} both`,
        marginLeft: dir === Direction.Right ? 'auto' : undefined,
        marginTop: dir === Direction.Down ? 'auto' : undefined,
      }}
    />
  );
};

const Snake: React.FC<{
  body: Coordinate[];
  direction: RefObject<Direction>;
  lastTail: RefObject<Coordinate>;
  color: string;
}> = ({ body, direction, lastTail, color }) => {
  return (
    <>
      <HeadSegment
        coordinate={body.at(-1)!}
        prev={body.at(-2)!}
        direction={direction}
        color={color}
      />
      {lastTail.current !== body[0] && (
        <TailSegment tail={body[0]} lastTail={lastTail} color={color} />
      )}
      {body.slice(0, -1).map((seg, i, a) => (
        <Segment
          key={seg}
          coordinate={seg}
          prev={i > 0 ? a[i - 1] : lastTail.current!}
          next={i < a.length - 1 ? a[i + 1] : body.at(-1)!}
          style={{ backgroundColor: color }}
        />
      ))}
    </>
  );
};
