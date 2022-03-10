import style from './Contact.module.scss';
import { Ellipsis } from 'react-awesome-spinners';
import { pallette } from '~/config';

export function Loading({ loading }: { loading: boolean }) {
  return (
    <>
      {loading && (
        <div className={style.loading}>
          <Ellipsis color={pallette.white} />
        </div>
      )}
    </>
  );
}
