import { Leaf, Heart, Apple, UserCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Leaf,
    title: "Productos Naturales",
    description: "Amplia gama de productos herbales y fitoterapia de la más alta calidad para tu bienestar integral",
  },
  {
    icon: Heart,
    title: "Suplementos Nutricionales",
    description: "Suplementos vitamínicos y minerales seleccionados cuidadosamente para complementar tu nutrición",
  },
  {
    icon: Apple,
    title: "Alimentación Ecológica",
    description: "Alimentos orgánicos y ecológicos certificados, libres de químicos y respetuosos con el medio ambiente",
  },
  {
    icon: UserCheck,
    title: "Asesoramiento Dietético",
    description: "Consultas personalizadas con nuestros expertos en nutrición y dietética para alcanzar tus objetivos",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una experiencia completa en salud natural y bienestar
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-none shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3 text-card-foreground">
                  {service.title}
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
