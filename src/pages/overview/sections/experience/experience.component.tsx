import style from './experience.module.scss';
import * as icons from '~/images/experience/index';

export const Experience = () => (
  <div className={style.wrapper}>
    <div className={style.Experience}>
      {Object.entries({ ...icons }).map(([key, Icon]) => (
        <div className={style.card} key={key}>
          <Icon />
        </div>
      ))}
    </div>
  </div>
);
