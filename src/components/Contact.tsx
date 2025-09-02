import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, MessageSquare, Instagram } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;

    try {
      const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);

      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Retornarei em breve!",
      });

      form.reset();
    } catch (err) {
      console.error("Erro real ao enviar email:", err);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-6 w-6" />,
      url: "https://github.com/orafaelmatos",
      color: "hover:text-foreground",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      url: "https://linkedin.com/in/orafaelmatos",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-6 w-6" />,
      url: "https://instagram.com/orafaelmatos",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-space font-bold text-4xl md:text-5xl mb-6">
            Vamos <span className="bg-gradient-primary bg-clip-text text-transparent">Conversar?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tem um projeto em mente? Quer trocar uma ideia? Entre em contato comigo!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6 animate-fade-in-left">
            <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-space font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground">rafaelmatos.dev1@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-space font-semibold text-lg">Localização</h3>
                    <p className="text-muted-foreground">São Paulo, Brasil</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-space font-semibold text-lg">Telefone</h3>
                    <p className="text-muted-foreground">+55 (19) 99885-8366</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="font-space font-semibold text-lg mb-4 text-center">Minhas Redes</h3>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg bg-muted/50 text-muted-foreground transition-all duration-300 hover:bg-primary/10 ${social.color} hover:scale-110 hover:shadow-glow`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in">
            <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card">
              <CardHeader>
                <CardTitle className="font-space text-2xl flex items-center">
                  <MessageSquare className="mr-3 h-6 w-6 text-primary" />
                  Envie sua mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Nome completo
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        required
                        className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        required
                        className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Mensagem
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte-me sobre seu projeto ou dúvida..."
                      rows={6}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-primary text-primary-foreground hover:shadow-neon transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
