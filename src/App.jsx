import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Database,
  Download,
  Gauge,
  LineChart,
  Mail,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const impactMetrics = [
  { value: "+32%", label: "Conversion rate improvement", context: "Healthcare lead-generation web properties" },
  { value: "4.3s → 1.8s", label: "Average page-load improvement", context: "WordPress performance optimization" },
  { value: "+68%", label: "Organic traffic growth", context: "Healthcare insurance comparison infrastructure" },
  { value: "99.7%", label: "Successful form routing", context: "Salesforce web-to-lead integration" },
  { value: "-89%", label: "Manual data-entry reduction", context: "CRM field mapping and automation" },
  { value: "3.2M", label: "Monthly transactions supported", context: "Global payment campaign landing pages" },
];

const caseStudies = [
  {
    title: "Enterprise Healthcare Lead Generation",
    company: "Epic Systems",
    visualLabel: "Provider Lead Funnel",
    visualType: "healthcare",
    dashboardStats: [
      { label: "Conversion Lift", value: "+32%", width: "82%" },
      { label: "Load Time", value: "1.8s", width: "72%" },
      { label: "Manual Entry", value: "-89%", width: "89%" },
    ],
    summary:
      "Developed and optimized WordPress-based web properties supporting clinical provider lead generation, conversion tracking, CRO testing, chatbot routing, and Salesforce lead management.",
    responsibilities: [
      "Implemented Google Tag Manager infrastructure across patient-facing and provider-facing websites.",
      "Built CRO testing workflows for landing pages, web forms, CTA placement, and mobile responsiveness.",
      "Integrated form submissions with Salesforce using PHP, REST APIs, duplicate detection, and lead scoring logic.",
      "Improved Core Web Vitals through lazy loading, image compression, caching, and WordPress performance tuning.",
    ],
    process: ["Landing Page", "GTM + GA4", "Form Validation", "Salesforce Routing", "Looker Dashboard"],
    evidence: [
      "Daily monitoring dashboard for uptime, Core Web Vitals, and conversion performance",
      "HIPAA-aware analytics implementation with controlled behavioral tracking",
      "Hotjar review process used to translate form friction into testable hypotheses",
    ],
    results: [
      "Improved conversion rates by 32%",
      "Reduced average page load time from 4.3s to 1.8s",
      "Managed 47 GTM tags across web properties",
      "Reduced manual data entry by 89%",
    ],
    insight:
      "Built a reliable bridge between landing-page experience, analytics accuracy, lead quality, and CRM operations.",
    tools: ["WordPress", "PHP", "JavaScript", "GTM", "GA4", "VWO", "Hotjar", "Salesforce", "Intercom"],
  },
  {
    title: "Insurance Comparison Platform Infrastructure",
    company: "Optum",
    visualLabel: "Attribution & Comparison Engine",
    visualType: "insurance",
    dashboardStats: [
      { label: "Organic Growth", value: "+68%", width: "86%" },
      { label: "Conversion Lift", value: "+29%", width: "64%" },
      { label: "Attribution Gap", value: "<2%", width: "92%" },
    ],
    summary:
      "Built comparison-site infrastructure for healthcare insurance product marketing across 14 states with SEO improvements, affiliate attribution, testing workflows, and CRM routing.",
    responsibilities: [
      "Implemented schema markup, semantic HTML, and mobile-first responsive layouts.",
      "Configured affiliate pixel tracking, postback URLs, server-side validation, and discrepancy monitoring.",
      "Used Microsoft Clarity session data to identify friction points, rage clicks, and bounce-rate opportunities.",
      "Automated campaign-specific landing page deployment using Git workflows and staging environments.",
    ],
    process: ["SEO Page", "Lead Form", "Pixel/Postback", "Validation", "CRM + QA"],
    evidence: [
      "Attribution discrepancy monitoring reduced reporting gaps from 11% to under 2%",
      "Structured landing-page deployment process helped PPC teams launch pages faster",
      "Clarity session reviews informed UX changes that reduced bounce-rate issues",
    ],
    results: [
      "Increased organic traffic by 68%",
      "Improved landing-page conversions by 29%",
      "Reduced attribution gaps from 11% to under 2%",
      "Achieved 99.7% successful form-submission routing",
    ],
    insight:
      "Created a scalable marketing platform where SEO, paid traffic, affiliate attribution, and CRM delivery worked together cleanly.",
    tools: ["WordPress", "HTML", "CSS", "Google Optimize", "Microsoft Clarity", "Salesforce", "Postback URLs", "Git"],
  },
  {
    title: "Global Payments Funnel Optimization",
    company: "PayPal",
    visualLabel: "Checkout Optimization Console",
    visualType: "payments",
    dashboardStats: [
      { label: "Transactions", value: "3.2M/mo", width: "88%" },
      { label: "Abandonment", value: "-18%", width: "58%" },
      { label: "SMS Delivery", value: "99.4%", width: "94%" },
    ],
    summary:
      "Developed checkout landing pages and merchant onboarding experiences for global payment campaigns with localized content, eCommerce tracking, experimentation, and performance improvements.",
    responsibilities: [
      "Built landing pages using HTML, CSS, JavaScript, and PHP for global payment campaigns.",
      "Configured GTM tracking architecture for eCommerce conversion funnels and affiliate attribution.",
      "Ran A/B tests across payment authorization pages, including button copy, trust badges, and error messaging.",
      "Integrated Twilio SMS verification workflows with REST APIs, webhooks, and retry handling.",
    ],
    process: ["Campaign Page", "Checkout Event", "A/B Test", "SMS Verification", "Conversion Report"],
    evidence: [
      "Localized campaign pages supported country-specific content and currency handling",
      "Enhanced eCommerce tracking improved visibility into checkout funnel behavior",
      "Twilio webhook and retry handling supported reliable verification workflows",
    ],
    results: [
      "Supported 3.2M monthly transactions across 19 countries",
      "Reduced checkout abandonment by 18%",
      "Achieved 99.4% SMS delivery reliability",
      "Improved mobile conversion rates by 21%",
    ],
    insight:
      "Optimized high-volume payment experiences by connecting frontend improvements with measurable checkout behavior.",
    tools: ["HTML", "CSS", "JavaScript", "PHP", "GTM", "VWO", "Twilio", "REST APIs", "CDN"],
  },
];

