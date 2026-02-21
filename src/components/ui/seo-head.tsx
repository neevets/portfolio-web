import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
}

export const SEOHead = ({
  title = "Neevets",
  description = "Portfolio de Neevets."
}: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
};
