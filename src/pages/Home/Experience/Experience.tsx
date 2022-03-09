import style from './Experience.module.scss';
import * as icons from './icons';

export function Experience() {
  return (
    <div className={style.wrapper}>
      <div className={style.Experience}>
        {Object.entries({ ...icons }).map(([key, Icon]) => (
          <Card key={key}>
            <Icon />
          </Card>
        ))}
      </div>
    </div>
  );
}

const Card = ({ children }) => <div className={style.card}>{children}</div>;
