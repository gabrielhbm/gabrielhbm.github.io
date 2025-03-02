import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Project from '../components/Project';

const projectData = [
  { id: 1, name: 'Project One', description: 'Description for project one' },
  { id: 2, name: 'Project Two', description: 'Description for project two' },
  { id: 3, name: 'Project Three', description: 'Description for project three' },
  { id: 4, name: 'Project Four', description: 'Description for project four' },
  { id: 5, name: 'Project Five', description: 'Description for project five' },
];

const Projects = () => {
  const { t } = useTranslation();
  useDocumentTitle(t('projects'));
  return (
    <div>
      <h1>{t('projects')}</h1>
      <div className="projects">
        {projectData.map(project => (
          <Project key={project.id} name={project.name} description={project.description} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
