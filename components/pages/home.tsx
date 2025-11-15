import HeroSection from "@/components/hero-section";
import BioAlignSection from "@/components/bioalign-section";
import LifeMapSection from "@/components/lifemap-section";
// import NeuroSleepSection from "@/components/neurosleep-section";
import DigitalTwinSection from "@/components/digital-twin-section";
import MindRefreshmentSection from "@/components/mind-refreshment-section";
import SuccessStoriesSection from "@/components/success-stories-section";
import CTASection from "@/components/cta-section";
import FAQs from "../Faq";
import DnaSection from "../dnasection";

import HeygenEmbed from "../heygen/heygen";
import Journeysection from "../jouney-section";

import WhatsAppButton from "../whatsappbtn";

import { Scroll } from "lucide-react";
import AboutSection from "../about-section";
import NeuroSleepSection from "../neurosleep-section";
import HowMendivWorks from "../howmendivworks";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <DnaSection />
      <AboutSection />

      {/* <HeygenEmbed /> */}
      <HowMendivWorks />

      <NeuroSleepSection />
      <Journeysection />

      {/* <SuccessStoriesSection /> */}
      <MindRefreshmentSection />
      {/* <DigitalTwinSection /> */}

      <WhatsAppButton />
      <FAQs />
      <CTASection />
    </main>
  );
}
