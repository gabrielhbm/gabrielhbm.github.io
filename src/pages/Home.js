import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hooks/useDocumentTitle';
import '../styles/home.css';
import { FaEnvelope } from 'react-icons/fa';
import { NavLink, useParams } from 'react-router-dom';
import Skill from '../components/Skill';




const Home = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  useDocumentTitle(t('home'));
  const skills = {
    languages: [
      { icon: 'javascript', name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { icon: 'python', name: 'Python', link: 'https://www.python.org/' },
      { icon: 'r', name: 'R', link: 'https://www.r-project.org/' },
      { icon: 'php', name: 'PHP', link: 'https://www.php.net/' },
      { icon: 'html5', name: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { icon: 'css3', name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { icon: 'azuresqldatabase', name: 'SQL', link: 'https://www.w3schools.com/sql/' },
      { icon: 'azuresqldatabase', name: 'PL/SQL', link: 'https://www.oracle.com/database/technologies/appdev/plsql.html' },
      { icon: 'csharp', name: 'C#', link: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
      { icon: 'java', name: 'Java', link: 'https://www.oracle.com/java/' }
    ],
    databases: [
      { icon: 'mysql', name: 'MySQL', link: 'https://www.mysql.com/' },
      { icon: 'oracle', name: 'Oracle', link: 'https://www.oracle.com/database/' },
      { icon: 'sqlite', name: 'SQLite', link: 'https://www.sqlite.org/index.html' }
    ],
    frameworks: [
      { icon: 'react', name: 'React', link: 'https://reactjs.org/' },
      { icon: 'flask', name: 'Flask', link: 'https://flask.palletsprojects.com/' },
      { icon: 'spring', name: 'Spring', link: 'https://spring.io/' },
      { icon: 'bootstrap', name: 'Bootstrap', link: 'https://getbootstrap.com/' },
      { icon: 'symfony', name: 'Symfony', link: 'https://symfony.com/' },
      { icon: 'vuejs', name: 'Vue.js', link: 'https://vuejs.org/' },
      
    ],
    tools: [
      { icon: 'git', name: 'Git', link: 'https://git-scm.com/' },
      { icon: 'github', name: 'GitHub', link: 'https://github.com/' },
      { icon: 'gitlab', name: 'GitLab', link: 'https://gitlab.com/' },
      { icon: 'docker', name: 'Docker', link: 'https://www.docker.com/' },
      { icon: 'nodejs', name: 'Node.js', link: 'https://nodejs.org/' },
      { icon: 'vscode', name: 'VS Code', link: 'https://code.visualstudio.com/' },
      { icon: 'visualstudio', name: 'Visual Studio', link: 'https://visualstudio.microsoft.com/' },
      { icon: 'androidstudio', name: 'Android Studio', link: 'https://developer.android.com/studio' },
      { icon: 'intellij', name: 'IntelliJ IDEA', link: 'https://www.jetbrains.com/idea/' },
      { icon: 'rstudio', name: 'RStudio', link: 'https://www.rstudio.com/' },
      { icon: 'figma', name: 'Figma', link: 'https://www.figma.com/' },
      { icon: 'trello', name: 'Trello', link: 'https://trello.com/' },
      { icon: 'jira', name: 'Jira', link: 'https://www.atlassian.com/software/jira' }
    ]
  };
  return (
    <div>
      <h1>{t('home')}</h1>
      <div className="intro-container">
        <div className="intro-left">
          <p className="section-title welcome">{t('welcome').toLocaleUpperCase()}</p>
          <p className="section-txt cool-text">
            <p>{t('welcomeTextOne')}</p>
            <p>{t('welcomeTextTwo')}</p>
            <p>{t('welcomeTextThree')}</p>
            <p>{t('welcomeTextFour')}</p>
          </p>
        </div>
        <div className="intro-right">
          <div className="image-container">
            <img src={`${process.env.PUBLIC_URL}/ghb.png`} alt="logo" className="static-image" />
            <img src={`${process.env.PUBLIC_URL}/ghb.gif`} alt="logo" className="gif-image" />
          </div>
        </div>
      </div>
      <div className="about-container">
        <div className="about-left">
          <p className="section-title">{t('aboutMe').toLocaleUpperCase()}</p>
          <p className="section-txt cool-text">
            <p>{t('aboutMeOne')}</p>
            <p>{t('aboutMeTwo')}</p>
            <p>{t('aboutMeThree')}</p>
          </p>
          <NavLink to={`/${lang}/contact`} className='contactButton'>
            <FaEnvelope className='contact-icon' />
            <p className='contact-title'>{t('contactMe')}</p>
          </NavLink>
        </div>
          <div className='history'>
            <div className='timeline'>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
              <circle cx="5" cy="5" r="5"></circle>
              </svg>
              <div class="line"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                  <circle cx="5" cy="5" r="5"></circle>
              </svg>
              <div class="line"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
              <circle cx="5" cy="5" r="5"></circle>
              </svg>
              <div class="line"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                  <circle cx="5" cy="5" r="5"></circle>
              </svg>
              <div class="line"></div>
            </div>
            <div className='history-list'>
              <div className='history-item'>
                <p className='year'>2024</p>
                <div className='history-txt cool-text'>
                  <p className='position'>{t('dim-uqac')}</p>
                  <p className='location'>{t('saguenay')}</p>
                  <p className='description'>{t('uqacInternshipDesc')}</p>
                  </div>
              </div>
              <div className='history-item'>
                <p className='year'>2023-2024</p>
                <div className='history-txt cool-text'>
                  <p className='position'>{t('uqac')}</p>
                  <p className='location'>{t('saguenay')}</p>
                  <p className='description degree'>{t('uqacDegree')}</p>
                  </div>
              </div>
              <div className='history-item'>
                <p className='year'>2023</p>
                <div className='history-txt cool-text'>
                  <p className='position'>{t('crestic')}</p>
                  <p className='location'>{t('reims')}</p>
                  <p className='description'>{t('cresticDesc')}</p>
                  </div>
              </div>
              <div className='history-item'>
                <p className='year'>2021-2024</p>
                <div className='history-txt cool-text'>
                  <p className='position'>{t('urca')}</p>
                  <p className='location'>{t('reims')}</p>
                  <p className='degree'>{t('butinfo')}</p>
                  <p className='description'>{t('butSpe')}</p>
                  </div>
              </div>
            </div>
        </div>
      </div>
      <div className="skills-container">
        <p className="section-title">{t('skills').toLocaleUpperCase()}</p>
        <p className="section-txt cool-text">{t('skillsDesc')}</p>
        <div className="skills-section">
          <p className="skills-title">{t('languages').toLocaleUpperCase()}</p>
          <div className="skills-section-list">
            {skills.languages.map((language, index) => (
              <Skill key={index} icon={language.icon+"-plain"} name={language.name.toLocaleUpperCase()} link={language.link} />
            ))}
          </div>
        </div>
        <div className="skills-section">
          <p className="skills-title">{t('databases').toLocaleUpperCase()}</p>
          <div className="skills-section-list">
            {skills.databases.map((database, index) => (
              <Skill key={index} icon={database.icon+"-plain"} name={database.name.toLocaleUpperCase()} link={database.link} />
            ))}
          </div>
        </div>
        <div className="skills-section">
          <p className="skills-title">{t('frameworks').toLocaleUpperCase()}</p>
          <div className="skills-section-list">
            {skills.frameworks.map((framework, index) => (
              <Skill key={index} icon={framework.icon+"-plain"} name={framework.name.toLocaleUpperCase()} link={framework.link} />
            ))}
            <Skill icon="threejs-original" name="THREE.JS" link="https://threejs.org/" />
          </div>
        </div>
        <div className="skills-section">
          <p className="skills-title">{t('tools').toLocaleUpperCase()}</p>
          <div className="skills-section-list">
            {skills.tools.map((tool, index) => (
              <Skill key={index} icon={tool.icon+"-plain"} name={tool.name.toLocaleUpperCase()} link={tool.link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;