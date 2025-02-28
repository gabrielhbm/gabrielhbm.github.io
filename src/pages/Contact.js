import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Contact = () => {
  const { t } = useTranslation();
  useDocumentTitle(t('contact'));
  return <h1>{t('contact')}</h1>;
};

export default Contact;
