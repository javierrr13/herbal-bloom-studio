import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-herbolarium.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(147, 35%, 35%, 0.7), rgba(147, 35%, 35%, 0.8)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Bienestar Natural para una Vida Saludable
          </h1>
          <p className="font-inter text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
            Centro dietético especializado en productos naturales, suplementos nutricionales y asesoramiento personalizado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Descubre Nuestros Productos
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-background/20 hover:bg-background border-primary-foreground text-primary-foreground hover:text-primary">
              Consulta Personalizada
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
