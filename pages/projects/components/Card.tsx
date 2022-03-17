import style from '~/style/components/Projects.module.scss';
import Image from 'next/image';
import type { Project } from '~/types';
import { Link } from '~/components';
import { useMediaQuery } from 'usehooks-ts';

export function Card({ children: project }: { children: Project }) {
  const matches = useMediaQuery('(min-width: calc(700em / 16))');

  return (
    <Link href={project.link} className={style.card} key={project.name}>
      <div className={style.content}>
        <div>
          <p className={style.projectName}>{project.name}</p>
          <p className={style.projectDescription}>{project.description}</p>
        </div>
        <div>
          <p className={style.projectTagsMessage}>Tags:</p>
          <ul className={style.projectTags}>
            {project.tags.map((tag) => (
              <li className={style.projectTag} key={Math.random() * Math.random()}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <>
        {matches && (
          <div>
            <Image layout="fixed" width={240} height={240} src={project.preview} alt={project.name} />
          </div>
        )}
      </>
      <>
        {!matches && (
          <div>
            <Image layout="responsive" width={2400} height={2400} src={project.preview} alt={project.name} />
          </div>
        )}
      </>
    </Link>
  );
}

export { default } from 'X';
