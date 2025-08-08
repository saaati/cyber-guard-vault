import { Button } from "@/components/ui/button";
import { Shield, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cyber-bg via-cyber-surface to-cyber-bg">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-blue/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,hsl(var(--neon-blue)/0.05)_49%,hsl(var(--neon-blue)/0.05)_51%,transparent_52%)] bg-[length:20px_20px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-blue/30 bg-neon-blue/10 backdrop-blur-sm">
            <Shield className="w-4 h-4 text-neon-blue" />
            <span className="text-sm font-medium text-neon-blue">Segurança Digital Avançada</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
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
          <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Recuperação profissional de contas Instagram, Gmail, WhatsApp e TikTok. Pentest, auditoria de segurança e investigação digital com métodos éticos e sigilo absoluto.
          </h2>

          {/* CTA Button */}
          <div className="pt-6 sm:pt-8">
            <Button 
              asChild
              size="lg" 
              className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black font-semibold px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg rounded-xl shadow-[0_0_30px_rgba(0,191,255,0.3)] hover:shadow-[0_0_40px_rgba(0,191,255,0.5)] transition-all duration-300 group w-full sm:w-auto"
            >
              <a href="https://wa.me/5561998840799?text=Olá,%20preciso%20de%20ajuda%20com%20recuperação%20de%20conta%20ou%20segurança%20digital" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <Zap className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:animate-pulse" />
                🔐 Recuperar Conta Agora
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-8 pt-8 sm:pt-12 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
              <span>Atendimento 24/7</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
              <span>100% Confidencial</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
              <span>Métodos Éticos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;