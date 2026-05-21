import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Braces,
  Cloud,
  Database,
  FileStack,
  Github,
  Layers3,
  Linkedin,
  Loader2,
  Mail,
  Menu,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

type Metric = {
  value: string;
  label: string;
  note: string;
};

type Project = {
  title: string;
  category: string;
  description: string;
  status: string;
  privateBadge?: string;
  problem: string;
  solution: string;
  features: string[];
  primaryActionLabel: string;
  primaryActionHref?: string;
  secondaryActionLabel?: string;
  secondaryActionHref?: string;
  icon: LucideIcon;
};

type SkillGroup = {
  title: string;
  summary: string;
  icon: LucideIcon;
  items: string[];
};

type ContactFormState = {
  subject: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>;

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const metrics: Metric[] = [
  {
    value: "20+",
    label: "Projects Built",
    note: "SaaS products, internal platforms, and engineering tools.",
  },
  {
    value: "6+",
    label: "Systems in Production",
    note: "Operational systems designed for daily use and repeatability.",
  },
  {
    value: "3+",
    label: "Years Experience",
    note: "Building production software across SaaS, internal systems, and automation.",
  },
];

const projects: Project[] = [
  {
    title: "Autoopera",
    category: "Service Operations SaaS",
    description: "Scheduling and business management platform for service professionals.",
    status: "Production Project",
    problem:
      "Barbershops, beauty salons and service providers often manage schedules manually through WhatsApp and fragmented tools.",
    solution:
      "Built a platform allowing professionals to centralize scheduling, automate communication and manage business workflows.",
    features: [
      "Public booking page",
      "Shared professional calendar",
      "Appointment reminders",
      "Client self-booking",
      "Service management",
      "Business dashboard",
      "Workflow organization",
    ],
    primaryActionLabel: "Live Action",
    primaryActionHref: "https://autoopera.com.br",
    secondaryActionLabel: "Source Code",
    secondaryActionHref: "https://github.com/orafaelmatos/autoopera",
    icon: Workflow,
  },
  {
    title: "Best Part School",
    category: "Education SaaS Platform",
    description: "AI-powered learning and school management platform.",
    status: "Production Project",
    problem:
      "Schools and teachers often struggle with disconnected learning experiences and manual administrative workflows.",
    solution:
      "Built a platform combining AI-assisted learning with classroom and school management.",
    features: [
      "AI tutor using classroom context",
      "Speaking practice with audio",
      "Pronunciation correction",
      "Teacher notes",
      "Payment management",
      "Student dashboards",
      "Lesson tracking",
      "Progress visualization",
    ],
    primaryActionLabel: "Live Action",
    primaryActionHref: "https://bestpartschool.com",
    secondaryActionLabel: "Source Code",
    secondaryActionHref: "https://github.com/orafaelmatos/best-part-school",
    icon: Sparkles,
  },
  {
    title: "Engineering Document Management System",
    category: "Internal Enterprise Platform",
    description: "Internal engineering workflow and document lifecycle platform.",
    status: "Internal Enterprise System",
    privateBadge: "Private Company System",
    problem:
      "Engineering teams needed centralized control over technical drawings, revisions and internal workflows.",
    solution:
      "Built an internal system inspired by PDM concepts for managing engineering documents and process control.",
    features: [
      "Technical drawing permissions",
      "Revision history",
      "Version control",
      "ISO document management",
      "Non-conformity workflows",
      "Department access control",
      "Internal process management",
    ],
    primaryActionLabel: "View Codebase",
    primaryActionHref: "https://github.com/orafaelmatos/gestor-documentos",
    icon: FileStack,
  },
];

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    summary: "Interfaces that feel product-grade, readable, and operationally useful.",
    icon: Layers3,
    items: ["React", "Js", "TypeScript", "Tailwind", "Design systems"],
  },
  {
    title: "Backend",
    summary: "Business logic, APIs, and platform services built around reliability and maintainability.",
    icon: Braces,
    items: ["Python", "Django", "FastAPI", "Java and Spring", "Node"],
  },
  {
    title: "Database",
    summary: "Data modeling with emphasis on consistency, reporting, and clear domain structure.",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    title: "Architecture",
    summary: "Systems designed around workflows, not just endpoints or screens.",
    icon: Blocks,
    items: ["System design", "Clean architecture", "Domain modeling", "Integrations"],
  },
  {
    title: "Automation",
    summary: "Software that removes repetitive work and standardizes operational execution.",
    icon: Workflow,
    items: ["Selenium", "Scheduled jobs", "Async processing", "Internal tooling"],
  },
  {
    title: "Cloud",
    summary: "Shipping production-ready services with containers, CI/CD, and pragmatic deployment choices.",
    icon: Cloud,
    items: ["Docker", "CI/CD", "Cloud Environment", "VPS"],
  },
];

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/orafaelmatos",
    detail: "Code, experiments, and product repositories.",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/orafaelmatos",
    detail: "Professional profile for recruiters and hiring teams.",
    icon: Linkedin,
  },
];

