import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  url?: string;
}

export const SEOHead = ({
  title = "Neevets - Welcome to my Portfolio",
  description = "Full-stack developer from Honduras. Specializing in TypeScript, Python, React and modern web development.",
  keywords = "Neevets, full stack developer, TypeScript, Python, React, web development, Honduras",
  author = "Neevets",
  url = "https://neevets.website"
}: SEOHeadProps) => {
  
  useEffect(() => {
    document.title = title;
    
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', 'website', true);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

  }, [title, description, keywords, author, url]);

  return null;
};
