import style from './Experience.module.scss';
import * as icons from './icons';

export function Experience() {
  return (
    <div className={style.Experience}>
      {Object.values({ ...icons }).map((Icon) => (
        <Card>
          <Icon />
        </Card>
      ))}
    </div>
  );
}

const Card = ({ children }) => <div className={style.card}>{children}</div>;
