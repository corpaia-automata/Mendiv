// =========================
// MENDIV PROGRAM PAGES - Enhanced with Framer Motion Animations
// Next.js (App Router) / React + Tailwind + Framer Motion
// Styling leans into Mendiv's brand (earthy wellness aesthetic) with #BF9264 accents.
// No external UI imports; all small UI primitives included inline per your preference.
// =========================

"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Check,
  ArrowRight,
  Cpu,
  Brain,
  Moon,
  Dna,
  Clock,
  Activity,
  HeartPulse,
  Microscope,
  Sparkles,
  BedDouble,
  Briefcase,
  Utensils,
  Dumbbell,
  Tv,
  Users,
  PenTool,
  Stethoscope,
  Smartphone,
  Layers,
  Wind,
} from "lucide-react";

// ---------- Brand Tokens ----------
const BRAND = {
  accent: "#116339", // user's preferred bronze-brown
  deepGreen: "#06391c",
  light: "#f6f7f6",
};

// ---------- Animation Variants ----------
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

// ---------- Tiny UI Primitives (inline) ----------
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      {...fadeInUp}
      className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide"
      style={{ borderColor: BRAND.accent, color: BRAND.accent }}
    >
      {children}
    </motion.span>
  );
}

function Button({
  children,
  href,
  onClick,
  variant = "solid",
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "ghost" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95";
  const styles =
    variant === "solid"
      ? {
          backgroundColor: BRAND.accent,
          color: "white",
          border: "1px solid transparent",
          boxShadow: `0 4px 20px ${BRAND.accent}20`,
        }
      : variant === "outline"
      ? {
          backgroundColor: "transparent",
          color: BRAND.accent,
          border: `1px solid ${BRAND.accent}`,
        }
      : {
          backgroundColor: "transparent",
          color: BRAND.accent,
          border: "1px solid transparent",
        };
  const Comp: any = href ? "a" : "button";
  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Comp href={href} onClick={onClick} className={base} style={styles}>
        {children}
      </Comp>
    </motion.div>
  );
}

function Section({
  id,
  kicker,
  title,
  subtitle,
  children,
}: {
  id?: string;
  kicker?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className="py-16 md:py-20"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <motion.div variants={fadeInUp}>
          {kicker && (
            <div className="mb-4">
              <Badge>{kicker}</Badge>
            </div>
          )}
          <h2 className="text-2xl md:text-4xl font-semibold leading-tight text-gray-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 max-w-3xl text-gray-600">{subtitle}</p>
          )}
        </motion.div>
        <motion.div
          className="mt-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
}

function Bullet({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <motion.li
      className="flex gap-3 text-gray-700"
      variants={fadeInUp}
      whileHover={{ x: 4 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {icon || (
        <Check className="h-5 w-5 flex-none" style={{ color: BRAND.accent }} />
      )}
      <span>{children}</span>
    </motion.li>
  );
}

function InfoCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{
        y: -8,
        transition: { type: "spring", stiffness: 400, damping: 17 },
      }}
      className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #fafafa 100%)",
      }}
    >
      <motion.div
        className="mb-3"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <motion.h3
        className="text-lg font-semibold text-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="mt-2 text-sm text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {desc}
      </motion.p>
    </motion.div>
  );
}

