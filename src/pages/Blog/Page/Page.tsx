import { Portfolio, Markdown } from '~/components';

export function Page({ content }: { content: string }) {
  return (
    <Portfolio>
      <Markdown>{content}</Markdown>
    </Portfolio>
  );
}
