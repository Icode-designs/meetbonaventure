import CaseStudies from "@/components/caseStudies/caseStudies";
import Cta from "@/components/cta/cta";
import Expertise from "@/components/expertise/expertise";
import Hero from "@/components/homeHero/homeHero";
import Process from "@/components/process/process";
import TechStack from "@/components/stack/stack";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <CaseStudies />
      <Expertise />
      <Process />
      <Cta />
    </>
  );
}
