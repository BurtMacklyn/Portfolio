import { render } from '@testing-library/react';
import React from 'react';
import { MQContext, MQProvider, _shape } from './MQ';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: query => ({
    matches: false,
    query,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }),
});

describe('MQ provides context', () => {
  const dom = render(
    <MQProvider>
      <MQContext.Consumer>
        {mq => <span data-testid="media-value">{JSON.stringify(mq)}</span>}
      </MQContext.Consumer>
    </MQProvider>,
  );

  const raw = dom.queryByTestId('media-value')?.innerHTML!;
  const data: typeof _shape = JSON.parse(raw);

  it('should provide an object', () => {
    expect(typeof data).toStrictEqual('object');
  });

  for (const key in _shape) {
    it(`should have \`${key}\` property`, () => {
      expect(typeof data[key]).toStrictEqual('boolean');
    });
  }

  it('should unmount without errors', cb => {
    expect(dom.unmount).not.toThrow();
    cb(dom.unmount());
  });
});
