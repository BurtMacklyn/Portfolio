import React from 'react';

import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { randomUUID } from 'crypto';
import { Main } from './Main';

describe('Main', () => {
  it('Renders', () => {
    const text = randomUUID();

    const { unmount } = render(
      <div>
        <Main>
          <p>{text}</p>
        </Main>
      </div>,
    );

    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();

    unmount();
  });
});
