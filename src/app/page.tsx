import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import Leadership from "@/components/sections/Leadership";
import HowIWork from "@/components/sections/HowIWork";
import Skills from "@/components/sections/Skills";
import Timeline from "@/components/sections/Timeline";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Leadership />
      <HowIWork />
      <Skills />
      <Timeline />
      <ContactCTA />
    </>
  );
}
