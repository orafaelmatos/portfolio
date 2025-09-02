import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Palette,
  Zap
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Globe className="h-8 w-8" />,
    techs: ["React", "TypeScript", "Javascript", "Redux"]
  },
  {
    category: "Backend", 
    icon: <Code2 className="h-8 w-8" />,
    techs: ["Python", "Java", "Node.js", "Django", "Spring Boot", "Express", "FastAPI"]
  },
  {
    category: "Banco de Dados",
    icon: <Database className="h-8 w-8" />,
    techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase"]
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="h-8 w-8" />,
    techs: ["AWS", "Vercel", "Docker", "GitHub Actions", "Netlify"]
  },
  {
    category: "Ferramentas",
    icon: <GitBranch className="h-8 w-8" />,
  techs: ["Git", "VS Code", "IntelliJ IDEA", "Figma", "Postman", "Linux", "Jira"]
  },

  {
    category: "Outros",
    icon: <Zap className="h-8 w-8" />,
    techs: ["RESTFul API", "Webhook", "WebScraping"]
  }
];

const About = () => {
  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-space font-bold text-4xl md:text-5xl mb-6">
            Sobre <span className="bg-gradient-primary bg-clip-text text-transparent">Mim</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Desenvolvedor Full Stack com mais de 3 anos de experiência criando soluções digitais inovadoras.
            Especialista em aplicações web e apaixonado por tecnologias emergentes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* About Text */}
          <div className="animate-fade-in-left">
            <h3 className="font-space font-semibold text-2xl md:text-3xl mb-6 text-primary">
              Minha Jornada
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Comecei minha jornada na programação há alguns anos e desde então tenho me dedicado 
                a aprender e dominar as mais diversas tecnologias do mercado. Minha paixão é 
                transformar ideias complexas em soluções simples e elegantes.
              </p>
              <p>
                Tenho experiência tanto no desenvolvimento backend quanto frontend, sempre buscando 
                as melhores práticas e mantendo-me atualizado com as tendências tecnológicas. 
                Acredito que código limpo e boa comunicação são fundamentais para o sucesso de qualquer projeto.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="animate-fade-in">
            <h3 className="font-space font-semibold text-2xl md:text-3xl mb-8 text-center lg:text-left">
              Minhas <span className="text-accent">Habilidades</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <Card 
                  key={skill.category}
                  className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card group animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:text-accent transition-colors duration-300">
                        {skill.icon}
                      </div>
                      <h4 className="font-space font-semibold text-lg ml-3 group-hover:text-primary transition-colors duration-300">
                        {skill.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.techs.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded border border-border/50 hover:border-accent/50 hover:text-accent transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;