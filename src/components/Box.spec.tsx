import React from 'react';

import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { randomUUID } from 'crypto';
import { Box } from './Box';

describe('Box', () => {
  it('Renders', () => {
    const text = randomUUID();

    const { unmount } = render(
      <div>
        <Box>{text}</Box>
      </div>,
    );

    expect(screen.getByText(text)).toBeInTheDocument();

    unmount();
  });
});
