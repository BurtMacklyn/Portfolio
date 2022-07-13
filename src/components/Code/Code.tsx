import style from './Code.module.scss';

export const Code: React.FC<{ children: string | React.ReactElement }> = ({ children }) => <code className={style.code}>{children}</code>;
