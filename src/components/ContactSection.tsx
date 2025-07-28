import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Mail, Send, Shield } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve com total discrição.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-24 bg-gradient-to-b from-cyber-surface to-cyber-bg" id="contato">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
              Entre em Contato
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Atendimento confidencial e especializado para suas necessidades de segurança digital
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            {/* WhatsApp Card */}
            <Card className="bg-gradient-to-br from-neon-green/10 to-neon-blue/10 border-neon-green/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-neon-green" />
                  Atendimento Imediato
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Para casos urgentes, fale conosco diretamente no WhatsApp
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  asChild
                  size="lg"
                  className="w-full bg-gradient-to-r from-neon-green to-emerald-400 hover:from-neon-green/80 hover:to-emerald-400/80 text-black font-semibold py-6 text-lg rounded-xl shadow-[0_0_30px_rgba(0,255,127,0.3)] hover:shadow-[0_0_40px_rgba(0,255,127,0.5)] transition-all duration-300"
                >
                  <a href="https://wa.me/5561998840799?text=Olá,%20preciso%20de%20ajuda%20com%20segurança%20digital" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Fale Agora no WhatsApp
                  </a>
                </Button>
                <p className="text-sm text-center text-muted-foreground mt-4">
                  Resposta em até 15 minutos durante horário comercial
                </p>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-cyber-surface/50 border-cyber-border backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center gap-2">
                  <Shield className="w-5 h-5 text-neon-blue" />
                  Informações de Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-cyber-bg/50">
                  <MessageCircle className="w-5 h-5 text-neon-green" />
                  <div>
                    <p className="font-medium text-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">+55 (61) 99884-0799</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Confidentiality Notice */}
            <Card className="bg-gradient-to-br from-cyber-surface/80 to-cyber-bg/80 border-neon-blue/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-neon-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Garantia de Confidencialidade</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Todos os dados e informações compartilhadas são protegidos por sigilo profissional absoluto. 
                      Utilizamos criptografia de ponta a ponta e não compartilhamos informações com terceiros.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;