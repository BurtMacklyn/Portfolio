import { pallette } from '~/config';

export function Css() {
  return (
    <svg width="75" height="85" viewBox="0 0 75 85" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M74.9487 0L68.1207 76.4911L37.4285 85L6.82079 76.5031L0 0H74.9487ZM13.9467 15.6381L14.7997 25.021H50.6632L49.8094 34.6291L15.6365 34.6293L16.4775 44.012L48.9958 44.0118L47.9067 56.1805L37.4419 59.0051V59.0059L37.4332 59.0082L26.9835 56.1866L26.3155 48.7034H16.8967L18.2112 63.4357L37.4311 68.7713L37.4743 68.7593V68.7577L56.6771 63.4356L59.0231 37.1486L59.2521 34.6291L60.9459 15.6381H13.9467Z"
        fill={pallette.primary}
      />
    </svg>
  );
}

export { default } from 'X';
