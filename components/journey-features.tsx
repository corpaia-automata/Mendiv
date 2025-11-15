"use client";

import { cn } from "@/lib/utils";

type Feature = {
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    title: "Expert Guidance & Personalized Plans",
    description:
      "Benefit from expert advice and customized health strategies built around your individual genetic insights.",
  },
  {
    title: "Access to Cutting‑Edge Innovations",
    description:
      "Embrace pioneering breakthroughs in personalized medicine, empowering you in prevention and treatment.",
  },
  {
    title: "1‑on‑1 Genetic Consultations",
    description:
      "Schedule dedicated sessions with geneticists to dive deeper into your results and address questions.",
  },
  {
    title: "Easy Access to Your Results",
    description:
      "Review comprehensive DNA reports anytime, anywhere with our intuitive app—make informed decisions on the go.",
  },
  {
    title: "24/7 Support",
    description:
      "Count on our responsive support team throughout your journey for ongoing help and guidance.",
  },
];

export function JourneyFeatures({ className }: { className?: string }) {
  return (
    <aside
      aria-label="Benefits list"
      className={cn(
        // Primary color = green; neutrals = white, black. No gradients on primary elements.
        "rounded-2xl border border-emerald-700/50 bg-emerald-900/70 text-white backdrop-blur-md shadow-lg",
        className
      )}
    >
      <div className="p-6 md:p-8">
        <ul className="divide-y divide-white/15">
          {features.map((f, i) => (
            <li key={i} className="py-5 first:pt-0 last:pb-0">
              <h3 className="text-lg md:text-xl font-semibold leading-snug">
                {f.title}
              </h3>
              <p className="mt-2 text-sm md:text-base leading-relaxed text-white/90">
                {f.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
