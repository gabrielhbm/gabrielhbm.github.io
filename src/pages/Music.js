import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Music = () => {
  const { t } = useTranslation();
  useDocumentTitle(t('music'));

  return (
    <div>
      <h1>{t('music')}</h1>
    </div>
  );
};

export default Music;
