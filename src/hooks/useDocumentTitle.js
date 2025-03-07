import { useEffect } from 'react';

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | GHB`;
  }, [title]);
};

export default useDocumentTitle;