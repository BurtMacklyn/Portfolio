import { Main } from '@/components/Main';
// @ts-ingore
import CR8 from '../../../public/cr8-spec.md';

export default function Page() {
  return (
    <Main className="markdown">
      <CR8 />
    </Main>
  );
}
