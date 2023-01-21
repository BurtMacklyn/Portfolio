import React from 'react';

import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { randomUUID } from 'crypto';
import { Error } from '@/components/Error';

describe('Error', () => {
  it('Renders', () => {
    const code = randomUUID();
    const message = randomUUID();

    const { unmount } = render(
      <div>
        <Error code={code} message={message} />
      </div>,
    );

    expect(screen.getByText(code)).toBeInTheDocument();
    expect(screen.getByText(message)).toBeInTheDocument();

    unmount();
  });
});
