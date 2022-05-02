import style from '../style/projects.module.scss';
import type { Project } from '~/types';
import { Link } from '~/components/link/link.component';

/* eslint-disable-next-line no-undef */
export const Card: React.FC<{ children: Project }> = ({ children: project }) => (
  <Link href={`/projects/${project?.id}`} className={style.card} key={project?.name}>
    <span style={{ opacity: '0', pointerEvents: 'none', position: 'absolute' }}>{project.name}</span>
    <div className={style.content}>
      <div>
        <p className={style.projectName}>{project?.name}</p>
        <p className={style.projectDescription}>{project?.description}</p>
      </div>
      <div>
        <p className={style.projectTagsMessage}>Tags:</p>
        <ul className={style.projectTags}>
          {project?.tags.map(tag => (
            <li className={style.projectTag} key={Math.random() * Math.random()}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Link>
);
