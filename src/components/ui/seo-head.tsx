import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
}

export const SEOHead = ({
  title = "Neevets Portfolio",
  description = "Hi, I'm Neevets, a fullstack developer from Honduras. Explore my projects and work."
}: SEOHeadProps) => {
  const url = "https://neevets.website";
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};
