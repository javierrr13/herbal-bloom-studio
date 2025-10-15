import { Leaf } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6" />
              <span className="text-xl font-playfair font-bold">Herbolarium</span>
            </div>
            <p className="font-inter text-primary-foreground/80 text-sm leading-relaxed">
              Tu centro de confianza para productos naturales y asesoramiento dietético profesional.
            </p>
          </div>
          
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 font-inter text-sm">
              <li>
                <a href="#inicio" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#productos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Horario</h3>
            <ul className="space-y-2 font-inter text-sm text-primary-foreground/80">
              <li>Lunes - Viernes: 9:00 - 20:00</li>
              <li>Sábado: 10:00 - 14:00</li>
              <li>Domingo: Cerrado</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="font-inter text-sm text-primary-foreground/80">
            © {currentYear} Herbolarium. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
