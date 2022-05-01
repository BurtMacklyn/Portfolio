import style from './Experience.module.scss';
import * as icons from './icons';

export const Experience = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.Experience}>
        {Object.entries({ ...icons }).map(([key, Icon]) => {
          if (key !== 'default')
            return (
              <div className={style.card} key={key}>
                <Icon />
              </div>
            );

          return null;
        })}
      </div>
    </div>
  );
};
