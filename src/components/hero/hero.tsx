"use client";
import { HeroArticle, HeroIllustration, HeroStyles } from "./hero.styles";
import Lottie from "lottie-react";
import heroimg from "@/assets/heroimg.json";
import { LinkButton } from "../button/button";
import { BtnFlexContainer, SpanText } from "../shared/shared.styles";
import SectionWrapper from "../shared/sectionWrapper";

const Hero = () => {
  return (
    <SectionWrapper>
      <HeroStyles>
        <HeroArticle>
          <h1>
            Engineering Digital Excellence for{" "}
            <SpanText>Global Agencies</SpanText>
          </h1>
          <p>
            I build high-performance web applications and bespoke digital
            experiences for leading agencies and forward-thinking international
            brands.
          </p>
          <BtnFlexContainer>
            <LinkButton href="/contact" variant="primary">
              Get in Touch
            </LinkButton>
            <LinkButton href="/work" variant="secondary">
              View Work
            </LinkButton>
          </BtnFlexContainer>
        </HeroArticle>
        <HeroIllustration>
          <Lottie animationData={heroimg} loop autoplay />
        </HeroIllustration>
      </HeroStyles>
    </SectionWrapper>
  );
};

export default Hero;
