import React from 'react';

import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { Footer } from '@/components/Footer';

describe('Footer', () => {
  it('Renders', () => {
    const { unmount } = render(
      <div>
        <Footer />
      </div>,
    );

    expect(document.getElementsByTagName('footer')[0]).toBeInTheDocument();

    unmount();
  });
});
