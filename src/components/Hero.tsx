import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background Decor - Focused and Architectural */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-primary/5 rounded-full blur-[140px]" />
        
        {/* Subtle Grid */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none" 
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '100px 100px' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-10 group cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-primary/80">Senior Full Stack Developer</span>
          </div>

          <div className="text-center">
            <h1 className="font-space font-bold text-6xl md:text-9xl mb-10 leading-[0.9] tracking-tight">
              <span className="text-foreground/90 block">Rafael Matos</span>
              <span className="block italic text-primary mt-2 drop-shadow-lg">
                Crafting High-Performance Code.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground/80 mb-16 leading-relaxed max-w-2xl mx-auto font-light">
              Building 
              <span className="text-foreground font-medium"> scalable web applications</span> and robust backends with a focus on modern engineering and clean code.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="h-16 px-10 bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-none font-bold text-lg uppercase tracking-widest"
              >
                <a href="/Resume.pdf" download>
                  <Download className="mr-3 h-5 w-5" />
                  Download Resume
                </a>
              </Button>

              <div className="flex gap-4">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-16 w-16 p-0 border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 rounded-none group"
                >
                  <a href="https://github.com/orafaelmatos" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-16 w-16 p-0 border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 rounded-none group"
                >
                  <a href="https://www.linkedin.com/in/orafaelmatos" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industrial Aesthetic Side Decoration */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-2 opacity-20 text-[10px] tracking-[0.5em] text-muted-foreground [writing-mode:vertical-lr] uppercase font-bold">
        <span>Software Engineering // SCALABILITY // CLEAN CODE</span>
        <div className="h-40 w-[1px] bg-muted-foreground/30 mx-auto mt-4" />
      </div>
    </section>
  );
};

export default Hero;