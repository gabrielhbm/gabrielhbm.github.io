import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Project from '../components/Project';
const Projects = () => {
  const { t } = useTranslation();

  const projectData = [
    { id: 1, name: t('thisWebsite'), description: [t('projectWebsiteDescOne'), t('projectWebsiteDescTwo')], skills: ['html5', 'css3', 'javascript', 'nodejs', 'react', 'github', 'figma'], date: '2025', img: 'img/thisWebsite.png' },
    { id: 2, name: t('cybersicknessResearch'), description: [t('cybersicknessResearchDescOne'), t('cybersicknessResearchDescTwo')], skills: ['csharp', 'unity', 'androidstudio', 'java'], date: '2024', img: 'img/cybersickness.png' },
    { id: 3, name: 'Project Three', description: [t('projectWebsiteDescOne')], skills: ['react', 'nodejs', 'mongodb'], date: '2021', img: 'x.png' },
    { id: 4, name: 'Project Four', description: [t('projectWebsiteDescOne')], skills: ['react', 'nodejs', 'mongodb'], date: '2021', img: 'x.png' },
    { id: 5, name: 'Project Five', description: [t('projectWebsiteDescOne')], skills: ['react', 'nodejs', 'mongodb'], date: '2021', img: 'x.png' }, 

  ];

  useDocumentTitle(t('projects'));
  return (
    <div>
      <h1>{t('projects')}</h1>
      <div className="pageDesc">
        <p className='pageDescription'>{t('projectsDesc').toLocaleUpperCase()}</p>
        <p className='pageDescription'>{t('projectsDescTwo').toLocaleUpperCase()}</p>
      </div>
      <div className="projects">
        {projectData.map(project => (
          <Project key={project.id} img={project.img} name={project.name} date={project.date} skills={project.skills} description={project.description} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
