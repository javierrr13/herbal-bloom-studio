import { Leaf } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-8 w-8 text-primary" />
          <span className="text-2xl font-playfair font-bold text-primary">Herbolarium</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#inicio" className="font-inter text-foreground hover:text-primary transition-colors">
            Inicio
          </a>
          <a href="#servicios" className="font-inter text-foreground hover:text-primary transition-colors">
            Servicios
          </a>
          <a href="#productos" className="font-inter text-foreground hover:text-primary transition-colors">
            Productos
          </a>
          <a href="#nosotros" className="font-inter text-foreground hover:text-primary transition-colors">
            Nosotros
          </a>
          <a href="#contacto" className="font-inter text-foreground hover:text-primary transition-colors">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
