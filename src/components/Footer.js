import React from 'react';
import { useState } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


import '../styles/footer.css';

const Footer = () => {
    const { lang } = useParams();
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
      const navItems = [
        { path: 'home', label: t('home')},
        { path: 'projects', label: t('projects')},
        { path: 'travels', label: t('travels')},
        { path: 'music', label: t('music')},
        { path: 'contact', label: t('contact')},
      ];
  return (
    <footer className="footer">
        <div className="footer_divs">

            <div className="footer_one footer_div">
            </div>

            <div className="footer_three footer_div">
              <p className='footer-title'>{t('links')}</p>
               {navItems.map(({ path, label }) => (
              <NavLink
              key={path}
              to={`/${lang}/${path}`}
              className='footer-links'
              onClick={() => setIsOpen(false)}
            >
              {label}
            </NavLink>
               ))} 
            </div>
        </div>
      <p className='footer-txt'>&copy; {new Date().getFullYear()} {t('rights')}</p>
    </footer>
  );
};

export default Footer;