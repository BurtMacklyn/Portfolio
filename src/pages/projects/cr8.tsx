// @ts-nocheck

import { Main } from '@/components/Main';

declare module '../../../public/cr8-spec.md' {
  export const f: () => any;
  export default f;
}

// @ts-ingore
import CR8 from '../../../public/cr8-spec.md';

export default function Page() {
  return (
    <Main className="markdown">
      <CR8 />
    </Main>
  );
}
