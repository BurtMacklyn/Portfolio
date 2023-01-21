import { determineMediaValues } from '@/context/MQ';

import { fireEvent, render, screen, within } from '@testing-library/react';
import { randomUUID } from 'crypto';
import React from 'react';
import { mqController } from '../../src/hooks/useMQ.mock';

interface Options<T> {
  test: {
    click?: boolean;
    hover?: boolean;
    children?: boolean;
  };
  props: Omit<T, 'children'>;
}

export function renderComponent<T extends { [key: string]: any }>(
  Component: React.FC<T>,
  options: Options<T>,
) {
  const text = randomUUID();
  const testid = randomUUID();
  const click = jest.fn();

  mqController.state = determineMediaValues('xs');

  const props = {
    ...options.props,
    children: text,
    onClick: options.test.click ? click : undefined,
    'data-testid': testid,
  } as unknown as T;

  const { unmount, container } = render(<Component {...props} />);

  const element = screen.getByTestId(testid);
  expect(element).toBeInTheDocument();

  if (options.test.click) {
    fireEvent.click(element);
    expect(click).toBeCalled();
  }

  if (options.test.children) {
    expect(within(element).getByText(text)).toBeInTheDocument();
  }

  return {
    element,
    unmount,
    container,
  };
}
