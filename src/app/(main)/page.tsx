"use client";
import { useEffect } from "react";
import CaseStudies from "@/components/caseStudies/caseStudies";
import Cta from "@/components/cta/cta";
import Expertise from "@/components/expertise/expertise";
import Hero from "@/components/homeHero/homeHero";
import Process from "@/components/process/process";
import TechStack from "@/components/stack/stack";
import { trackEvent } from "@/utils/analytics";

export default function Home() {
  useEffect(() => {
    trackEvent("profile_view", { page: "/" });
  }, []);

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
