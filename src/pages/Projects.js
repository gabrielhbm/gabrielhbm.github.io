import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Project from '../components/Project';

const projectData = [
  { id: 1, name: 'THIS WEBSITE', description: 'Description for project one', skills: ['html5', 'css3', 'javascript', 'nodejs', 'react', 'github', 'figma'], date: '2025', img: 'x.png' },
  { id: 2, name: 'Project Two', description: 'Description for project two', skills: ['react', 'typescript', 'mongodb'], date: '2021', img: 'x.png' },
  { id: 3, name: 'Project Three', description: 'Description for project three', skills: ['react', 'nodejs', 'mongodb'], date: '2021', img: 'x.png' },

];

const Projects = () => {
  const { t } = useTranslation();
  useDocumentTitle(t('projects'));
  return (
    <div>
      <h1>{t('projects')}</h1>
      <div className="projects">
        {projectData.map(project => (
          <Project key={project.id} img={project.img} name={project.name} date={project.date} skills={project.skills} description={project.description} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
