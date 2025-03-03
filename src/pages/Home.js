import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hooks/useDocumentTitle';
import '../styles/home.css';
import { FaEnvelope } from 'react-icons/fa';
import { NavLink, useParams } from 'react-router-dom';



const Home = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  useDocumentTitle(t('home'));

  return (
    <div>
      <h1>{t('home')}</h1>
      <div className="intro-container">
        <div className="intro-left">
          <p className="section-title">{t('welcome').toLocaleUpperCase()}</p>
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
      </div>
    </div>
  );
};

export default Home;