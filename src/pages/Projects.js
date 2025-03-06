import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Project from '../components/Project';
const Projects = () => {
  const { t } = useTranslation();

  const projectData = [
    { id: 1, name: t('thisWebsite'), description: [t('projectWebsiteDescOne'), t('projectWebsiteDescTwo')], skills: ['html5', 'css3', 'javascript', 'nodejs', 'react', 'github', 'figma', 'photoshop'], date: '2025', img: 'img/thisWebsite.png' },
    { id: 2, name: t('cybersicknessResearch'), description: [t('cybersicknessResearchDescOne'), t('cybersicknessResearchDescTwo')], skills: ['csharp', 'unity', 'androidstudio', 'java'], date: '2024', img: 'img/cybersickness.png' },
    { id: 3, name: t('frenchElectionsProject'), description: [t('frenchElectionsDescOne'), t('frenchElectionsDescTwo')], skills: ['r', 'rstudio'], date: '2024', img: 'img/frenchelections.png' },
    { id: 4, name: t('travelManagerProject'), description: [t('travelManagerDescOne'), t('travelManagerDescTwo')], skills: ['java', 'androidstudio', 'kotlin', 'sqlite', 'azuresqldatabase', 'figma'], date: '2024', img: 'img/travelmanager.png' },
    { id: 5, name: t('blissmapProject'), description: [t('blissmapDescOne'), t('blissmapDescTwo')], skills: ['java', 'spring'], date: '2023', img: 'img/blissmap.png' },
    { id: 6, name: t('cresticInternship'), description: [t('cresticDescOne'), t('cresticDescTwo'), t('cresticDescThree')], skills: ['javascript', 'html5', 'css3', 'nodejs', 'amazonwebservices', 'threejs', 'blender', 'photoshop'], date: '2023', img: 'img/cresticApp.png' },
    { id: 7, name: t('vignupProject'), description: [t('vignupDescOne'), t('vignupDescTwo')], skills: ['php', 'javascript', 'symfony', 'html5', 'css3', 'figma'], date: '2022-2023', img: 'img/vignup.png' }, 
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
