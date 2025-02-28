import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Projects = () => {
  const { t } = useTranslation();
  useDocumentTitle(t('projects'));
  return <h1>{t('projects')}</h1>;
};

export default Projects;
