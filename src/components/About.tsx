import { Check } from "lucide-react";

const features = [
  "Más de 20 años de experiencia en dietética natural",
  "Productos certificados y de máxima calidad",
  "Asesoramiento personalizado por expertos",
  "Compromiso con la sostenibilidad ambiental",
];

const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre Herbolarium
            </h2>
            <p className="font-inter text-lg text-muted-foreground leading-relaxed mb-8">
              Somos un centro dietético dedicado a promover la salud y el bienestar a través de productos naturales y asesoramiento profesional. 
              Nuestra misión es ofrecer alternativas naturales y efectivas para mejorar tu calidad de vida, respetando siempre el medio ambiente 
              y promoviendo un estilo de vida sostenible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <p className="font-inter text-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
