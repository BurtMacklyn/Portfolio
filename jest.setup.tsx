import '@testing-library/jest-dom';

import { fireEvent, render, screen, within } from '@testing-library/react';
import { randomUUID } from 'crypto';
import isUrl from 'is-url';

declare global {
  export var renderComponent: typeof _renderComponent;
}

expect.extend({
  toBeValidPath: function (u) {
    let result = isUrl(u);
    if (!result && u.startsWith('/')) {
      u = 'https://a.b' + u;
      result = isUrl(u);
    }

    if (result || u.startsWith('mailto:'))
      return {
        message: () =>
          `expected ${this.utils.printReceived(u)} to be a valid path`,
        pass: true,
      };

    return {
      message: () =>
        `expected ${this.utils.printReceived(u)} to be a valid path`,
      pass: false,
    };
  },
});

interface Options<T> {
  test: {
    click?: boolean;
    mouse?: boolean;
    children?: boolean;
  };
  props: Omit<T, 'children'>;
}

function _renderComponent<T extends { [key: string]: any }>(
  Component: React.FC<T>,
  options: Options<T>,
) {
  const text = randomUUID();
  const testid = randomUUID();
  const click = jest.fn();

  const props = {
    ...options.props,
    children: text,
    onClick: options.test.click ? click : undefined,
    'data-testid': testid,
  } as unknown as T;

  const { unmount, container, debug } = render(<Component {...props} />);
  const element = screen.getByTestId(testid);
  expect(element).toBeInTheDocument();

  if (options.test.click) {
    fireEvent.click(element);
    expect(click).toBeCalled();
  }

  if (options.test.mouse) {
    fireEvent.mouseEnter(element);
    fireEvent.mouseMove(element);
    fireEvent.mouseLeave(element);
  }

  if (options.test.children) {
    expect(within(element).getByText(text)).toBeInTheDocument();
  }

  return {
    element,
    unmount,
    container,
    debug,
  };
}

global.renderComponent = _renderComponent;
