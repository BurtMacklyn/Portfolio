import { BigText } from '@/components/Typography/BigText';
import { Code } from '@/components/Typography/Code';
import { Heading } from '@/components/Typography/Heading';
import { Inline } from '@/components/Typography/Inline';
import { PageTitle } from '@/components/Typography/PageTitle';
import { Paragraph } from '@/components/Typography/Paragraph';
import { SectionTitle } from '@/components/Typography/SectionTitle';

const Typography = {
  BigText,
  Code,
  Heading,
  Inline,
  PageTitle,
  Paragraph,
  SectionTitle,
} as const;

describe('Typography', () => {
  for (const [name, Component] of Object.entries(Typography)) {
    it(`can render ${name}`, () => {
      const { unmount } = renderComponent(Component as any, {
        test: {
          children: true,
          mouse: name === 'Inline' ? true : false,
        },
        props: {},
      });

      unmount();
    });
  }
});
