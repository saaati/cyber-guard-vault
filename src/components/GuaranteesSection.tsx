import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, FileCheck, Lock, Users, CheckCircle } from "lucide-react";

const GuaranteesSection = () => {
  const guarantees = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Atendimento Ético e Profissional",
      description: "Todos os nossos serviços seguem rigorosos padrões éticos e profissionais, garantindo transparência total em cada processo."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Métodos Legais e Transparentes",
      description: "Utilizamos apenas técnicas legítimas e autorizadas, sempre dentro dos limites da lei e com total transparência sobre os processos."
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Clareza Total dos Processos",
      description: "Explicamos detalhadamente cada etapa do trabalho, garantindo que você compreenda completamente as soluções aplicadas."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Termo de Confidencialidade",
      description: "Clientes empresariais recebem assinatura obrigatória de Termo de Confidencialidade para máxima proteção de dados."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-cyber-bg via-cyber-surface to-cyber-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
              Garantias e Profissionalismo
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nosso compromisso com a excelência, ética e segurança em todos os serviços prestados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {guarantees.map((guarantee, index) => (
            <Card 
              key={index}
              className="bg-cyber-surface/50 border-cyber-border hover:border-neon-blue/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(0,191,255,0.1)] backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-green/20 border border-neon-blue/30 group-hover:from-neon-blue/30 group-hover:to-neon-green/30 transition-all duration-300 flex-shrink-0">
                    <div className="text-neon-blue group-hover:text-neon-green transition-colors duration-300">
                      {guarantee.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-neon-blue transition-colors duration-300">
                      {guarantee.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {guarantee.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Trust Indicators */}
        <div className="bg-gradient-to-r from-cyber-surface/80 to-cyber-surface/60 rounded-2xl border border-cyber-border p-8 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Certificações e Credenciais</h3>
            <p className="text-muted-foreground">
              Profissionais certificados com experiência comprovada em segurança digital
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-lg bg-cyber-bg/50 border border-neon-blue/20">
              <Users className="w-12 h-12 text-neon-blue mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Equipe Especializada</h4>
              <p className="text-sm text-muted-foreground">
                Profissionais com certificações internacionais em segurança cibernética
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-cyber-bg/50 border border-neon-green/20">
              <CheckCircle className="w-12 h-12 text-neon-green mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Conformidade Legal</h4>
              <p className="text-sm text-muted-foreground">
                Todos os processos seguem regulamentações de proteção de dados
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-cyber-bg/50 border border-neon-blue/20">
              <Shield className="w-12 h-12 text-neon-blue mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Segurança Máxima</h4>
              <p className="text-sm text-muted-foreground">
                Protocolos de segurança de nível militar para proteção de dados
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;