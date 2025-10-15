import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "Calle de la Salud Natural, 123, Madrid",
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+34 912 345 678",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@herbolarium.es",
  },
  {
    icon: Clock,
    title: "Horario",
    content: "Lun-Vie: 9:00-20:00, Sáb: 10:00-14:00",
  },
];

const Contact = () => {
  return (
    <section id="contacto" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contáctanos
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte en tu camino hacia una vida más saludable
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6 animate-slide-up">
            <h3 className="font-playfair text-2xl font-semibold text-foreground mb-6">
              Información de Contacto
            </h3>
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-foreground mb-1">
                    {info.title}
                  </h4>
                  <p className="font-inter text-muted-foreground">
                    {info.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <Card className="border-none shadow-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                    Nombre
                  </label>
                  <Input 
                    placeholder="Tu nombre" 
                    className="font-inter"
                  />
                </div>
                <div>
                  <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="tu@email.com" 
                    className="font-inter"
                  />
                </div>
                <div>
                  <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                    Mensaje
                  </label>
                  <Textarea 
                    placeholder="¿En qué podemos ayudarte?" 
                    rows={5}
                    className="font-inter resize-none"
                  />
                </div>
                <Button variant="hero" size="lg" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