const systems = [
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Analytics & Attribution Implementation",
    description:
      "GTM container governance, GA4 event strategy, affiliate pixels, postback URLs, UTM parameter management, attribution QA, and Looker Studio reporting.",
    checks: ["Event naming convention", "Tag firing rules", "Duplicate event prevention", "Revenue/lead reconciliation"],
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "CRM-Integrated Lead Routing",
    description:
      "Web form validation, Salesforce web-to-lead routing, field mapping, duplicate detection, lead scoring, webhook delivery, and error handling.",
    checks: ["Required field validation", "Duplicate detection", "API failure handling", "Lead source preservation"],
  },
  {
    icon: <LineChart className="h-5 w-5" />,
    title: "Conversion Optimization Workflow",
    description:
      "Behavioral analytics review, hypothesis creation, A/B and multivariate testing, landing-page iteration, form optimization, and conversion reporting.",
    checks: ["Baseline measurement", "Test hypothesis", "Segment review", "Post-test implementation"],
  },
  {
    icon: <Gauge className="h-5 w-5" />,
    title: "Performance & Core Web Vitals",
    description:
      "Caching strategies, CDN configuration, image optimization, lazy loading, database query tuning, page-speed audits, and mobile responsiveness improvements.",
    checks: ["Largest Contentful Paint", "Image compression", "Cache headers", "Mobile responsiveness"],
  },
];

const skillGroups = [
  {
    title: "Frontend & WordPress",
    skills: ["HTML5", "CSS3", "JavaScript", "PHP", "WordPress", "Responsive Design", "Mobile-First Development", "Schema Markup"],
  },
  {
    title: "Tracking & Analytics",
    skills: ["Google Tag Manager", "GA4", "Looker Studio", "Hotjar", "Microsoft Clarity", "VWO", "Google Optimize", "BigQuery"],
  },
  {
    title: "Backend & Integrations",
    skills: ["REST APIs", "Webhooks", "Server-Side Tracking", "Salesforce", "API Authentication", "Database Optimization", "Caching"],
  },
  {
    title: "Marketing Technology",
    skills: ["CRO", "A/B Testing", "Affiliate Tracking", "Postback URLs", "UTM Management", "Lead Scoring", "Zapier", "n8n", "Twilio"],
  },
];

const stack = ["React", "Tailwind CSS", "Framer Motion", "lucide-react", "Vite", "Vercel or Netlify"];

function Container({ children, className = "" }) {
  return <div className={`mx-auto w-full max-w-7xl px-6 ${className}`}>{children}</div>;
}

function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-lg leading-8 text-slate-300">{description}</p>}
    </motion.div>
  );
}

