import './i18n';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';
import FixedLogo from './components/FixedLogo';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Music from './pages/Music';
import Projects from './pages/Projects';
import Travels from './pages/Travels';
import Contact from './pages/Contact';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const browserLang = i18n.language || 'en';
    if (!['en', 'jp', 'fr'].includes(browserLang)) {
      i18n.changeLanguage('en');
    }
  }, [i18n]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={`/${i18n.language}/home`} />} />
        <Route
          path="/:lang/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="home" element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="travels" element={<Travels />} />
                <Route path="music" element={<Music />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<Navigate to={`/${i18n.language}/home`} />} />
              </Routes>
              <Footer/>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
