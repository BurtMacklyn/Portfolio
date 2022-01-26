import { Tag } from 'source/components';

export function Card({ children }) {
  return (
    <div className='card'>
      <div className='tooltip'>Open in Codepen</div>
      <Tag>div</Tag>
      <div className='card__content'>{children}</div>
      <Tag close>div</Tag>
    </div>
  );
}
