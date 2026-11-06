import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
}

const SITE_URL = "https://neevets.com";

export const SEOHead = ({
  title = "Neevets | Backend Developer, Go & Python",
  description = "Neevets is a backend developer focused on Go, Python APIs, systems programming, and reliable software infrastructure.",
  path = "/",
  type = "website",
}: SEOHeadProps) => {
  const canonicalUrl = new URL(path, SITE_URL).toString();
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
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Neevets" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};