const whatsappHref = `https://wa.me/5519995828704?text=${encodeURIComponent(
  "Hi Rafael, I found your portfolio and would like to connect.",
)}`;

const particlePositions = [
  { top: "10%", left: "12%" },
  { top: "18%", left: "82%" },
  { top: "36%", left: "72%" },
  { top: "56%", left: "16%" },
  { top: "66%", left: "88%" },
  { top: "76%", left: "58%" },
];

const SectionHeader = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) => (
  <div data-reveal className="max-w-3xl">
    <p className="eyebrow">{eyebrow}</p>
    <h2 className="section-title mt-5 text-balance">{title}</h2>
    <p className="body-copy mt-6 max-w-2xl">{description}</p>
  </div>
);

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const Icon = project.icon;
  const gradientTones = [
    "from-primary/28 via-sky-400/12 to-transparent",
    "from-accent/26 via-primary/14 to-transparent",
    "from-cyan-400/24 via-primary/10 to-transparent",
  ];
  const haloTones = ["bg-primary/16", "bg-accent/14", "bg-cyan-400/14"];

  return (
    <article
      data-reveal
      className={cn(
        "group relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.03] p-[1px] shadow-panel transition-all duration-500 hover:-translate-y-1.5 hover:border-white/16",
        index > 0 && `reveal-delay-${Math.min(index, 3)}`,
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-80", gradientTones[index % gradientTones.length])} />
      <div className="relative overflow-hidden rounded-[calc(2.2rem-1px)] bg-[linear-gradient(180deg,rgba(11,17,29,0.96),rgba(8,13,24,0.98))] p-7 md:p-10">
        <div
          className={cn(
            "absolute -right-20 top-10 h-52 w-52 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-110",
            haloTones[index % haloTones.length],
          )}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10">
          <div className="flex h-full flex-col">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="surface-outline inline-flex items-center gap-3 rounded-full px-4 py-2">
                <div className="rounded-full border border-white/10 bg-white/[0.04] p-2">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.26em] text-muted-foreground">
                  {project.category}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-emerald-100">
                  {project.status}
                </span>
                {project.privateBadge ? (
                  <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-amber-100">
                    {project.privateBadge}
                  </span>
                ) : null}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="mt-5 max-w-2xl font-display text-4xl font-semibold tracking-[-0.055em] text-foreground md:text-5xl">
                {project.title}
              </h3>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                {project.description}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {project.primaryActionHref ? (
                <Button
                  asChild
                  size="lg"
                  className="group/primary h-12 rounded-full border border-primary/40 bg-gradient-to-r from-primary to-sky-400 px-6 text-sm font-medium text-primary-foreground shadow-[0_20px_60px_-30px_rgba(37,99,235,0.95)] transition-transform duration-300 hover:-translate-y-0.5 hover:opacity-95"
                >
                  <a href={project.primaryActionHref} target="_blank" rel="noreferrer">
                    {project.primaryActionLabel}
                    <ArrowUpRight className="transition-transform duration-300 group-hover/primary:translate-x-0.5 group-hover/primary:-translate-y-0.5" />
                  </a>
                </Button>
              ) : (
                <div className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-6 text-sm font-medium text-foreground">
                  {project.primaryActionLabel}
                  <ShieldCheck className="h-4 w-4 text-primary" />
                </div>
              )}

              {project.secondaryActionHref && project.secondaryActionLabel ? (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="group/secondary h-12 rounded-full border-white/12 bg-white/[0.03] px-6 text-sm text-foreground transition-colors duration-300 hover:bg-white/[0.08]"
                >
                  <a href={project.secondaryActionHref} target="_blank" rel="noreferrer">
                    <Github className="transition-transform duration-300 group-hover/secondary:-translate-y-0.5" />
                    {project.secondaryActionLabel}
                  </a>
                </Button>
              ) : null}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="surface-card rounded-[1.7rem] p-6 md:p-7">
              <p className="eyebrow">Problem</p>
              <p className="mt-4 text-base leading-8 text-foreground/88 md:text-lg">{project.problem}</p>
            </div>

            <div className="surface-card rounded-[1.7rem] p-6 md:p-7">
              <p className="eyebrow">Solution</p>
              <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">{project.solution}</p>
            </div>

            <div className="surface-card rounded-[1.7rem] p-6 md:p-7">
              <div className="flex items-center justify-between gap-4">
                <p className="eyebrow">Key Features</p>
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
                  {project.features.length} Highlights
                </span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="surface-outline flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm text-muted-foreground"
                  >
                    <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_16px_rgba(59,130,246,0.7)]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [contactForm, setContactForm] = useState<ContactFormState>({ subject: "", message: "" });
  const [contactErrors, setContactErrors] = useState<ContactFormErrors>({});
  const [contactStatus, setContactStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [contactStatusMessage, setContactStatusMessage] = useState("");
  const { toast } = useToast();
  const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  const resetContactFeedback = () => {
    setContactErrors({});
    setContactStatus("idle");
    setContactStatusMessage("");
  };

  const handleContactDialogChange = (open: boolean) => {
    setIsContactDialogOpen(open);
    if (!open) {
      resetContactFeedback();
    }
  };

  const openContactDialog = () => {
    resetContactFeedback();
    setIsContactDialogOpen(true);
  };

  const handleContactFieldChange =
    (field: keyof ContactFormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setContactForm((current) => ({
        ...current,
        [field]: event.target.value,
      }));

      setContactErrors((current) => ({
        ...current,
        [field]: undefined,
      }));

      if (contactStatus !== "idle") {
        setContactStatus("idle");
        setContactStatusMessage("");
      }
    };

  const validateContactForm = () => {
    const nextErrors: ContactFormErrors = {};

    if (!contactForm.subject.trim()) {
      nextErrors.subject = "Subject is required.";
    }

    if (!contactForm.message.trim()) {
      nextErrors.message = "Message is required.";
    }

    setContactErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateContactForm()) {
      setContactStatus("error");
      setContactStatusMessage("Please complete the required fields before sending.");
      return;
    }

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      setContactStatus("error");
      setContactStatusMessage("Email service is not configured right now.");
      toast({
        title: "Email unavailable",
        description: "The contact form is missing its EmailJS configuration.",
        variant: "destructive",
      });
      return;
    }

    setContactStatus("loading");
    setContactStatusMessage("Sending your message...");

    try {
      await emailjs.send(
        emailServiceId,
        emailTemplateId,
        {
          subject: contactForm.subject.trim(),
          title: contactForm.subject.trim(),
          message: contactForm.message.trim(),
          from_name: "Portfolio Visitor",
          source: "Portfolio Contact Section",
        },
        emailPublicKey,
      );

      setContactForm({ subject: "", message: "" });
      setContactErrors({});
      setContactStatus("success");
      setContactStatusMessage("Message sent successfully. Rafael will receive it shortly.");
      toast({
        title: "Message sent",
        description: "Your message was sent successfully.",
      });
    } catch (error) {
      console.error("EmailJS send failed:", error);
      setContactStatus("error");
      setContactStatusMessage("The message could not be sent right now. Please try again.");
      toast({
        title: "Message failed",
        description: "The email could not be sent. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="bg-grid-fade absolute inset-x-0 top-0 h-[48rem] opacity-70" />
        <div className="ambient-orb absolute left-[8%] top-20 h-56 w-56 rounded-full bg-primary/18" />
        <div
          className="ambient-orb absolute right-[10%] top-28 h-72 w-72 rounded-full bg-accent/14"
          style={{ animationDelay: "3s" }}
        />
        <div className="absolute inset-0">
          {particlePositions.map((particle, index) => (
            <span
              key={`${particle.top}-${particle.left}`}
              className="particle absolute h-1.5 w-1.5 rounded-full bg-white/55 shadow-[0_0_16px_rgba(255,255,255,0.35)]"
              style={{
                top: particle.top,
                left: particle.left,
                animationDelay: `${index * 1.1}s`,
                animationDuration: `${11 + index}s`,
              }}
            />
          ))}
        </div>
      </div>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500",
          isScrolled ? "border-b border-white/8 bg-background/78 backdrop-blur-2xl" : "bg-transparent",
        )}
      >
        <div className="container">
          <div className="flex h-20 items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("top")}
              className="text-left transition-opacity hover:opacity-85"
            >
              <div className="font-display text-2xl font-semibold tracking-[-0.04em]">
                Rafael Matos
              </div>
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
                Full Stack Developer
              </div>
            </button>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href="/Curriculo.pdf"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
              >
                Resume
              </a>
              <Button
                asChild
                className="h-11 rounded-full border border-primary/40 bg-primary/90 px-5 font-medium shadow-glow"
              >
                <a href="mailto:rafaelmatos.dev1@gmail.com">
                  Contact
                  <ArrowUpRight />
                </a>
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="surface-outline inline-flex h-11 w-11 items-center justify-center rounded-full md:hidden"
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-white/8 bg-background/95 backdrop-blur-2xl md:hidden">
            <div className="container py-6">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="surface-outline flex items-center justify-between rounded-2xl px-4 py-4 text-left"
                  >
                    <span className="font-display text-lg font-medium">{item.label}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </button>
                ))}
                <a
                  href="/Curriculo.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="surface-outline rounded-2xl px-4 py-4 font-display text-lg font-medium"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main id="top" className="relative z-10">
        <section id="about" className="container scroll-mt-28 pt-32 md:pt-30">
          <div className="grid max-w-6xl gap-14 pb-24 xl:grid-cols-[minmax(0,1fr)_minmax(240px,280px)] xl:items-center">
            <div data-reveal className="max-w-4xl">
              <div className="surface-outline inline-flex items-center gap-3 rounded-full px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.75)]" />
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-muted-foreground">
                  Remote from Brazil • Open to international teams
                </span>
              </div>

              <h1 className="mt-8 max-w-5xl font-display text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-foreground md:text-6xl xl:text-[4.5rem]">
                Full Stack Developer building scalable web applications and systems that solve real business problems.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
                I create SaaS platforms, internal tools and engineering solutions focused on performance, automation and great user experiences.              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {metrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    data-reveal
                    className={cn(
                      "surface-card rounded-[1.5rem] px-5 py-5",
                      index > 0 && `reveal-delay-${Math.min(index, 3)}`,
                    )}
                  >
                    <p className="font-display text-3xl font-semibold tracking-[-0.05em] text-foreground md:text-[2.6rem]">
                      {metric.value}
                    </p>
                    <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-primary/85">
                      {metric.label}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{metric.note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="h-14 rounded-full border border-primary/50 bg-primary px-8 text-base font-medium shadow-glow hover:bg-primary/92"
                >
                  View Projects
                  <ArrowRight />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="h-14 rounded-full border-white/12 bg-white/[0.03] px-8 text-base text-foreground hover:bg-white/[0.06]"
                >
                  Contact Me
                </Button>
              </div>
            </div>

            <div data-reveal className="reveal-delay-2 xl:-mt-12 xl:justify-self-end">
              <div className="relative mx-auto w-full max-w-[220px] sm:max-w-[250px] xl:mx-0 xl:max-w-[280px]">
                <div className="absolute -inset-4 rounded-[2.4rem] bg-gradient-to-br from-primary/18 via-accent/12 to-transparent blur-3xl" />
                <div className="surface-card relative overflow-hidden rounded-[2rem] border border-white/10 p-3 shadow-panel">
                  <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                  <img
                    src="/me.jpg"
                    alt="Rafael Matos"
                    className="h-[300px] w-full rounded-[1.45rem] object-cover object-center sm:h-[340px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="container py-24 md:py-28">
          <SectionHeader
            eyebrow="Projects"
            title="Featured Projects"
            description="Production-focused systems designed to solve real workflow and business problems."
          />

          <div className="mt-14 space-y-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          <div data-reveal className="mt-12">
            <div className="surface-hero mx-auto max-w-4xl rounded-[2rem] p-8 text-center md:p-12">
              <p className="eyebrow">More Projects</p>
              <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-foreground md:text-2xl">
                Want to explore more projects, experiments and ideas?
              </p>
              <div className="mt-8 flex justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="group/github h-12 rounded-full border-white/12 bg-white/[0.04] px-6 text-sm text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]"
                >
                  <a href="https://github.com/orafaelmatos" target="_blank" rel="noreferrer">
                    <Github className="transition-transform duration-300 group-hover/github:-translate-y-0.5" />
                    View All Projects
                    <ArrowUpRight className="transition-transform duration-300 group-hover/github:translate-x-0.5 group-hover/github:-translate-y-0.5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>


        <section id="skills" className="container py-24 md:py-28">
          <SectionHeader
            eyebrow="Skills"
            title="Capabilities grouped by how they contribute to product delivery."
            description="The stack matters, but the real value is knowing how to use it to design systems that are stable, useful, and aligned with the workflow they serve."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <div
                  key={group.title}
                  data-reveal
                  className={cn(
                    "surface-card rounded-[1.7rem] p-6 transition-transform duration-500 hover:-translate-y-1",
                    index > 0 && `reveal-delay-${(index % 3) + 1}`,
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="eyebrow">{group.title}</p>
                      <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-foreground">
                        {group.title}
                      </h3>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>

                  <p className="mt-5 text-base leading-8 text-muted-foreground">{group.summary}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="thinking" className="container py-24 md:py-28">
          <div data-reveal className="surface-hero rounded-[2rem] p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)] lg:items-center">
              <div>
                <p className="eyebrow">How I Think</p>
                <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-[-0.05em] text-foreground md:text-5xl">
                  I enjoy turning operational problems into scalable software systems.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                  The goal is usually the same: understand the real bottleneck, model the workflow clearly, and ship software that improves how the work actually gets done.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  "Start from the workflow before choosing the implementation.",
                  "Use automation to remove friction, not just add features.",
                  "Design for maintainability so the system keeps helping after launch.",
                ].map((thought) => (
                  <div key={thought} className="surface-outline rounded-[1.4rem] px-5 py-4">
                    <p className="text-base leading-7 text-foreground/88">{thought}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="container py-24 md:py-28">
          <div data-reveal className="surface-hero rounded-[2.2rem] p-8 md:p-12">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="eyebrow">Contact</p>
                <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em] text-foreground md:text-6xl">
                  Let&apos;s build something meaningful.
                </h2>
                <p className="mt-6 text-lg leading-8 text-muted-foreground md:text-xl">
                  Based in Brazil and focused on remote product and engineering work for teams that value clear systems, thoughtful execution, and reliable delivery.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="group/whatsapp h-14 rounded-full border border-emerald-300/20 bg-[linear-gradient(135deg,rgba(34,197,94,0.88),rgba(5,150,105,0.88))] px-8 text-base font-medium text-white shadow-[0_24px_64px_-28px_rgba(34,197,94,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
                >
                  <a href={whatsappHref} target="_blank" rel="noreferrer">
                    Chat on WhatsApp
                    <MessageCircle className="transition-transform duration-300 group-hover/whatsapp:translate-x-0.5" />
                  </a>
                </Button>

                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  onClick={openContactDialog}
                  className="h-14 rounded-full border-white/12 bg-white/[0.03] px-8 text-base text-foreground transition-colors duration-300 hover:bg-white/[0.06]"
                >
                  Email
                  <Mail />
                </Button>
              </div>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              <button
                type="button"
                onClick={openContactDialog}
                data-reveal
                className="surface-outline group rounded-[1.5rem] p-5 text-left transition-transform duration-500 hover:-translate-y-1 hover:border-primary/30 reveal-delay-1"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.04em] text-foreground">Email</h3>
                <p className="mt-3 text-base leading-8 text-muted-foreground">
                  Open the contact form to send a direct message with subject and context.
                </p>
                <p className="mt-4 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-primary/80">
                  rafaelmatos.dev1@gmail.com
                </p>
              </button>

              {contactLinks.map((link, index) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    data-reveal
                    className={cn(
                      "surface-outline group rounded-[1.5rem] p-5 transition-transform duration-500 hover:-translate-y-1 hover:border-primary/30",
                      `reveal-delay-${Math.min(index + 2, 3)}`,
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.04em] text-foreground">
                      {link.label}
                    </h3>
                    <p className="mt-3 text-base leading-8 text-muted-foreground">{link.detail}</p>
                  </a>
                );
              })}
            </div>
          </div>

          <Dialog open={isContactDialogOpen} onOpenChange={handleContactDialogChange}>
            <DialogContent className="overflow-hidden rounded-[2rem] border-white/10 bg-[linear-gradient(180deg,rgba(13,18,30,0.98),rgba(9,14,24,0.98))] p-0 shadow-[0_32px_120px_-48px_rgba(0,0,0,0.92)] sm:max-w-2xl">
              <div className="relative">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <div className="absolute -right-16 top-6 h-40 w-40 rounded-full bg-primary/12 blur-3xl" />
                <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />

                <div className="relative p-8 md:p-10">
                  <DialogHeader className="text-left">
                    <p className="eyebrow">Email</p>
                    <DialogTitle className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em] text-foreground md:text-4xl">
                      Send a direct message
                    </DialogTitle>
                    <DialogDescription className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                      Share the subject and a short message. The form sends through EmailJS using the existing portfolio configuration.
                    </DialogDescription>
                  </DialogHeader>

                  <form onSubmit={handleContactSubmit} className="mt-8 space-y-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-subject"
                        className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted-foreground"
                      >
                        Subject
                      </label>
                      <Input
                        id="contact-subject"
                        value={contactForm.subject}
                        onChange={handleContactFieldChange("subject")}
                        placeholder="Role, project, or reason for reaching out"
                        aria-invalid={Boolean(contactErrors.subject)}
                        className={cn(
                          "h-14 rounded-2xl border-white/10 bg-white/[0.03] px-4 text-base text-foreground transition-colors focus-visible:ring-1 focus-visible:ring-primary",
                          contactErrors.subject && "border-destructive/70 focus-visible:ring-destructive",
                        )}
                      />
                      {contactErrors.subject ? (
                        <p className="text-sm text-destructive">{contactErrors.subject}</p>
                      ) : null}
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="contact-message"
                        className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted-foreground"
                      >
                        Message
                      </label>
                      <Textarea
                        id="contact-message"
                        value={contactForm.message}
                        onChange={handleContactFieldChange("message")}
                        placeholder="Hi Rafael, I found your portfolio and would like to talk about..."
                        aria-invalid={Boolean(contactErrors.message)}
                        className={cn(
                          "min-h-[180px] rounded-2xl border-white/10 bg-white/[0.03] px-4 py-3 text-base text-foreground transition-colors focus-visible:ring-1 focus-visible:ring-primary",
                          contactErrors.message && "border-destructive/70 focus-visible:ring-destructive",
                        )}
                      />
                      {contactErrors.message ? (
                        <p className="text-sm text-destructive">{contactErrors.message}</p>
                      ) : null}
                    </div>

                    {contactStatus !== "idle" ? (
                      <div
                        className={cn(
                          "rounded-2xl border px-4 py-3 text-sm",
                          contactStatus === "loading" &&
                          "border-primary/20 bg-primary/10 text-primary-foreground/90",
                          contactStatus === "success" &&
                          "border-emerald-400/20 bg-emerald-400/10 text-emerald-100",
                          contactStatus === "error" &&
                          "border-destructive/20 bg-destructive/10 text-red-100",
                        )}
                      >
                        {contactStatusMessage}
                      </div>
                    ) : null}

                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => handleContactDialogChange(false)}
                        className="h-12 rounded-full border-white/12 bg-white/[0.03] px-6 text-sm text-foreground hover:bg-white/[0.06]"
                      >
                        Close
                      </Button>

                      <Button
                        type="submit"
                        disabled={contactStatus === "loading"}
                        className="group/send h-12 rounded-full border border-primary/40 bg-gradient-to-r from-primary to-sky-400 px-6 text-sm font-medium text-primary-foreground shadow-[0_18px_48px_-24px_rgba(37,99,235,0.9)] hover:opacity-95 disabled:opacity-70"
                      >
                        {contactStatus === "loading" ? (
                          <>
                            <Loader2 className="animate-spin" />
                            Sending
                          </>
                        ) : (
                          <>
                            Send
                            <Send className="transition-transform duration-300 group-hover/send:translate-x-0.5" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </section>

        <footer className="container pb-10 pt-4">
          <div className="flex flex-col gap-3 border-t border-white/8 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p>Rafael Matos • Full Stack Developer</p>
            <p>Building systems for teams that want less manual work and better software.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
