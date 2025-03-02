import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    navigate(`/${lng}`);
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => changeLanguage('en')}>🇬🇧 English</button>
      <button onClick={() => changeLanguage('jp')}>🇯🇵 日本語</button>
      <button onClick={() => changeLanguage('fr')}>🇫🇷 Français</button>
    </div>
  );
};

export default LanguageSwitcher;
