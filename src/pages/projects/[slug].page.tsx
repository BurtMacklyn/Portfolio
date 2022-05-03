import * as Template from '~/components/markdown/template/template.component';

const options = {
  accessPath: '/projects',
  fullPath: './src/pages/projects/pages',
};

export default Template.Page;

export const getStaticPaths = Template.getStaticPaths(options);
export const getStaticProps = Template.getStaticProps(options);
