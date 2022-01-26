import { Card } from '../Card';

export function Loading() {
  return (
    <Card>
      <style>{style}</style>
      <div className='container'>
        <div className='contents'>
          <div className='dot'>
            <div></div>
          </div>
          <div className='dot'>
            <div></div>
          </div>
          <div className='dot'>
            <div></div>
          </div>
          <div className='dot'>
            <div></div>
          </div>
          <div className='dot'>
            <div></div>
          </div>
          <div className='dot'>
            <div></div>
          </div>
          <div className='dot'>
            <div></div>
          </div>
          <div className='dot'>
            <div></div>
          </div>
          <div className='dot'>
            <div></div>
          </div>
          <div className='dot'>
            <div></div>
          </div>
          <div className='dot'>
            <div></div>
          </div>
          <div className='dot'>
            <div></div>
          </div>
          <div className='dot'>
            <div></div>
          </div>
          <div className='dot'>
            <div></div>
          </div>
        </div>
      </div>
    </Card>
  );
}

const style = `.container {
  display: grid;
  min-height: 256px;
  place-items: center;
}

.dot  div {
  border-radius: 100%;
  aspect-ratio: 1;
  width: 12px;
  background: rgba(228, 235, 247, 0.5);
}

.contents {
  position: relative;
  display: grid;
  place-items: center;
}

.dot:nth-of-type(1) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg) translateY(-48px);
}
.dot:nth-of-type(1)  div {
  animation: dot-move 1.2s ease-in-out infinite;
  animation-delay: calc(1 * (1.2s / 14));
}

.dot:nth-of-type(2) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(25.7142857143deg) translateY(-48px);
}
.dot:nth-of-type(2)  div {
  animation: dot-move 1.2s ease-in-out infinite;
  animation-delay: calc(2 * (1.2s / 14));
}

.dot:nth-of-type(3) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(51.4285714286deg) translateY(-48px);
}
.dot:nth-of-type(3)  div {
  animation: dot-move 1.2s ease-in-out infinite;
  animation-delay: calc(3 * (1.2s / 14));
}

.dot:nth-of-type(4) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(77.1428571429deg) translateY(-48px);
}
.dot:nth-of-type(4)  div {
  animation: dot-move 1.2s ease-in-out infinite;
  animation-delay: calc(4 * (1.2s / 14));
}

.dot:nth-of-type(5) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(102.8571428571deg) translateY(-48px);
}
.dot:nth-of-type(5)  div {
  animation: dot-move 1.2s ease-in-out infinite;
  animation-delay: calc(5 * (1.2s / 14));
}

.dot:nth-of-type(6) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(128.5714285714deg) translateY(-48px);
}
.dot:nth-of-type(6)  div {
  animation: dot-move 1.2s ease-in-out infinite;
  animation-delay: calc(6 * (1.2s / 14));
}

.dot:nth-of-type(7) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(154.2857142857deg) translateY(-48px);
}
.dot:nth-of-type(7)  div {
  animation: dot-move 1.2s ease-in-out infinite;
  animation-delay: calc(7 * (1.2s / 14));
}

.dot:nth-of-type(8) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(180deg) translateY(-48px);
}
.dot:nth-of-type(8)  div {
  animation: dot-move 1.2s ease-in-out infinite;
  animation-delay: calc(8 * (1.2s / 14));
}

.dot:nth-of-type(9) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(205.7142857143deg) translateY(-48px);
}
.dot:nth-of-type(9)  div {
  animation: dot-move 1.2s ease-in-out infinite;
  animation-delay: calc(9 * (1.2s / 14));
}

.dot:nth-of-type(10) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(231.4285714286deg) translateY(-48px);
}
.dot:nth-of-type(10)  div {
  animation: dot-move 1.2s ease-in-out infinite;
  animation-delay: calc(10 * (1.2s / 14));
}

.dot:nth-of-type(11) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(257.1428571429deg) translateY(-48px);
}
.dot:nth-of-type(11)  div {
  animation: dot-move 1.2s ease-in-out infinite;
  animation-delay: calc(11 * (1.2s / 14));
}

.dot:nth-of-type(12) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(282.8571428571deg) translateY(-48px);
}
.dot:nth-of-type(12)  div {
  animation: dot-move 1.2s ease-in-out infinite;
  animation-delay: calc(12 * (1.2s / 14));
}

.dot:nth-of-type(13) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(308.5714285714deg) translateY(-48px);
}
.dot:nth-of-type(13)  div {
  animation: dot-move 1.2s ease-in-out infinite;
  animation-delay: calc(13 * (1.2s / 14));
}

.dot:nth-of-type(14) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(334.2857142857deg) translateY(-48px);
}
.dot:nth-of-type(14)  div {
  animation: dot-move 1.2s ease-in-out infinite;
  animation-delay: calc(14 * (1.2s / 14));
}

@keyframes dot-move {
  from {
    transform: scale(1);
  }
  40% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.2) translateY(-10px);
    background-color: #e94860;
  }
  60% {
    transform: scale(1) translateY(calc(10px / 3));
  }
  to {
    transform: translateY(0);
  }
}`;
