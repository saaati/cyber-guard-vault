import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Eye, Shield, AlertTriangle, Lock, Smartphone } from "lucide-react";

const BlogSection = () => {
  const articles = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Guia Prático: Proteção de Contas Invadidas",
      description: "Descubra os passos imediatos para recuperar e blindar suas contas contra ataques.",
      date: "09 Ago 2025",
      slug: "guia-protecao-contas-invadidas",
      category: "Recuperação de Contas"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "5 Golpes Digitais Mais Comuns em 2025",
      description: "Conheça as fraudes mais utilizadas e saiba como se proteger delas.",
      date: "28 Jul 2025",
      slug: "golpes-digitais-comuns-2025",
      category: "Cibersegurança Geral"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Como Manter Seu Celular Seguro",
      description: "Dicas práticas para proteger seus dados em dispositivos móveis.",
      date: "12 Jul 2025",
      slug: "como-manter-celular-seguro",
      category: "Segurança em Dispositivos Móveis"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Criando Senhas Fortes e Únicas",
      description: "Aprenda técnicas para criar senhas praticamente impossíveis de serem quebradas.",
      date: "27 Jun 2025",
      slug: "criando-senhas-fortes-unicas",
      category: "Proteção de Dados"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Perigos das Redes Wi-Fi Públicas",
      description: "Entenda os riscos e veja como se proteger ao usar conexões abertas.",
      date: "09 Mai 2025",
      slug: "perigos-redes-wifi-publicas",
      category: "Segurança em Redes"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Backup Inteligente: Sua Defesa Contra Perdas",
      description: "Saiba como fazer backups estratégicos e manter seus dados sempre seguros.",
      date: "15 Abr 2025",
      slug: "backup-inteligente-defesa-dados",
      category: "Gestão e Prevenção de Perdas"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-cyber-surface to-cyber-bg" id="blog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
              Blog & Conteúdo Educativo
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Artigos especializados sobre segurança digital, proteção de dados e as últimas tendências em cibersegurança
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {articles.map((article, index) => (
            <Card 
              key={index}
              className="bg-cyber-surface/50 border-cyber-border hover:border-neon-blue/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(0,191,255,0.1)] backdrop-blur-sm cursor-pointer"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-green/20 border border-neon-blue/30 group-hover:from-neon-blue/30 group-hover:to-neon-green/30 transition-all duration-300">
                    <div className="text-neon-blue group-hover:text-neon-green transition-colors duration-300">
                      {article.icon}
                    </div>
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-neon-blue/20 text-neon-blue border border-neon-blue/30">
                    {article.category}
                  </span>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-neon-blue transition-colors duration-300 leading-tight">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {article.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-neon-blue hover:text-neon-green hover:bg-cyber-bg group-hover:translate-x-1 transition-all duration-300"
                    asChild
                  >
                    <a href={`https://codefence.com.br/blog/${article.slug}`} target="_blank" rel="noopener noreferrer">
                      Ler mais
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 hover:border-neon-blue transition-all duration-300"
            asChild
          >
            <a href="https://codefence.com.br/blog" target="_blank" rel="noopener noreferrer">
              Ver Todos os Artigos
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;