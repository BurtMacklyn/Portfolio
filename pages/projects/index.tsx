import { Nav, Portfolio } from '~/components';
import style from '~/style/components/Projects.module.scss';
import Image from 'next/image';

const tags = [
  'deno',
  'typescript',
  'javascript',
  'docker',
  'heroku',
  'react',
  'nextjs',
  'nodejs',
  'scss',
  'css',
  'html',
  'netlify',
  'lwc',
  'oak',
  'angular',
  'vite',
  'figma',
  'mongodb',
  'vercel',
  'cli',
] as const;

type Tag = typeof tags[number];

type Project = {
  name: string;
  link: string;
  preview: string;
  tags: Tag[];
  description: string;
};

const projects: Project[] = [
  {
    name: 'Snake',
    link: '/projects/snake',
    preview: '/project-preview-imgs/snake.webp',
    tags: ['react', 'nextjs', 'scss', 'typescript'],
    description: 'A cool web-based snake app!',
  },
  {
    name: 'Stocked',
    link: '/projects/stocked',
    preview: '/project-preview-imgs/snake.webp',
    tags: ['react', 'nextjs', 'scss', 'typescript', 'docker', 'oak', 'mongodb', 'figma', 'deno'],
    description: 'Stock tracking frontend/backend application',
  },
];

export default function Projects() {
  return (
    <Portfolio>
      <Nav />
      <div className={style.page}>
        <div className={style.head}>
          <h2>Projects</h2>
          <p>
            Here are some of the projects that I&apos;ve created, Use the filter functionality below to find projects that suite what you&apos;re looking for.
            If you aren&apos;t sure, remove all filters to filter by coolest to least-cool.
          </p>
        </div>

        <input type="text" className={style.searchbar} placeholder="Search projects..." />
        <Filters />
        <Grid />
      </div>
    </Portfolio>
  );
}

function Grid() {
  return (
    <div className={style.grid}>
      {projects.map((project) => (
        <div className={style.card} key={project.name}>
          <div className={style.content}>
            <p className={style.projectName}>{project.name}</p>
            <p className={style.projectDescription}>{project.description}</p>
            <p className={style.projectTagsMessage}>Tags:</p>
            <ul className={style.projectTags}>
              {project.tags.map((tag) => (
                <li className={style.projectTag} key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image layout="intrinsic" width={240} height={240} src={project.preview} alt={project.name} />
        </div>
      ))}
    </div>
  );
}

function Filters() {
  return (
    <form className={style.filters}>
      <Filter>deno</Filter>
      <Filter>typescript</Filter>
      <Filter>javascript</Filter>
      <Filter>docker</Filter>
      <Filter>heroku</Filter>
      <Filter>react</Filter>
      <Filter>nextjs</Filter>
      <Filter>nodejs</Filter>
      <Filter>scss</Filter>
      <Filter>css</Filter>
      <Filter>html</Filter>
      <Filter>netlify</Filter>
      <Filter>lwc</Filter>
      <Filter>oak</Filter>
      <Filter>angular</Filter>
      <Filter>vite</Filter>
      <Filter>figma</Filter>
      <Filter>mongodb</Filter>
      <Filter>vercel</Filter>
      <Filter>cli</Filter>
    </form>
  );
}

function Filter({ children: filter }: { children: string }) {
  return (
    <div className={style.filter}>
      <input type="checkbox" name={filter} id={filter} className={style.filterCheckbox} />
      <label htmlFor={filter}>{filter}</label>
    </div>
  );
}
