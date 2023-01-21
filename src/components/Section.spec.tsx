import { Section } from '@/components/Section';

describe('Section', () => {
  it('renders', () => {
    const { unmount } = renderComponent(Section, {
      test: {
        children: true,
      },
      props: {},
    });

    unmount();
  });
});
