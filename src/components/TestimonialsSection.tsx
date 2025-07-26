import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Camila S.",
      role: "Empresária",
      content: "Recuperei meu Instagram rapidamente, com total segurança e discrição. Recomendo 100%!",
      rating: 5
    },
    {
      name: "Rafael L.",
      role: "Executivo",
      content: "Consultoria perfeita, descobri uma espionagem digital antes que virasse um problema sério!",
      rating: 5
    },
    {
      name: "Marina T.",
      role: "Influencer",
      content: "Profissionalismo excepcional. Recuperaram minha conta em poucas horas quando eu achei que tinha perdido tudo.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-cyber-bg to-cyber-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
              Depoimentos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A confiança de nossos clientes é nossa maior conquista
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-cyber-surface/50 border-cyber-border hover:border-neon-blue/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(0,191,255,0.1)] backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-neon-blue/10 to-neon-green/10 rounded-bl-full"></div>
              <CardContent className="p-6 relative">
                <Quote className="w-8 h-8 text-neon-blue/30 mb-4" />
                
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-neon-blue">{testimonial.role}</p>
                  </div>
                  
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-neon-green text-neon-green" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-lg bg-cyber-surface/30 border border-cyber-border backdrop-blur-sm">
            <div className="text-3xl font-bold text-neon-blue mb-2">100%</div>
            <p className="text-sm text-muted-foreground">Taxa de Sucesso em Recuperações</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-cyber-surface/30 border border-cyber-border backdrop-blur-sm">
            <div className="text-3xl font-bold text-neon-green mb-2">24/7</div>
            <p className="text-sm text-muted-foreground">Suporte Disponível</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-cyber-surface/30 border border-cyber-border backdrop-blur-sm">
            <div className="text-3xl font-bold text-neon-blue mb-2">500+</div>
            <p className="text-sm text-muted-foreground">Clientes Atendidos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;