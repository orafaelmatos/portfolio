import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import autooperaLogo from "@/assets/autoopera-logo.jpeg";

const projects = [
  {
    id: 0,
    title: "AutoOpera - Barber Management",
    description:
      "Comprehensive online scheduling and management platform for barbershops. Features an intuitive booking system for clients and real-time financial/calendar management for barbers.",
    image: autooperaLogo,
    tech: ["React", "TypeScript", "Tailwind", "Python", "FastAPI", "PostgreSQL"],
    github: "https://github.com/orafaelmatos",
    deploy: "https://autoopera.com.br",
    featured: true
  },
  {
    id: 1,
    title: "Nexus-PDM",
    description:
      "Enterprise-grade PDM (Product Data Management) solution developed as a SolidWorks plugin. It streamlines CAD workflows, manages version control, and integrates engineering data directly within the 3D design environment using C# and .NET.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
    tech: ["C#", ".NET", "SolidWorks API", "WPF", "SQL Server", "Entity Framework"],
    github: "https://github.com/orafaelmatos/Nexus-PDM",
    deploy: "https://github.com/orafaelmatos/Nexus-PDM",
    featured: true
  },
  {
    id: 2,
    title: "URL Shortener & Analytics",
    description:
      "High-performance URL shortening API with built-in authentication. Allows users to manage links, customize slugs, and track detailed click statistics with real-time data.",
    image: "images/url-shortener.jpg",
    tech: ["Python", "FastAPI", "SQLAlchemy", "SQLite", "JWT", "Docker"],
    github: "https://github.com/orafaelmatos/url-shortener",
    deploy: "https://url-shortener-byxq.onrender.com/docs",
  },
  {
    id: 3,
    title: "Mini Crontab",
    description:
      "A lightweight task scheduling and execution platform. Combines the simplicity of traditional crontab with the scalability of modern asynchronous queue-based architectures.",
    image: "images/async-cron.jpg",
    tech: ["Python", "FastAPI", "RabbitMQ", "MongoDB", "Docker", "Croniter", "Httpx"],
    github: "https://github.com/orafaelmatos/async-cron",
    deploy: "https://url-shortener-byxq.onrender.com/docs",
  },
  {
    id: 4,
    title: "Education Platform Backend",
    description:
      "Advanced Django REST API for educational centers. Enables course management, material distribution, and live class coordination following SOLID principles and clean architecture.",
    image: "images/education-plataform.jpg",
    tech: ["Python", "Django", "DRF", "JWT", "PostgreSQL", "Docker", "Swagger/OpenAPI"],
    github: "https://github.com/orafaelmatos/learn-hub",
    deploy: "https://url-shortener-byxq.onrender.com/docs",
  },
  {
    id: 5,
    title: "Coinverter",
    description:
      "Real-time currency conversion tool powered by live exchange rate APIs. Provides a clean interface for worldwide currency trackings and instant calculations.",
    image: "images/coinverter.jpg",
    tech: ["Python", "FastAPI", "React", "JavaScript"],
    github: "https://github.com/orafaelmatos/coinverter",
    deploy: "https://coinverter-rafael-matos-projects.vercel.app/",
  },
  {
    id: 6,
    title: "Log Analytics Hub",
    description:
      "Centralized log management system for microservices. Features real-time ingestion, historical data visualization, and advanced filtering by service and severity.",
    image: "images/crm-system.jpg",
    tech: ["Python", "FastAPI", "Celery", "SQLAlchemy", "MongoDB", "React", "Typescript", "Shadcn-ui", "Docker"],
    github: "https://github.com/orafaelmatos/logs-analytics",
    deploy: "https://django-crm-f9tm.onrender.com",
  },
  {
    id: 7,
    title: "Inventory Manager",
    description:
      "Full-stack inventory control application designed to synchronize supply chain data with real-time sales and stock movement tracking.",
    image: "images/inventory-management.jpg",
    tech: ["Python", "Django", "DRF", "React", "Tailwind"],
    github: "https://github.com/orafaelmatos/inventory-manager",
    deploy: "https://inventory-manager-zeta-sooty.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-space font-bold text-5xl md:text-8xl mb-8 tracking-tighter uppercase">
              Selected <span className="text-primary italic">Works</span>
            </h2>
            <div className="w-20 h-1 bg-primary mb-8" />
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              Engineering solutions across the full stack. Focus on <span className="text-foreground">reliability</span>, performance, and clean architecture.
            </p>
          </div>
          <div className="hidden md:block opacity-20 text-xs tracking-[0.4em] font-bold uppercase">
            Product Archive // 24-26
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col gap-8 md:gap-12 transition-all duration-700 ${
                index % 2 === 0 ? "md:col-span-11" : "md:col-start-2 md:col-span-11"
              }`}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-10 md:gap-20 items-center`}>
                <div className="md:w-[60%] overflow-hidden group">
                  <div className="relative aspect-video">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-1000 z-10 mix-blend-color" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent z-10 opacity-60" />
                  </div>
                </div>

                <div className="md:w-[40%] space-y-8">
                  <div className="space-y-4">
                    <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">
                      PROJECT 0{index + 1}
                    </span>
                    <h3 className="font-space text-3xl md:text-5xl font-bold tracking-tight group-hover:text-primary transition-colors duration-500">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 py-4 border-y border-white/5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-10 pt-4">
                    <a 
                      href={project.deploy} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-foreground text-sm font-bold tracking-widest uppercase flex items-center gap-2 group/link"
                    >
                      Process & Live
                      <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground text-sm font-bold tracking-widest uppercase flex items-center gap-2 hover:text-foreground transition-colors"
                    >
                      Source
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
