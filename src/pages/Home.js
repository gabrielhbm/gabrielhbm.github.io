import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hooks/useDocumentTitle';
import '../styles/home.css';

const Home = () => {
  const { t } = useTranslation();
  useDocumentTitle(t('home'));

  return (
    <div>
      <h1>{t('home')}</h1>
      <div className="intro-container">
        <div className="intro-left">
          <p className="section-title">WELCOME</p>
          <p className="section-txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel arcu ultrices, sagittis tortor a, ornare risus. Mauris sit amet lacinia augue, vitae molestie augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam in nunc ut diam lacinia eleifend.
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
          <p className="section-title">ABOUT ME</p>
          <p className="section-txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel arcu ultrices, sagittis tortor a, ornare risus. Mauris sit amet lacinia augue, vitae molestie augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam in nunc ut diam lacinia eleifend.
          </p>
        </div>
        <div className='about-right'>
          <div className='timeline'></div>
        </div>
      </div>
    </div>
  );
};

export default Home;