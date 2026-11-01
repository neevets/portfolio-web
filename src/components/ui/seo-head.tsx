import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
}

const SITE_URL = "https://neevets.com/";
const SOCIAL_IMAGE = "https://neevets.com/og-image.png";

export const SEOHead = ({
  title = "Neevets | Backend Developer & Systems Programming",
  description = "Neevets is a backend developer focused on systems programming and building reliable software with Go, Python, and modern infrastructure.",
}: SEOHeadProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Neevets",
    url: SITE_URL,
    jobTitle: "Backend Developer",
    description,
    sameAs: [
      "https://github.com/neevets",
      "https://www.linkedin.com/in/neevets",
    ],
    knowsAbout: [
      "Backend development",
      "Systems programming",
      "Go",
      "Python",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Neevets" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Neevets" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:image" content={SOCIAL_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Neevets. Backend development and systems programming." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={SOCIAL_IMAGE} />
      <link rel="canonical" href={SITE_URL} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};
