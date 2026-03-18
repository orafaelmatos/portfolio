import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Globe, Smartphone, Cloud, GitBranch, Palette, Zap } from "lucide-react";

const skills = [
  {
    category: "Backend",
    icon: <Code2 className="h-8 w-8" />,
    techs: ["Python", "Java", "Node.js", "Django", "FastAPI", "Spring Boot", "Express"],
  },
  {
    category: "Frontend",
    icon: <Globe className="h-8 w-8" />,
    techs: ["React", "TypeScript", "Javascript", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Databases",
    icon: <Database className="h-8 w-8" />,
    techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase"],
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="h-8 w-8" />,
    techs: ["AWS", "Vercel", "Docker", "GitHub Actions", "CI/CD"],
  },
  {
    category: "Tools",
    icon: <GitBranch className="h-8 w-8" />,
    techs: ["Git", "VS Code", "Postman", "Linux", "Jira", "Agile/Scrum"],
  },
  {
    category: "Expertise",
    icon: <Zap className="h-8 w-8" />,
    techs: ["RESTful APIs", "Microservices", "System Design", "Unit Testing"],
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="font-space font-bold text-5xl md:text-7xl mb-8 tracking-tighter uppercase">
            Brief <span className="text-primary italic">Bio</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-10" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Full Stack Developer with a strong focus on building scalable web solutions and high-performance backends.
            Passionate about solving complex problems through clean, efficient code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* About Text */}
          <div className="space-y-10 animate-fade-in-left">
            <div>
              <h3 className="font-space font-bold text-xs tracking-[0.4em] uppercase text-primary mb-6">Discovery</h3>
              <div className="space-y-8 text-lg text-muted-foreground/80 leading-relaxed font-light">
                <p>
                  My journey in software development is driven by a relentless curiosity for how things work under the hood. 
                  I don't just write code; I build <span className="text-foreground">digital products</span> that solve real-world problems.
                </p>
                <p>
                  With a solid background in both Backend and Frontend, I advocate for <span className="text-foreground">software excellence</span>. 
                  I believe that the best solutions come from a combination of technical rigor, effective communication, and a user-centric mindset.
                </p>
              </div>
            </div>
            
            <div className="pt-6 border-t border-white/5">
              <div className="flex gap-12">
                <div>
                  <span className="block text-3xl font-bold text-foreground font-space">3+</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Years Exp</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-foreground font-space">20+</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Projects</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-foreground font-space">Global</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Mindset</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="animate-fade-in">
            <h3 className="font-space font-bold text-xs tracking-[0.4em] uppercase text-primary mb-10 text-center lg:text-left">Tech Stack // Capabilities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.category}
                  className="p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 group"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-2 text-primary group-hover:scale-110 transition-transform duration-500">
                      {skill.icon}
                    </div>
                    <h4 className="font-space font-bold text-sm tracking-widest uppercase ml-3">
                      {skill.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {skill.techs.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
