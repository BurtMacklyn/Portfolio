export default function Tag({ name = '', closeTag = false, className = '' }) {
  return (
    <code aria-hidden="true" className={`tag ${className}`}>
      &lt;{closeTag ? '/' : ''}
      {name}&gt;
    </code>
  );
}
