import { Button } from "@/components/ui/button";
import { Shield, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cyber-bg via-cyber-surface to-cyber-bg">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-blue/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,hsl(var(--neon-blue)/0.05)_49%,hsl(var(--neon-blue)/0.05)_51%,transparent_52%)] bg-[length:20px_20px]"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-blue/30 bg-neon-blue/10 backdrop-blur-sm">
            <Shield className="w-4 h-4 text-neon-blue" />
            <span className="text-sm font-medium text-neon-blue">Segurança Digital Avançada</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-foreground via-neon-blue to-foreground bg-clip-text text-transparent">
              Proteção Digital,
            </span>
            <br />
            <span className="text-foreground">
              Recuperação e
            </span>
            <br />
            <span className="bg-gradient-to-r from-neon-blue via-neon-green to-neon-blue bg-clip-text text-transparent">
              Inteligência Cibernética
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Serviços especializados em segurança digital, recuperação de contas online e investigação digital privada.
          </h2>

          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black font-semibold px-8 py-6 text-lg rounded-xl shadow-[0_0_30px_rgba(0,191,255,0.3)] hover:shadow-[0_0_40px_rgba(0,191,255,0.5)] transition-all duration-300 group"
            >
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              🔐 Solicitar Consultoria Agora
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
              <span>Atendimento 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
              <span>100% Confidencial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
              <span>Métodos Legais</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;