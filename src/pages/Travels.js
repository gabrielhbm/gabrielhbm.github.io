import { useTranslation } from 'react-i18next';

const Travels = () => {
  const { t } = useTranslation();
  return <h1>{t('travels')}</h1>;
};

export default Travels;
