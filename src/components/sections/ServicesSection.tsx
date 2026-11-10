import { memo } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_SCROLL_KEY } from "@/lib/utils";

const services = [
  { title: "Backend Development", description: "Backend application logic, REST APIs, database integration, and maintainable services.", path: "/services/backend-development" },
  { title: "Go Development", description: "Go services and APIs with clear structure, practical testing, and reliable data access.", path: "/services/go-development" },
  { title: "Python APIs", description: "Python API development with FastAPI, validation, documentation, and integrations.", path: "/services/python-apis" },
  { title: "DevOps & Deployment", description: "Containerisation, CI workflows, deployment configuration, and operational basics.", path: "/services/devops" },
];

const ServicesSection = memo(() => (
  <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 relative z-10" style={{ scrollMarginTop: "5rem" }}>
    <div className="max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="section-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-dev font-light mb-6 text-center">Services</h2>
        <p className="text-muted-foreground font-dev text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">Explore the areas I work with, from backend application development to APIs and deployment workflows.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {services.map((service) => (
          <Link
            key={service.path}
            to={service.path}
            onClick={() => {
              sessionStorage.setItem(PORTFOLIO_SCROLL_KEY, String(window.scrollY));
            }}
            className="service-card group border border-border/70 bg-card/60 rounded-xl p-6 sm:p-8"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="service-card__title text-xl sm:text-2xl font-dev font-medium">{service.title}</h3>
              <ArrowUpRight className="service-card__arrow shrink-0 text-muted-foreground" size={20} />
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
));

ServicesSection.displayName = "ServicesSection";
export { ServicesSection };
