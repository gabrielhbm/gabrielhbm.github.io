import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../styles/contact.css'; // Import the CSS file for styling

const Contact = () => {
  const { t } = useTranslation();
  useDocumentTitle(t('contact'));

  return (
    <div className="contact-container">
      <h1>{t('contact')}</h1>
      <p className='pageDescription'>{t('contactDesc').toLocaleUpperCase()}</p>
      <div className="contact-methods">
        <a href="mailto:gabrielhoudryboheme@gmail.com" className="contact-method">
          <FaEnvelope className="contact-icon" />
          <div className="contact-info">
            <p className="contact-name">{t('email')}</p>
            <p className='contact-link'>gabrielhoudryboheme@gmail.com</p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/gabrielhoudryboheme/" target="_blank" rel="noopener noreferrer" className="contact-method">
          <FaLinkedin className="contact-icon" />
          <div className="contact-info">
            <p className="contact-name">LinkedIn</p>
            <p className='contact-link'>linkedin.com/in/gabrielhoudryboheme/</p>
          </div>
        </a>
        <a href="https://github.com/gabrielhbm" target="_blank" rel="noopener noreferrer" className="contact-method">
          <FaGithub className="contact-icon" />
          <div className="contact-info">
            <p className="contact-name">GitHub</p>
            <p className='contact-link'>github.com/gabrielhbm</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;