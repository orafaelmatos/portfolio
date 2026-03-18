import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, MessageCircle, X } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled
        ? "py-4 bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-2xl"
        : "py-10 bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="group flex flex-col">
            <span className="font-space font-bold text-2xl tracking-tighter uppercase group-hover:text-primary transition-colors">
              Rafael <span className="text-primary italic">Matos</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-muted-foreground opacity-60">Full Stack Dev // Global</span>
          </a>

          {/* Desktop Navigation - Minimalist List */}
          <nav className="hidden md:flex items-center gap-12">
            {[
              { id: "about", label: "01. About" },
              { id: "projects", label: "02. Works" },
              { id: "contact", label: "03. Contact" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <div className="h-6 w-[1px] bg-white/10" />
            <a 
              href="https://wa.me/5519998858366?text=Hi%20Rafael!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk%20about%20your%20work."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-[0.2em] border-b border-primary/40 pb-1 hover:border-primary transition-all flex items-center gap-2"
            >
              Get in touch
              <MessageCircle className="h-3.5 w-3.5 text-green-500 fill-green-500/10" />
            </a>
          </div>

          {/* Mobile Menu Button - Industrial Square */}
          <button
            className="md:hidden w-12 h-12 flex flex-col items-center justify-center gap-1 border border-white/10 bg-white/5 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-6 h-[2px] bg-foreground transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <div className={`w-6 h-[2px] bg-foreground transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-[2px] bg-foreground transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>

        {/* Mobile Navigation - Brutalist Overlay */}
        {isMenuOpen && (
          <nav className="md:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-3xl z-40 p-10 animate-in fade-in slide-in-from-right duration-500">
            <div className="flex flex-col space-y-12 pt-20">
              {[
                { id: "about", label: "About" },
                { id: "projects", label: "Selected Works" },
                { id: "contact", label: "Contact" }
              ].map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left"
                >
                  <span className="block text-xs font-bold text-primary mb-2">0{idx + 1}.</span>
                  <span className="text-5xl font-space font-bold uppercase tracking-tighter text-foreground hover:italic hover:text-primary transition-all">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;