function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null); // start closed ✅

  return (
    <motion.div
      className="divide-y rounded-2xl border bg-white shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {items.map((it, idx) => (
        <motion.div
          key={idx}
          className="p-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
        >
          <motion.button
            className="flex w-full items-center justify-between text-left group"
            onClick={() => setOpen(open === idx ? null : idx)}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="text-base font-medium text-gray-900 group-hover:text-emerald-700 transition-colors">
              {it.q}
            </span>
            <motion.div
              animate={{ rotate: open === idx ? 90 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <ArrowRight className="h-4 w-4 text-[#007a35]" />
            </motion.div>
          </motion.button>
          <motion.div
            initial={false}
            animate={{
              height: open === idx ? "auto" : 0,
              opacity: open === idx ? 1 : 0.6,
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <motion.p
              className="mt-3 text-sm text-gray-600"
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {it.a}
            </motion.p>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function CTA({
  title,
  subtitle,
  href,
}: {
  title: string;
  subtitle: string;
  href: string;
}) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-3xl p-8 md:p-12"
      style={{
        background: `linear-gradient(135deg, ${BRAND.deepGreen}, #167a47)`,
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      {/* Animated Background Pattern */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 2px, transparent 2px)",
          backgroundSize: "20px 20px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "20px 20px"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      <div className="relative z-10">
        <motion.h3
          className="text-2xl md:text-3xl font-semibold text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="mt-2 max-w-2xl text-white/90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {subtitle}
        </motion.p>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Button href={href}>
            Book a Discovery Call <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}

function Hero({
  badge,
  title,
  subtitle,
  points,
  icon,
}: {
  badge: string;
  title: string;
  subtitle: string;
  points: string[];
  icon: React.ReactNode;
}) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <motion.header
      className="relative overflow-hidden bg-white"
      style={{ opacity }}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Badge>{badge}</Badge>
            </motion.div>
            <motion.h1
              className="mt-4 text-3xl md:text-5xl font-semibold leading-tight text-gray-900"
              variants={slideInLeft}
            >
              {title}
            </motion.h1>
            <motion.p
              className="mt-4 text-gray-700"
              variants={slideInLeft}
              transition={{ delay: 0.1 }}
            >
              {subtitle}
            </motion.p>
            <motion.ul className="mt-6 space-y-2" variants={staggerContainer}>
              {points.map((p, i) => (
                <Bullet key={i}>{p}</Bullet>
              ))}
            </motion.ul>
            <motion.div
              className="mt-8 flex gap-3"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <Button href="#apply">Start Your Journey</Button>
              <Button href="#curriculum" variant="outline">
                What You Get
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            variants={slideInRight}
            style={{ y }}
          >
            <motion.div
              className="rounded-3xl border bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm"
              whileHover={{
                rotateY: 5,
                rotateX: 5,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <motion.div
                className="flex h-56 items-center justify-center"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                {icon}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="h-1 w-full"
        style={{ background: BRAND.accent }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.header>
  );
}

// =====================================================
// PAGE 1: LifeMap360™ — Longevity Program
// =====================================================
export function LifeMap360Page() {
  return (
    <main className="bg-[${BRAND.light}]">
      <Hero
        badge="Longevity • LifeMap360™"
        title="Decode your biology. Design your future."
        subtitle="A 360° longevity program combining DNA, epigenetic, and microbiome insights with environment and lifestyle design—so you can measure, map, and master your next chapter."
        points={[
          "Comprehensive DNA, epigenetic & microbiome testing",
          "Biological age vs. chronological age assessment",
          "Personalized longevity blueprint & coaching",
          "Digital Twin tracking for continuous optimization",
        ]}
        icon={<Dna className="h-24 w-24" style={{ color: BRAND.accent }} />}
      />

      <Section
        id="curriculum"
        kicker="What's Inside"
        title="Your LifeScript Blueprint"
      >
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
        >
          <InfoCard
            icon={
              <Microscope className="h-6 w-6" style={{ color: BRAND.accent }} />
            }
            title="Deep Testing Stack"
            desc="DNA panel, epigenetic methylation age, gut microbiome profile, advanced bloodwork, sleep & stress markers."
          />
          <InfoCard
            icon={
              <Activity className="h-6 w-6" style={{ color: BRAND.accent }} />
            }
            title="Longevity Levers"
            desc="Nutrition, movement, recovery, light, temperature, breath, supplementation—prioritized by your biomarkers."
          />
          <InfoCard
            icon={
              <Sparkles className="h-6 w-6" style={{ color: BRAND.accent }} />
            }
            title="Environment by Design"
            desc="Home/office micro‑upgrades for focus, sleep, and metabolic health, aligned to your cognitive modes."
          />
        </motion.div>

        <motion.div
          className="mt-10 grid gap-6 md:grid-cols-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.div
            className="rounded-2xl border bg-white p-6"
            whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h3 className="text-lg font-semibold">Deliverables</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <Bullet>Personal Health Passport (report + action plan)</Bullet>
              <Bullet>12‑week Longevity Roadmap (phased interventions)</Bullet>
              <Bullet>Supplement & lab re‑test schedule</Bullet>
              <Bullet>Environment optimization checklist</Bullet>
              <Bullet>
                2x strategy sessions + 6x accountability check‑ins
              </Bullet>
            </ul>
          </motion.div>
          <motion.div
            className="rounded-2xl border bg-white p-6"
            whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h3 className="text-lg font-semibold">Timeline</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <Bullet>Week 0–1: Onboarding & test kits shipped</Bullet>
              <Bullet>Week 2–4: Data collection & analysis</Bullet>
              <Bullet>Week 5: Blueprint delivery + strategy session</Bullet>
              <Bullet>Week 6–12: Implementation & coaching</Bullet>
              <Bullet>Week 12: Re‑assessment & next‑chapter plan</Bullet>
            </ul>
          </motion.div>
        </motion.div>
      </Section>

      <Section
        title="Who It's For"
        subtitle="High‑performers, founders, couples, athletes and wellness seekers who want evidence‑based, personalized longevity with measurable outcomes."
      >
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
        >
          <InfoCard
            icon={
              <HeartPulse className="h-6 w-6" style={{ color: BRAND.accent }} />
            }
            title="Prevention‑first"
            desc="Reduce risk, extend healthspan, and build compounding habits."
          />
          <InfoCard
            icon={<Clock className="h-6 w-6" style={{ color: BRAND.accent }} />}
            title="Time‑efficient"
            desc="Clear prioritization so you act on the 20% that drives 80% results."
          />
          <InfoCard
            icon={
              <Activity className="h-6 w-6" style={{ color: BRAND.accent }} />
            }
            title="Data‑driven"
            desc="Make decisions based on your biomarkers, not trends."
          />
        </motion.div>
      </Section>

      <Section title="FAQs">
        <FAQ
          items={[
            {
              q: "Do I need to visit a lab?",
              a: "Many tests are at‑home kits; a few blood markers may require a local draw. We'll coordinate your best option.",
            },
            {
              q: "How is this different from generic longevity advice?",
              a: "LifeMap360™ uses multi‑omics testing to personalize nutrition, training, sleep, and environment to your biology.",
            },
            {
              q: "Is there ongoing support?",
              a: "Yes. You can continue with our Digital Twin subscription for continuous tracking and nudges.",
            },
          ]}
        />
      </Section>

      <Section id="apply" title="Ready to start?">
        <CTA
          title="Unlock your 360° Longevity Blueprint"
          subtitle="Apply for LifeScript limited onboarding slots each month to maintain quality."
          href="/contact"
        />
      </Section>
    </main>
  );
}

// =====================================================
// PAGE 2: NeuroSleep™ — Sleep Optimization Program
// =====================================================
export function NeuroSleepPage() {
  return (
    <main>
      <Hero
        badge="Sleep Optimization • NeuroSleep™"
        title="Rebuild your nights. Transform your days."
        subtitle="A precision sleep program combining polysomnography‑grade analysis, circadian reset, genetic sleep profiling, and environment design for deep, efficient sleep."
        points={[
          "Sleep study & wearable data synthesis",
          "Circadian rhythm reset protocols",
          "Genetic chronotype & caffeine sensitivity insights",
          "Bedroom & evening environment optimization",
        ]}
        icon={<Moon className="h-24 w-24" style={{ color: BRAND.accent }} />}
      />

      <Section kicker="Program Flow" title="From Assessment to Deep Sleep">
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={staggerContainer}
        >
          <motion.div
            className="rounded-2xl border bg-white p-6"
            variants={slideInLeft}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h3 className="text-lg font-semibold">Assess</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <Bullet>
                Baseline review of 14–21 nights (wearable + journal)
              </Bullet>
              <Bullet>
                Targeted labs: cortisol curve, ferritin, vitamin D, thyroid (if
                indicated)
              </Bullet>
              <Bullet>Optional in‑lab or home polysomnography referral</Bullet>
            </ul>
          </motion.div>
          <motion.div
            className="rounded-2xl border bg-white p-6"
            variants={slideInRight}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h3 className="text-lg font-semibold">Optimize</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <Bullet>Chronobiology‑aligned schedule & light management</Bullet>
              <Bullet>Temperature, noise, air & bedding recommendations</Bullet>
              <Bullet>
                Nutrition, movement, breath & stress down‑regulation
              </Bullet>
            </ul>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-6 rounded-2xl border bg-white p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          whileHover={{ y: -2 }}
        >
          <h3 className="text-lg font-semibold">Deliverables</h3>
          <motion.ul
            className="mt-3 grid gap-2 text-sm md:grid-cols-2"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Bullet>Personal Sleep Dossier (scorecards & protocols)</Bullet>
            <Bullet>4‑week Reset Plan + 4‑week Consolidation Plan</Bullet>
            <Bullet>Bedroom design brief & checklist</Bullet>
            <Bullet>Weekly check‑ins for 8 weeks</Bullet>
          </motion.ul>
        </motion.div>
      </Section>

      <Section
        title="Who It's For"
        subtitle="Insomnia, frequent night wakings, low HRV, daytime fatigue, shift work, jet‑lagged executives, or athletes needing recovery."
      >
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
        >
          <InfoCard
            icon={<Brain className="h-6 w-6" style={{ color: BRAND.accent }} />}
            title="Mind & Body"
            desc="Reduce hyperarousal and build reliable wind‑down rituals."
          />
          <InfoCard
            icon={
              <Activity className="h-6 w-6" style={{ color: BRAND.accent }} />
            }
            title="Recovery"
            desc="Improve deep & REM balance to enhance performance."
          />
          <InfoCard
            icon={<Clock className="h-6 w-6" style={{ color: BRAND.accent }} />}
            title="Circadian Fit"
            desc="Align your schedule with your biological clock."
          />
        </motion.div>
      </Section>

      <Section title="FAQs">
        <FAQ
          items={[
            {
              q: "Do I need a sleep study?",
              a: "Not always. We begin with wearables and symptoms and escalate if clinically indicated.",
            },
            {
              q: "Will I need supplements or medication?",
              a: "We may suggest evidence‑based nutraceuticals and habit changes; medications are coordinated with your physician.",
            },
            {
              q: "How fast can I see results?",
              a: "Many clients report improvements within 2–3 weeks, with consolidation over 6–8 weeks.",
            },
          ]}
        />
      </Section>

      <Section id="apply" title="Take Back Your Nights">
        <CTA
          title="Apply for NeuroSleep™"
          subtitle="Sleep is the master key—optimize it and everything follows."
          href="/contact"
        />
      </Section>
    </main>
  );
}

// =====================================================
// PAGE 3: Digital Twin — AI-Powered Health Simulation
// =====================================================
export function DigitalTwinPage() {
  return (
    <main>
      <Hero
        badge="AI-Powered Health Simulation • Digital Twin"
        title="Your biology, mirrored in real-time."
        subtitle="A virtual replica of your biology, behaviors, and environment—powered by continuous data from wearables, genetics, sleep, metabolism, and more. Digital Twin lets you simulate, predict, and optimize health decisions before issues arise."
        points={[
          "Continuous biomarker & lifestyle tracking",
          "Predictive modeling for metabolic shifts & sleep disruptions",
          "Hyper-personalized coaching & environment adjustments",
          "Real-time feedback loops for long-term optimization",
        ]}
        icon={<Cpu className="h-24 w-24" style={{ color: BRAND.accent }} />}
      />

      <Section kicker="Why It Matters" title="Why Digital Twin Matters for You">
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={staggerContainer}
        >
          <motion.div
            className="rounded-2xl border bg-white p-6"
            variants={slideInLeft}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
          >
            <h3 className="text-lg font-semibold">Benefits</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <Bullet>
                See how lifestyle choices impact your body at the cellular level
              </Bullet>
              <Bullet>
                Personalized simulations to test wellness interventions safely
              </Bullet>
              <Bullet>
                Predictive alerts for metabolic shifts, sleep disruptions, or
                emotional dips
              </Bullet>
              <Bullet>
                Enables hyper-personalized coaching and environment adjustments
              </Bullet>
              <Bullet>
                Empowers you to stay one step ahead in your longevity journey
              </Bullet>
            </ul>
          </motion.div>
          <motion.div
            className="rounded-2xl border bg-white p-6"
            variants={slideInRight}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
          >
            <h3 className="text-lg font-semibold">How Mendiv Uses It</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <Bullet>
                Integrates data from BioAlign, NeuroSleep, and Xpanzone
              </Bullet>
              <Bullet>Creates a dynamic, evolving model of your health</Bullet>
              <Bullet>
                Drives real-time tweaks in nutrition, sleep, mindset, and space
              </Bullet>
              <Bullet>
                Supports long-term optimization with objective feedback loops
              </Bullet>
            </ul>
          </motion.div>
        </motion.div>
      </Section>

      <Section
        title="Who It's For"
        subtitle="Ideal for wellness seekers, high performers, and those who want continuous optimization through data-driven insights."
      >
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
        >
          <InfoCard
            icon={
              <Microscope className="h-6 w-6" style={{ color: BRAND.accent }} />
            }
            title="Data Integrators"
            desc="Perfect for those already tracking health data who want it unified and actionable."
          />
          <InfoCard
            icon={<Brain className="h-6 w-6" style={{ color: BRAND.accent }} />}
            title="High Performers"
            desc="Executives, athletes, and creatives seeking daily edge and recovery balance."
          />
          <InfoCard
            icon={
              <Sparkles className="h-6 w-6" style={{ color: BRAND.accent }} />
            }
            title="Wellness Pioneers"
            desc="Biohackers and health seekers who want a continuous, predictive model of their biology."
          />
        </motion.div>
      </Section>

      <Section title="FAQs">
        <FAQ
          items={[
            {
              q: "Is Digital Twin a medical tool?",
              a: "No. It's a wellness optimization system that provides insights and simulations. Clinical conditions still require medical oversight.",
            },
            {
              q: "Do I need special devices?",
              a: "It integrates with wearables, lab reports, and Mendiv's testing stack. More devices enrich your model but aren't mandatory.",
            },
            {
              q: "How soon can I see results?",
              a: "The benefit is continuous optimization—insights often appear within days, with stronger predictive power over weeks to months.",
            },
          ]}
        />
      </Section>

      <Section id="apply" title="Ready to Experience Your Digital Twin?">
        <CTA
          title="Apply for Digital Twin"
          subtitle="Step into the future of personalized wellness—today."
          href="/contact"
        />
      </Section>
    </main>
  );
}

// =====================================================
// PAGE 4: Beauty Map — Beauty & Regeneration Program
// =====================================================
export default function BeautyMapPage() {
  return (
    <main>
      <Hero
        badge="Beauty & Regeneration • Beauty Map"
        title="Skin longevity, from the inside out."
        subtitle="A science‑first beauty program mapping hormones, metabolism, and dermal biology—paired with routines and environment upgrades for lasting radiance."
        points={[
          "Skin longevity panel + lifestyle mapping",
          "Hormonal & metabolic effects on skin health",
          "Preventive and restorative strategies",
          "Daily routine + product stack personalized to you",
        ]}
        icon={
          <Sparkles className="h-24 w-24" style={{ color: BRAND.accent }} />
        }
      />

      <Section kicker="Program Pillars" title="Map → Repair → Maintain">
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
        >
          <InfoCard
            icon={
              <Microscope className="h-6 w-6" style={{ color: BRAND.accent }} />
            }
            title="Map"
            desc="Assess skin barrier, inflammation, glycation risks, micronutrient status, and UV/pollution exposure patterns."
          />
          <InfoCard
            icon={
              <HeartPulse className="h-6 w-6" style={{ color: BRAND.accent }} />
            }
            title="Repair"
            desc="Targeted routines for barrier support, collagen preservation, pigmentation control, and mitochondrial support."
          />
          <InfoCard
            icon={
              <Activity className="h-6 w-6" style={{ color: BRAND.accent }} />
            }
            title="Maintain"
            desc="Cyclic protocols for seasons/travel, plus environment tweaks (air, light, humidity)."
          />
        </motion.div>

        <motion.div
          className="mt-6 rounded-2xl border bg-white p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          whileHover={{
            y: -4,
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
        >
          <h3 className="text-lg font-semibold">Deliverables</h3>
          <motion.ul
            className="mt-3 grid gap-2 text-sm md:grid-cols-2"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Bullet>Beauty Map Report (skin & systemic insights)</Bullet>
            <Bullet>12‑week routine plan (AM/PM) incl. actives cadence</Bullet>
            <Bullet>Professional treatment guidance (if needed)</Bullet>
            <Bullet>Nutrition & supplement protocol for skin longevity</Bullet>
          </motion.ul>
        </motion.div>
      </Section>

      <Section
        title="Who It's For"
        subtitle="Those seeking evidence‑based skin transformation—acne, pigmentation, dullness, sensitivity—or proactive aging well."
      >
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
        >
          <InfoCard
            icon={
              <Sparkles className="h-6 w-6" style={{ color: BRAND.accent }} />
            }
            title="Glow, sustainably"
            desc="Build a radiant baseline without dependency cycles."
          />
          <InfoCard
            icon={<Brain className="h-6 w-6" style={{ color: BRAND.accent }} />}
            title="Smart actives"
            desc="Right molecules, right dose, right sequence."
          />
          <InfoCard
            icon={<Clock className="h-6 w-6" style={{ color: BRAND.accent }} />}
            title="Lifestyle fit"
            desc="Routines that fit real life and travel."
          />
        </motion.div>
      </Section>

      <Section title="FAQs">
        <FAQ
          items={[
            {
              q: "Do you sell products?",
              a: "We are brand‑agnostic. We prescribe protocols and help you choose evidence‑backed products within your budget.",
            },
            {
              q: "Is this dermatology?",
              a: "We are a wellness program. Medical conditions require coordination with your dermatologist; we can work alongside care.",
            },
            {
              q: "How soon can I see changes?",
              a: "Barrier repair can show within weeks; collagen‑related outcomes take longer—expect 8–12+ weeks.",
            },
          ]}
        />
      </Section>

      <Section id="apply" title="Build Your Beauty Map">
        <CTA
          title="Apply for Beauty Map"
          subtitle="Clarity, routines, and measurable glow—custom to your biology."
          href="/contact"
        />
      </Section>
    </main>
  );
}

// =====================================================
// PAGE 5: Xpanzone — Environmental Design Program
// =====================================================
export function XpanzonePage() {
  return (
    <main>
      <Hero
        badge="Habitual Longevity • Xpanzone"
        title="Transform your environment, transform your life."
        subtitle="Xpanzone is a guided environmental system inspired by behavioral science, medical wellness, and habit architecture. Every element of your space is intentionally designed to support the task you're performing—be it sleep, focus, movement, or mindfulness."
        points={[
          "7 Transformational Modes",
          "Rooted in medical science & habit psychology",
          "Designed for sleep, focus, movement, and mindfulness",
          "Evidence-based, multisensory system",
        ]}
        icon={<Layers className="h-24 w-24" style={{ color: BRAND.accent }} />}
      />

      <Section
        kicker="The 7 Transformational Modes"
        title="Spaces that shift with you"
      >
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
        >
          <InfoCard
            icon={
              <BedDouble className="h-6 w-6" style={{ color: BRAND.accent }} />
            }
            title="Sleep Mode"
            desc="Deep, restorative rest using circadian lighting, scent therapy, and smart triggers."
          />
          <InfoCard
            icon={
              <Briefcase className="h-6 w-6" style={{ color: BRAND.accent }} />
            }
            title="Work Mode"
            desc="Minimalist, focused setup with Pomodoro timers and sensory control."
          />
          <InfoCard
            icon={
              <Utensils className="h-6 w-6" style={{ color: BRAND.accent }} />
            }
            title="Dining Mode"
            desc="Mindful eating and gut-brain optimization."
          />
          <InfoCard
            icon={
              <Dumbbell className="h-6 w-6" style={{ color: BRAND.accent }} />
            }
            title="Fitness & Relaxation Mode"
            desc="Space for stretching, breathing, and energy reset."
          />
          <InfoCard
            icon={<Tv className="h-6 w-6" style={{ color: BRAND.accent }} />}
            title="Entertainment Mode"
            desc="Balanced leisure with immersive yet calming setup."
          />
          <InfoCard
            icon={<Users className="h-6 w-6" style={{ color: BRAND.accent }} />}
            title="Social Mode"
            desc="Meaningful 1:1 conversations or rejuvenating group time."
          />
        </motion.div>

        <motion.div
          className="mt-6 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <InfoCard
            icon={
              <PenTool className="h-6 w-6" style={{ color: BRAND.accent }} />
            }
            title="Mindscape Mode"
            desc="Reflective zone for journaling, idea processing, or therapy work."
          />
        </motion.div>
      </Section>

      <Section title="Why It Matters in Healing">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-lg leading-relaxed bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent font-medium"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            At Mendiv, Xpanzone isn't just a space it's a silent therapist. It
            helps reset your habits, improve sleep, focus, and emotional balance
            by aligning your biology with behavior.
          </motion.p>
        </motion.div>
      </Section>

      <Section kicker="Rooted In" title="Evidence & Design Principles">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.ul
            className="grid gap-3 text-sm md:grid-cols-2"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Bullet
              icon={
                <Stethoscope
                  className="h-4 w-4"
                  style={{ color: BRAND.accent }}
                />
              }
            >
              Medical Science
            </Bullet>
            <Bullet
              icon={
                <Brain className="h-4 w-4" style={{ color: BRAND.accent }} />
              }
            >
              Habit Psychology
            </Bullet>
            <Bullet
              icon={
                <Smartphone
                  className="h-4 w-4"
                  style={{ color: BRAND.accent }}
                />
              }
            >
              Digital Wellness Tools
            </Bullet>
            <Bullet
              icon={
                <Layers className="h-4 w-4" style={{ color: BRAND.accent }} />
              }
            >
              5S Organizational Method
            </Bullet>
            <Bullet
              icon={
                <Wind className="h-4 w-4" style={{ color: BRAND.accent }} />
              }
            >
              Multisensory Design (Light, Sound, Aroma, Texture)
            </Bullet>
          </motion.ul>
        </motion.div>
      </Section>

      <Section id="apply" title="Experience Xpanzone">
        <CTA
          title="Book Your Xpanzone Experience"
          subtitle="Optimize your external world to unlock your internal power."
          href="/contact?program=Xpanzone"
        />
      </Section>
    </main>
  );
}

// =========================
// NOTES / HOW TO USE
// 1) Copy each exported component into its route file:
//    - LifeMap360Page → app/programs/lifemap360/page.tsx (default export)
//    - NeuroSleepPage → app/programs/neurosleep/page.tsx (default export)
//    - DigitalTwinPage → app/programs/digital-twin/page.tsx (default export)
//    - BeautyMapPage (already default export) → app/programs/beauty-map/page.tsx
//    - XpanzonePage → app/programs/xpanzone/page.tsx (default export)
// 2) Update CTAs (hrefs) to match your contact flow or Calendly.
// 3) Add SEO metadata in app/programs/[program]/layout.tsx as needed.
// 4) Replace icons/illustrations with brand images when available.
//
// ANIMATION ENHANCEMENTS ADDED:
// - Smooth scroll-triggered animations with stagger effects
// - Parallax scrolling on hero icons
// - Hover animations on cards and buttons
// - FAQ accordion with smooth transitions
// - Animated background patterns in CTAs
// - Transform effects on hover (scale, translate, rotate)
// - Gradient text animations
// - Enhanced micro-interactions throughout
// =========================
