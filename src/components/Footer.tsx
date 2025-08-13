import { Separator } from "@/components/ui/separator";
import { Shield, Mail, MessageCircle, FileText, Lock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cyber-bg border-t border-cyber-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-neon-blue" />
              <span className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
                Codefence
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Especialistas em recuperação de contas Instagram, Gmail, WhatsApp e TikTok. Pentest, auditoria de segurança e investigação digital com métodos éticos e sigilo profissional.
            </p>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-cyber-surface/50 border border-neon-blue/30">
              <Lock className="w-5 h-5 text-neon-blue" />
              <span className="text-sm font-medium text-neon-blue">Atendimento com Sigilo Profissional</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contato</h3>
            <div className="space-y-3">
              <a 
                href="https://wa.me/5561998840799" 
                className="flex items-center gap-2 text-muted-foreground hover:text-neon-green transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">Atendimento WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Informações Legais</h3>
            <div className="space-y-3">
              <a 
                href="https://codefence.com.br/privacy" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-neon-blue transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span className="text-sm">Política de Privacidade</span>
              </a>
              <a 
                href="https://codefence.com.br/terms" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-neon-blue transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span className="text-sm">Termos de Uso</span>
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-cyber-border" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2019-2025 🔥 Codefence. Todos os direitos reservados.
          </div>
          <div className="text-sm text-muted-foreground">
            Desenvolvido com foco em segurança e privacidade
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;