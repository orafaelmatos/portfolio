const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
            <span>Desenvolvido por Rafael Matos</span>
          </div>
          
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;