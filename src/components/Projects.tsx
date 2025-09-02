import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Encurtador de URL",
    description:
      "API de encurtador de URL com autenticação, permitindo que os usuários gerenciem seus links, personalizem URLs encurtadas e visualizem estatísticas detalhadas para cada link.",
    image: "images/url-shortener.jpg",
    tech: ["Python", "FastAPI", "SQLAlchemy", "SQLite", "JWT", "Docker"],
    github: "https://github.com/orafaelmatos/url-shortener",
    deploy: "https://url-shortener-byxq.onrender.com/docs",
  },
  {
    id: 2,
    title: "Mini Crontab",
    description:
      "Uma plataforma leve de agendamento e execução de tarefas que combina a simplicidade do crontab com a escalabilidade de uma arquitetura assíncrona moderna baseada em filas.",
    image: "images/async-cron.jpg",
    tech: ["Python", "FastAPI", "RabbitMQ", "MongoDB", "Docker", "Croniter", "Httpx"],
    github: "https://github.com/orafaelmatos/async-cron",
    deploy: "https://url-shortener-byxq.onrender.com/docs",
  },
  {
    id: 3,
    title: "Backend plataforma de educação",
    description:
      "Um backend Django completo para uma plataforma educacional que permite aos professores gerenciar cursos, materiais e aulas ao vivo. O projeto segue os princípios SOLID e as melhores práticas de desenvolvimento modernas.",
    image: "images/education-plataform.jpg",
    tech: ["Python", "Django", "DRF", "JWT", "PostgreSQL", "Docker", "Swagger/OpenAPI"],
    github: "https://github.com/orafaelmatos/learn-hub",
    deploy: "https://url-shortener-byxq.onrender.com/docs",
  },
  {
    id: 4,
    title: "Conversor de Moedas",
    description:
      "Conversor de moedas com API de cotação de moedas, permitindo que os usuários visualizem as cotações em tempo real e realizem conversões entre diferentes moedas.",
    image: "images/coinverter.jpg",
    tech: ["Python", "FastAPI", "React", "JavaScript"],
    github: "https://github.com/orafaelmatos/coinverter",
    deploy: "https://coinverter-rafael-matos-projects.vercel.app/",
  },
  {
    id: 5,
    title: "Analisador de Logs",
    description:
      "Projeto para gerenciamento de logs: os usuários podem adicionar logs, visualizar o histórico, ver métricas e filtrar por serviço.",
    image: "images/crm-system.jpg",
    tech: ["Python", "FastAPI", "Celery", "SQLAlchemy", "MongoDB", "React", "Typescript", "Shadcn-ui", "Docker"],
    github: "https://github.com/orafaelmatos/logs-analytics",
    deploy: "https://django-crm-f9tm.onrender.com",
  },
  {
    id: 6,
    title: "Gerenciador de Estoque",
    description: "Uma forma de externalizar e aplicar meus conhecimentos por meio da implementação prática.",
    image: "images/inventory-management.jpg",
    tech: ["Python", "Django", "Django Rest Framework", "React", "Tailwind"],
    github: "https://github.com/orafaelmatos/inventory-manager",
    deploy: "https://inventory-manager-zeta-sooty.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-space font-bold text-4xl md:text-5xl mb-6">
            Meus <span className="bg-gradient-primary bg-clip-text text-transparent">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, demonstrando minhas habilidades em diferentes tecnologias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="font-space text-xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-primary"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Código
                    </a>
                  </Button>

                  {/* Botão Demo */}
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 border-accent/30 hover:border-accent hover:bg-accent/10 hover:text-accent"
                  >
                    {/* <a
                      href={project.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a> */}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
