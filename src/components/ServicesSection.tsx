import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Smartphone, 
  HardDrive, 
  Search, 
  Users, 
  Eye,
  Instagram,
  Mail,
  MessageCircle,
  Database
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Recuperação de Contas Digitais",
      platforms: "Instagram, Gmail, Facebook, TikTok, WhatsApp",
      description: "Recuperação rápida e segura de acessos bloqueados.",
      features: [
        "Suporte especializado em autenticação em dois fatores",
        "Resolução de falhas de recebimento de SMS",
        "Recuperação após troca de chip",
        "Proteção contra ataques de phishing"
      ]
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Recuperação de Dados e Dispositivos",
      platforms: "Todos os dispositivos",
      description: "Acesso e recuperação de contas perdidas por mudanças de número.",
      features: [
        "Recuperação após troca de número ou perda do chip",
        "Restauração de arquivos apagados",
        "Recuperação de dados em dispositivos diversos",
        "Backup e migração segura"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Pentest e Auditoria de Segurança",
      platforms: "Websites, Redes, Sistemas, Apps",
      description: "Testes ofensivos completos em infraestruturas digitais.",
      features: [
        "Análise detalhada de vulnerabilidades (OWASP Top 10)",
        "Testes de SQL Injection, XSS, RCE",
        "Relatórios técnicos completos",
        "Orientações para correção e mitigação"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Consultoria Avançada em Segurança",
      platforms: "Pessoal e Corporativo",
      description: "Avaliação completa de riscos e vulnerabilidades digitais.",
      features: [
        "Avaliação de riscos pessoais e corporativos",
        "Proteção da identidade digital",
        "Gestão segura de senhas",
        "Segurança em redes e dispositivos"
      ]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Investigação Digital e Contrainteligência",
      platforms: "Dispositivos e Comunicações",
      description: "Descubra se você está sendo espionado digitalmente.",
      features: [
        "Detecção de espionagem em celular e e-mails",
        "Identificação de dispositivos de escuta",
        "Consultoria ética para confirmação de traições",
        "Monitoramento de comportamentos suspeitos"
      ]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Monitoramento e Proteção Preventiva",
      platforms: "Sistemas Corporativos",
      description: "Implementação e configuração de soluções de segurança.",
      features: [
        "Configuração de firewalls corporativos",
        "Instalação de antivírus empresariais",
        "Implementação de VPNs seguras",
        "Soluções de backup e ambientes sandbox"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-cyber-bg to-cyber-surface" id="servicos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
              Nossos Serviços
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas em segurança digital com metodologia profissional e total discrição
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-cyber-surface/50 border-cyber-border hover:border-neon-blue/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(0,191,255,0.1)] backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-green/20 border border-neon-blue/30 group-hover:from-neon-blue/30 group-hover:to-neon-green/30 transition-all duration-300">
                    <div className="text-neon-blue group-hover:text-neon-green transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground group-hover:text-neon-blue transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <p className="text-sm text-neon-green font-medium">{service.platforms}</p>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;