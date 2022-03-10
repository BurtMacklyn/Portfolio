import style from './Contact.module.scss';

export function Hooray({ hooray }: { hooray: boolean }) {
  return (
    <>
      {hooray && (
        <div className={style.hooray}>
          <h1>Message Sent!</h1>
        </div>
      )}
    </>
  );
}
