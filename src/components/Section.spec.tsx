import React from 'react';

import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { randomUUID } from 'crypto';
import { Section } from './Section';

describe('Section', () => {
  it('Renders', () => {
    const text = randomUUID();

    const { unmount } = render(
      <div>
        <Section>
          <p>{text}</p>
        </Section>
      </div>,
    );

    expect(screen.getByText(text)).toBeInTheDocument();
    expect(document.getElementsByTagName('section')[0]).toBeInTheDocument();

    unmount();
  });
});
