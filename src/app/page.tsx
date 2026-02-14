import { Hero } from "@/components/Hero";
import { SectionAbout } from "@/components/SectionAbout";
import { SectionROI } from "@/components/SectionROI";
import { SectionAutomation } from "@/components/SectionAutomation";
import { SectionForms } from "@/components/SectionForms";
import { SectionFAQ } from "@/components/SectionFAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionAbout />
      <SectionROI />
      <SectionAutomation />
      <SectionForms />
      <SectionFAQ />
    </>
  );
}
