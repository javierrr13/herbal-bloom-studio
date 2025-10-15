import { Card, CardContent } from "@/components/ui/card";
import supplementsImage from "@/assets/supplements.jpg";
import organicFoodImage from "@/assets/organic-food.jpg";
import consultationImage from "@/assets/consultation.jpg";

const products = [
  {
    image: supplementsImage,
    title: "Suplementos Herbales",
    description: "Extractos naturales y suplementos de hierbas medicinales",
  },
  {
    image: organicFoodImage,
    title: "Alimentos Orgánicos",
    description: "Productos ecológicos certificados y de comercio justo",
  },
  {
    image: consultationImage,
    title: "Asesoramiento Profesional",
    description: "Consultas personalizadas con nutricionistas expertos",
  },
];

const Products = () => {
  return (
    <section id="productos" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Productos Destacados
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra selección de productos premium para tu salud
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-semibold mb-3 text-card-foreground">
                  {product.title}
                </h3>
                <p className="font-inter text-muted-foreground">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
