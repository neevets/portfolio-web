import { useLayoutEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SEOHead } from "@/components/ui/seo-head";

const services = {
  "backend-development": {
    title: "Backend Development",
    heading: "Backend development for reliable applications",
    description: "Plan and build backend features, application services, and integrations with an emphasis on clear architecture, maintainability, and dependable behaviour.",
    details: [
      "Design and implementation of REST APIs and backend application logic.",
      "Database integration with PostgreSQL and Redis where they fit the use case.",
      "Authentication, validation, error handling, and integration between services.",
      "Readable code, documentation, and practical testing."
    ],
    technologies: "Go, Python, Fiber, FastAPI, PostgreSQL, and Redis"
  },
  "go-development": {
    title: "Go Development",
    heading: "Go development for backend services",
    description: "Build backend services and command-line tools with Go, choosing simple designs that are easy to understand, test, and maintain.",
    details: [
      "HTTP services and REST API development.",
      "Concurrent workloads and background processing where appropriate.",
      "Database access, caching, and external service integrations.",
      "Testing, configuration, logging, and deployment preparation."
    ],
    technologies: "Go, Fiber, PostgreSQL, Redis, Docker, and Git"
  },
  "python-apis": {
    title: "Python API Development",
    heading: "Python APIs with FastAPI",
    description: "Create structured API backends in Python, with clear request and response models, validation, and maintainable application organisation.",
    details: [
      "REST API endpoints and application logic.",
      "Request validation and consistent error responses.",
      "Database and third-party service integrations.",
      "API documentation and automated tests."
    ],
    technologies: "Python, FastAPI, PostgreSQL, Redis, and Docker"
  },
  "devops": {
    title: "DevOps & Deployment",
    heading: "Practical deployment and infrastructure workflows",
    description: "Improve the path from source code to a running application with reproducible builds, containerisation, and straightforward deployment workflows.",
    details: [
      "Dockerfiles and container-based development environments.",
      "CI workflows for linting, testing, and production builds.",
      "Deployment configuration and environment management.",
      "Basic observability, logs, and operational documentation."
    ],
    technologies: "Docker, GitHub Actions, Linux, Cloudflare, and Vercel"
  }
} as const;

const ServicePage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: keyof typeof services }>();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [serviceSlug]);

  const service = serviceSlug ? services[serviceSlug] : undefined;

  if (!service) {
    return <main className="min-h-screen bg-background text-foreground grid place-items-center px-6"><div><h1 className="text-3xl font-dev mb-4">Service not found</h1><Link className="underline" to="/">Return to Neevets</Link></div></main>;
  }

  const path = `/services/${serviceSlug}`;
  const description = service.description;

  return (
    <>
      <SEOHead title={`Neevets: ${service.title}`} description={description} path={path} />
      <main className="min-h-screen bg-background text-foreground px-6 py-20 sm:py-28">
        <article className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-16"><ArrowLeft size={16} /> Back to portfolio</Link>
          <h1 className="text-4xl sm:text-6xl font-dev font-light leading-tight mb-8">{service.heading}</h1>
          <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-3xl mb-14">{service.description}</p>
          <section className="border-t border-border py-10">
            <h2 className="text-2xl font-dev mb-6">What this can include</h2>
            <ul className="space-y-4 text-muted-foreground leading-relaxed list-disc pl-6">
              {service.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
          </section>
          <section className="border-t border-border py-10">
            <h2 className="text-2xl font-dev mb-4">Technologies</h2>
            <p className="text-muted-foreground leading-relaxed">{service.technologies}</p>
          </section>
          <section className="border-t border-border py-10">
            <h2 className="text-2xl font-dev mb-4">Discuss a project</h2>
            <p className="text-muted-foreground mb-6">Share the problem you are trying to solve and the requirements you already know.</p>
            <a href="mailto:contact@neevets.com" className="group inline-flex items-center gap-2 rounded-xl bg-foreground text-background px-6 py-3 font-medium transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">Get in touch <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={16} /></a>
          </section>
          <nav aria-label="Other services" className="border-t border-border pt-8">
            <h2 className="text-lg font-dev mb-4">Explore other services</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              {Object.entries(services).filter(([slug]) => slug !== serviceSlug).map(([slug, item]) => <Link key={slug} className="hover:text-foreground underline underline-offset-4" to={`/services/${slug}`}>{item.title}</Link>)}
            </div>
          </nav>
        </article>
      </main>
    </>
  );
};

const DrewProjectPage = () => (
  <>
    <SEOHead
      title="Neevets: Drew Bot | Go Discord Bot Project"
      description="Explore Drew, an open-source multipurpose Discord bot built with Go, Fiber, PostgreSQL, and Redis."
      path="/projects/drew"
    />
    <main className="min-h-screen bg-background text-foreground px-6 py-20 sm:py-28">
      <article className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-16"><ArrowLeft size={16} /> Back to portfolio</Link>
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-5">Neevets / Projects</p>
        <h1 className="text-4xl sm:text-6xl font-dev font-light leading-tight mb-8">Drew Bot</h1>
        <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground mb-12">Drew is an open-source multipurpose Discord bot written in Go. The project combines a Go backend with Fiber, PostgreSQL, and Redis to support bot features and persistent application data.</p>
        <section className="border-t border-border py-10">
          <h2 className="text-2xl font-dev mb-5">Technology stack</h2>
          <p className="text-muted-foreground leading-relaxed">Go, Fiber, PostgreSQL, and Redis.</p>
        </section>
        <section className="border-t border-border py-10">
          <h2 className="text-2xl font-dev mb-5">Project links</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-4 text-muted-foreground">
            <a href="https://drewbot.xyz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 underline underline-offset-4 hover:text-foreground">Visit Drew website <ArrowUpRight size={16} /></a>
            <a href="https://github.com/neevets/drew" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 underline underline-offset-4 hover:text-foreground">Explore source code on GitHub <ArrowUpRight size={16} /></a>
          </div>
        </section>
      </article>
    </main>
  </>
);

export { ServicePage, DrewProjectPage };
