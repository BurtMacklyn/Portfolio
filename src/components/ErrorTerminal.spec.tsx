import { ErrorTerminal } from '@/components/ErrorTerminal';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

describe('ErrorTerminal', () => {
  it('renders', () => {
    const { unmount, element } = renderComponent(ErrorTerminal, {
      test: {},
      props: {},
    });

    expect(element).toBeInTheDocument();

    unmount();
  });
});
