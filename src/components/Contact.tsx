import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, MessageSquare, Instagram, MessageCircle } from "lucide-react";
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

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      const result = await emailjs.send(
        SERVICE_ID, 
        TEMPLATE_ID, 
        templateParams, 
        PUBLIC_KEY
      );

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
      form.reset();
    } catch (err) {
      console.error("Real error sending email:", err);
      toast({
        title: "Error sending message",
        description: "Please check your configuration or try again later.",
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
    {
      name: "WhatsApp",
      icon: <MessageCircle className="h-6 w-6" />,
      url: "https://wa.me/5519998858366?text=Hello%20Rafael!%20I'd%20like%20to%20talk%20about%20a%20new%20project.",
      color: "hover:text-green-500",
    },
  ];

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="font-space font-bold text-5xl md:text-7xl mb-8 tracking-tighter uppercase">
            Let's <span className="text-primary italic">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-10" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Have a project in mind or just want to chat about tech? <span className="text-foreground">Reach out</span> and let's build something great.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-10 animate-fade-in-left">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="mt-1 p-2 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="ml-6">
                  <h3 className="font-space font-bold text-xs tracking-widest uppercase text-muted-foreground mb-1">Email</h3>
                  <p className="text-lg font-medium">rafaelmatos.dev1@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 p-2 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="ml-6">
                  <h3 className="font-space font-bold text-xs tracking-widest uppercase text-muted-foreground mb-1">Location</h3>
                  <p className="text-lg font-medium">Remote // Brazil</p>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-white/5">
              <h3 className="font-space font-bold text-xs tracking-widest uppercase text-muted-foreground mb-6">Social Ecosystem</h3>
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/30 transition-all duration-300 ${link.color}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[10px] uppercase tracking-widest font-bold opacity-60">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="bg-white/[0.02] border-white/10 focus:border-primary/50 h-14 rounded-none"
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold opacity-60">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-white/[0.02] border-white/10 focus:border-primary/50 h-14 rounded-none"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold opacity-60">Project Details</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  className="min-h-[200px] bg-white/[0.02] border-white/10 focus:border-primary/50 rounded-none resize-none"
                  onChange={handleChange}
                />
              </div>
              <Button
                type="submit"
                className="w-full md:w-auto h-16 px-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-[0.2em] rounded-none transition-all"
              >
                Send via Email
                <Send className="ml-3 h-4 w-4" />
              </Button>
              <a
                href="https://wa.me/5519998858366?text=Hi%20Rafael!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk%20about%20your%20work."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto h-16 px-12 bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center font-bold uppercase tracking-[0.2em] rounded-none transition-all no-underline"
              >
                Chat on WhatsApp
                <MessageCircle className="ml-3 h-5 w-5" />
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