function AnimatedCounter({ value, label, context }) {
  return (
    <motion.div variants={fadeUp} whileHover={{ y: -8, rotateX: 2 }} className="group rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 shadow-xl backdrop-blur transition hover:border-cyan-300/40">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="text-4xl font-black tracking-tight text-cyan-200">
        {value}
      </motion.div>
      <p className="mt-3 font-bold text-white">{label}</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">{context}</p>
    </motion.div>
  );
}

function WorkflowDiagram({ steps }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
      <div className="grid gap-3 md:grid-cols-5">
        {steps.map((step, index) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-center shadow-lg"
          >
            <motion.div
              animate={{ boxShadow: ["0 0 0 rgba(103,232,249,0)", "0 0 24px rgba(103,232,249,0.35)", "0 0 0 rgba(103,232,249,0)"] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.25 }}
              className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-cyan-300 text-xs font-bold text-slate-950"
            >
              {index + 1}
            </motion.div>
            <p className="text-xs font-semibold leading-5 text-slate-200">{step}</p>
            {index < steps.length - 1 && <div className="hidden md:block absolute right-[-12px] top-1/2 z-10 h-px w-6 bg-cyan-300/50" />}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MiniFunnel() {
  return (
    <div className="mt-5 space-y-2">
      {["Traffic", "Qualified Visits", "Form Starts", "Validated Leads"].map((item, index) => (
        <motion.div
          key={item}
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: `${100 - index * 16}%`, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: index * 0.12 }}
          className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-xs text-slate-200"
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
}

function AttributionMap() {
  const nodes = ["SEO", "Paid", "Affiliate", "Postback", "CRM"];
  return (
    <div className="mt-5 grid grid-cols-5 gap-2">
      {nodes.map((node, index) => (
        <motion.div
          key={node}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          className="rounded-xl border border-white/10 bg-white/10 p-2 text-center text-[11px] font-semibold text-slate-200"
        >
          {node}
        </motion.div>
      ))}
    </div>
  );
}

function CheckoutPulse() {
  return (
    <div className="mt-5 grid grid-cols-12 gap-1">
      {Array.from({ length: 36 }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0.25, height: 14 }}
          whileInView={{ opacity: 1, height: 14 + ((index * 7) % 34) }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.015 }}
          className="rounded-full bg-cyan-300/70"
        />
      ))}
    </div>
  );
}

function MeaningfulVisual({ study }) {
  return (
    <motion.div whileHover={{ y: -6 }} className="rounded-[2rem] border border-white/10 bg-slate-950 p-5 text-white shadow-2xl shadow-cyan-950/30">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Anonymized System View</p>
          <h4 className="mt-1 font-bold">{study.visualLabel}</h4>
        </div>
        <motion.div animate={{ rotate: [0, 8, -8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="rounded-2xl bg-cyan-300/10 p-3 text-cyan-300">
          <Search className="h-5 w-5" />
        </motion.div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {study.dashboardStats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
            <p className="text-xs text-slate-400">{stat.label}</p>
            <p className="mt-2 text-2xl font-bold text-cyan-200">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 space-y-3">
        {study.dashboardStats.map((stat, index) => (
          <div key={stat.label}>
            <div className="mb-1 flex justify-between text-[11px] text-slate-400">
              <span>{stat.label}</span>
              <span>{stat.value}</span>
            </div>
            <div className="h-3 w-full rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: stat.width }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: index * 0.12 }}
                className="h-3 rounded-full bg-cyan-300"
              />
            </div>
          </div>
        ))}
      </div>

      {study.visualType === "healthcare" && <MiniFunnel />}
      {study.visualType === "insurance" && <AttributionMap />}
      {/* {study.visualType === "payments" && <CheckoutPulse />} */}
    </motion.div>
  );
}

function FloatingOrb({ className, delay = 0 }) {
  return (
    <motion.div
      aria-hidden="true"
      animate={{ y: [0, -22, 0], scale: [1, 1.08, 1], opacity: [0.65, 0.9, 0.65] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute rounded-full blur-3xl ${className}`}
    />
  );
}

function HeroOrbit() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-60">
      {[0, 1, 2].map((ring) => (
        <motion.div
          key={ring}
          animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 28 + ring * 8, repeat: Infinity, ease: "linear" }}
          className="absolute rounded-full border border-cyan-300/10"
          style={{ width: 360 + ring * 120, height: 360 + ring * 120 }}
        >
          <div className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.9)]" />
        </motion.div>
      ))}
    </div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return <motion.div style={{ scaleX }} className="fixed left-0 top-0 z-[80] h-1 w-full origin-left bg-cyan-300" />;
}

export default function MichaelArimasPortfolio() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <ScrollProgress />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <Container className="flex items-center justify-between py-5">
          <a href="#top" className="text-lg font-bold tracking-tight">Michael Arimas</a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
            <a href="#impact" className="hover:text-white">Impact</a>
            <a href="#case-studies" className="hover:text-white">Case Studies</a>
            <a href="#systems" className="hover:text-white">Systems</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="rounded-full bg-white px-4 py-2 text-slate-950 hover:bg-cyan-200">Contact</a>
          </nav>
        </Container>
      </header>

      <section id="top" className="relative border-b border-white/10">
        <HeroOrbit />
        <FloatingOrb delay={0} className="left-[-120px] top-20 h-80 w-80 bg-cyan-500/25" />
        <FloatingOrb delay={1.5} className="right-[-160px] top-10 h-96 w-96 bg-violet-500/20" />
        <FloatingOrb delay={3} className="bottom-[-140px] left-1/3 h-80 w-80 bg-emerald-500/10" />
        <Container className="relative grid gap-12 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
              <Sparkles className="h-4 w-4" /> Web Developer · CRO · Analytics Infrastructure · WordPress
            </motion.div>
            <motion.h1 variants={fadeUp}   className="max-w-5xl text-3xl font-black tracking-tight text-white md:text-5xl">
              Building conversion-focused web platforms with precise tracking, fast performance, and clean CRM integrations.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I develop and optimize web properties that connect user experience, analytics accuracy, experimentation, and sales operations into measurable business outcomes.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#case-studies" className="inline-flex items-center justify-center rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-300/20 transition hover:bg-cyan-200">
                View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="mailto:devwalker881@gmail.com" className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          <motion.aside initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-400">Professional Focus</p>
                <h2 className="text-2xl font-bold">Growth-Oriented Web Engineering</h2>
              </div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }} className="rounded-2xl bg-cyan-300/10 p-4 text-cyan-300">
                <Code2 className="h-8 w-8" />
              </motion.div>
            </div>
            <div className="space-y-4 text-sm leading-6 text-slate-300">
              <p>
                10+ years delivering web platforms for healthcare, fintech, lead generation, affiliate attribution, and conversion-focused marketing teams.
              </p>
              <p>
                Hands-on across frontend implementation, WordPress/PHP development, analytics setup, CRM integration, experimentation, and performance optimization.
              </p>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["WordPress + PHP", "GTM + GA4", "Salesforce", "CRO Testing"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + index * 0.1 }}
                  whileHover={{ scale: 1.04 }}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm font-semibold text-slate-200"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.aside>
        </Container>
      </section>

      <section id="impact" className="relative">
        <Container className="py-20">
          <SectionHeading
            eyebrow="Selected Impact"
            title="Measured improvements across conversion, performance, attribution, and automation."
            description="Results from enterprise healthcare, insurance, and fintech web development work."
          />
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {impactMetrics.map((metric) => (
              <AnimatedCounter key={metric.label} {...metric} />
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <Container className="py-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="text-xl font-bold">Confidentiality Note</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
                  Enterprise work is summarized to protect proprietary systems, internal implementation details, and regulated healthcare/fintech environments while preserving the technical scope and business outcomes. Visuals are anonymized representations of workflows and dashboards rather than proprietary screenshots.
                </p>
              </div>
              <ShieldCheck className="h-7 w-7 shrink-0 text-cyan-300" />
            </div>
          </motion.div>
        </Container>
      </section>

      <section id="case-studies" className="relative">
        <Container className="py-24">
          <SectionHeading
            eyebrow="Case Studies"
            title="Enterprise web development work focused on measurable outcomes."
            description="Each case study highlights technical ownership, implementation evidence, anonymized visuals, and documented results."
          />

          <div className="mt-12 space-y-12">
            {caseStudies.map((study) => (
              <motion.article key={study.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-slate-950/40 backdrop-blur md:p-8">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">{study.company}</p>
                    <h3 className="mt-3 text-3xl font-black tracking-tight text-white md:text-4xl">{study.title}</h3>
                    <p className="mt-4 text-base leading-7 text-slate-300">{study.summary}</p>
                    <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 text-sm leading-6 text-cyan-50">
                      {study.insight}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {study.tools.map((tool) => (
                        <motion.span whileHover={{ y: -2 }} key={tool} className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-300">{tool}</motion.span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <MeaningfulVisual study={study} />
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-slate-400">Workflow Diagram</h4>
                  <WorkflowDiagram steps={study.process} />
                </div>

                <div className="mt-8 grid gap-5 lg:grid-cols-3">
                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5">
                    <h4 className="mb-4 flex items-center gap-2 font-bold text-white">
                      <Workflow className="h-5 w-5 text-cyan-300" /> Technical Ownership
                    </h4>
                    <div className="space-y-3">
                      {study.responsibilities.map((item) => (
                        <div key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5">
                    <h4 className="mb-4 flex items-center gap-2 font-bold text-white">
                      <Search className="h-5 w-5 text-cyan-300" /> Evidence of Work
                    </h4>
                    <div className="space-y-3">
                      {study.evidence.map((item) => (
                        <div key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5">
                    <h4 className="mb-4 flex items-center gap-2 font-bold text-white">
                      <Gauge className="h-5 w-5 text-cyan-300" /> Results
                    </h4>
                    <div className="space-y-3">
                      {study.results.map((result) => (
                        <div key={result} className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm font-semibold leading-6 text-slate-200">
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section id="systems" className="border-y border-white/10 bg-white/[0.03]">
        <Container className="py-24">
          <SectionHeading
            eyebrow="Technical Systems"
            title="Implementation across tracking, CRM, CRO, and performance workflows."
            description="Systems built, maintained, optimized, and connected across marketing and revenue operations environments."
          />
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-10 grid gap-5 md:grid-cols-2">
            {systems.map((system) => (
              <motion.div key={system.title} variants={fadeUp} whileHover={{ y: -6 }} className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 shadow-xl backdrop-blur">
                <motion.div animate={{ rotate: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity }} className="mb-4 inline-flex rounded-2xl bg-cyan-300/10 p-3 text-cyan-300">{system.icon}</motion.div>
                <h3 className="text-xl font-bold text-white">{system.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{system.description}</p>
                <div className="mt-5 border-t border-white/10 pt-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Implementation Checks</p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {system.checks.map((check) => (
                      <div key={check} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                        {check}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section id="skills">
        <Container className="py-24">
          <SectionHeading
            eyebrow="Core Skills"
            title="A practical stack for conversion-focused web development."
            description="Skill areas grouped by frontend delivery, analytics accuracy, system integration, and marketing operations."
          />
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-10 grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => (
              <motion.div key={group.title} variants={fadeUp} whileHover={{ y: -6 }} className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 shadow-xl backdrop-blur">
                <h3 className="text-lg font-bold text-white">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.span whileHover={{ y: -2, scale: 1.04 }} key={skill} className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-sm font-medium text-slate-300">{skill}</motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <Container className="py-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-xl backdrop-blur">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Portfolio Build</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">Modern, fast, and deployment-ready.</h2>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  Built as a polished frontend portfolio with purposeful animation, responsive UI, and no backend dependency.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-sm font-medium text-slate-300">{item}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <section id="contact">
        <Container className="py-24">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative overflow-hidden rounded-[2.5rem] border border-cyan-300/20 bg-cyan-300 p-8 text-slate-950 shadow-2xl shadow-cyan-950/30 md:p-12">
            <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-white/30 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-700">Contact</p>
                <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
                  Let’s build faster, better-tracked, higher-converting web experiences.
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-slate-800">
                  Based in Santa Clara, CA and available for remote opportunities focused on web development, CRO, analytics implementation, WordPress, CRM integrations, and performance optimization.
                </p>
              </div>
              <div className="space-y-3 text-sm">
                <a href="mailto:devwalker881@gmail.com" className="flex items-center gap-3 rounded-2xl bg-slate-950 px-5 py-4 font-bold text-white transition hover:bg-slate-800">
                  <Mail className="h-4 w-4" /> devwalker881@gmail.com
                </a>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-950/10 bg-white/50 px-5 py-4 font-semibold text-slate-800">
                  <MapPin className="h-4 w-4" /> Santa Clara, CA · Remote
                </div>
                <a href="/Michael_Arimas_Resume.pdf" download="Michael_Arimas_Resume.pdf" className="flex items-center gap-3 rounded-2xl border border-slate-950/10 bg-white/50 px-5 py-4 font-bold text-slate-900 transition hover:bg-white/80">
                  <Download className="h-4 w-4" /> Download Resume
                </a>
                <p className="px-2 text-xs leading-5 text-slate-700">
                  Place the resume file at <span className="font-bold">public/Michael_Arimas_Resume.pdf</span> so this download works after deployment.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
