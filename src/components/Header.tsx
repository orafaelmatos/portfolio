import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/80 backdrop-blur-lg border-b border-border"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#">
            <img src="/logo.svg" alt="Rafael Matos Logo" className="h-10 md:h-12" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Sobre mim
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-left py-2 text-foreground hover:text-primary transition-colors duration-300"
              >
                Sobre mim
              </button>
              <button
                onClick={() => scrollToSection("projetos")}
                className="text-left py-2 text-foreground hover:text-primary transition-colors duration-300"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-left py-2 text-foreground hover:text-primary transition-colors duration-300"
              >
                Contato
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;