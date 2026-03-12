import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  ChevronRight,
  Globe,
  Layers,
  Loader2,
  Menu,
  MessageSquare,
  Settings2,
  ShieldCheck,
  Star,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useSubmitContact } from "./hooks/useQueries";

const queryClient = new QueryClient();

function KrispLogo({ size = "default" }: { size?: "default" | "large" }) {
  const textClass = size === "large" ? "text-4xl" : "text-xl";
  return (
    <span className={`font-display font-black tracking-tight ${textClass}`}>
      <span className="text-foreground">KR</span>
      <span className="text-primary">/</span>
      <span className="text-foreground">SP</span>
    </span>
  );
}

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#hero" aria-label="KRISP Works">
          <KrispLogo />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-ocid="nav.link"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <Button
            asChild
            data-ocid="nav.primary_button"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-5"
          >
            <a href="#contact">Get Started</a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-b border-border"
          >
            <ul className="container mx-auto py-4 px-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-ocid="nav.link"
                    className="text-foreground text-lg font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Button
                  data-ocid="nav.primary_button"
                  className="w-full bg-primary text-primary-foreground font-semibold"
                  onClick={() => {
                    setMobileOpen(false);
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get Started
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/krisp-hero-bg.dim_1600x900.jpg"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background" />
      </div>

      {/* Amber accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-[0.2em] uppercase border border-primary/40 text-primary rounded-full">
            Strategic Business Consulting
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-6"
        >
          We Don&apos;t Fix
          <br />
          <span className="text-gradient-amber">Businesses.</span>
          <br />
          We Transform Them.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          KRISP Works delivers precision strategy, operational excellence, and
          measurable growth for ambitious organizations ready to operate at a
          higher level.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            asChild
            size="lg"
            data-ocid="hero.primary_button"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-6 text-base rounded-none amber-glow"
          >
            <a href="#contact">
              Start Your Transformation
              <ArrowRight className="ml-2" size={18} />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            data-ocid="hero.secondary_button"
            className="border-border text-foreground hover:bg-secondary font-semibold px-8 py-6 text-base rounded-none"
          >
            <a href="#services">Explore Services</a>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto"
        >
          {[
            { value: "12+", label: "Years of Expertise" },
            { value: "200+", label: "Clients Transformed" },
            { value: "94%", label: "Client Retention" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-black text-3xl text-primary">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-xs mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronRight className="text-primary rotate-90" size={24} />
      </motion.div>
    </section>
  );
}

const services = [
  {
    icon: Brain,
    title: "Strategic Advisory",
    description:
      "Board-level strategic counsel that cuts through complexity. We align your leadership team around a clear, achievable vision and the roadmap to reach it.",
  },
  {
    icon: BarChart3,
    title: "Performance Optimization",
    description:
      "Systematic analysis of your operations, revenue streams, and cost structure to unlock hidden efficiency and drive sustainable margin improvement.",
  },
  {
    icon: Layers,
    title: "Organizational Design",
    description:
      "Restructure your teams, processes, and reporting lines to reduce friction and accelerate decision-making at every layer of the business.",
  },
  {
    icon: Globe,
    title: "Market Expansion",
    description:
      "Rigorous market entry analysis, competitive positioning, and go-to-market execution support for businesses ready to scale into new geographies or verticals.",
  },
  {
    icon: Settings2,
    title: "Technology & Systems",
    description:
      "From digital transformation audits to CRM and ERP overhauls — we ensure your tech stack serves your strategy, not the other way around.",
  },
  {
    icon: ShieldCheck,
    title: "Risk & Governance",
    description:
      "Identify and mitigate the risks that keep executives up at night. We build governance frameworks that protect your business while enabling bold moves.",
  },
];

function ServicesSection() {
  return (
    <section id="services" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
            What We Do
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl mt-3 mb-4">
            Services That Drive Results
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every engagement is tailored. Every recommendation is backed by
            data. Every outcome is measured.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card border border-border p-8 card-hover group cursor-default"
            >
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "KRISP Works didn't just diagnose our problems — they stayed until the fix held. Revenue is up 38% year-over-year and our leadership team finally speaks the same language.",
    name: "Mariela Voss",
    role: "CEO",
    company: "Voss Capital Group",
    initials: "MV",
  },
  {
    quote:
      "The market expansion playbook they built for us cut our entry timeline from 18 months to 7. The rigor was extraordinary and the results spoke for themselves.",
    name: "Daniel Okafor",
    role: "Chief Strategy Officer",
    company: "NovaBridge Technologies",
    initials: "DO",
  },
  {
    quote:
      "Every consultant we'd hired before gave us slides. KRISP gave us a functioning system. Six months in, we're operating with a clarity we've never had before.",
    name: "Priya Nambiar",
    role: "Managing Director",
    company: "Solene Logistics",
    initials: "PN",
  },
];

function TestimonialsSection() {
  return (
    <section className="py-28 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
            Client Results
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl mt-3">
            Proof, Not Promises
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border p-8 relative"
            >
              {/* Amber quote mark */}
              <div className="font-display font-black text-6xl text-primary/20 leading-none absolute top-4 right-6">
                &ldquo;
              </div>
              <div className="flex gap-1 mb-4">
                {["s1", "s2", "s3", "s4", "s5"].map((k) => (
                  <Star
                    key={k}
                    className="text-primary fill-primary"
                    size={14}
                  />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6 text-sm">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 flex items-center justify-center font-bold text-primary text-sm rounded-full">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-muted-foreground text-xs">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const values = [
    {
      icon: Zap,
      title: "Precision Over Volume",
      description:
        "We work with a select number of clients at a time. That means you get full attention, not templated advice.",
    },
    {
      icon: MessageSquare,
      title: "Radical Candor",
      description:
        "We tell you what you need to hear, not what you want to hear. Hard truths, delivered respectfully, create lasting change.",
    },
    {
      icon: CheckCircle2,
      title: "Outcomes-First Accountability",
      description:
        "We define success metrics at the start of every engagement and hold ourselves accountable to them — not just deliverables.",
    },
  ];

  return (
    <section id="about" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
              Why KRISP Works
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl mt-3 mb-6 leading-tight">
              The Difference Between
              <br />
              <span className="text-gradient-amber">Good and Exceptional</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Most consultants hand you a report. We embed ourselves in your
              organization, challenge your assumptions, and stay until the
              change takes root. Our model is built around accountability, not
              advisory theater.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Founded on the principle that great strategy is worthless without
              flawless execution, KRISP Works has become the partner of choice
              for leaders who refuse to accept mediocre outcomes.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 items-start"
              >
                <div className="w-11 h-11 bg-primary/10 flex items-center justify-center shrink-0">
                  <v.icon className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-1">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    question: "What types of businesses does KRISP Works typically work with?",
    answer:
      "We primarily partner with mid-market companies ($10M–$500M in revenue) across professional services, technology, logistics, and financial services. We occasionally work with high-growth early-stage companies and large enterprise divisions. The common thread is leadership teams that are serious about change.",
  },
  {
    question: "How long does a typical engagement last?",
    answer:
      "Engagements typically run between 3 and 12 months depending on scope. A focused diagnostic engagement may take 6–8 weeks. A full organizational transformation with implementation support is usually 9–12 months. We're transparent about timelines upfront and don't extend engagements unnecessarily.",
  },
  {
    question: "What does the onboarding process look like?",
    answer:
      "We begin every engagement with a structured discovery phase: stakeholder interviews, data review, and a competitive landscape assessment. From there, we present a prioritized action plan with clear owners, milestones, and success metrics. Onboarding typically takes 2–3 weeks.",
  },
  {
    question: "Do you work on a retainer, project, or performance basis?",
    answer:
      "We offer all three engagement structures. Most clients start with a project-based diagnostic, then move to a retainer for ongoing advisory. For certain engagements where it's appropriate, we offer performance-based pricing tied to defined business outcomes.",
  },
  {
    question: "How do you measure the success of an engagement?",
    answer:
      "We define success metrics collaboratively at the start of every engagement — revenue targets, cost savings, time-to-market improvements, retention rates, or other KPIs relevant to your goals. We report against these metrics monthly and provide a formal outcomes assessment at engagement close.",
  },
  {
    question: "Can KRISP Works help with urgent turnaround situations?",
    answer:
      "Yes. We have a dedicated rapid-response practice for organizations facing financial distress, leadership transitions, or operational crises. These engagements begin within 48–72 hours of contract execution and are designed for speed and impact above all else.",
  },
];

function FaqSection() {
  return (
    <section id="faq" className="py-28 bg-secondary/20">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
            FAQ
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl mt-3">
            Questions Answered
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <AccordionItem
                value={`item-${i + 1}`}
                data-ocid={`faq.item.${i + 1}`}
                className="border border-border bg-card px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="font-display font-semibold text-left py-5 hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { mutateAsync, isPending, isSuccess, isError } = useSubmitContact();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await mutateAsync(formData);
  };

  return (
    <section id="contact" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
              Get In Touch
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl mt-3 mb-4">
              Ready to Operate at a
              <br />
              <span className="text-gradient-amber">Higher Level?</span>
            </h2>
            <p className="text-muted-foreground">
              Tell us about your business. We respond to every inquiry within
              one business day.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                data-ocid="contact.success_state"
                className="text-center py-16 border border-primary/40 bg-primary/5"
              >
                <CheckCircle2 className="text-primary mx-auto mb-4" size={48} />
                <h3 className="font-display font-bold text-2xl mb-2">
                  Message Sent
                </h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. A KRISP Works advisor will contact
                  you within one business day.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      data-ocid="contact.input"
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, name: e.target.value }))
                      }
                      required
                      className="bg-secondary border-border rounded-none h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      data-ocid="contact.input"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, email: e.target.value }))
                      }
                      required
                      className="bg-secondary border-border rounded-none h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-semibold">
                    Tell Us About Your Challenge
                  </Label>
                  <Textarea
                    id="message"
                    data-ocid="contact.textarea"
                    placeholder="Describe your business situation, goals, or the specific challenge you're facing..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, message: e.target.value }))
                    }
                    required
                    rows={6}
                    className="bg-secondary border-border rounded-none resize-none"
                  />
                </div>

                {isError && (
                  <p className="text-destructive text-sm">
                    Something went wrong. Please try again or contact us
                    directly.
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isPending}
                  data-ocid="contact.submit_button"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base py-6 rounded-none amber-glow"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" size={18} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="ml-2" size={18} />
                    </>
                  )}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <KrispLogo />
            <p className="text-muted-foreground text-sm mt-4 leading-relaxed max-w-xs">
              Precision strategy and operational excellence for organizations
              ready to transform.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Strategic Advisory",
                "Performance Optimization",
                "Organizational Design",
                "Market Expansion",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {year} KRISP Works. All rights reserved.
          </p>
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            Built with ❤ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <NavBar />
        <main>
          <HeroSection />
          <ServicesSection />
          <TestimonialsSection />
          <AboutSection />
          <FaqSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
