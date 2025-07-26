import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle, Zap } from "lucide-react";

const HighlightSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-neon-blue/10 via-cyber-surface to-neon-green/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-blue/20 via-transparent to-neon-green/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-green/20 border-2 border-neon-blue/30 mb-8">
            <Zap className="w-10 h-10 text-neon-blue" />
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-neon-blue">💥</span>{" "}
            <span className="bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
              Recuperação Rápida e Segura
            </span>
            <br />
            <span className="text-foreground">de Contas Invadidas</span>
          </h2>

          {/* Description */}
          <div className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            <p className="mb-6">
              Perdeu acesso ao <strong className="text-neon-blue">Instagram</strong>, <strong className="text-neon-blue">Gmail</strong>, <strong className="text-neon-blue">WhatsApp</strong> ou outra conta importante? 
            </p>
            <p>
              Realizamos a <strong className="text-neon-green">recuperação imediata</strong> com total discrição e segurança, 
              mesmo em situações complexas de bloqueio por autenticação, problemas com SMS ou roubo de identidade digital.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-cyber-surface/50 border border-cyber-border backdrop-blur-sm">
              <CheckCircle className="w-6 h-6 text-neon-green flex-shrink-0" />
              <span className="text-foreground font-medium">Atendimento confidencial absoluto</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-cyber-surface/50 border border-cyber-border backdrop-blur-sm">
              <CheckCircle className="w-6 h-6 text-neon-green flex-shrink-0" />
              <span className="text-foreground font-medium">Suporte emergencial 24/7</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-cyber-surface/50 border border-cyber-border backdrop-blur-sm">
              <CheckCircle className="w-6 h-6 text-neon-green flex-shrink-0" />
              <span className="text-foreground font-medium">Técnicas especializadas legítimas</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-neon-green to-neon-blue hover:from-neon-green/80 hover:to-neon-blue/80 text-black font-semibold px-8 py-6 text-lg rounded-xl shadow-[0_0_30px_rgba(0,255,127,0.3)] hover:shadow-[0_0_40px_rgba(0,255,127,0.5)] transition-all duration-300 group"
          >
            <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            📲 Recuperar Minha Conta Agora
          </Button>

          {/* Emergency Contact */}
          <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-cyber-surface/80 to-cyber-surface/60 border border-neon-blue/30 backdrop-blur-sm">
            <p className="text-sm text-muted-foreground mb-2">
              <strong className="text-neon-blue">Emergência?</strong> Contato imediato via WhatsApp ou e-mail
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://wa.me/5511999999999" 
                className="flex items-center gap-2 text-neon-green hover:text-neon-blue transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="font-medium">WhatsApp Emergencial</span>
              </a>
              <div className="hidden sm:block w-px h-4 bg-cyber-border"></div>
              <a 
                href="mailto:suporte@cyberguard.com" 
                className="flex items-center gap-2 text-neon-blue hover:text-neon-green transition-colors"
              >
                <span className="font-medium">suporte@cyberguard.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;