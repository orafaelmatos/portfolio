import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="font-space font-bold text-5xl md:text-7xl mb-6 leading-tight">
              <span className="text-foreground">Rafael Matos</span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow">
                Full Stack Developer
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Desenvolvedor web com foco em tecnologia e inovação.
              Transformo ideias em soluções digitais modernas, escaláveis e de alto impacto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary text-primary-foreground hover:shadow-neon transition-all duration-300 transform hover:scale-105"
              >
                <a href="/Curriculo.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Baixar Currículo
                </a>
              </Button>

              <div className="flex gap-4">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <a
                    href="https://github.com/orafaelmatos"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <a
                    href="https://www.linkedin.com/in/orafaelmatos"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Floating indicators */}
          <div className="animate-float">
            <div className="inline-block p-2 rounded-full border border-primary/30 bg-primary/10">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;