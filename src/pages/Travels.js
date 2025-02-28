import { use } from 'react';
import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Travels = () => {
  const { t } = useTranslation();
  useDocumentTitle(t('travels'));
  return <h1>{t('travels')}</h1>;
};

export default Travels;
