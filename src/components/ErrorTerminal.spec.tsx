import { ErrorTerminal } from '@/components/ErrorTerminal';
import { within } from '@testing-library/react';
import { randomUUID } from 'crypto';

describe('ErrorTerminal', () => {
  it('renders', () => {
    const code = randomUUID();
    const message = randomUUID();

    const { unmount, element } = renderComponent(ErrorTerminal, {
      test: {},
      props: { code, message },
    });

    expect(within(element).getByText(code)).toBeInTheDocument();
    expect(within(element).getByText(message)).toBeInTheDocument();

    unmount();
  });
});
