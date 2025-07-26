import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Eye, Shield, AlertTriangle, Lock, Smartphone } from "lucide-react";

const BlogSection = () => {
  const articles = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Como saber se estou sendo espionado digitalmente?",
      description: "Sinais claros de espionagem digital e como detectar dispositivos de monitoramento em seus aparelhos.",
      date: "15 Jan 2025",
      slug: "como-detectar-espionagem-digital",
      category: "Segurança"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Principais sinais de infidelidade digital",
      description: "Indicadores comportamentais e tecnológicos que podem revelar atividades suspeitas em relacionamentos.",
      date: "12 Jan 2025",
      slug: "sinais-infidelidade-digital",
      category: "Investigação"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Guia completo para proteger sua conta do Instagram em 2025",
      description: "Técnicas avançadas de proteção, configurações de privacidade e prevenção contra hackers.",
      date: "10 Jan 2025",
      slug: "proteger-instagram-2025",
      category: "Proteção"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Melhores práticas atualizadas em cibersegurança",
      description: "Estratégias essenciais para manter sua identidade digital segura em um mundo conectado.",
      date: "08 Jan 2025",
      slug: "melhores-praticas-ciberseguranca",
      category: "Segurança"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Ferramentas profissionais para testar a segurança do seu website",
      description: "Análise completa das principais ferramentas de pentest e auditoria de segurança para websites.",
      date: "05 Jan 2025",
      slug: "ferramentas-pentest-website",
      category: "Pentest"
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
                  >
                    Ler mais
                    <ArrowRight className="w-4 h-4 ml-1" />
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
          >
            Ver Todos os Artigos
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;