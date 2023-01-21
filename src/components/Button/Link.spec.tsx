import { Link } from '@/components/Button/Link';
import { randomUUID } from 'crypto';

describe('Link', () => {
  it('renders', () => {
    const href = randomUUID();

    const { element, unmount } = renderComponent(Link, {
      test: {
        children: true,
      },
      props: {
        to: href,
      },
    });

    expect(element).toHaveAttribute('href', href);

    unmount();
  });
});
