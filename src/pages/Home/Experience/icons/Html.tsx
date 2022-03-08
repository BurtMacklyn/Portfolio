import { pallette } from '~/config';

export function Html() {
  return (
    <svg width="76" height="86" viewBox="0 0 76 86" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.8984 77.4293L0 0H75.8405L68.9422 77.3875L37.8576 86L6.8984 77.4293ZM14.0895 15.8244H61.6675L60.7895 25.315H24.4998L25.3777 35.0354H59.9324L57.3194 64.1759L37.9203 69.5576V69.611L18.4375 64.1759L17.0997 49.2712H26.632L27.3009 56.8594L37.8994 59.6968L48.4769 56.8594L49.5849 44.5259H37.8785V44.505H16.6816L14.0895 15.8244Z"
        fill={pallette.primary}
      />
    </svg>
  );
}
