import { Error } from '@/components/Error';
import { within } from '@testing-library/react';
import { randomUUID } from 'crypto';

describe('Error', () => {
  it('renders', () => {
    const code = randomUUID();
    const message = randomUUID();

    const { unmount, element } = renderComponent(Error, {
      test: {},
      props: { code, message },
    });

    expect(within(element).getByText(code)).toBeInTheDocument();
    expect(within(element).getByText(message)).toBeInTheDocument();

    unmount();
  });
});
