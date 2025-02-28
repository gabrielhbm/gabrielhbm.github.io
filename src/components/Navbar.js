import { useState } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaHome, FaInfoCircle, FaProjectDiagram, FaPlane, FaEnvelope, FaBars } from 'react-icons/fa';
import '../styles/navbar.css';

const Navbar = () => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: 'home', label: t('home'), icon: <FaHome /> },
    { path: 'projects', label: t('projects'), icon: <FaProjectDiagram /> },
    { path: 'travels', label: t('travels'), icon: <FaPlane /> },
    { path: 'music', label: t('music'), icon: <FaInfoCircle /> },
    { path: 'contact', label: t('contact'), icon: <FaEnvelope /> },
  ];

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    navigate(`/${newLang}/home`);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo-container" onClick={() => navigate(`/${lang}/home`)}>
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="logo" />
        </div>
        <p className="logo-text">GHB</p>
        <div className="navbar-content">
          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            {navItems.map(({ path, label, icon }) => (
              <NavLink
                key={path}
                to={`/${lang}/${path}`}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setIsOpen(false)} // Close the navbar when a link is clicked
              >
                {label.toLocaleUpperCase()}
              </NavLink>
            ))}
          </div>
          <div className="language-switcher">
            <select value={lang} onChange={handleLanguageChange}>
              <option value="en">EN</option>
              <option value="jp">JP</option>
            </select>
          </div>
          <button className="hamburger" onClick={toggleNavbar}>
            <FaBars />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;