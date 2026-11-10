import { useLayoutEffect } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { SEOHead } from "@/components/ui/seo-head";

const services = {
  "backend-development": {
    title: "Backend Development",
    heading: "Backend development for reliable applications",
    description:
      "Plan and build backend features, application services, and integrations with an emphasis on clear architecture, maintainability, and dependable behaviour.",
    details: [
      "Design and implementation of REST APIs and backend application logic.",
      "Database integration with PostgreSQL and Redis where they fit the use case.",
      "Authentication, validation, error handling, and integration between services.",
      "Readable code, documentation, and practical testing.",
    ],
    technologies: "Go, Python, Fiber, FastAPI, PostgreSQL, and Redis",
  },
  "go-development": {
    title: "Go Development",
    heading: "Go development for backend services",
    description:
      "Build backend services and command-line tools with Go, choosing simple designs that are easy to understand, test, and maintain.",
    details: [
      "HTTP services and REST API development.",
      "Concurrent workloads and background processing where appropriate.",
      "Database access, caching, and external service integrations.",
      "Testing, configuration, logging, and deployment preparation.",
    ],
    technologies: "Go, Fiber, PostgreSQL, Redis, Docker, and Git",
  },
  "python-apis": {
    title: "Python API Development",
    heading: "Python APIs with FastAPI",
    description:
      "Create structured API backends in Python, with clear request and response models, validation, and maintainable application organisation.",
    details: [
      "REST API endpoints and application logic.",
      "Request validation and consistent error responses.",
      "Database and third-party service integrations.",
      "API documentation and automated tests.",
    ],
    technologies: "Python, FastAPI, PostgreSQL, Redis, and Docker",
  },
  devops: {
    title: "DevOps & Deployment",
    heading: "Practical deployment and infrastructure workflows",
    description:
      "Improve the path from source code to a running application with reproducible builds, containerisation, and straightforward deployment workflows.",
    details: [
      "Dockerfiles and container-based development environments.",
      "CI workflows for linting, testing, and production builds.",
      "Deployment configuration and environment management.",
      "Basic observability, logs, and operational documentation.",
    ],
    technologies: "Docker, GitHub Actions, Linux, Cloudflare, and Vercel",
  },
} as const;

const PageBackLink = () => (
  <Link
    to="/"
    className="-mt-2 mb-14 inline-flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground"
  >
    <ArrowLeft size={16} />
    Back to portfolio
  </Link>
);

const ServicePage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: keyof typeof services }>();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [serviceSlug]);

  const service = serviceSlug ? services[serviceSlug] : undefined;

  if (!service) {
    return (
      <main className="grid min-h-screen place-items-center bg-background px-6 text-foreground">
        <div>
          <h1 className="mb-4 text-3xl font-dev">Service not found</h1>
          <Link className="underline" to="/">
            Return to Neevets
          </Link>
        </div>
      </main>
    );
  }

  const path = `/services/${serviceSlug}`;

  return (
    <>
      <SEOHead
        title={`Neevets: ${service.title}`}
        description={service.description}
        path={path}
      />
      <main className="min-h-screen bg-background px-6 py-20 text-foreground sm:py-28">
        <article className="mx-auto max-w-4xl">
          <PageBackLink />
          <h1 className="mb-8 text-4xl font-dev font-light leading-tight sm:text-6xl">
            {service.heading}
          </h1>
          <p className="mb-14 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {service.description}
          </p>

          <section className="border-t border-border py-10">
            <h2 className="mb-6 text-2xl font-dev">What this can include</h2>
            <ul className="list-disc space-y-4 pl-6 leading-relaxed text-muted-foreground">
              {service.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </section>

          <section className="border-t border-border py-10">
            <h2 className="mb-4 text-2xl font-dev">Technologies</h2>
            <p className="leading-relaxed text-muted-foreground">
              {service.technologies}
            </p>
          </section>

          <section className="border-t border-border py-10">
            <h2 className="mb-4 text-2xl font-dev">Discuss a project</h2>
            <p className="mb-6 text-muted-foreground">
              Share the problem you are trying to solve and the requirements you already know.
            </p>
            <a
              href="mailto:contact@neevets.com"
              className="group inline-flex items-center gap-2 rounded-xl bg-foreground px-6 py-3 font-medium text-background transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Get in touch
              <ArrowUpRight
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                size={16}
              />
            </a>
          </section>

          <nav
            aria-label="Other services"
            className="border-t border-border pt-8"
          >
            <h2 className="mb-4 text-lg font-dev">Explore other services</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
              {Object.entries(services)
                .filter(([slug]) => slug !== serviceSlug)
                .map(([slug, item]) => (
                  <Link
                    key={slug}
                    className="py-2 underline underline-offset-4 hover:text-foreground"
                    to={`/services/${slug}`}
                  >
                    {item.title}
                  </Link>
                ))}
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
      description="Explore Drew, a multipurpose Discord bot built with Go, Fiber, PostgreSQL, and Redis."
      path="/projects/drew"
    />
    <main className="min-h-screen bg-background px-6 py-20 text-foreground sm:py-28">
      <article className="mx-auto max-w-4xl">
        <PageBackLink />
        <p className="mb-5 text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Neevets / Projects
        </p>
        <h1 className="mb-8 text-4xl font-dev font-light leading-tight sm:text-6xl">
          Drew Bot
        </h1>
        <p className="mb-12 text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Drew is a multipurpose Discord bot written in Go. It combines a Go backend with Fiber, PostgreSQL, and Redis to support bot features and persistent application data.
        </p>

        <section className="border-t border-border py-10">
          <h2 className="mb-5 text-2xl font-dev">Technology stack</h2>
          <p className="leading-relaxed text-muted-foreground">
            Go, Fiber, PostgreSQL, and Redis.
          </p>
        </section>

        <section className="border-t border-border py-10">
          <h2 className="mb-5 text-2xl font-dev">Project links</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-4 text-muted-foreground">
            <a
              href="https://drewbot.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-2 underline underline-offset-4 hover:text-foreground"
            >
              Visit Drew website
              <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
      </article>
    </main>
  </>
);

export { ServicePage, DrewProjectPage };
