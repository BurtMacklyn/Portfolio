import { Box } from '@/components/Box';
import { Section } from '@/components/Section';
import { Inline } from '@/components/Typography/Inline';
import { Paragraph } from '@/components/Typography/Paragraph';
import { SectionTitle } from '@/components/Typography/SectionTitle';
import { rem } from '@/css';

import quotes from '@static/quotes.json' assert { type: 'json' };
import { Link } from '../../components/Link';

export const Quotes: React.FC = () => {
  return (
    <Section>
      <Box gap={24}>
        <SectionTitle>
          quotes<Inline color="primary">.</Inline>
        </SectionTitle>

        {quotes.map(q => (
          <Paragraph key={q.quote} style={{ maxWidth: rem(640) }}>
            “{q.quote}” -{' '}
            <Inline bold hover="primary">
              <Link
                new
                to={`https://www.google.com/search?q=${encodeURIComponent(
                  q.author,
                )}`}>
                {q.author}
              </Link>
            </Inline>
            , <Inline color={64}>{q.description}</Inline>
          </Paragraph>
        ))}
      </Box>
    </Section>
  );
};
